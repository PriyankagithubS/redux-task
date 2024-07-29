import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../Features/Cart/cartSlice';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {items.length > 0 ? (
                    items.map(item => <CartItem key={item.id} item={item} />)
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className="cart-summary">
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;
