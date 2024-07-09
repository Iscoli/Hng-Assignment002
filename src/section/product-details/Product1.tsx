
import { useParams } from "react-router-dom";
import { datas } from "../../components/Data";
import "./Product1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";

function Product1() {
  const { cart, addToCart, removeFromCart } = useCart();
  const { name } = useParams<{ name: string }>(); // Specify the type of useParams explicitly

  const product = datas.find((item) => item.name === name);

  const cartItem = cart.find((item) => item.name === name);
  const quantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleRemoveFromCart = () => {
    if (name) {
      // Ensure name is defined before calling removeFromCart
      removeFromCart(name);
    }
  };

  return (
    <section className="product-details">
      <div className="product1">
        <p>Product Details</p>
        <div className="pt-details">
          <img src={product.image} alt="fashion" />
        </div>
      </div>
      <div className="product2">
        <p className="p-21">{product.name}</p>
        <p className="p-22">$450.00</p>
        <p className="p-23">4.5 (3.5k Reviews)</p>
        <p className="p-24">
          A stunning, eco-friendly gown made from sustainable materials. Perfect
          for any formal occasion, the EcoElegance Gown combines style and
          sustainability, designed to make you shine at any special event. This
          floor-length gown combines timeless style with modern sophistication,
          ensuring you make a lasting impression.
        </p>
        <div className="product12">
          <p>Color</p>
          <div>
            <span>Blue</span>
            <span>Yellow</span>
            <span>Black</span>
            <span>Orange</span>
          </div>
          <span>White</span>
          <span>Brown</span>
          <span>Green</span>
          <span>Purple</span>
        </div>
        <div>
          <p>Size</p>
          <span>XL</span>
          <span>S</span>
          <span>M</span>
          <br />
          <span>XXL</span>
          <span>L</span>
        </div>

        <div style={{display:'flex', alignItems:'center'}}>
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => addToCart(product)}
            className="sign-class"
          />
          <p style={{padding:'5px'}}>{quantity}</p>
          <FontAwesomeIcon
            className="sign-class"
            icon={faMinus}
            onClick={handleRemoveFromCart}
          />
        </div>
        <div>
          <span>Add Cart</span>
          <span>Buy Now</span>
          <span>
            <FontAwesomeIcon style={{ color: " #251F73" }} icon={faHeart} />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Product1;
