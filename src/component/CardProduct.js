import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { CartContext } from "../contexts/Cart";

const CardProduct = ({ data }) => {
  return (
    <Card>
      <CardImg top width="100%" src={data.img} />
      <CardBody>
        <CardTitle tag="h5">{data.name}</CardTitle>
        <CardText>{data.descrip}</CardText>
        <CartContext.Consumer>
          {({ addToCart }) => (
            <Button onClick={() => addToCart(data)}>Add To Cart</Button>
          )}
        </CartContext.Consumer>
        <Button color="danger" className="ml-3">
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardProduct;
