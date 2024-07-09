import "./CartSection2.css";
import { useCart } from "../../../context/CartContext";
import {
  faPlus,
  faMinus,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import SubCartSec from "./SubCartSec";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartSection2() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();

  return (
    <section className="cartsection2">
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
                <td>
                  <div className="firstTable">
                    <FontAwesomeIcon className="check-style" icon={faCheck} />
                    <img
                      style={{ width: "35px", margin: "0 5px" }}
                      src={item.image}
                    />
                    <p>{item.name}</p>
                  </div>
                </td>
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

      <div className="amount-container">
        <SubCartSec />
      </div>
    </section>
  );
}

export default CartSection2;
