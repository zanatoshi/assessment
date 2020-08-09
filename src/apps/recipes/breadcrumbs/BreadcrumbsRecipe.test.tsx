import {cleanup, screen} from '@testing-library/react';
import React from 'react';
import {render} from '../../../test/test-utils';
import {BreadcrumbsRecipe} from './BreadcrumbsRecipe';

afterEach(() => {
  cleanup();
});

describe('Breadcrumbs recipe test', () => {
  const meal = 'test-meal';
  const course = 'test-course';
  it('Show the breadcrumbs without meal and course', () => {
    render(<BreadcrumbsRecipe />);
    const recipesLink = screen.getByText('RECIPES');
    expect(recipesLink).toBeTruthy();
    expect(screen.queryByText(meal.toUpperCase())).toBeNull();
    expect(screen.queryByText(course.toUpperCase())).toBeNull();
  });
  it('Show the breadcrumbs with meal and without course', () => {
    render(<BreadcrumbsRecipe meal={meal} />);
    expect(screen.getByText('RECIPES')).toBeTruthy();
    expect(screen.getByText(meal.toUpperCase())).toBeTruthy();
    expect(screen.queryByText(course.toUpperCase())).toBeNull();
  });
  it('Show the breadcrumbs with meal and course', () => {
    render(<BreadcrumbsRecipe meal={meal} course={course} />);
    expect(screen.getByText('RECIPES')).toBeTruthy();
    expect(screen.getByText(meal.toUpperCase())).toBeTruthy();
    expect(screen.getByText(course.toUpperCase())).toBeTruthy();
  });
  it('matches snapshot', () => {
    const {asFragment} = render(<BreadcrumbsRecipe meal={meal} course={course} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
