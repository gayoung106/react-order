import React from "react";
import classes from "./AvailableClothes.module.css";

const DUMMY_CLOTHES = [
  {
    id: "m1",
    name: "SWEATSHIRT_NAVY",
    description: "[23S/S] [GOLF] LOGO SET-UP RUGBY SWEATSHIRT_NAVY (MGIBA8712)",
    price: "80,100원",
  },
  {
    id: "m2",
    name: "CROP SWEATSHIRTS_IVORY",
    description:
      "[23S/S] (WOMEN) FLOWER PRINT CROP SWEATSHIRTS_IVORY (MGIBA8763)",
    price: "71,100원",
  },
  {
    id: "m3",
    name: "T-SHIRTS_GREEN",
    description: "[23S/S] STRIPE LONG SLEEVE T-SHIRTS_GREEN (MGIBB8733)",
    price: "53,100원",
  },
  {
    id: "m4",
    name: "HOODIE_GREY MELANGE",
    description: "[23S/S] CAT LOGO GRAPHIC HOODIE_GREY MELANGE (MGIBA8606)",
    price: "80,100원",
  },
];

const AvailableClothes = () => {
  const clothesList = DUMMY_CLOTHES.map((cloth) => <li>{cloth.name}</li>);
  return (
    <section className={classes.clothes}>
      <ul>{clothesList}</ul>
    </section>
  );
};

export default AvailableClothes;
