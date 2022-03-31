import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])


    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        // cart.push(product);
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    // product={product.props}


                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/order'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;