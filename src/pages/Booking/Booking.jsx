import { getAllByDisplayValue } from "@testing-library/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSeatBookingAction,
    getShowTimeByMovieAction,
} from "../../redux/actions/CinemaAction";

export default function Booking() {
    const { movieSelected, showTimeId } = useSelector(
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

    return <div className="container">
        
    </div>;
}
