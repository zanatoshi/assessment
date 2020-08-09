import {Grid, makeStyles, Paper, Theme, Typography} from '@material-ui/core';
import React from 'react';
import {LinkPaper} from '../link-paper/LinkPaper';

type Content = {
  link: string;
  text: string;
  image: string;
};

interface ContentSelectorProps {
  title: string;
  content: Content[];
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: 'center',
    margin: '30px 0',
    backgroundColor: '#f8f5f0',
    padding: theme.spacing(2),
  },
}));

/**
 * Simple content selector as a grid of LinkPaper.
 *
 * @param title the title of the grid
 * @param content the array of content with a picture a text and a link.
 */
export const ContentSelector = ({title, content}: ContentSelectorProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container} variant={'outlined'} elevation={2}>
      <Typography variant="h1" component="h2" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {content.map((c) => (
          <Grid item xs={3} key={c.text}>
            <LinkPaper image={c.image} link={c.link} text={c.text} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
