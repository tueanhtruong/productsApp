import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : this.setCartItems(),
    };
    this.addToCart = this.addToCart.bind(this);
  }

  setCartItems() {
    localStorage.setItem("cartItems", JSON.stringify([]));
    return [];
  }

  async addToCart(product) {
    await new Promise((resolve) => {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(this.state.cartItems.concat(product))
      );
      resolve();
    });
    this.setState({
      cartItems: this.state.cartItems.concat(product),
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
