import { getAllByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSeatBookingAction,
    getShowTimeByMovieAction,
} from "../../redux/actions/CinemaAction";
import { SELECT_TICKET } from "../../redux/type/TIcketBookingTypes";
import "./Booking.css";

export default function Booking(props) {
    const { movieSelected, arrSeat } = useSelector(
        (state) => state.CinemaReducer
    );

    const { arrSelectedSeat } = useSelector(
        (state) => state.TicketBookingReducer
    );

    const { movie, cinema } = movieSelected;

    const dispatch = useDispatch();
    useEffect(() => {
        getShowTimeByMovieAPI();
    }, []);

    useEffect(() => {
        getSeatBookingAPI(props.match.params.id);
    }, []);

    const getShowTimeByMovieAPI = () => {
        let action = getShowTimeByMovieAction(movie.movieId, cinema.cinemaCode);
        dispatch(action);
    };

    const getSeatBookingAPI = (showTimeId) => {
        let action = getSeatBookingAction(showTimeId);
        dispatch(action);
    };

    const selectSeat = (seat) => {
        if (seat.daDat) return;
        dispatch({
            type: SELECT_TICKET,
            selectedSeat: seat,
        });
    };

    const { danhSachGhe } = arrSeat;
    const renderSeat = () => {
        return danhSachGhe?.map((seat, index) => {
            const { maGhe, tenGhe, loaiGhe, giaVe, daDat } = seat;
            let seatStyle = "seat ";
            if (loaiGhe === "Vip") {
                seatStyle += "seat__vip ";
            }
            if (daDat) {
                seatStyle += "seat__booked";
            }
            let selectedSeatClass = "";
            let indexSelectedSeat = arrSelectedSeat.findIndex(
                (seatSelected) => seatSelected.maGhe === seat.maGhe
            );
            if (indexSelectedSeat !== -1) {
                selectedSeatClass = "seat__selected";
            }
            return (
                <Fragment key={maGhe}>
                    <div
                        onClick={() => {
                            selectSeat(seat);
                        }}
                        className={seatStyle + ` ${selectedSeatClass}`}
                    ></div>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            );
        });
    };
    const renderTitleSeat = () => {
        if (arrSelectedSeat?.length === 0) {
            return (
                <div className="msg__ticket ml-3">
                    No seat has been selected
                </div>
            );
        } else {
            return (
                <Fragment>
                    <div className="col-4 seat__title">Seat</div>
                    <div className="col-4 seat__title">Type</div>
                    <div className="col-4 seat__title">Price</div>
                </Fragment>
            );
        }
    };

    const renderSelectingSeat = () => {
        return arrSelectedSeat?.map((seat) => {
            return (
                <Fragment key={seat.maGhe}>
                    <div className="col-4 pl-4">{seat.tenGhe}</div>
                    <div className="col-4">{seat.loaiGhe}</div>
                    <div className="col-4">{seat.giaVe.toLocaleString()}</div>
                </Fragment>
            );
        });
    };

    const renderMovieInfo = () => {
        const { movieName } = movie;
        const { cinemaName, address } = cinema;
        return (
            <Fragment>
                <div className="mb-3">
                    <img className="img-fluid" src={movie.movieImg} alt="" />
                </div>
                <h3 className="ticket__title">Movie Name</h3>
                <p>{movieName}</p>
                <h3 className="ticket__title">Cinema</h3>
                <p>{cinemaName}</p>
                <h3 className="ticket__title">Address</h3>
                <p>{address}</p>
                <h3 className="ticket__title">Seats detail</h3>
                <div className="row ticket__bill">
                    {renderTitleSeat()}
                    {renderSelectingSeat()}
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <p className="title__total">Total</p>
                    <p className="total__price">
                        {arrSelectedSeat
                            .reduce(
                                (total, seat) => total + Number(seat.giaVe),
                                0
                            )
                            .toLocaleString()}
                    </p>
                </div>
                <button className="btn btn-success btn--payment mt-1">
                    Payment
                </button>
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div className="booking__bg">
                <div className="bg__overlay"></div>
                <img src={movie.movieImg} alt="" />
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-9">
                        <div className="booking__left">
                            <div className="screen"></div>
                            <div className="screen__shape text-center mb-4"></div>
                            <div className="seat__list">{renderSeat()}</div>
                            <div className="seat__type">
                                <div className="seat "></div>
                                <p>Normal seat</p>
                                <div className="seat seat__vip"></div>
                                <p>VIP seat</p>
                                <div className="seat seat__booked"></div>
                                <p>Booked seat</p>
                                <div className="seat seat__selected"></div>
                                <p>Selecting seat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card__shadow pl-3 pb-3">
                            <div className="ticket__info">
                                {renderMovieInfo()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
