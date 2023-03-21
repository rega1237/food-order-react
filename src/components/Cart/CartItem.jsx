const CartItem = (props) => {
  return (
    <li className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-3 border-b-2 border-[#422c1d]">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-lg font-bold">{props.name}</span>
          <span className="text-sm text-gray-500">{`$${props.price.toFixed(2)}`}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={props.onRemove}
          className="hover:bg-[#aa7939] hover:border-[#aa7939] hover:text-white border-2 border-solid border-[#422c1d] text-[#422c1d] font-bold py-2 px-4 rounded-full"
        >
          -
        </button>
        <span className="text-lg font-bold">{props.amount}</span>
        <button
          onClick={props.onAdd}
          className="bg-[#422c1d] text-white hover:bg-[#aa7939] font-bold py-2 px-4 rounded-full"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
