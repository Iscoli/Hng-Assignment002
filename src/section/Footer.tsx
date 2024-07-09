import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="footer-section">
      <div>
        <p className="shopit-footer">Shopit</p>
        <ul>
          <li>
            <FontAwesomeIcon className="iconnet" icon={faLocationDot} />
            165 Main Street Lekki
          </li>
          <li>
            <FontAwesomeIcon className="iconnet" icon={faEnvelope} />
            Info@shopit.com
          </li>
          <li>
            <FontAwesomeIcon className="iconnet" icon={faPhone} />
            +234 9075643219
          </li>
        </ul>
      </div>
      <div>
        <p className="link-footer">Links</p>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Listing</li>
          <li>Services</li>
          <li>Product</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <p className="follow-footer">Follow Us</p>
        <ul 
        style={{display:"flex", alignItems:'center', }}
        className="social-bg">
          <li>
            <img src="/twitter.png" alt="twitter" className="iconnet" />
          </li>
          <li>
            <img src="/Vector (4).png" alt="Facebook" className="iconnet" />
          </li>
          <li>
            <img src="/Vector (3).png" alt="instagram" className="iconnet" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
