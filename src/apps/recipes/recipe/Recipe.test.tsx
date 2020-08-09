import {cleanup, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {render} from '../../../test/test-utils';
import {Recipe} from './Recipe';

afterEach(() => cleanup());

describe('Recipe test', () => {
  const recipeTest: Recipe = {
    id: 'test',
    name: 'test-name',
    description: 'test-description',
    cookTime: 'test-10',
    prepTime: 'test-20',
    totalTime: 'test-30',
    course: 'main-course',
    meal: 'dinner',
    image: 'test.jpg',
    ingredients: [
      {ingredients: ['test-ingredient-1', 'test-ingredient-2'], line: 'use test-ingredient1&2'},
      {ingredients: ['test-ingredient-3'], line: 'use test-ingredient3'},
    ],
    instructions: ['test-instruction-1', 'test-instruction-2', 'test-instruction-3'],
    recipeYield: 'test makes',
    cost: 'test cost',
  };
  it('Show presentation, the ingredients and the instructions', () => {
    render(<Recipe recipe={recipeTest} />);
    expect(screen.getByText(recipeTest.name)).toBeTruthy();
    expect(screen.getByText(recipeTest.description)).toBeTruthy();
    expect(screen.getByText(recipeTest.meal.toUpperCase())).toBeTruthy();
    expect(screen.getByText(recipeTest.course.toUpperCase())).toBeTruthy();
    expect(screen.getByText(recipeTest.prepTime)).toBeTruthy();
    expect(screen.getByText(recipeTest.cookTime)).toBeTruthy();
    expect(screen.getByText(recipeTest.totalTime)).toBeTruthy();
    expect(screen.getByText(recipeTest.recipeYield)).toBeTruthy();
    recipeTest.ingredients.forEach((i) => {
      expect(screen.getByText(i.line)).toBeTruthy();
    });
    recipeTest.instructions.forEach((i) => {
      expect(screen.getByText(i)).toBeTruthy();
    });
  });

  it('Save recipe', async () => {
    render(<Recipe recipe={recipeTest} />);
    const saveButton = screen.getByText('SAVE RECIPE');
    expect(screen.queryByText('Should be saved !')).toBeNull();
    await userEvent.click(saveButton);
    expect(screen.getByText('Should be saved !')).toBeTruthy();
  });

  it('Print recipe', async () => {
    render(<Recipe recipe={recipeTest} />);
    const saveButton = screen.getByText('PRINT');
    expect(screen.queryByText('Should be printed !')).toBeNull();
    await userEvent.click(saveButton);
    expect(screen.getByText('Should be printed !')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const {asFragment} = render(<Recipe recipe={recipeTest} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
