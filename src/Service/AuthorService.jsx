import Axios from "axios";
import { DOMAIN_CINEMA, TOKEN } from "../utils/setting";

export class BaseService {
  put = (url, data) => {
    return Axios({
      method: "PUT",
      url: `${DOMAIN_CINEMA}${url}`,
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
  post = (url, userProject) => {
    console.log(url, userProject);
    return Axios({
      url: `${DOMAIN_CINEMA}${url}`,
      method: "POST",
      data: userProject,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
  get = (url) => {
    return Axios({
      method: "GET",
      url: `${DOMAIN_CINEMA}${url}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
  delete = (url) => {
    return Axios({
      method: "DELETE",
      url: `${DOMAIN_CINEMA}${url}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
export const authorService = new BaseService();
