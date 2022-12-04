import React from "react";
import AvailableMeals from "./AvailableMeals";
import styles from "./Meals.module.css";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
