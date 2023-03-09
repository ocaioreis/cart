import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  return (
    <GlobalContext.Provider
      value={{ produto, setProduto, carrinho, setCarrinho }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
