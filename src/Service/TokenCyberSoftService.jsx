import Axios from "axios";
import { DOMAIN_CINEMA, TOKEN } from "../utils/setting";

export class TokenCyberSoftService {
  put = (url, data) => {
    return Axios({
      method: "PUT",
      url: `${DOMAIN_CINEMA}${url}`,
      data,
      headers: {
        TokenCyberSoft: TOKEN,
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
        TokenCyberSoft: TOKEN,
      },
    });
  };
  get = (url) => {
    return Axios({
      method: "GET",
      url: `${DOMAIN_CINEMA}${url}`,
      headers: {
        TokenCyberSoft: TOKEN,
      },
    });
  };
  delete = (url) => {
    return Axios({
      method: "DELETE",
      url: `${DOMAIN_CINEMA}${url}`,
      headers: {
        TokenCyberSoft: TOKEN,
      },
    });
  };
}
export const tokenCyberService = new TokenCyberSoftService();
