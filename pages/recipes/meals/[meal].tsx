import {GetStaticPaths, GetStaticProps} from 'next';
import {getCourses, getMeals} from '../../../data/RecipesData';
import {BreadcrumbsRecipe} from '../../../src/apps/recipes/breadcrumbs/BreadcrumbsRecipe';
import {Course} from '../../../src/apps/recipes/course/Course';
import {ContentSelector} from '../../../src/components/content-selector/ContentSelector';
import {formatText} from '../../../src/utils/FormatUtils';

interface MealsProps {
  courses: Course[];
  meal: string;
}

export default function Courses({courses, meal}: MealsProps) {
  return (
    <>
      <BreadcrumbsRecipe meal={meal} />
      <ContentSelector
        title={formatText(meal)}
        content={courses.map((c) => ({
          text: formatText(c.name),
          image: c.image,
          link: `/recipes/courses/${c.name}?meal=${meal}`,
        }))}
      />
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const meals = getMeals().map((m) => `/recipes/meals/${m.name}`);
  return {
    paths: meals,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
  const courses = getCourses(params?.meal as string);
  return {
    props: {
      courses,
      meal: (params?.meal as string) || '',
    },
  };
};
