import {makeStyles, Paper, Typography} from '@material-ui/core';
import {LinkPaper} from '../../components/link-paper/LinkPaper';
import {Recipe} from '../recipes/recipe/Recipe';

interface RecipeDayProps {
  recipe: Recipe;
}
const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    backgroundColor: '#f8f5f0',
  },
}));

export const RecipeDay = ({recipe}: RecipeDayProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container} variant={'outlined'} elevation={2}>
      <Typography variant="h4" gutterBottom>
        Recipe of the day
      </Typography>
      <LinkPaper image={recipe.image} link={`/recipes/${recipe.id}`} text={recipe.name} />
    </Paper>
  );
};
