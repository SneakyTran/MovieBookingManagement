import axios from "axios";
import { serviceBase } from "../../Service/BaseService";
import { DOMAIN_CINEMA, TOKEN } from "../../utils/setting";
import { GET_BANNER } from "../type/BannerType";

export function getBanner() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${DOMAIN_CINEMA}QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        headers: {
          TokenCybersoft: TOKEN,
        },
      });
      dispatch({ type: GET_BANNER, payload: data.content });
    } catch (e) {
      console.log(e.response);
    }
  };
}
