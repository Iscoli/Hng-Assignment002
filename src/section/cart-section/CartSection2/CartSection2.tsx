import './CartSection2.css'
import {useCart} from '../../../context/CartContext'
import SubCartSec from './SubCartSec';


  function CartSection2() {



     const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();

     
  console.log(cart,'cart')
    return (
      <section style={{margin:'73px 0', display:'flex', justifyContent:'space-around', alignItems:'flex-start'}}>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Color</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>Blue</td>
                  <td>xl</td>
                  <td>
                    <span onClick={() => addToCart(item)}>+</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => removeFromCart(item.name)}>-</span>
                  </td>
                  <td>${item.amount}</td>
                  <td onClick={() => deleteFromCart(item.name)}>delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <SubCartSec/>
        </div>
      </section>
    );
  }
  
  export default CartSection2
  