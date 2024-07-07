import './SectionOne.css'

export default function SectionOne() {
  return (
    <div style={{ position: "relative", paddingTop: "70px" }}>
      <hr />
      <div style={{ position: "relative" }}>
        <img
          style={{
            height: "450px",
            objectFit: "cover",
            width: "100%",
          }}
          src="/Portrait.jpg"
          alt="Portrait"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
      </div>
      <div
        className="overlay-text"
        style={{
          position: "absolute",
          color: "white",
          zIndex: 2,
          top: "190px",
          left: "30px",
        }}
      >
        <p className='limited'>
          "20% OFF <br />
          Limited Time Offer!"
        </p>
        <h4 className="collection">New Collection</h4>
        <p className='dicover'>
          Discover Your style with our Exclusive <br /> clothing sale!
        </p>

        <button
          style={{
            color:'#fff',
            padding: "3px 13px",
            gap: "10px",
            borderRadius: "5px 0px 0px 0px",
            backgroundColor: "#251F73",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: "37.5px",
            textAlign: "center",
          }}
        >
          SHOP NOW
        </button>
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
