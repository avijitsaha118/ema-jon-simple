import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    // console.log(cart);
    
    // let item = 0;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary in Cart</h4>
            <p>selected item: {quantity}</p>
            {/* <p>selected item: {cart.length}</p> */}
            <p>Total Price:${total} </p>
            <p>Total Shipping:${shipping} </p>
            <p>tax: {tax} </p>
            <h3>Grand Total: {grandTotal.toFixed(2)} </h3>
             {props.children}
        </div>
    );
};

export default Cart;