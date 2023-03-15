import { useState, useEffect } from "react";

const ResponsiveBGImage = (desktopImage, tabletImage) => {
  const [bgImage, setBgImage] = useState(desktopImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage(tabletImage);
      } else {
        setBgImage(desktopImage);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopImage, tabletImage]);

  return bgImage;
};

export default ResponsiveBGImage;
