import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import CardProduct from "../component/CardProduct";
import { Masonry } from "masonic";
import LoaderContainer from "../component/LoaderContrainer";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [loader, showLoader, hideLoader] = LoaderContainer();
  useEffect(() => {
    fetch("http://localhost:8080/products").then(async (res) => {
      showLoader();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const dataFected = await res.json();
      setData(dataFected);
      hideLoader();
    });
  }, []);
  return (
    <Container>
      <h1>Products</h1>
      <Masonry
        items={data}
        columnGutter={8} // Set khoảng cách giữa các column
        columnWidth={300} // Set chiều rộng tối thiểu là 300px
        overscanBy={5} // Giá trị để render trước khi scroll tới
        render={CardProduct} // Grid item của component
      />
      {loader}
    </Container>
  );
};

export default Products;
