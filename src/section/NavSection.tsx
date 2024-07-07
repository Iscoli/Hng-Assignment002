  import  { useState} from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faMagnifyingGlass,
    faCartShopping,
    faHeart,
    faBars, // Hamburger icon
  } from "@fortawesome/free-solid-svg-icons";
  import { useCart } from "../context/CartContext";
  import './NavSection.css'

  function SectionOne() {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>(null);
   
     const { cart } = useCart();

      console.log(cart,'cart')

    const handleItemClick = (index: number) => {
      setActiveItem(index);
    };

    const handleButtonClick = (button: string) => {
      setActiveButton(button);
    };

    const menuItems = [
      "Home",
      "Product",
      "About Us",
      "Service",
      "Listing",
      "Contact Us",
    ];

    return (
      <nav
        style={{
          position: "fixed",
          background: "#ffffff",
          width: "100%",
          zIndex: "99999",
          height: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "22px",
          }}
        >
          <div>
            <span
              style={{
                color: "#251F73",
                fontFamily: "Poppins",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: "37.5px",
                textAlign: "left",
                marginLeft: "30px",
              }}
            >
              Shopit
            </span>
          </div>

          <div className="nav2">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(index)}
                  style={{
                    margin: "0 10px",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    textAlign: "left",
                    cursor: "pointer",
                    backgroundColor:
                      activeItem === index ? "#251F73" : "transparent",
                    color: activeItem === index ? "#fff" : "#000",
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="nav3">
            <button
              onClick={() => handleButtonClick("login")}
              style={{
                margin: "0 10px",
                padding: "10px 20px",
                border: "none",
                background:
                  activeButton === "login" ? "#251F73" : "transparent",
                color: activeButton === "login" ? "#fff" : "#000",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Login
            </button>
            <button
              onClick={() => handleButtonClick("register")}
              style={{
                margin: "0 10px",
                padding: "10px 20px",
                border: "none",
                background:
                  activeButton === "register" ? "#251F73" : "transparent",
                color: activeButton === "register" ? "#fff" : "#000",
                cursor: "pointer",
                width: "120px",
                borderRadius: "4px",
              }}
            >
              Register
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <FontAwesomeIcon
              style={{ margin: "0 10px" }}
              icon={faMagnifyingGlass}
            />
            <div style={{position:'relative'}}>
              <FontAwesomeIcon
                style={{ margin: "0 10px" }}
                icon={faCartShopping}
              />
              <p className='cart-number'style={{position:'absolute'}}>{cart.length}</p>
            </div>

            <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faHeart} />
            <div className="hambuger-btn" style={{ marginRight: "10px" }}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: "25px", cursor: "pointer" }}
                aria-label="Menu"
              />
            </div>
          </div>
        </div>
      </nav>
    );
   
  }

  export default SectionOne;
