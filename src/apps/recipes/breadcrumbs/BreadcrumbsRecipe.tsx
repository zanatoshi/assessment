import {Breadcrumbs, createStyles, makeStyles, Theme} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import {LinkRouter} from '../../../components/link-router/LinkRouter';

interface BreadcrumbsRecipeProps {
  meal?: string;
  course?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.common.black,
      marginBottom: theme.spacing(2),
    },
    separator: {
      color: theme.palette.secondary.dark,
    },
  })
);

export const BreadcrumbsRecipe = ({meal, course}: BreadcrumbsRecipeProps) => {
  const classes = useStyles();
  const mealParam = meal ? `?meal=${meal}` : '';
  return (
    <Breadcrumbs
      className={classes.breadcrumbs}
      separator={<NavigateNextIcon fontSize="small" className={classes.separator} />}
      aria-label="breadcrumb"
    >
      <LinkRouter color="inherit" href="/recipes">
        RECIPES
      </LinkRouter>
      {meal && (
        <LinkRouter color="inherit" href={`/recipes/meals/${meal}`}>
          {meal.replace('_', ' ').toUpperCase()}
        </LinkRouter>
      )}
      {course && (
        <LinkRouter color="inherit" href={`/recipes/courses/${course}${mealParam}`}>
          {course.replace('_', ' ').toUpperCase()}
        </LinkRouter>
      )}
    </Breadcrumbs>
  );
};
