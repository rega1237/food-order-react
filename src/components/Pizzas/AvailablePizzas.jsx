import classes from "./AvailablePizzas.module.css";
import PizzaBody from "./Pizza/PizzaBody";
import napolitana from "../../assets/images/napolitana.jpg";
import veggie from "../../assets/images/veggie.jpg";
import pepperoni from "../../assets/images/pepperoni.jpg";
import bacon from "../../assets/images/bacon.png";
import Card from "../UI/Card";

const AvailablePizzas = () => {
  const dummyPizzas = [
    {
      id: 1,
      name: "Napolitana",
      ingredients: ["Sauce", "Cheese"],
      image: napolitana,
      price: 10,
    },
    {
      id: 2,
      name: "Veggie",
      ingredients: [
        "Sauce",
        "Cheese",
        "Mushrooms",
        "Olives",
        "Onions",
        "Peppers",
        "Tomatoes",
      ],
      image: veggie,
      price: 12,
    },
    {
      id: 3,
      name: "Pepperoni",
      ingredients: ["Sauce", "Cheese", "Pepperoni"],
      image: pepperoni,
      price: 14,
    },
    {
      id: 4,
      name: "Bacon and Corn",
      ingredients: ["Sauce", "Cheese", "Bacon", "Corn"],
      image: bacon,
      price: 16,
    },
  ];

  return (
    <div className={classes.pizzas}>
      <h2 className="text-center mt-[3rem] mb-8 text-3xl text-[#422c1d] font-bold">
        Available Pizzas
      </h2>
      <Card>
        <ul>
          {dummyPizzas.map((pizza) => (
            <li key={pizza.id}>
              <PizzaBody
                id={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                image={pizza.image}
                price={pizza.price}
              />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AvailablePizzas;
