# Eindopdracht_M5_JS-Advanced

Cake Recipe Management System

# Learning goals

## JavaScript Functions

- Create and use pure functions.
- Define and use parameters and arguments.
- Use decomposition to split code into smaller, more manageable parts.

## JavaScript Advanced

- Use the spread operator.
- Use immutable & mutable operations.
- Use multiple array methods such as `find`, `every`, `some`, `map`, `filter`, `reduce`.
- Unpack or destructure objects & arrays.
- Use JSON to read data from files.

# Project description

In a world brimming with culinary diversity, exploring and organizing recipes can be a delightful journey. The Recipe Management System is designed to simplify this culinary adventure by offering a user-friendly platform for discovering, organizing, and saving your favorite recipes.

Whether you're an aspiring chef, a seasoned home cook, or simply curious about the world of gastronomy, the system that you are going to build provides a convenient way to navigate through a vast collection of recipes.

# Requirements

- All functions are pure functions except the printing function

## Function to Get Unique Authors

- Create a function that returns all authors of a given recipe list.
- Utilize the `.forEach` method for iteration.
- **Input:** `recipes` (an array of recipes with the same format as `cakeRecipes`).
- **Output:** A list of unique authors (each author appears only once in the returned list).
- Users can choose this option from the menu to view authors' names.

## Function to Log Recipe Names

- Create a function that logs the name of each recipe.
- **Input:** `recipes` (a list of recipes with the same format as `cakeRecipes`).
- Utilize object destructuring within the function to access recipe names.
- No specific output is required; it should log the names to the console.
- Users can select this option from the menu, which triggers this function.

## Function to Get Recipes by Author

- Create a function that returns all recipes of a given author.
- Utilize the `.filter` method for filtering recipes by author.
- **Input:** `recipes` (an array of recipes with the same format as `cakeRecipes`) and `author` (a string representing the author's name).
- **Output:** An array of all recipes authored by the given author.
- This option is available in the menu and triggers this function.

## Function to Get Recipes by Ingredient

- Create a function that returns a list of recipes that contain a given ingredient.
- Utilize the `.filter()` method to filter recipes.
- Use the `.some()` method to check if the ingredient list of each recipe contains the given ingredient.
- **Input:** `recipes` (an array of recipes with the same format as `cakeRecipes`) and `ingredient` (a string representing the ingredient to search for).
- **Output:** An array of recipes that contain the specified ingredient.
- This feature is accessible from the menu and triggers this function.

## Function to Get Recipe by Name

- Create a function that returns a single recipe that matches a given name.
- Utilize the `.find()` method to find a recipe by name.
- Use the `.includes()` method to check for a name match.
- **Input:** `recipes` (an array of recipes with the same format as `cakeRecipes`) and `name` (a string representing the recipe name to search for).
- **Output:** The recipe object that matches the given name, or `null` if no match is found.
- After running this function from the menu, give the user the option to save the found recipe so that it can be used to print an ingredient list (see next requirement).

## Function to Get All Ingredients

- Create a function that returns all ingredients of a given recipe list in a single array.
- Utilize the `.reduce()` method to flatten the recipe array.
- **Input:** `recipes` (an array of recipes with the same format as `cakeRecipes`).
- **Output:** An array containing all the ingredients from the recipe list.
- Users can select this option from the menu to view the ingredient list from the recipes that are saved in the previous function.

## Note to self:

- Drawing out and writing down the steps to take really helps!
- Going step by step makes you feel you are getting something done, so focus on one step at a time.

## Potential project idea's

- Make the Cake Recipe Management System work in the browser
- Instead of pressing numbers in the console use a GUI.
- Style it nicely with CSS.
