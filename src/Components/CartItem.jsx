// src/Components/CartItems.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, clearCart } from '../Features/Cart/cartSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './CartItem.css';

const CartItems = () => {
    const cart = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const shippingPrice = 15.00; // Flat shipping rate
    const subtotal = totalAmount;
    const totalWithShipping = subtotal + shippingPrice;

    return (
        <Container className="cart-container py-4">
            <h2 className="my-4 text-center">Cart Items</h2>
            <Row>
                {cart.map(item => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Header as="h5">{item.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
                                <Card.Text>
                                    <p>Price: ${item.price}</p>
                                    <p>Discount: {item.discountPercentage}%</p>
                                    <p>Quantity: {item.quantity}</p>
                                </Card.Text>
                                <div className="button-group">
                                    <Button
                                        variant="primary"
                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                        style={{ width: '150px' }}
                                    >
                                        Add item
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                        style={{ width: '150px' }}
                                    >
                                        Remove item
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                    <h3>Shipping: ${shippingPrice.toFixed(2)}</h3>
                    <h3>Total Amount: ${totalWithShipping.toFixed(2)}</h3>
                    <Button
                        variant="danger"
                        onClick={() => dispatch(clearCart())}
                        style={{ marginTop: '20px' }}
                    >
                        Clear Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CartItems;
