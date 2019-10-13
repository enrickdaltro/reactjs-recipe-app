import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

// Get youy keys from APIs
const APP_ID = 'b17874c4';
const APP_KEY = 'fa2447944e4a61da43ea693f1c4e05f2';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("chicken")

useEffect(() => {
    getRecipes();
}, [query]);

//Fetch all of our data
const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //After data gets fetched, we call another variable and calls Json
    const data = await response.json();
    setRecipes(data.hits);
};

const updatedSearch = e => {
    setSearch(e.target.value);
}

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
}

        return(
            <div className="App">
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updatedSearch} />
                    <button className="search-button" type="submit">Pesquisar</button>
                </form>
                <div className="recipe-form">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
                </div>
            </div>
        ); 
}

export default App;