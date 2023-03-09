import React from "react";

const Header = () => {
  const nav = React.useRef();

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    nav.current.classList.toggle("active");
  }

  return (
    <div className="header">
      <h1 className="logo">&#11088;Shop</h1>
      <nav ref={nav} className="nav">
        <button className="btn-mobile" onClick={toggleMenu}>
          <span className="hamburguer"></span>
        </button>
        <ul className="menu">
          <li>
            <a href="/"></a>Home
          </li>
          <li>
            <a href="Cart"></a>Cart
          </li>
          <li>
            <a href="/"></a>Sobre
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
