import {Course} from '../src/apps/recipes/course/Course';
import {Meal} from '../src/apps/recipes/meal/Meal';
import {Recipe} from '../src/apps/recipes/recipe/Recipe';
const BANANA_BREAD = {
  id: '1',
  name: 'Whole-Grain Banana Bread',
  description:
    "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.",
  image: '/whole_grain_banana_bread.jpg',
  prepTime: '10 mins',
  cookTime: '1 hr to 1hr 15 mins',
  totalTime: '1 hr 10 mins',
  recipeYield: '1 loaf, 12 generous servings',
  ingredients: [
    {line: '3 1/2 cups (454g) sliced bananas (4 to 5 medium bananas)', ingredients: ['banana']},
    {line: '8 tablespoons (113g) butter, room temperature', ingredients: ['butter']},
    {line: '1/2 cup (106g) brown sugar, packed', ingredients: ['brown sugar']},
    {line: '3/4 teaspoon baking soda', ingredients: ['baking soda']},
    {line: '3/4 teaspoon salt', ingredients: ['salt']},
    {line: '1/4 cup (85g) honey', ingredients: ['honey']},
    {line: '2 large eggs', ingredients: ['eggs']},
    {line: '2 cups (227g) white whole wheat flour', ingredients: [' white whole wheat flour']},
    {line: '1/2 cup (57g) chopped walnuts, optional; toasted if desired', ingredients: ['walnuts']},
  ],
  cost: 'Inexpensive',
  course: 'quick_bread',
  meal: 'bread',
  instructions: [
    'Preheat your oven to 350°F. Lightly grease a 9" x 5" loaf pan.',
    'Mash the bananas with a potato masher or fork; or purée them in a blender or food processor.',
    'In a large bowl, beat together the butter and sugar until smooth. Add the vanilla, baking soda, salt, and bananas, beating until well combined. Beat in the honey and eggs.',
    'Add the flour, then the walnuts, stirring until smooth.',
    'Spoon the batter into the prepared pan, smoothing the top. Let it rest at room temperature for 10 minutes.',
    'Bake the bread for 50 minutes, then gently lay a piece of aluminum foil across the top, to prevent over-browning. Bake for an additional 10 to 15 minutes, then remove the bread from the oven; a long toothpick or cake tester inserted into the center should come out clean.',
    'Allow the loaf to cool for 10 minutes; then remove it from the pan, and set it on a rack to cool completely. Store at room temperature, well wrapped in plastic, for several days; freeze for longer storage.',
  ],
};
const RECIPES: Recipe[] = require('./final-recipes.json').concat(BANANA_BREAD);

export const getIds = (): string[] => RECIPES.map((r) => r.id);

export const getRecipe = (id: string): Recipe | undefined => {
  return RECIPES.find((r) => r.id === id);
};

export const getRecipeOfTheDay = () => BANANA_BREAD;

export const getRecipes = (meal?: string, course?: string): Recipe[] => {
  return RECIPES.filter(
    (r) =>
      (meal === undefined || meal.toLowerCase() === r.meal.toLowerCase()) &&
      (course === undefined || course.toLowerCase() === r.course.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));
};

export const getMeals = (): Meal[] => {
  const setMeals = new Set();
  return RECIPES.reduce<Meal[]>((meals, recipe) => {
    if (!setMeals.has(recipe.meal)) {
      setMeals.add(recipe.meal);
      return meals.concat({
        name: recipe.meal,
        image: `/meals/${recipe.meal}.jpg`,
      });
    }
    return meals;
  }, []).sort((a, b) => a.name.localeCompare(b.name));
};

export const getCourses = (meal?: string) => {
  const setCourses = new Set();
  return RECIPES.filter((r) => meal === undefined || r.meal.toLowerCase() === meal.toLowerCase())
    .reduce<Course[]>((courses, recipe) => {
      if (!setCourses.has(recipe.course)) {
        setCourses.add(recipe.course);
        return courses.concat({
          name: recipe.course,
          image: `/courses/${recipe.course}.jpg`,
        });
      }
      return courses;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));
};
