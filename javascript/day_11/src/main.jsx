import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

const Contact = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contact Page</h1>
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              width="100"
            />

            <h3>{product.title}</h3>
            <p>{product.price}$</p>
          </div>
        ))
      )}
    </div>
  );
};

const Root = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((oldCart) => [...oldCart, product]);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<App addToCart={addToCart} />}
        />

        <Route
          path="/product"
          element={<App addToCart={addToCart} />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);