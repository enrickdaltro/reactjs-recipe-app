import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        //We want to display on our recipe
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt=""/>
        </div>

    );
}

export default Recipe;