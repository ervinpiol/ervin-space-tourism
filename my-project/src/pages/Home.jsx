import React from "react";
import FrontPage from "../components/HomePage/FrontPage";
import BGHomeDesktop from "../assets/home/background-home-desktop.jpg";
import BGHomeTablet from "../assets/home/background-home-tablet.jpg";
import ResponsiveBGImage from "../components/Reusable/ResponsiveBgImage";

const Home = () => {
  const bgImage = ResponsiveBGImage(BGHomeDesktop, BGHomeTablet);

  return (
    <div
      className="flex h-screen bg-cover bg-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex w-[1440px] md:items-center md:mt-0 md:w-full ss:w-auto mx-auto flex-col ss:mt-24">
        <FrontPage />
      </div>
    </div>
  );
};

export default Home;
