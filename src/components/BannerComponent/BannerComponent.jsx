import React, { useEffect } from "react";
import Slider from "react-slick";
import styles from "./banner.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../redux/actions/BannerAction";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "10000",
        marginRight: "70px",
      }}
      onClick={onClick}
    >
      <i
        className="fa-solid fa-angles-right banner_icon-right"
        style={{ fontSize: "40px", color: "#fff" }}
      ></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "10000",
        marginLeft: "40px",
      }}
      onClick={onClick}
    >
      <i
        className="fa-solid fa-angles-left banner_icon-left"
        style={{ fontSize: "40px", color: "#fff" }}
      ></i>
    </div>
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
    prevArrow: <SamplePrevArrow />,
  };
  const dispatch = useDispatch();
  const { arrPhim } = useSelector((state) => state.BannerReducer);
  useEffect(() => {
    dispatch(getBanner());
  }, []);

  const renderPhim = () => {
    return arrPhim?.map((phim) => {
      return (
        <div key={phim.maPhim}>
          <div
            className={styles.banner}
            style={{
              backgroundImage: `url(${phim.hinhAnh})`,
              filter: "grayscale(40%)",
            }}
          ></div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="bg-dark ">
        <h2>Fade</h2>
        <Slider {...settings}>{renderPhim()}</Slider>
      </div>
    </>
  );
}
