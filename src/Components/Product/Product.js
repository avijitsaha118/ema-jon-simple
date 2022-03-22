import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;

    // const { name, img, seller, price, ratings } = props.product;


    // const { handleAddToCart } = props;
    // const handleAddToCart = () => {
    //     console.log('clicked');
    // }
    return (
        <div className='product'>
            <img src={img} alt="shoe-model" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>{ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>

                {/* <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> */}

                {/* <button onClick={props.handleAddToCart} className='btn-cart'> */}
                <p className='btn-text'>
                    Add to Cart
                </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;