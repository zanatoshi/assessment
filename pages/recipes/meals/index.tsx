import {GetStaticProps} from 'next';
import React from 'react';
import {getMeals} from '../../../data/RecipesData';
import {Meal} from '../../../src/apps/recipes/meal/Meal';
import {ContentSelector} from '../../../src/components/content-selector/ContentSelector';
import {formatText} from '../../../src/utils/FormatUtils';

interface MealsProps {
  meals: Meal[];
}
export default function Meals({meals}: MealsProps) {
  return (
    <ContentSelector
      title={'Meals'}
      content={meals.map((m) => ({text: formatText(m.name), image: m.image, link: `/recipes/meals/${m.name}`}))}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meals = getMeals();
  return {
    props: {
      meals,
    },
  };
};
