import React from "react";
import Destination from "../components/DestinationDetail/Destination";
import DestinationHeader from "../components/DestinationDetail/DestinationHeader";
import BGDestinationDesktop from "../assets/destination/background-destination-desktop.jpg";
import BGDestinationTablet from "../assets/destination/background-destination-tablet.jpg";
import ResponsiveBGImage from "../components/Reusable/ResponsiveBgImage";

const Destinations = () => {
  const bgImage = ResponsiveBGImage(BGDestinationDesktop, BGDestinationTablet);
  return (
    <div
      className="flex h-screen bg-cover bg-center items-center md:w-full md:p-20 md:h-auto ss:h-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex w-[1200px] mx-auto flex-col gap-16 items-start md:mt-28 md:items-center md:gap-20 ss:w-full ss:gap-14 ss:mt-28 ss:p-10">
        <DestinationHeader />
        <Destination />
      </div>
    </div>
  );
};

export default Destinations;
