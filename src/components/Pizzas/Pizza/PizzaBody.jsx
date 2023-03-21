import { useContext } from "react";

import PizzaForm from "./PizzaForm";
import CartContext from "../../../store/CartContext";

const PizzaBody = (props) => {

  const cart = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cart.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return(
  <div className="p-10">
    <div className=" w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${props.image})`}} title={props.name}> </div>
        <div className="grow border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{props.name}</div>
            <p className="text-gray-700 text-lg font-bold">Ingredients:</p>
            <p className="text-gray-700 text-base">{props.ingredients.join(', ')}</p>
            <p className="text-gray-900 leading-none mt-1 text-lg"><strong>Price:</strong> ${props.price}</p>
          </div>
          <PizzaForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </div>
  </div>
  )
}

export default PizzaBody;
