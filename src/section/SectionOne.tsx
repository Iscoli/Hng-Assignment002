import "./SectionOne.css";

export default function SectionOne() {
  return (
    <div style={{ position: "relative", paddingTop: "70px" }}>
      <hr />
      <div style={{ position: "relative" }}>
        <img className="image" src="/Portrait.jpg" alt="Portrait" />
        <div className="overlay"></div>
        <div className="overlay-text">
          <h5 className="limited">
            "20% OFF <br />
            Limited Time Offer!"
          </h5>
          <h1 className="collection">New Collection</h1>
          <h4 className="discover">
            Discover Your style with our Exclusive <br /> clothing sale!
          </h4>
          <button className="styledButton ">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./SectionOne.css";

// // import required modules
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// export default function SectionOne() {
//   return (
//     <div style={{ paddingTop: "70px" }}>
//       <hr></hr>
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img
//             style={{
//               height: "4px", // Adjust the height as needed
//               objectFit: "cover", // Ensures the image covers the container
//               width: "100%", // Ensure the image takes full width of its container
//             }}
//             src="/public/Portrait.jpg" // Adjust the image source as per your setup
//             alt="Portrait"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             style={{
//               height: "4px",
//               objectFit: "cover",
//               width: "100%",
//             }}
//             src="/public/Basket1.jpg"
//             alt="Basket 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             style={{
//               height: "4px",
//               objectFit: "cover",
//               width: "100%",
//             }}
//             src="/public/Basket2.jpg"
//             alt="Basket 2"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             style={{
//               height: "4px",
//               objectFit: "cover",
//               width: "100%",
//             }}
//             src="/public/Portrait.jpg"
//             alt="Portrait"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
