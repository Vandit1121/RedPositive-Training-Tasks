import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Dummy_Meals, setDummy_Meals] = useState([]);
  const [error,setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
        setIsLoading(true);
        const response = await fetch(
          "https://red-positive-internship-task-default-rtdb.firebaseio.com/meals.json"
        );
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        const loadedMovies = [];
        for (const key in data) {
          loadedMovies.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
        });
          setDummy_Meals(loadedMovies);
        }
        setIsLoading(false);
    }
    
        fetchData().catch((error)=>{
            setIsLoading(false);
            setError(error.message);
        });
  }, []);

  const mealsList = Dummy_Meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
      />
    );
  });

  if(isLoading){
    return <section className={classes.MealsLoading}>
        <p>Loading...</p>
    </section>
  }

  if(error!==null)
  {
    return <section className={classes.mealsError}>
        <p>{error}</p>
    </section>
  }

  if(mealsList.length === 0)
  {
    return <section className={classes.MealsLoading} >
        <p>No Meals Found.</p>
    </section>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
