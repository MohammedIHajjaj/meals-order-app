import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [data, setData] = useState([]);

  const getMeals = async () => {
    try {
      let res = await fetch(
        "https://react-http-f0b63-default-rtdb.firebaseio.com/meals.json"
        // {
        //   method: "GET",
        //   mode: "no-cors",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // }
      );
      let result = await res.json();

      console.log(result);
      const loadedData = [];

      for (const key in result) {
        loadedData.push({
          id: key,
          name: result[key].name,
          description: result[key].description,
          price: result[key].price,
        });
      }
      setData(loadedData);
    } catch (error) {}
  };

  useEffect(() => {
    getMeals();
  }, []);

  const mealsList = data.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
