import Router from 'next/router';
import {useCallback} from 'react';
import {getCourses} from '../../../../data/RecipesData';
import {ContentGridListSelector} from '../../../components/content-gridlist-selector/ContentGridListSelector';
import {formatText} from '../../../utils/FormatUtils';

interface CoursesListProps {
  meal: string;
}

export const CoursesList = ({meal}: CoursesListProps) => {
  const courses = getCourses(meal).map((c) => ({
    id: c.name,
    title: formatText(c.name),
    image: c.image.replace(/'/gi, '_'),
  }));
  const onClick = useCallback((course) => Router.push(`/recipes/courses/${course}?meal=${meal}`), []);
  return <ContentGridListSelector content={courses} onClick={onClick} title={formatText(meal)} />;
};
