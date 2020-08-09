import {makeStyles, Paper, Theme} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

interface LinkPaperProps {
  link: string;
  text: string;
  image: string;
}
type StyleProps = {image: string};
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: '5px 10px',
    height: '200px',
    backgroundImage: ({image}: StyleProps) => `url('${image.replace(/'/gi, '_')}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  text: {
    width: '100%',
    padding: '5px 0',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

/**
 * Display a link as a picture with a title.
 *
 * @remarks
 * Use the Paper of MUI as a container.
 *
 * @param link The link
 * @param text The title
 * @param image The picture
 */
export const LinkPaper = ({link, text, image}: LinkPaperProps) => {
  const classes = useStyles({image});
  return (
    <Link href={link}>
      <Paper className={classes.container}>
        <div className={classes.text}>{text.toUpperCase()}</div>
      </Paper>
    </Link>
  );
};
