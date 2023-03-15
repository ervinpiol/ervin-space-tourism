import React from "react";
import Crew from "../components/CrewDetail/Crew";
import CrewHeader from "../components/CrewDetail/CrewHeader";
import BGCrewDesktop from "../assets/crew/background-crew-desktop.jpg";
import BGCrewTablet from "../assets/crew/background-crew-tablet.jpg";
import ResponsiveBGImage from "../components/Reusable/ResponsiveBgImage";

const CrewPage = () => {
  const bgImage = ResponsiveBGImage(BGCrewDesktop, BGCrewTablet);

  return (
    <div
      className="flex h-screen bg-cover bg-center items-center md:h-auto ss:h-auto md:p-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex w-[1200px] md:w-[850px]   mx-auto flex-col mt-48 md:mt-28 md:gap-24 ss:w-full ss:gap-14 ss:p-10 ss:mt-28">
        <CrewHeader />
        <Crew />
      </div>
    </div>
  );
};

export default CrewPage;
