import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { addToCart ,cartTotal} from '../Features/cartSlice'
const Productcard = () => {
    const products = useSelector(state => state.products.items)

const dispatch=useDispatch();

const Addtocart=(item)=>{

    dispatch(addToCart(item))
    // dispatch( cartTotal())

}
    return (
      
        

<div class="container-xl d-flex flex-wrap">
{products.map((item, index) => (
        <div className="card m-4 border border-gray-300 rounded-lg shadow-lg" style={{ width: '18rem' }} key={index}>
          <img src={item.image} className="card-img-top" alt="Image" style={{ width: '60%', height: '50%' }} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h5 className="card-title">{`${item.price}$`}</h5>
            <a href="#" className="btn btn-primary"onClick={()=>Addtocart(item)}>Add to Cart</a>
          </div>
        </div>
      ))}

</div>

        
    )
}

export default Productcard
