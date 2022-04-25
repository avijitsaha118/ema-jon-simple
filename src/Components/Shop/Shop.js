import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    // const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    // return [products, setProducts];

    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     // console.log(storedCart);
    //     for (const id in storedCart) {
    //         // console.log(id);
    //         const addedProduct = products.find(product => product._id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // console.log(addedProduct);
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])


    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        // cart.push(product);
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    // product={product.props}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number+1}</button>)
                    }

                    <select onChange={e => setSize(e.target.value)} id=''>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>
                </div>
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