import React from "react";
import Slider from "react-slick";
import styles from "./banner.module.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className)
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default function BannerComponent() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  console.log(styles);

  const arphim = [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
    },
  ];
  const renderPhim = () => {
    return arphim.map((phim) => {
      return (
        <div key={phim.maBanner}>
          <div
            className={styles.banner}
            style={{ backgroundImage: `url(${phim.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };
  return (
    <div className="bg-dark ">
      <h2>Fade</h2>
      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
}
