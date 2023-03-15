import destinationImg from "../images/destinationImg";

const moon = {
  name: "MOON",
  description:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  avgDistance: "384,400 KM",
  estTravelTime: "3 DAYS",
  image: destinationImg.Moon,
  link: "/destination/moon",
};

const mars = {
  name: "MARS",
  description:
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  avgDistance: "225 MIL. KM",
  estTravelTime: "9 MONTHS",
  image: destinationImg.Mars,
  link: "/destination/mars",
};

const europa = {
  name: "EUROPA",
  description:
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  avgDistance: "628 MIL. KM",
  estTravelTime: "3 YEARS",
  image: destinationImg.Europa,
  link: "/destination/europa",
};

const titan = {
  name: "TITAN",
  description:
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  avgDistance: "1.6 BIL. KM",
  estTravelTime: "7 YEARS",
  image: destinationImg.Titan,
  link: "/destination/titan",
};

export default { moon, mars, europa, titan };
