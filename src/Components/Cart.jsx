import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  removeFromCart,cartIncrement,cartDecrement} from '../Features/cartSlice'
function Cart() {
  const items = useSelector(state => state.cart.cartItems);
  const cartTotal=useSelector(state=>state.cart.total)
const dispatch=useDispatch();
  console.log("cartItems are:", items);


  const cartIncr=(id)=>{
      dispatch(cartIncrement(id))
    
  }
  return (
    <div>
      {items.map((item, index) => (
        <div className="card mb-3 mt-3 " style={{ width: '540px' }} key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
            </div>
            
            <div className="col-md-8 d-flex">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h5 className="card-title">{`${item.price}$`}</h5>
                <a href="#" className="btn btn-primary mr-3" onClick={()=>cartIncr(item.id)}>+</a>
            <p>{item.quantity}</p>
                <a href="#" className="btn btn-primary mr-3" onClick={()=>dispatch(cartDecrement(item.id))}>-</a>
                <br />
                <br />
                <a href="#" className="btn btn-primary mr-3" onClick={()=>dispatch(removeFromCart(item.id))} >Remove from cart</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <h1>The total price is :{cartTotal}</h1>
    </div>
  );
}

export default Cart;
