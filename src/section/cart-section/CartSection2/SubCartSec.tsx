
import { useCart } from "../../../context/CartContext";
import "./SubCartSec.css";

const SubCartSec = () => {
  const { cart } = useCart();
  const deliveryFee = 445;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.amount * item.quantity,
    0
  );
  const totalAmount = subtotal + deliveryFee;

  return (
    <div className="subtotal-container">
      <p className="checkout-header">Total For Product</p>
      <div className="subtotal-item">
        <p>Subtotal:</p>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="subtotal-item">
        <p>Delivery Fee:</p>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="subtotal-item">
        <p>Total Amount:</p>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <p className="checkout-bottom">CheckOut</p>
    </div>
  );
};

export default SubCartSec;
