import React from "react";
import Slider from "react-slick";
import styles from "./banner.module.css";
export default function BannerComponent() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(styles);
  return (
    <div className="bg-dark ">
      <h2>Fade</h2>
      <Slider {...settings}>
        <div className={styles.banner}></div>
      </Slider>
    </div>
  );
}
