import { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext.jsx";
import CartItem from "./CartItem.jsx";

const Cart = (props) => {
  const cart = useContext(CartContext);

  const totalAmount = `$${cart.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cart.addItem({...item, amount: 1});
  }

  const cartItemRemoveHandler = (id) => {
    cart.removeItem(id);
  }

  return (
    <>
      <Modal onCancel={props.cartHide}>
        <ul className="max-h-[20rem] overflow-scroll scrollbar-hide">
          {cart.items.map ((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          ))}
        </ul>
        <div className="flex justify-between items-center my-[1rem]">
          <span className="text-lg font-bold">Total Amount</span>
          <span className="text-lg font-bold">{totalAmount}</span>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={props.cartHide}
            className="hover:bg-[#aa7939] hover:border-[#aa7939] hover:text-white border-2 border-solid border-[#422c1d] text-[#422c1d] font-bold py-2 px-4 rounded-full"
          >
            Close
          </button>
          {cart.items.length > 0 && (
            <button className="bg-[#422c1d] text-white hover:bg-[#aa7939] font-bold py-2 px-4 rounded-full">
              Order
            </button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
