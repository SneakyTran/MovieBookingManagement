import { getAllByDisplayValue } from "@testing-library/react";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSeatBookingAction,
    getShowTimeByMovieAction,
} from "../../redux/actions/CinemaAction";
import "./Booking.css";

export default function Booking() {
    const { movieSelected, showTimeId, arrSeat } = useSelector(
        (state) => state.CinemaReducer
    );
    console.log(movieSelected);
    const { movie, cinema } = movieSelected;
    const dispatch = useDispatch();
    useEffect(() => {
        getShowTimeByMovieAPI();
    }, []);
    useEffect(() => {
        getSeatBookingAPI();
    }, [showTimeId]);

    const getShowTimeByMovieAPI = () => {
        let action = getShowTimeByMovieAction(movie.movieId, cinema.cinemaCode);
        dispatch(action);
    };

    const getSeatBookingAPI = () => {
        let action = getSeatBookingAction(showTimeId);
        dispatch(action);
    };
    console.log(arrSeat);

    const renderSeat = () => {
        return arrSeat.map((seat, index) => {
            const { maGhe, tenGhe, loaiGhe, taiKhoanNguoiDat, giaVe, daDat } =
                seat;
            return (
                <Fragment>
                    <a key={maGhe}>{tenGhe}</a>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            );
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="screen"></div>
                    <div className="screen__shape text-center"></div>
                    <p className="text__screen">Screen</p>
                    {renderSeat()}
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}
