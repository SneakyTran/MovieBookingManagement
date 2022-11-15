import React from "react";
import "./modaliframe.css";
export default function IframeFilm({ phim }) {
  let { trailer } = phim;
  trailer = trailer.replace("watch?v=", "embed/");

  return (
    <>
      <iframe
        style={{
          width: "100%",
          height: "400px",
          border: "none",
          padding: "10px",
        }}
        src={trailer}
        title="Dinh Dưỡng|Ăn Kiêng Là Ăn Đủ Chất Và Kiểm Soát Thức Ăn Hay Chúng Ta Nghĩ Ăn Kiêng Là Nhịn Đói, Ăn ít"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="row iframe_modal p-3">
        <div className="col-3">
          <img src={phim.hinhAnh} alt="" />
        </div>
        <div className="col-9">
          <h5>{phim.tenPhim}</h5>
          <h6>
            <div className="text-danger mt-2 mb-2">Mô tả</div>
            {phim.moTa.length > 50
              ? phim.moTa.substring(0, 150) + "..."
              : phim.moTa}
          </h6>
          <button className="btn btn_primary">Đặt vé</button>
        </div>
      </div>
    </>
  );
}
