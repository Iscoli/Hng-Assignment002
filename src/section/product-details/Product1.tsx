
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
        <div
          style={{
            padding: "100px",
            background: "#EBF3FE",
            textAlign: "center",
          }}
        >
          <img src={product.image} alt="fashion" />
        </div>
      </div>
      <div className="product2">
        <p>{product.name}</p>
        <p>$450.00</p>
        <p>4.5 (3.5k Reviews)</p>
        <p>
          A stunning, eco-friendly gown made from sustainable materials. Perfect
          for any formal occasion, the EcoElegance Gown combines style and
          sustainability, designed to make you shine at any special event. This
          floor-length gown combines timeless style with modern sophistication,
          ensuring you make a lasting impression.
        </p>
        <div className="product2">
          <p>Color</p>
          <span>Blue</span>
          <span>Yellow</span>
          <span>Black</span>
          <span>Orange</span> <br />
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

        <div>
          <FontAwesomeIcon icon={faPlus} onClick={() => addToCart(product)} />
          <span>{quantity}</span>
          <FontAwesomeIcon icon={faMinus} onClick={handleRemoveFromCart} />
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
