import React, { useState, useEffect } from "react";

export default function Card({ food, setItens }) {
  const [itens, setItensLocal] = useState(food.itens || 0);

  const handleItens = (action) => {
    setItensLocal((prevItens) => {
      if (action === "+" || (action === "-" && prevItens > 0)) {
        const newTotal = action === "+" ? prevItens + 1 : prevItens - 1;
        console.log(`Novo Total (alteração): ${newTotal}`);
        setItens(food.id, newTotal);
        return newTotal;
      }
      return prevItens;
    });
  };

  useEffect(() => {
    // Atualizar o estado do componente pai (App) após a renderização
    setItens(food.id, itens);
  }, [food.id, itens, setItens]);

  return (
    <article>
      <img src={food.avatar} alt="" />
      <div>
        <h2>{food.title}</h2>
        <p>{food.description}</p>
        <div>
          <button onClick={() => handleItens("-")}>-</button>
          <p>{itens} itens</p>
          <button onClick={() => handleItens("+")}>+</button>
        </div>
      </div>
    </article>
  );
}
