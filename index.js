"use strict";

const cakeRecipes = require("./cake-recipes.json");

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

const logRecipeNames = recipes => {
  recipes.forEach(({ Name }) => {
    if (!Name) {
      console.log("A recipe is missing a name.");
    } else {
      console.log(Name);
    }
  });
};

// Log naar console
// logRecipeNames(cakeRecipes);

const getRecipesByAuthor = (recipes, author) => {
  const filteredRecipes = recipes.filter(({ Author }) => Author.toLowerCase() === author.toLowerCase());

  if (filteredRecipes.length === 0) {
    console.log(`No recipes found for author: ${author}`);
  }
  return filteredRecipes;
};

// Log naar console
// Test data
// const author = "good food";
// console.log(getRecipesByAuthor(cakeRecipes, author));

const getRecipeContainingIngredient = (recipes, ingredient) => {
  const filteredRecipes = recipes.filter(({ Ingredients }) => Ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase())));

  return filteredRecipes.length > 0 ? filteredRecipes : "No recipes found with that ingredient.";
};

// Log naar de console
// Test data
// const ingredient = "Sweat";
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
