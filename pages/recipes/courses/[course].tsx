import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {useMemo} from 'react';
import {getCourses, getRecipes} from '../../../data/RecipesData';
import {BreadcrumbsRecipe} from '../../../src/apps/recipes/breadcrumbs/BreadcrumbsRecipe';
import {ContentSelector} from '../../../src/components/content-selector/ContentSelector';
import {formatText} from '../../../src/utils/FormatUtils';

interface RecipesProps {
  course: string;
}

export default function Recipes({course}: RecipesProps) {
  const {query} = useRouter();
  const recipes = useMemo(() => getRecipes(query.meal as string | undefined, course), [query, course]);
  return (
    <>
      <BreadcrumbsRecipe meal={query.meal as string | undefined} course={course} />
      <ContentSelector
        title={formatText(course)}
        content={recipes.map((r) => ({
          text: formatText(r.name),
          image: r.image,
          link: `/recipes/${r.id}`,
        }))}
      />
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const courses = getCourses().map((c) => `/recipes/courses/${c.name}`);
  return {
    paths: courses,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      course: params?.course as string,
    },
  };
};
