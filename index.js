"use strict";

const cakeRecipes = require("./cake-recipes.json");

// Ensures prompt() works inside the terminal
const prompt = require("prompt-sync")();

const getUniqueAuthors = recipes => {
  const authors = [];

  // Als de author niet voorkomt in de lijst, voeg deze dan toe.
  recipes.forEach(recipe => {
    if (!authors.includes(recipe.Author)) {
      authors.push(recipe.Author);
    }
  });

  return authors;
};

const getAllRecipeNames = recipes => {
  return recipes.map(({ Name }) => Name);
};

const getRecipesByName = (recipes, name) => {
  const filteredRecipesByName = recipes.filter(({ Name }) => Name && Name.toLowerCase().includes(name.toLowerCase()));
  return filteredRecipesByName.length > 0 ? filteredRecipesByName.map(({ Name }) => Name) : "No recipes found";
};

const getRecipesByAuthor = (recipes, author) => {
  const filteredRecipesByAuthor = recipes.filter(({ Author }) => Author.toLowerCase().includes(author.toLowerCase()));

  if (filteredRecipesByAuthor.length === 0) {
    console.log(`No recipes found for author: ${author}`);
  }
  return filteredRecipesByAuthor.map(({ Name }) => Name);
};

const getRecipeContainingIngredient = (recipes, ingredient) => {
  const filteredRecipes = recipes.filter(({ Ingredients }) => Ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase())));
  return filteredRecipes.length > 0 ? filteredRecipes.map(({ Name }) => Name) : "No recipes found with that ingredient.";
};

// Returns the entire recipe including the instructions etc.
const getRecipeByExactName = (recipes, name) => {
  const foundRecipe = recipes.find(({ Name }) => Name && Name.toLowerCase().includes(name.toLowerCase()));
  return foundRecipe ? foundRecipe : "No recipe found with that name.";
};

const getAllRecipeIngredients = (recipes, name) => {
  return recipes
    .filter(({ Name }) => Name.toLowerCase().includes(name.toLowerCase()))
    .reduce((allIngredients, { Ingredients }) => {
      return allIngredients.concat(Ingredients);
    }, []);
};

// console log statements:
// console.log(getUniqueAuthors(cakeRecipes));
// console.log(getAllRecipeNames(cakeRecipes));
// console.log(getRecipesByName(cakeRecipes, "salmon"));

// const author = "Good Food";
// console.log(getRecipesByAuthor(cakeRecipes, author));

// const ingredient = "140g caster sugar";
// console.log(getRecipeContainingIngredient(cakeRecipes, ingredient));

// const recipeName = "Smoked wild Irish salmon with chive pancakes";
// console.log(getRecipeByExactName(cakeRecipes, recipeName));

// const recipeName = "Smoked wild Irish salmon with chive pancakes";
// console.log(getAllRecipeIngredients(cakeRecipes, recipeName));

// Part 2

// const displayMenu = () => {
//   console.log("\nRecipe Management System Menu:");
//   console.log("1. Show All Authors");
//   console.log("2. Show Recipe names by Author");
//   console.log("3. Show Recipe names by Ingredient");
//   console.log("4. Get Recipe by Name");
//   console.log("5. Get All Ingredients of Saved Recipes");
//   console.log("0. Exit");
//   const choice = prompt("Enter a number (1-5) or 0 to exit: ");
//   return parseInt(choice);
// };

// let choice;

// do {
//   choice = displayMenu();

//   switch (choice) {
//     case 1:
//       break;
//     case 2:
//       break;
//     case 3:
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//     case 0:
//       console.log("Exiting...");
//       break;
//     default:
//       console.log("Invalid input. Please enter a number between 0 and 5.");
//   }
// } while (choice !== 0);
