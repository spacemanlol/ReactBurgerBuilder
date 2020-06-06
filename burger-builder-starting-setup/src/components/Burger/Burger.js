import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const burger = (props) => {
    // Convert ingredient object to an array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    // Ask user to start adding ingredients if none have been added so far
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        // Wrapping to give styling
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
    );
};

export default burger;
