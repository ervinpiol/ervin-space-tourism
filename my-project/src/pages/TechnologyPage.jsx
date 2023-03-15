import React from "react";
import TechnologyHeader from "../components/TechnologyDetail/TechnologyHeader";
import Technology from "../components/TechnologyDetail/Technology";
import BGTechnologyDesktop from "../assets/technology/background-technology-desktop.jpg";
import BGTechnologyTablet from "../assets/technology/background-technology-tablet.jpg";
import ResponsiveBGImage from "../components/Reusable/ResponsiveBgImage";

const TechnologyPage = () => {
  const bgImage = ResponsiveBGImage(BGTechnologyDesktop, BGTechnologyTablet);

  return (
    <div
      className="flex h-full bg-cover bg-center items-center md:justify-center ss:h-auto md:p-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex max-w-[1440px] md:w-full w-full mx-auto flex-col gap-5 mt-8 md:mt-32 md:m-0 md:gap-20 ss:p-10 ss:gap-14 ss:w-full ss:mt-28">
        <TechnologyHeader />
        <Technology />
      </div>
    </div>
  );
};

export default TechnologyPage;
