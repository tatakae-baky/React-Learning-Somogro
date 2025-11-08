import React, { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  /**
   * Fetches recipes from the DummyJSON API based on the search query
   * This function is called whenever the search term changes
   */
  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
      const data = await response.json();
      // DummyJSON API returns { recipes: [...] }, so we extract the recipes array
      setRecipes(data.recipes || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]); // Reset recipes on error
    }
  };

  /**
   * Effect hook that runs whenever the search term changes
   * Fetches new recipes automatically as the user types
   */
  useEffect(() => {
    fetchRecipes();
  }, [search]);

  return (
    <div className="App">
      <h1>Auto Complete Search</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipes-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <span className="recipe-name" key={recipe.id}>{recipe.name}</span>
          ))
        ) : (
          <p>No recipes found. Try searching for something!</p>
        )}
      </div>
    </div>
  );
};

export default App;
