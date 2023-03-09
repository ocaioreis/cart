import React from "react";
import { GlobalContext, GlobalStorage } from "./Global";

const Footer = () => {
  const global = React.useContext(GlobalContext);
  return (
    <footer>
      <p>Total: {global.carrinho}</p>
    </footer>
  );
};

export default Footer;
