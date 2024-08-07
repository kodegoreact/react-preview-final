import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function NavigationBar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Sample Market</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/product">
                  Add Product
              </Link>
            </Nav.Link>
            <Nav.Link onClick={handleShow}>View Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Modal for Add to cart */}
      <Modal size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart></Cart>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavigationBar;