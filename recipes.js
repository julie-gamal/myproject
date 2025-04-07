 // Function to handle adding a new recipe
 function addRecipe() {
    const title = document.getElementById("recipeTitle").value.trim();
    const ingredients = document
      .getElementById("recipeIngredients")
      .value.trim();
    const instructions = document
      .getElementById("recipeInstructions")
      .value.trim();

    if (title && ingredients && instructions) {
      // Create a new recipe object
      const recipe = {
        title: title,
        ingredients: ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        instructions: instructions,
      };

      // Save the recipe in localStorage
      const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
      recipes.push(recipe);
      localStorage.setItem("recipes", JSON.stringify(recipes));

      // Clear the input fields
      document.getElementById("recipeTitle").value = "";
      document.getElementById("recipeIngredients").value = "";
      document.getElementById("recipeInstructions").value = "";

      // Reload the recipe list
      loadRecipes();
    } else {
      alert("Please fill out all fields.");
    }
  }

  // Function to load all recipes from localStorage and display them
  function loadRecipes() {
    const recipeList = document.getElementById("recipeList");
    const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");

    recipeList.innerHTML = ""; // Clear current list

    // Create a recipe card for each recipe
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");

      const title = document.createElement("h3");
      title.textContent = recipe.title;
      recipeCard.appendChild(title);

      const ingredients = document.createElement("div");
      ingredients.classList.add("ingredients");
      ingredients.innerHTML = `<strong>Ingredients:</strong><br>${recipe.ingredients.join(
        ", "
      )}`;
      recipeCard.appendChild(ingredients);

      const instructions = document.createElement("p");
      instructions.innerHTML = `<strong>Instructions:</strong><br>${recipe.instructions}`;
      recipeCard.appendChild(instructions);

      recipeList.appendChild(recipeCard);
    });
  }

  // Load recipes when the page is loaded
  document.addEventListener("DOMContentLoaded", loadRecipes);