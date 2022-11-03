import "./CinemaComponent.css";
import React from "react";

export default function CinemaComponent() {
    return (
        <div className="container py-5">
            <h2 className="movie__title mb-5">Cinema Showtimes</h2>
            <div className="cinema__content">
                <div className="cinema__header py-3">
                    <span className="mx-3">Cinema</span>
                    <span className="btn--cinema">
                        CGV
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
                        <div className="cinema__list">
                            <div className="cinema__detail active px-4 py-2">
                                <img
                                    src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                                    alt=""
                                />
                                <span className="pl-3 pr-3">
                                    CGV Vincom Đà Nẵng
                                </span>
                                <span className="pl-5">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="cinema__detail px-4 py-2">
                                <img
                                    src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                                    alt=""
                                />
                                <span className="pl-3 pr-3">
                                    CGV Vĩnh Trung Plaza
                                </span>
                                <span className="pl-5">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 pl-0">
                        <div className="cinema__info">
                            <img
                                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                                alt=""
                            />
                            <div className="cinema__address pl-2">
                                <h3>Lịch chiếu phim CGV Vincom Đà Nẵng</h3>
                                <p>
                                    Tầng 4, TTTM Vincom Đà Nẵng, đường Ngô
                                    Quyền, P.An Hải Bắc, Q.Sơn Trà, TP. Đà Nẵng
                                </p>
                            </div>
                        </div>
                        <div className="calender">
                            <div className="calender__card active">
                                <div className="calender__header">3</div>
                                <div className="calender__body">Today</div>
                            </div>
                            <div className="calender__card">
                                <div className="calender__header">4</div>
                                <div className="calender__body">Friday</div>
                            </div>
                            <div className="calender__card">
                                <div className="calender__header">5</div>
                                <div className="calender__body">Saturday</div>
                            </div>
                            <div className="calender__card">
                                <div className="calender__header">6</div>
                                <div className="calender__body">Sunday</div>
                            </div>
                            <div className="calender__card">
                                <div className="calender__header">7</div>
                                <div className="calender__body">Monday</div>
                            </div>
                            <div className="calender__card">
                                <div className="calender__header">8</div>
                                <div className="calender__body">Tuesday</div>
                            </div>
                        </div>
                        <div className="cinema__showTime">
                            <div className="showTime__movie">
                                <div className="row">
                                    <div className="col-2">
                                        <img
                                            className="img-fluid"
                                            src="https://movienew.cybersoft.edu.vn/hinhanh/hieu-test_gp03.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-10">
                                        <div className="movie__content">
                                            <p className="age">16+</p>
                                            <p className="movie__name">Home</p>
                                            <p className="movie__type">
                                                Kinh dị, Gây cấn
                                            </p>
                                            <p className="mt-3">2D Phụ đề</p>
                                            <div className="showTimes__detail mt-2">
                                                <div className="duration mr-3">
                                                    <p>
                                                        <strong>14:20 </strong>~
                                                        15.53
                                                    </p>
                                                </div>
                                                <div className="duration mr-3">
                                                    <p>
                                                        <strong>15:20 </strong>~
                                                        16:53
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
