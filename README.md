# Assessment

## Technologies

This assessment is using NextJS with Typescript. The UI framework is Material-UI. For unit testing, react testing library with jest is used. Prettier with eslint are configured as formatter and linter.

## The website

The following pages are implemented :

- home page : shows cards that redirect to pages.
- recipes : lists all meals and their courses. Also shows the recipe of the day.
- every meals : lists all courses of the meal.
- every courses of every meals : lists all recipes.
- every recipes : describes the recipe.

A header menu with a sub menu for each main pages is also presents on every pages.

## Data

I found some recipes on the web. I had to transform the cookstr-recipes.json to usable data stored in the final-recipes.json. You can have a look in the data directory.

## Implementation

The pages directory contains all the pages. Every page manages the loading of the data and any parameter treatment. In the src directory, you can find inside the apps directory every react component that has a business meaning (recipe, courses, meals...). Inside the components directory of src, you can find reusable simple component.

Shortcuts (time saving) :

- desktop design, no adaptation for mobile
- unitary test : few because they all look the same. Don't see the interest to show all of them.
- Sometimes, rather than using material-ui, I have chosen to do it myself to show my skills.

Please, take into account that was my first time using NextJS and Material-UI.
