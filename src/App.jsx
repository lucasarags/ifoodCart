import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

let foods = [
  {
    id: 1,
    avatar: "",
    title: "Hamburguer",
    description:
      "Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.",
    itens: 0,
  },
  {
    id: 2,
    avatar: "",
    title: "Sanduiche",
    description:
      "Delicie-se com nosso sanduíche Filet Mignon premium: carne irresistivelmente macia, queijo derretido, cebola caramelizada e molho especial. Uma harmonia perfeita de sabores e texturas que transformam cada mordida em uma experiência gourmet única.",
    itens: 0,
  },
];

function App() {
  const [totalItens, setTotalItens] = useState(0);

  useEffect(() => {
    // Calcular o total de itens sempre que totalItens ou itens em foods mudar
    setTotalItens(foods.reduce((total, food) => total + food.itens, 0));
  }, [foods, totalItens]);

  const handleSetItens = (foodId, newItens) => {
    // Atualizar o estado local dos alimentos
    const updatedFoods = foods.map((food) =>
      food.id === foodId ? { ...food, itens: newItens } : food
    );

    // Atualizar o estado global com a nova quantidade de itens
    setTotalItens(updatedFoods.reduce((total, food) => total + food.itens, 0));
    foods = updatedFoods;
  };

  return (
    <>
      <Header />
      {foods.map((food) => (
        <Card key={food.id} food={food} setItens={handleSetItens} />
      ))}
      <Footer totalItens={totalItens} />
    </>
  );
}

export default App;
