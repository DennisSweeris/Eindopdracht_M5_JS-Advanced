"use strict";

const cakeRecipes = require("./cake-recipes.json");

// Ensures prompt() works inside the terminal
const prompt = require("prompt-sync")();

// Your functions here
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

// Log naar console
// console.log(getUniqueAuthors(cakeRecipes));

const getRecipesByName = (recipes, name) => {
  const filteredRecipesByName = recipes.filter(({ Name }) => Name && Name.toLowerCase().includes(name.toLowerCase()));
  console.log(filteredRecipesByName);
  return filteredRecipesByName.map(({ Name }) => Name);
};

// Log naar console
// console.log(getRecipesByName(cakeRecipes, "salmon"));

const getRecipesByAuthor = (recipes, author) => {
  const filteredRecipesByAuthor = recipes.filter(({ Author }) => Author.toLowerCase().includes(author.toLowerCase()));

  if (filteredRecipesByAuthor.length === 0) {
    console.log(`No recipes found for author: ${author}`);
  }
  return filteredRecipesByAuthor.map(({ Name }) => Name);
};

// Log naar console
// const author = "Good Food";
// console.log(getRecipesByAuthor(cakeRecipes, author));

const getRecipeContainingIngredient = (recipes, ingredient) => {
  const filteredRecipes = recipes.filter(({ Ingredients }) => Ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase())));

  return filteredRecipes.length > 0 ? filteredRecipes.map(({ Name }) => Name) : "No recipes found with that ingredient.";
};

// Log naar de console
// const ingredient = "140g caster sugar";
// console.log(getRecipeContainingIngredient(cakeRecipes, ingredient));

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
