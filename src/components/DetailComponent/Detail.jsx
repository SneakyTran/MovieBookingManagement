import _ from "lodash";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { playTrailer } from "../../redux/actions/BannerAction";
import { getReleaseFilm } from "../../redux/actions/MovieManagerAction";
import IframeFilm from "../BannerComponent/IframeFilm/IframeFilm";
import "./details.css";
export default function Detail(props) {
  let { detailFilm } = useSelector((state) => state.MovieManagerReducer);
  let dispatch = useDispatch();
  let { maPhim } = props.match.params;
  //   State
  const [cinemaSystemCode, setCinemaSystemCode] = useState("");
  const [cinemaClusterCode, setCinemaClusterCode] = useState("");
  let currentDate = moment(new Date()).format("DDMMYY");
  const [listDateRelease, setListDate] = useState([]);
  const [release, setReleases] = useState(currentDate);
  const [activeDate, setActiveDate] = useState({
    date: 0,
  });
  const [show, setShow] = useState(false);
  //   Effect
  useEffect(() => {
    dispatch(getReleaseFilm(maPhim));
  }, []);
  useEffect(() => {
    var date = new Date();
    const arr = [];
    let times;
    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        times = moment(date.setDate(date.getDate()));
      } else {
        times = moment(date.setDate(date.getDate() + 1));
      }

      arr.push(times);
    }
    if (detailFilm?.heThongRapChieu) {
      let listDate = [];
      let prevSys = "";
      let curSys = "";
      let system = [];
      let cluster = [];
      detailFilm?.heThongRapChieu?.map((cinema, index) => {
        cinema?.cumRapChieu?.map((cumRap) => {
          cumRap?.lichChieuPhim?.map((movie, i) => {
            let convertDate = moment(movie.ngayChieuGioChieu);

            // lọc ngày lấy list Date nào có phim thì mới render
            for (let key in arr) {
              let convert = arr[key];
              if (
                moment(convert).format("DDMMYY") ===
                convertDate.format("DDMMYY")
              ) {
                listDate.push(arr[key]);
              }
            }
            // lọc hệ thống rạp và cụm rạp để lấy thằng đầu tiên render ra interface
            if (convertDate.format("DDMMYY") === release) {
              prevSys = curSys;
              curSys = cinema.maHeThongRap;

              if (curSys !== prevSys) {
                cluster.push(cumRap.maCumRap);
                system.push(cinema.maHeThongRap);
              }
            }
          });
        });
      });

      // SetState thằng đầu tiên hệ thống và cụm rạp, và ưu tiên setState lại thằng đã chọn trc đó
      if (system.length !== 0 && cluster.length !== 0) {
        if (system.includes(cinemaSystemCode)) {
          setCinemaSystemCode(cinemaSystemCode);
          if (cluster.includes(cinemaClusterCode)) {
            setCinemaClusterCode(cinemaClusterCode);
          } else {
            let filterPrevCluster = cluster.filter((clu) => {
              return clu
                .toLowerCase()
                .replaceAll("-", "")
                .includes(cinemaSystemCode.toLowerCase());
            });
            setCinemaClusterCode(filterPrevCluster[0]);
          }
        } else {
          setCinemaSystemCode(system[0]);
          setCinemaClusterCode(cluster[0]);
        }
      }
      // SetState và Lọc các ngày bị trùng
      let sortDate = _.sortBy(listDate, ["_i"]);
      setListDate(_.uniq(sortDate));
    }
  }, [detailFilm, release]);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      return setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [show]);
  const renderCalender = () => {
    var date = new Date();
    const month = moment(date).format("MMMM");
    const year = moment(date).format("YYYY");
    return (
      <>
        <div
          className="cinema_text"
          style={{ fontSize: "25px", borderBottom: "2px solid #fff" }}
        >
          <span className="cinema_text-month cinema_text">{month}</span>
          <span className="cinema_text-year">{year}</span>
        </div>
        <div className="row pl-2 pr-2">
          {listDateRelease?.map((time, i) => {
            return (
              <div key={i} className={"col cinema_release"}>
                <label
                  htmlFor={time.format("DDMMYY")}
                  className={
                    activeDate.date === i
                      ? "col cinema_release-label active"
                      : "col cinema_release-label"
                  }
                  onClick={() => {
                    setActiveDate({
                      date: i,
                    });
                    setShow(true);
                  }}
                >
                  {time.isoWeekday() === 1 ? (
                    <p className="cinema_release-day">CN</p>
                  ) : (
                    <p className="cinema_release-day">
                      Thứ {time.isoWeekday()}
                    </p>
                  )}
                  <span className="cinema_release-date mt-1">
                    {time.date()}
                  </span>
                  <input
                    onChange={(e) => {
                      setReleases(e.target.value);
                    }}
                    type="radio"
                    value={time.format("DDMMYY")}
                    id={time.format("DDMMYY")}
                    name="date"
                    className="cinema_release-input"
                  />
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const renderSystemCinema = () => {
    let prevSys = "";
    let curSys = "";
    return detailFilm?.heThongRapChieu?.map((cinema, index) => {
      return cinema?.cumRapChieu?.map((cumRap) => {
        return cumRap?.lichChieuPhim?.map((movie, i) => {
          let convertDate = moment(movie.ngayChieuGioChieu);
          if (convertDate.format("DDMMYY") === release) {
            curSys = prevSys;
            prevSys = cinema.maHeThongRap;
            return (
              <Fragment key={i}>
                {prevSys !== curSys && (
                  <div
                    className={
                      cinemaSystemCode === cinema.maHeThongRap
                        ? "logo_system cinema_logo-active col"
                        : "logo_system col"
                    }
                    onClick={() => {
                      setCinemaSystemCode(cinema.maHeThongRap);
                      setCinemaClusterCode(cumRap.maCumRap);
                      setShow(true);
                    }}
                  >
                    <img
                      src={cinema.logo}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                )}
              </Fragment>
            );
          }
        });
      });
    });
  };

  const renderClusterCinema = () => {
    let prevCluster = "";
    let curCluster = "";

    return detailFilm?.heThongRapChieu?.map((cinema, i) => {
      return cinema?.cumRapChieu.map((cumRap, i) => {
        return cumRap?.lichChieuPhim?.map((movie, i) => {
          let convertDate = moment(movie.ngayChieuGioChieu);
          if (convertDate.format("DDMMYY") === release) {
            if (cinema.maHeThongRap === cinemaSystemCode) {
              prevCluster = curCluster;

              curCluster = cumRap.maCumRap;
              if (prevCluster !== curCluster) {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setCinemaClusterCode(cumRap.maCumRap);
                      setShow(true);
                    }}
                    className={
                      cinemaClusterCode === cumRap.maCumRap
                        ? "logo_system cinema_logo-active row py-2"
                        : "logo_system row py-2"
                    }
                  >
                    <div className="col-3 d-flex align-items-center">
                      <img
                        src={cinema.logo}
                        style={{ width: "40px", height: "40px" }}
                        alt=""
                      />
                    </div>
                    <div className="col-9 cinema_title-cluster">
                      <h5 className="cinema_title ">{cumRap.tenCumRap}</h5>
                      <h6 className="cinema_title ">{cumRap.diaChi}</h6>
                    </div>
                  </div>
                );
              }
            }
          }
        });
      });
    });
  };
  const renderCinemaRelease = () => {
    let checkEmptyFilm = [];
    let arrFilm = detailFilm?.heThongRapChieu?.map((cinema) => {
      return cinema?.cumRapChieu?.map((cumRap) => {
        if (cinemaClusterCode === cumRap?.maCumRap) {
          return cumRap?.lichChieuPhim?.map((movie, i) => {
            let convertDate = moment(movie.ngayChieuGioChieu);
            if (convertDate.format("DDMMYY") === release) {
              checkEmptyFilm.push(movie);
              console.log(movie);
              return (
                <Fragment key={i}>
                  {convertDate.format("DDMMYY") === release && (
                    <div>
                      <NavLink to={`/booking/${movie.maLichChieu}`}>
                        <button className="btn btn_primary mt-3">
                          {convertDate.format("hh:mm A")}
                        </button>
                      </NavLink>
                    </div>
                  )}
                </Fragment>
              );
            }
          });
        }
      });
    });
    if (checkEmptyFilm.length === 0) {
      return (
        <div className="cinema_list-film">
          <h3>
            Oops!! Không có phim nào chiếu ngày này rồi, bạn chọn ngày khác nhé
            !!
          </h3>
        </div>
      );
    } else {
      return (
        <div className="col">
          <div className="row">
            <div className="col-4 text-center mb-4">
              <img
                src={detailFilm.hinhAnh}
                style={{ height: "160px", width: "130px" }}
                alt=""
              />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-9">
                  <h3 className="cinema_title-release">
                    {detailFilm.tenPhim}
                    {detailFilm.hot && (
                      <span>
                        <div className="cinema_gif d-inline-block" alt="" />
                      </span>
                    )}
                  </h3>
                  <div className="mt-3 mb-3">
                    <div className="cinema_title-release-date">
                      Suất chiếu:{arrFilm}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="text-center">
      <div
        className="cinema_banner-detail banner position-relative "
        style={{
          backgroundImage: `url(${detailFilm.hinhAnh})`,
        }}
      >
        <div className="row banner_content-mid">
          <div className="col-3 position-relative">
            <img src={detailFilm?.hinhAnh} alt="" />
            <div
              className="position-absolute banner_wrap-icon-mini"
              onClick={() => {
                dispatch(
                  playTrailer(
                    <IframeFilm phim={detailFilm} isContent={false} />
                  )
                );
              }}
            >
              <i className="fa-regular fa-circle-play  banner_play_icon-mini"></i>
            </div>
          </div>
          <div className="col-9 banner_detail-right text-left">
            <h3 className="cinema_title-release">
              {detailFilm?.tenPhim}
              {detailFilm?.hot && (
                <span>
                  <div className="cinema_gif d-inline-block" alt="" />
                </span>
              )}
            </h3>
            <div>
              <span className="title-basic-orange"> Đánh giá :</span>
              <span>
                {" "}
                {detailFilm.danhGia}
                <i className="fa-solid fa-star title-basic"></i>
              </span>
            </div>
            <div className="">
              <span className="title-basic-orange"> Mô tả: </span>
              <div className="title-basic-white"> {detailFilm.moTa} </div>
            </div>
            <div className="">
              <span className="title-basic-orange">Ngày chiếu: </span>
              <span className="title-basic-white">
                {moment(detailFilm.ngayKhoiChieu).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        </div>
        <div className="banner_overlay-dark"></div>
      </div>
      <div className="cinema">
        <h2 className="cinema_header">Buy ticket PHIM ONLINE</h2>
        <div className="row cinema_header-logo">{renderSystemCinema()}</div>
        <div className="row cinema__content mt-3">
          <div className="col-3">{renderClusterCinema()}</div>
          <div className="col-9">
            <div className="cinema_calender-wrap-top">{renderCalender()}</div>
            <div className="cinema_calender-wrap-bot height-100 mt-3">
              {show && (
                <div className="spinner">
                  <div className="spinner-img"></div>
                </div>
              )}
              <div className="row flex-column">{renderCinemaRelease()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
