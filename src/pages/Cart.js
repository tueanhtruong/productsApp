import { useContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import LoaderContainer from "../component/LoaderContrainer";
import { CartContext } from "../contexts/Cart";
import { Masonry } from "masonic";
import CardProduct from "../component/CardProduct";

const Cart = (props) => {
  const Cart = useContext(CartContext);
  const [display, setDisplay] = useState(false);
  const [loader, showLoader, hideLoader] = LoaderContainer();
  useEffect(async () => {
    showLoader();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    hideLoader();
    setDisplay(true);
  }, []);
  return (
    <Container>
      <h1>Cart</h1>
      {display && (
        <Masonry
          items={Cart.cartItems}
          columnGutter={8} // Set khoảng cách giữa các column
          columnWidth={300} // Set chiều rộng tối thiểu là 300px
          overscanBy={5} // Giá trị để render trước khi scroll tới
          render={CardProduct} // Grid item của component
        />
      )}
      {loader}
    </Container>
  );
};

export default Cart;
