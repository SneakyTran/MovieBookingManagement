import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    cinemaModalAction,
    getMovieStAction,
} from "../../redux/actions/CinemaAction";
import "./MovieStModaleComponent.css";
import "./lib/Calender";
import { getDateShowTime, getTimeDuration, getTimeISO } from "./lib/Calender";
import { useHistory } from "react-router-dom";
import { CLOSE_MODAL } from "../../redux/types/ModalType";
import { SELECT_MOVIE_TICKET } from "../../redux/types/CinemaType";

export default function MovieStModaleComponent(props) {
    const { movieId, movieImg, movieName } = props.movie;
    const { ngayChieuGioChieu, giaVe } = props.movieSt;
    const { cinemaName, address } = props.cinema;

    const dispatch = useDispatch();
    const { movie } = useSelector((state) => state.CinemaReducer);
    const { danhGia } = movie;
    useEffect(() => {
        getMovieAPI();
    }, []);
    const history = useHistory();

    const getMovieAPI = () => {
        let action = getMovieStAction(movieId);
        dispatch(action);
    };

    const routeChange = () => {
        dispatch({
            type: SELECT_MOVIE_TICKET,
            movieSelected: {
                movie: props.movie,
                movieSt: props.movieSt,
                cinema: props.cinema,
            },
        });
        history.push(`booking/${props.movieSt.maLichChieu}`);
        dispatch(cinemaModalAction(CLOSE_MODAL, <MovieStModaleComponent />));
    };

    return (
        <div className="row px-3 py-2">
            <div className="col-4 pr-0">
                <div className="movie__left">
                    <img className="img-fluid" src={movieImg} alt="" />
                </div>
            </div>
            <div className="col-8 p-0">
                <div className="movie__right">
                    <div className="row p-2">
                        <div className="col-5 p-1">
                            <h3 className="movie__name">{movieName}</h3>
                            <p className="movie__type">Khoa học, viễn tưởng</p>
                            <p className="movie__rating">
                                <i className="fa-regular fa-thumbs-up"></i>{" "}
                                {(Number(danhGia) / 10) * 100}%
                            </p>
                        </div>
                        <div className="col p-1">
                            <p className="title__date">DATE</p>
                            <p className="movie__showtime">
                                {getDateShowTime(ngayChieuGioChieu)}
                            </p>
                        </div>
                        <div className="col p-1">
                            <p className="title__date">TIME</p>
                            <p className="movie__showtime">
                                {getTimeISO(ngayChieuGioChieu)} ~{" "}
                                {getTimeDuration(ngayChieuGioChieu)}
                            </p>
                        </div>
                    </div>
                    <div className="cinema__info__modal">
                        <h3>Cinema</h3>
                        <p className="cinema__name">{cinemaName}</p>
                        <p className="cinema__address">{address}</p>
                    </div>
                    <button
                        onClick={() => {
                            routeChange();
                        }}
                        className="btn btn--seat--select"
                    >
                        Choose seat and payment
                    </button>
                </div>
            </div>
        </div>
    );
}
