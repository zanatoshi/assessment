const fs = require('fs');
const readline = require('readline');
const {v4: uuidv4} = require('uuid');

// generate timing
function getTiming() {
  const prepTime = Math.floor(Math.random() * 20);
  const cookTime = 10 + Math.floor(Math.random() * 10);
  const totalTime = prepTime + cookTime;
  return {totalTime, prepTime, cookTime};
}
//data from the file
const data = [];
const rl = readline.createInterface({
  input: fs.createReadStream('cookstr-recipes.json'),
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  data.push(JSON.parse(line));
});

rl.on('close', () => {
  // avoid duplication by name
  const names = new Set();
  const recipes = data
    .filter((d) => {
      if (
        d !== undefined &&
        d !== null &&
        d.meal !== undefined &&
        d.meal !== null &&
        d.course !== undefined &&
        d.course !== null &&
        d.makes !== undefined &&
        d.makes !== null &&
        d.description !== undefined &&
        d.description !== null &&
        d.ingredients_detailed !== undefined &&
        d.ingredients_detailed !== null &&
        d.photo_url !== undefined &&
        d.photo_url !== null &&
        d.instructions !== undefined &&
        d.instructions !== null &&
        d.cost !== undefined &&
        d.cost !== null &&
        d.title !== undefined &&
        d.title !== null &&
        !names.has(d.title)
      ) {
        names.add(d.title);
        return true;
      }
      return false;
    })
    .map((b) => ({
      id: uuidv4(),
      name: b.title,
      ingredients: b.ingredients_detailed,
      image: b.photo_url,
      instructions: b.instructions,
      recipeYield: b.makes,
      description: b.description,
      cost: b.cost,
      meal: b.meal
        .toLowerCase()
        .split(',')[0]
        .trim()
        .replace(/(\/|\s)/gi, '_'),
      course: b.course
        .toLowerCase()
        .split(',')
        .map((c) => (c.includes('appetizer') ? 'appetizer' : c))[0]
        .trim()
        .replace(/(\/|\s)/gi, '_'),
      ...getTiming(),
    }));
  fs.writeFileSync('final-recipes.json', JSON.stringify(recipes));
});
