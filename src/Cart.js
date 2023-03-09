import React from "react";
import { GlobalContext, GlobalStorage } from "./Global";

const Cart = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      <h2>Cart:</h2>
      <ul>
        {global.carrinho.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
