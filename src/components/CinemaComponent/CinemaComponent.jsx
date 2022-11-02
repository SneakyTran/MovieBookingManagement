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
                            <div className="calender__header">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
