import './CartSection2.css'
import {useCart} from '../../../context/CartContext';
import { faPlus, faMinus, faTrash, } from "@fortawesome/free-solid-svg-icons";
import SubCartSec from './SubCartSec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


  function CartSection2() {



     const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();

     
  console.log(cart,'cart')
    return (
      <section
        style={{
          margin: "73px 0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
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
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => addToCart(item)}
                    />
                    <span>{item.quantity}</span>
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => removeFromCart(item.name)}
                    />
                  </td>
                  <td>${item.amount}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteFromCart(item.name)}
                      style={{ color: "#EB0B18" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <SubCartSec />
        </div>
      </section>
    );
  }
  
  export default CartSection2
  