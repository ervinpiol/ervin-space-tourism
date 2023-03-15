import technologyImg from "../images/technologyImg";

const technology1 = {
  id: "LAUNCH",
  name: "LAUNCH VEHICLE",
  description:
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  imagePortrait: technologyImg.LaunchImgPortrait,
  imageLandscape: technologyImg.LaunchImgLandscape,
};

const technology2 = {
  id: "SPACEPORT",
  name: "SPACEPORT",
  description:
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  imagePortrait: technologyImg.SpacePortImgPortrait,
  imageLandscape: technologyImg.SpacePortImgLandscape,
};

const technology3 = {
  id: "CAPSULE",
  name: "SPACE CAPSULE",
  description:
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  imagePortrait: technologyImg.SpaceCapsuleImgPortrait,
  imageLandscape: technologyImg.SpaceCapsuleImgLandscape,
};

export default { technology1, technology2, technology3 };
