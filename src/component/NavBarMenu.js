import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const NavBarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // const style = {
  //   position: "fixed",
  //   top: 0,
  //   width: "100vw",
  // };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home Page</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/products">Product</NavLink>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {({ cartItems }) => (
                  <NavLink href="/carts">Cart ({cartItems.length})</NavLink>
                )}
              </CartContext.Consumer>
            </NavItem> */}
          </Nav>
          <NavbarText>{props.userName}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarMenu;
