import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useRouter} from 'next/router';
import React, {useCallback} from 'react';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  media: {
    height: 200,
    backgroundSize: 'contain',
  },
});

interface HomeCardProps {
  title: string;
  image: string;
  content: string;
  link: {title: string; enable: boolean; link: string};
}

export const HomeCard = ({title, image, content, link: action}: HomeCardProps) => {
  const classes = useStyles();
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push(action.link);
  }, []);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled={!action.enable} onClick={onClick}>
          {action.title}
        </Button>
      </CardActions>
    </Card>
  );
};
