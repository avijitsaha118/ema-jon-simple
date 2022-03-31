import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] =useCart(products);
    const navigate = useNavigate();

  const handleRemoveCart = product =>{
      const rest = cart.filter(pd=>pd.id !==product.id);
      setCart(rest);
      removeFromDb(product.id);
  }

    return (
        <div className='shop-container'>
          
            <div className='review-items-container'>
                   {
                       cart.map(product => <ReviewItem
                       key={product.id}
                       product={product}
                       handleRemoveCart={handleRemoveCart}
                       
                       ></ReviewItem>)
                   }
            </div>
            
            <div className='cart-container'>
                    <Cart cart={cart}>
            
                   <button onClick={()=>navigate('/inventory')}>Procced checkout</button>
                     
                    </Cart>
            </div>


            {/* <h2>This is order: {products.length}</h2>
            <p>Cart has: {cart.length}</p> */}
        </div>
    );
};

export default Orders;