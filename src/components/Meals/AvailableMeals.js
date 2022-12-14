import { DUMMY_MEALS } from "../../dummy-data";
// import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch('https://task-14-http-requests-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      
  //     if (!response.ok) {
  //       throw new Error('Error occurred');
  //     }
      
  //     const responseData = await response.json();

  //     const loadedMeals = [];

  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       })
  //     }

  //     setMeals(loadedMeals);
  //     setIsLoading(false);
  //   }

  //   fetchMeals().catch((error) => {
  //     setIsLoading(false);
  //     setFetchError(error.message);
  //   });
  // },[]);

  // if (isLoading) {
  //   return <section className={classes['meals-loading']}>
  //     <p>Loading...</p>
  //   </section>
  // };

  // if(fetchError) {
  //   return <section className={classes['meals-error']}>
  //     <p>{fetchError}</p>
  //   </section>
  // }

  const mealsList = DUMMY_MEALS.map(
    meal => 
      <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
