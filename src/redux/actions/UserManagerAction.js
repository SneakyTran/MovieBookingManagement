import { bothServiceToken } from "../../Service/BothTokenService";
import { MA_NHOM } from "../../utils/setting";
import { history } from "../../App";
import {
  GET_INFO_USER,
  GET_LIST_USER,
  GET_TYPE_USER,
} from "../type/UserManagerType";
//Get all movies, get movieBy Name
export function getListUser(user = "") {
  return async (dispatch) => {
    try {
      let url;
      if (user === "") {
        url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}`;
      } else {
        url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}&tuKhoa=${user}`;
      }
      const { data } = await bothServiceToken.get(url);
      dispatch({ type: GET_LIST_USER, payload: data.content });
      console.log(data)
    } catch (e) {
      console.log(e.response);
    }
  };
}
// // upLoad User
export function getTypeUser() {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        "QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
      );
      console.log(data);
      dispatch({ type: GET_TYPE_USER, payload: data.content });
    } catch (e) {
      console.log(e.response);
    }
  };
}
//get InfoUser to edit
export function getInfoUser(ma) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${ma}`
      );
      dispatch({ type: GET_INFO_USER, payload: data.content });
    } catch (e) {
      console.log(e.response);
    }
  };
}
// edit User
export function editUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        user
      );
      console.log(data);
      history.push("/admin/useradmin");
      getListUser();
    } catch (e) {
      console.log(e.response);
    }
  };
}
// delete User
export function deleteUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(
        `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`
      );
      console.log(data);
      getListUser();
    } catch (e) {
      console.log(e.response);
    }
  };
}
//Create User
export function createUser(value) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        `QuanLyNguoiDung/ThemNguoiDung`,
        value
      );
      console.log(data);
      getListUser();
      history.push("/admin/useradmin");
    } catch (e) {
      console.log(e.response);
    }
  };
}
