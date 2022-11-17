import React, { useEffect } from "react";
import Slider from "react-slick";
import "./banner.css";
import { useDispatch, useSelector } from "react-redux";
import { getBanner, playTrailer } from "../../redux/actions/BannerAction";
import IframeFilm from "./IframeFilm/IframeFilm";
import { DISPLAY_PRELOADING } from "../../redux/types/PreloadingTypes";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    useSelector((state) => state.PreloadingReducer);

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
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const dispatch = useDispatch();
    const { arrPhim } = useSelector((state) => state.BannerReducer);
    useEffect(() => {
        dispatch({ type: DISPLAY_PRELOADING });
        dispatch(getBanner());
    }, []);

    const renderPhim = () => {
        return arrPhim?.map((phim) => {
            return (
                <div key={phim.maPhim} className="position-relative">
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${phim.hinhAnh})`,
                            filter: "grayscale(10%)",
                        }}
                    >
                        <div className="container banner_content-mid">
                            <div className="row">
                                <div className="col-6">
                                    <h2>{phim.tenPhim}</h2>
                                    <h4>
                                        {phim.moTa.length > 50
                                            ? phim.moTa.substring(0, 150) +
                                              "..."
                                            : phim.moTa}
                                    </h4>
                                    <div className="mt-4">
                                        <button
                                            className="btn btn_white mr-3"
                                            onClick={() => {
                                                dispatch(
                                                    playTrailer(
                                                        <IframeFilm
                                                            phim={phim}
                                                        />
                                                    )
                                                );
                                            }}
                                        >
                                            Play Trailer
                                        </button>
                                        <button className="btn btn_primary">
                                            Đặt vé
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <img
                                        src={phim.hinhAnh}
                                        alt=""
                                        className="mr-auto ml-auto"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="banner_overlay-dark"></div>
                    </div>
                </div>
            );
        });
    };
    const renderPhimMini = () => {
        return arrPhim?.map((phim) => {
            return (
                <div
                    key={phim.maPhim}
                    className="position-relative banner_wrap-mini"
                >
                    <div
                        className="bannerMini"
                        style={{
                            backgroundImage: `url(${phim.hinhAnh})`,
                        }}
                    ></div>
                    <div className="bannerMini-star">
                        <span>{phim.danhGia}</span>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div
                        className="position-absolute banner_wrap-icon-mini"
                        onClick={() => {
                            dispatch(playTrailer(<IframeFilm phim={phim} />));
                        }}
                    >
                        <i className="fa-regular fa-circle-play  banner_play_icon-mini"></i>
                    </div>
                    <div className="banner_content container">
                        <div className="banner_content-title">
                            <h6>{phim.tenPhim}</h6>
                            <h6 className="banner_mota">
                                <button className="btn btn-warning font-weight-bold">
                                    Đặt vé
                                </button>
                            </h6>
                        </div>
                    </div>
                    <div className="banner_overlay"></div>
                </div>
            );
        });
    };
    return (
        <>
            <div className="bg-dark ">
                <Slider {...settings}>{renderPhim()}</Slider>
                <Slider {...settings2}>{renderPhimMini()}</Slider>
            </div>
        </>
    );
}
