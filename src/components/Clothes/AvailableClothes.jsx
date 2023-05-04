import React, { useEffect, useState } from "react";
import classes from "./AvailableClothes.module.css";
import Card from "../UI/Card";
import ClothItem from "./ClothItem/ClothItem";

const AvailableClothes = () => {
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchClothes = async () => {
      const response = await fetch(
        "https://gazero-cart-default-rtdb.firebaseio.com/clothes.json"
      ).then();

      if (!response.ok) {
        throw new Error(" 오류가 발생했습니다 ! ");
      }

      const responseData = await response.json();

      const loadedClothes = [];

      for (const key in responseData) {
        loadedClothes.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setClothes(loadedClothes);
      setIsLoading(false);
    };

    fetchClothes().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.ClothesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.ClothesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const clothesList = clothes.map((cloth) => (
    <ClothItem
      id={cloth.id}
      key={cloth.id}
      name={cloth.name}
      description={cloth.description}
      price={cloth.price}
      image={cloth.image}
    />
  ));
  return (
    <section className={classes.clothes}>
      <Card>
        <ul>{clothesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableClothes;
