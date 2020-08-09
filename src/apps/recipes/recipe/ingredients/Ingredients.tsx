import {makeStyles, Theme, Typography} from '@material-ui/core';

export interface Ingredient {
  ingredients: string[];
  line: string;
}

interface IngredientsProps {
  ingredients: Ingredient[];
}

const useStyles = makeStyles((theme: Theme) => ({
  ingredient: {
    display: 'flex',
    flexFlow: 'row',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  ingredients: {
    padding: theme.spacing(1),
    backgroundColor: '#f8f5f0',
    border: '1px solid #f8f5f0',
    borderRadius: '4px',
    width: '30%',
  },
}));

export const Ingredients = ({ingredients}: IngredientsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.ingredients}>
      <Typography variant="h4" gutterBottom>
        Ingredients
      </Typography>
      {ingredients.map((i) => (
        <div key={i.line}>
          <hr />
          <div className={classes.ingredient}>
            <Typography variant="body1">{i.line}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
