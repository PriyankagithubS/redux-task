// src/Components/CartPage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Features/Cart/cartSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import CartItems from './CartItem';
// Assuming you have some styles here

const CartPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/PriyankagithubS/json-data/main/product.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products || []);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setProducts([]);
            });
    }, []);

    if (!Array.isArray(products) || products.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <h2 className="my-4">Products</h2>
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Header as="h5">{product.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                                <Card.Text>
                                    <p>{product.description}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Discount: {product.discountPercentage}%</p>
                                </Card.Text>
                                <Button
                                    variant="success"
                                    onClick={() => dispatch(addItem(product))}
                                    style={{ width: '150px' }}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <CartItems />
        </Container>
    );
};

export default CartPage;
