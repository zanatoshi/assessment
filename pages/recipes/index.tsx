import {Grid, Typography} from '@material-ui/core';
import React from 'react';
import {getMeals, getRecipeOfTheDay} from '../../data/RecipesData';
import {RecipeDay} from '../../src/apps/recipe-day/RecipeDay';
import {CoursesList} from '../../src/apps/recipes/meal/CoursesList';
import {LinkBar} from '../../src/components/link-bar/LinkBar';

export default function Recipes() {
  const recipeDay = getRecipeOfTheDay();
  const meals = getMeals();
  return (
    <Grid container spacing={2}>
      <Grid xs={9} item>
        <Grid container spacing={4} direction="column">
          <Grid item>
            <Typography variant="h2">Courses</Typography>
          </Grid>
          <Grid item>
            <LinkBar links={meals.map((m) => ({name: m.name, link: `/recipes/meals/${m.name}`}))} />
          </Grid>

          {meals.map((m) => (
            <Grid key={m.name} item>
              <CoursesList key={m.name} meal={m.name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid xs={3} item>
        <RecipeDay recipe={recipeDay} />
      </Grid>
    </Grid>
  );
}
