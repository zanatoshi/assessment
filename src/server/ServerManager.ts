import AbortController from 'abort-controller';
import fetch from 'node-fetch';

export const SERVERS = [
  {
    url: 'https://does-not-work.perfume.new',
    priority: 1,
  },
  {
    url: 'https://gitlab.com',
    priority: 4,
  },
  {
    url: 'http://app.scnt.me',
    priority: 3,
  },
  {
    url: 'https://offline.scentronix.com',
    priority: 2,
  },
];

const TIMEOUT = 5000;

/**
 * Find the an online server with the lowest priority. Reject with an error if no servers are online
 */
export const findServer = async () => {
  // get all servers status
  const onlineServers = await Promise.all(
    SERVERS.map(async (s) => {
      const online = await isServerOnline(s.url);
      return {...s, online};
    })
  );
  if (onlineServers.every((s) => !s.online)) {
    // none are online
    throw Error('No server online.');
  }
  // get the lowest prioritary and online server
  return onlineServers.reduce(
    (prioritary, server) => {
      if (server.online && server.priority < prioritary.priority) {
        return server;
      }
      return prioritary;
    },
    {url: '', priority: Number.MAX_SAFE_INTEGER}
  ).url;
};

/**
 * Return true if the status is between 200 and 299 when doing a get to a server.
 * The server is not online if the answer take more than 5 seconds.
 * @param link of the server
 */
const isServerOnline = async (link: string) => {
  const abortController = new AbortController();
  const timeout = setTimeout(() => abortController.abort(), TIMEOUT);
  try {
    const res = await fetch(link, {signal: abortController.signal});
    clearTimeout(timeout);
    return res.status >= 200 && res.status <= 299;
  } catch (err) {
    clearTimeout(timeout);
    return false;
  }
};
