import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Orders = () => {
    // const [products, setProducts] = useProducts();
    const [cart, setCart] =useCart();
    const navigate = useNavigate();

  const handleRemoveCart = product =>{
      const rest = cart.filter(pd=>pd._id !==product._id);
      setCart(rest);
      removeFromDb(product._id);
  }

    return (
        <div className='shop-container'>
          
            <div className='review-items-container'>
                   {
                       cart.map(product => <ReviewItem
                       key={product._id}
                       product={product}
                       handleRemoveCart={handleRemoveCart}
                       
                       ></ReviewItem>)
                   }
            </div>
            
            <div className='cart-container'>
                    <Cart cart={cart}>
            
                   <button onClick={()=>navigate('/shipment')}>Procced Shpping</button>
                     
                    </Cart>
            </div>


            {/* <h2>This is order: {products.length}</h2>
            <p>Cart has: {cart.length}</p> */}
        </div>
    );
};

export default Orders;