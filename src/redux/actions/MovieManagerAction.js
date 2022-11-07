import axios from "axios";
import { bothServiceToken } from "../../Service/BothTokenService";
import { DOMAIN_CINEMA, MA_NHOM } from "../../utils/setting";
import { GET_INFO_FILM, GET_LIST_FILM } from "../type/MovieManagerType";
import history from "../../App";
import { ACCESS_TOKEN } from "../../pages/Login/useLogin";
//Get all movies
export function getListMovie() {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`
      );
      console.log(data);
      dispatch({ type: GET_LIST_FILM, payload: data.content });
    } catch (e) {
      console.log(e.response);
    }
  };
}
// upLoad Movie
export function uploadMovie(datas) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        "QuanLyPhim/ThemPhimUploadHinh",
        datas
      );
      console.log(data);
      dispatch(getListMovie());
    } catch (e) {
      console.log(e.response);
    }
  };
}
//get InfoFilm to edit
export function getInfoMovie(maPhim) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
      );
      dispatch({ type: GET_INFO_FILM, payload: data.content });
    } catch (e) {
      console.log(e.response);
    }
  };
}
// edit Movie
export function editMovie(movie) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        `QuanLyPhim/CapNhatPhimUpload`,
        movie
      );
      console.log(data);

      // history.push("/admin/movieadmin");
      getListMovie();
    } catch (e) {
      console.log(e.response);
    }
  };
}
// delete Movie
export function deleteMovie(maPhim) {
  console.log(maPhim)
  console.log(localStorage.getItem(ACCESS_TOKEN))

  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(
        `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`
      );
      console.log(data);
      getListMovie();
    } catch (e) {
      console.log(e.response);
    }
  };
}