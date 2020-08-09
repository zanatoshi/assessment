import {Grid, makeStyles, Theme} from '@material-ui/core';
import Link from 'next/link';

type LinkItem = {name: string; link: string};
interface LinkBarProps {
  links: LinkItem[];
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    cursor: 'pointer',
    ...theme.typography.button,
    flexGrow: 1,
    textAlign: 'center',
  },
  separator: {
    borderRight: '1px solid #ccc',
  },
}));

/**
 * Display multiple links in one line separate by a |
 *
 * @param links The links to display (with name and url)
 */
export const LinkBar = ({links}: LinkBarProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justify={'space-between'}>
      {links.map((l, index, array) => (
        <Link href={l.link} key={l.name}>
          <Grid item className={classes.link + (index < array.length - 1 ? ' ' + classes.separator : '')}>
            {l.name.replace(/_/gi, ' ')}
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};
