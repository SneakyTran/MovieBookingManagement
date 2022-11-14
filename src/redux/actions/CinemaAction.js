import { bothServiceToken } from "../../Service/BothTokenService";
import {
    getCinemaQuery,
    getCinemaShowTImesQuery,
} from "../../utils/cinemaConfigString";

import {
    CINEMA_CLUSTERS,
    CINEMA_INFO,
    CINEMA_SHOWTIMES,
    MOVIE_INFO,
    SEAT_BOOKING,
    SHOWTIME_BY_MOVIE,
} from "../../utils/setting";
import {
    GET_ALL_CINEMA,
    GET_LIST_CINEMA_CLUSTERS,
    GET_MOVIE_DETAIL,
    GET_SEAT,
    GET_SHOWTIME_ID,
    GET_SHOW_TIMES,
} from "../type/CinemaType";

export const getAllCinema = () => {
    return (middleWareDispatch) => {
        let promise = bothServiceToken.get(CINEMA_INFO);
        promise
            .then((res) => {
                middleWareDispatch({
                    type: GET_ALL_CINEMA,
                    arrCinema: res.data.content,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getCinemaClusters = (cinemaId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(CINEMA_CLUSTERS + getCinemaQuery(cinemaId))
            .then((res) => {
                middleWareDispatch({
                    type: GET_LIST_CINEMA_CLUSTERS,
                    arrCinema: res.data.content,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getCinemaShowTimes = (cinemaId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(CINEMA_SHOWTIMES + getCinemaShowTImesQuery(cinemaId))
            .then((res) => {
                if (res.data.content.length > 0) {
                    middleWareDispatch({
                        type: GET_SHOW_TIMES,
                        showTimes: res.data.content[0].lstCumRap,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getMovieStAction = (movieId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(MOVIE_INFO + movieId)
            .then((res) => {
                middleWareDispatch({
                    type: GET_MOVIE_DETAIL,
                    movie: res.data.content,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getShowTimeByMovieAction = (movieId, cinemaId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(SHOWTIME_BY_MOVIE + movieId)
            .then((res) => {
                let cinemaList =
                    res.data.content.heThongRapChieu[0].cumRapChieu;
                for (const cinema of cinemaList) {
                    console.log(cinema);
                    if (cinema.maCumRap === cinemaId) {
                        middleWareDispatch({
                            type: GET_SHOWTIME_ID,
                            showTimeId: cinema.lichChieuPhim[0].maLichChieu,
                        });
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getSeatBookingAction = (showTimeId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(SEAT_BOOKING + showTimeId)
            .then((res) => {
                middleWareDispatch({
                    type: GET_SEAT,
                    arrSeat: res.data.content.danhSachGhe,
                });
            })
            .catch((err) => {
                console.log([err]);
            });
    };
};

export function cinemaModalAction(type, payload) {
    return (dispatch) => {
        dispatch({ type: type, payload });
    };
}
