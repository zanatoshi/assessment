import fetchMock from 'jest-fetch-mock';
import {findServer, SERVERS} from './ServerManager';
beforeEach(() => {
  fetchMock.resetMocks();
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe('Server manager find server', () => {
  it('Should reject if there is no server online', async () => {
    fetchMock.mockResponse('', {status: 500});

    try {
      await findServer();
      expect(true).toBeFalsy();
    } catch (err) {
      expect(err).toEqual(new Error('No server online.'));
    }
  });

  it('Should reject if all server are timeouted', async () => {
    fetchMock.mockResponse(async () => {
      jest.advanceTimersByTime(6000);
      return {status: 200};
    });

    try {
      await findServer();
      expect(true).toBeFalsy();
    } catch (err) {
      expect(err).toEqual(new Error('No server online.'));
    }
  });

  it('Should reject if all server are rejected', async () => {
    fetchMock.mockReject();

    try {
      await findServer();
      expect(true).toBeFalsy();
    } catch (err) {
      expect(err).toEqual(new Error('No server online.'));
    }
  });

  it('Should return the lowest priority server if all online', async () => {
    fetchMock.mockResponse('', {status: 200});

    const server = await findServer();
    expect(server).toEqual(SERVERS[0].url);
  });

  it('Should return the lowest priority server if some online', async () => {
    fetchMock.mockResponses(['', {status: 400}], ['', {status: 200}], ['', {status: 200}]).mockReject();

    const server = await findServer();
    expect(server).toEqual(SERVERS[2].url);
  });
});
