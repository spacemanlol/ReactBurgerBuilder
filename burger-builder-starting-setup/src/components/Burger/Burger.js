import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const burger = (props) => {
    return (
        // Wrapping to give styling
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                <BurgerIngredient type="cheese"/>
                <BurgerIngredient type="meat"/>
                <BurgerIngredient type="bread-bottom"/>
            </div>
    );
};

export default burger;
