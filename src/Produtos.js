import React from "react";
import { GlobalContext, GlobalStorage } from "./Global";

const Produtos = () => {
  const global = React.useContext(GlobalContext);

  function addToCart(item, preco) {
    global.setCarrinho([...global.carrinho, item]);
    console.log(global.carrinho);
  }

  function removeFromCart(item) {
    global.setCarrinho(global.carrinho.filter((i) => i !== item));
  }

  return (
    <div className="displayProdutos">
      {global.produto.map((item) => (
        <div className="card" key={item.id}>
          <div className="image">{}</div>
          <h2 className="title">{item.nome}</h2>
          <span className="produtoPreco">R$ {item.preco}</span>
          <button onClick={() => addToCart(item.nome)}>Add</button>
          <button onClick={() => removeFromCart(item.nome)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
