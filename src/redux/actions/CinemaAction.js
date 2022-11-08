import { serviceBase } from "../../Service/BaseService";

import { CINEMA_CLUSTERS, CINEMA_INFO } from "../../utils/setting";
import { GET_ALL_CINEMA } from "../type/CinemaType";

export const getAllCinema = () => {
    return (middleWareDispatch) => {
        let promise = serviceBase.get(CINEMA_INFO);
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
        serviceBase
            .get(CINEMA_CLUSTERS, cinemaId)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export function cinemaModalAction(type, payload) {
    return (dispatch) => {
        dispatch({ type: type, payload });
    };
}
