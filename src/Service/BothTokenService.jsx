import Axios from "axios";
import { ACCESS_TOKEN } from "../pages/Login/useLogin";
import { DOMAIN_CINEMA, TOKEN } from "../utils/setting";

export class BothTokenService {
    put = (url, data) => {
        return Axios({
            method: "PUT",
            url: `${DOMAIN_CINEMA}${url}`,
            data,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
                TokenCyberSoft: TOKEN,
            },
        });
    };
    post = (url, data) => {
        console.log(url, data);
        return Axios({
            url: `${DOMAIN_CINEMA}${url}`,
            method: "POST",
            data,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
                TokenCyberSoft: TOKEN,
            },
        });
    };
    get = (url) => {
        return Axios({
            method: "GET",
            url: `${DOMAIN_CINEMA}${url}`,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
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
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiejQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ6NEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsIno0QGdtYWlsLmNvbSIsIkdQMDAiXSwibmJmIjoxNjY3ODg3NjgxLCJleHAiOjE2Njc4OTEyODF9.-g9Tssly2OjKtoBD7WptMgcgkqXrUa52FtqFCAI055k",
            },
        });
    };
}
export const bothServiceToken = new BothTokenService();
