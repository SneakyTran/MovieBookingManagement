import "./CinemaComponent.css";
import React, { useState } from "react";
import "./lib/Calender";
import { calender, getTimeDuration, getTimeISO } from "./lib/Calender";
import { useDispatch, useSelector } from "react-redux";
import CinemaModalComponent from "./CinemaModalComponent";
import {
    getAllCinema,
    cinemaModalAction,
    getCinemaClusters,
    getCinemaShowTimes,
} from "../../redux/actions/CinemaAction";
import { useEffect } from "react";
import { OPEN_LIST_CINEMA_MODAL } from "../../redux/type/ModalType";

export default function CinemaComponent() {
    const dispatch = useDispatch();

    const [activeCinemaIndex, setActiveCinemaIndex] = useState(-1);
    const [activeDate, setActiveDate] = useState(0);
    const [cinemaInfo, setCinemaInfo] = useState({
        img: "",
        cinemaCode: "",
        cinemaName: "",
        address: "",
    });
    const [arrMovieSt, setArrMovieSt] = useState([]);
    const [showTimes, setShowTimes] = useState({
        img: "",
        movieName: "",
        showTimes: [{ time: "", price: "" }],
    });

    const { currentCinema, arrCinemaCluster, arrCinema, arrShowTime } =
        useSelector((state) => state.CinemaReducer);

    //load all cinema
    useEffect(() => {
        getCinemaAPI();
    }, []);

    //load api cluster
    useEffect(() => {
        getCinemaClustersAPI();
        getCinemaShowTimesAPI(currentCinema.maHeThongRap);
    }, [currentCinema]);

    //load current cinema
    useEffect(() => {
        if (arrCinemaCluster !== undefined) {
            if (arrCinemaCluster.length > 0) {
                cinemaActive(0, arrCinemaCluster[0]);
            }
        }
    }, [arrCinemaCluster]);


    //Load movie when change Cinema 
    useEffect(() => {
        setShowTimeMovie();
    }, [arrShowTime, cinemaInfo]);

    //Load movie when change Date
    useEffect(() => {
        setShowTimeMovie();
    }, [activeDate]);

    const getCinemaClustersAPI = () => {
        if (!currentCinema.maHeThongRap) {
            return;
        }
        let action = getCinemaClusters(currentCinema.maHeThongRap);
        dispatch(action);
    };

    const getCinemaAPI = () => {
        let action = getAllCinema();
        dispatch(action);
    };

    const cinemaActive = (index, cinema) => {
        const { maCumRap, tenCumRap, diaChi } = cinema;
        setActiveCinemaIndex(index);
        setCinemaInfo({
            img: currentCinema["logo"],
            cinemaCode: maCumRap,
            cinemaName: tenCumRap,
            address: diaChi,
        });
    };

    const getCinemaModal = () => {
        let action = cinemaModalAction(
            OPEN_LIST_CINEMA_MODAL,
            <CinemaModalComponent arrCinema={arrCinema} />
        );
        dispatch(action);
    };

    const getCinemaShowTimesAPI = (cinemaId) => {
        let action = getCinemaShowTimes(cinemaId);
        dispatch(action);
    };

    /* ----------------------------- RENDER FUNCTION ---------------------------- */
    const calenderActive = async (index) => {
        setActiveDate(index);
    };

    const renderCalender = () => {
        return calender().map((date, index) => {
            return (
                <div
                    key={index}
                    onClick={() => {
                        calenderActive(index);
                    }}
                    className={`calender__card ${
                        activeDate === index ? "active" : ""
                    }`}
                >
                    <div className="calender__header">{date.date}</div>
                    <div className="calender__body">
                        {index === 0 ? "Today" : date.day}
                    </div>
                </div>
            );
        });
    };

    const renderCinema = () => {
        return arrCinemaCluster.map((cinema, index) => {
            let { tenCumRap } = cinema;
            return (
                <div
                    key={index}
                    onClick={() => {
                        cinemaActive(index, cinema);
                    }}
                    className={`cinema__detail px-4 py-2 ${
                        activeCinemaIndex === index ? "active" : ""
                    }`}
                >
                    <div className="cinema__logo__left">
                        <img src={currentCinema["logo"]} alt="" />
                        <span className="pl-3 pr-3">{tenCumRap}</span>
                    </div>
                    <span className="pl-5">
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            );
        });
    };

    const renderCalenderShowTimes = (showTimes) => {
        return showTimes.filter((showTime) => {
            return showTime.ngayChieuGioChieu
                .toString()
                .includes(calender().at(activeDate).fullDate.toString());
        });
    };

    const handleClickDuration = (st) => {
        console.log("first", st.maLichChieu);
    };

    const renderDuration = (showTimes) => {
        return showTimes.map((st) => {
            return (
                <div key={st.maLichChieu} className="duration mr-3 mb-2">
                    <p
                        onClick={(st) => {
                            handleClickDuration(st);
                        }}
                    >
                        <strong>{getTimeISO(st.ngayChieuGioChieu)} </strong>~{" "}
                        {getTimeDuration(getTimeISO(st.ngayChieuGioChieu))}
                    </p>
                </div>
            );
        });
    };

    const setShowTimeMovie = () => {
        let showTimeCinema = arrShowTime?.filter((cinema) => {
            return cinema.maCumRap === cinemaInfo.cinemaCode;
        });
        const arrShowTimeByCalender = [];
        if (showTimeCinema.length > 0) {
            showTimeCinema[0].danhSachPhim.map((showTime) => {
                const { hinhAnh, maPhim, tenPhim, lstLichChieuTheoPhim } =
                    showTime;

                //get list showTime of movie
                const showTimeCinema =
                    renderCalenderShowTimes(lstLichChieuTheoPhim);
                if (showTimeCinema.length > 0) {
                    arrShowTimeByCalender.push({
                        movieId: maPhim,
                        movieImg: hinhAnh,
                        movieName: tenPhim,
                        movieShowTime: showTimeCinema,
                    });
                }
            });
        }
        setArrMovieSt(arrShowTimeByCalender);
    };

    const renderShowTimes = () => {
        return arrMovieSt.map((movieSt) => {
            let { movieId, movieImg, movieName, movieShowTime } = movieSt;
            return (
                <div key={movieId} className="row mb-5">
                    <div className="col-2">
                        <img className="img-fluid" src={movieImg} alt="" />
                    </div>
                    <div className="col-10 pl-1">
                        <div className="movie__content">
                            <p className="age">16+</p>
                            <p className="movie__name">{movieName}</p>
                            <p className="movie__type">Kinh dị, Gây cấn</p>
                            <p className="mt-3">2D Phụ đề</p>
                            <div className="showTimes__detail mt-2">
                                {renderDuration(movieShowTime)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="container py-5">
            <h2 className="movie__title mb-5">Cinema Showtimes</h2>
            <div className="cinema__content">
                <div className="cinema__header py-3">
                    <span className="mx-3">Cinema</span>
                    <span
                        onClick={() => {
                            getCinemaModal();
                        }}
                        className="btn--cinema"
                    >
                        {currentCinema.tenHeThongRap}
                        <i className="fa-solid fa-chevron-down pl-4"></i>
                    </span>
                </div>
                <div className="row">
                    <div className="col-4 cinema__left pr-0">
                        <div className="px-3 py-2">
                            <div className="cinema__search">
                                <input
                                    className="form__cinema py-1 pl-3"
                                    placeholder="Seach cinema ..."
                                ></input>
                                <span className="icon__search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                        </div>
                        <div className="cinema__list">{renderCinema()}</div>
                    </div>
                    <div className="col-8 pl-0">
                        <div className="cinema__info">
                            <img src={cinemaInfo.img} alt="" />
                            <div className="cinema__address pl-2">
                                <h3>Lịch chiếu phim {cinemaInfo.cinemaName}</h3>
                                <p>{cinemaInfo.address}</p>
                            </div>
                        </div>
                        <div className="calender">{renderCalender()}</div>
                        <div className="cinema__showTime">
                            <div className="showTime__movie">
                                {renderShowTimes()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
