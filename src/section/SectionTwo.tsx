// SectionTwo.tsx
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useCart } from "../context/CartContext";
import { datas } from "../components/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./SectionTwo.css";

const itemsPerPage = 10; // Number of items to display per page

function SectionTwo() {
  const [page, setPage] = useState<number>(1); // Current page state
  const { addToCart} = useCart(); // Destructure addToCart and cart from CartContext

 const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
   setPage(value);
 };

  return (
    <div>
      <div className="mainCardContainer">
        {datas.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((data) => (
          <div key={data.name} className="cardDiv">
            <div className="heartIconContainer">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <img className="cardImg" src={data.image} alt={data.name} />
            <p className="name-tag">{data.name}</p>
            <p className="amount-tag">${data.amount}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "-26px",
              }}
              className="discount-tag"
            >
              <p className="discount-stroke">${data.discount}</p>
              <p style={{ color: "#EB0B18" }}>{data.percentage}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "-20px",
              }}
            >
              <p>
                <span>
                  <FontAwesomeIcon
                    style={{ color: " #251F73" }}
                    icon={faStar}
                  />
                </span>
                {data.rating}
              </p>
              <div>
                <FontAwesomeIcon
                  style={{ color: "#251F73", cursor: "pointer" }}
                  icon={faCartShopping}
                  onClick={() => addToCart(data)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Stack spacing={2} className="paginationContainer">
        <Pagination
          count={Math.ceil(datas.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}

export default SectionTwo;

