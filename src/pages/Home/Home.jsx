import React from "react";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import CinemaComponent from "../../components/CinemaComponent/CinemaComponent";
import "./home.css";

export default function Home() {
  return (
    <div>
      <BannerComponent />
      <CinemaComponent />
    </div>
  );
}
