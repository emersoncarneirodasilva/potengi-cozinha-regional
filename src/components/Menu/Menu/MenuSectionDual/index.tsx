"use client";

import { useState } from "react";
import { MenuDessertsColumn } from "./MenuDessertsColumn";
import { MenuDrinksColumn } from "./MenuDrinksColumn";
import { MenuItem } from "@/src/interface/menuItem";
import { DESSERTS_DATA } from "@/src/constants/dessertsData";
import { DRINKS_DATA } from "@/src/constants/drinksData";

export default function MenuSectionDual() {
  const [selectedDessert, setSelectedDessert] = useState<MenuItem>(
    DESSERTS_DATA[0],
  );
  const [showAllDesserts, setShowAllDesserts] = useState(false);

  const [selectedDrink, setSelectedDrink] = useState<MenuItem>(DRINKS_DATA[0]);
  const [showAllDrinks, setShowAllDrinks] = useState(false);

  return (
    <section className="w-full py-12 md:py-20 bg-background overflow-hidden">
      <div className="wrapper w-full px-6 sm:px-8 lg:px-12 mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 xl:gap-24 items-start w-full">
          {/* Coluna Esquerda: Sobremesas */}
          <MenuDessertsColumn
            dessertsData={DESSERTS_DATA}
            selectedDessert={selectedDessert}
            setSelectedDessert={setSelectedDessert}
            showAllDesserts={showAllDesserts}
            setShowAllDesserts={setShowAllDesserts}
          />

          {/* Coluna Direita: Drinks Autorais */}
          <MenuDrinksColumn
            drinksData={DRINKS_DATA}
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
            showAllDrinks={showAllDrinks}
            setShowAllDrinks={setShowAllDrinks}
          />
        </div>
      </div>
    </section>
  );
}
