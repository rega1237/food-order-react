import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const PizzaForm = (props) => {
  const [numberOfPizzas, setNumberOfPizzas] = useState(1);

  const addPizzaHandler = () => {
    if (numberOfPizzas < 5) {
      setNumberOfPizzas(numberOfPizzas + 1);
    }

  };

  const removePizzaHandler = () => {
    if (numberOfPizzas > 1) {
      setNumberOfPizzas(numberOfPizzas - 1);
    }
  };

  const inputHandler = (event) => {
    setNumberOfPizzas(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    props.onAddToCart(numberOfPizzas);
  };

  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col gap-3 items-center justify-center px-5"
    >
      <div className="flex gap-2 items-center">
        <span
          className="text-lg px-[0.8rem] py-[0.4rem] bg-[#fbc960] rounded-3xl text-white"
          onClick={addPizzaHandler}
        >
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <div className="flex flex-col justify-center items-center">
          <input
            type="number"
            min={1}
            value={numberOfPizzas}
            className="text-lg text-center w-8"
            onChange={inputHandler}
          />
          <label htmlFor={`amount_${props.id}`} className="text-lg font-bold">
            Amount
          </label>
        </div>
        <span
          className="text-lg px-[0.8rem] py-[0.4rem] bg-[#fbc960] rounded-3xl text-white"
          onClick={removePizzaHandler}
        >
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add to cart
      </button>
    </form>
  );
};

export default PizzaForm;
