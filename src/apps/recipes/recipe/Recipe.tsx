import {makeStyles, Theme} from '@material-ui/core';
import React from 'react';
import {BreadcrumbsRecipe} from '../breadcrumbs/BreadcrumbsRecipe';
import {Ingredient, Ingredients} from './ingredients/Ingredients';
import {Instructions} from './instructions/Instructions';
import {Presentation} from './presentation/Presentation';

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  image: string;
  cookTime: string;
  instructions: string[];
  recipeYield: string;
  prepTime: string;
  description: string;
  id: string;
  totalTime: string;
  cost: string;
  meal: string;
  course: string;
}

interface RecipeProps {
  recipe: Recipe;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  row: {
    display: 'flex',
    flexFlow: 'row',
    width: '100%',
    marginTop: theme.spacing(1),
  },
  breadcrumbs: {
    padding: theme.spacing(1),
  },
  picture: {
    width: '50%',
    padding: theme.spacing(1),
    '& img': {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
    },
  },
}));

export const Recipe = ({recipe}: RecipeProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.breadcrumbs}>
        <BreadcrumbsRecipe course={recipe.course} meal={recipe.meal} />
      </div>
      <div className={classes.row}>
        <Presentation recipe={recipe} />
        <div className={classes.picture}>
          <img alt={recipe.name} src={recipe.image} />
        </div>
      </div>
      <hr />
      <div className={classes.row}>
        <Instructions instructions={recipe.instructions} />
        <Ingredients ingredients={recipe.ingredients} />
      </div>
    </div>
  );
};
