'use strict';

function addIngredient(recipe,ingridientName,amount){
  recipe[ingridientName]  = amount;
  return recipe;
}

function removeIngredient(recipe, ingridientName){
  delete recipe[ingridientName];
  return recipe;
}

function updateIngredient(recipe,ingridientName,amount){
  recipe[ingridientName]  = amount;
  return recipe;
}

function readRecipe(recipe){
  for (var property in recipe) {
    if (recipe.hasOwnProperty(property)) {
      console.log(`this recipe calls for ${recipe[property]} of ${property}`);
    }
  }
}
