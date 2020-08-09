import {GridList, GridListTile, GridListTileBar, ListSubheader, makeStyles, Typography} from '@material-ui/core';

interface ContentGridListSelectorProps {
  title: string;
  content: {
    id: string;
    title: string;
    image: string;
  }[];
  onClick: (id: string) => void;
}

const useStyles = makeStyles(() => ({
  tile: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

/**
 * A grid list with a title of content in a tile with a picture and a title.
 *
 * @remarks
 * Use the GridList of MUI to generate the list.
 *
 * @param title The title of the grid
 * @param content The array of content (with id / title / image)
 * @param onClick The callback on the selection of content
 */
export const ContentGridListSelector = ({title, content, onClick}: ContentGridListSelectorProps) => {
  const classes = useStyles();
  return (
    <GridList cellHeight={180} spacing={18} cols={3} style={{overflow: 'hidden'}}>
      <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
        <ListSubheader component="div">
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </ListSubheader>
      </GridListTile>
      {content.map((c) => (
        <GridListTile className={classes.tile} key={c.id} onClick={() => onClick(c.id)} cols={1}>
          <img src={c.image} alt={c.title} />
          <GridListTileBar title={c.title} />
        </GridListTile>
      ))}
    </GridList>
  );
};
