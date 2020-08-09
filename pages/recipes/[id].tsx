import {GetStaticPaths, GetStaticProps} from 'next';
import {getIds, getRecipe} from '../../data/RecipesData';
import {Recipe} from '../../src/apps/recipes/recipe/Recipe';

export default Recipe;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getIds().map((id) => `/recipes/${id}`),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
  const recipe = getRecipe(params?.id as string);
  return {
    props: {
      recipe,
    },
  };
};
