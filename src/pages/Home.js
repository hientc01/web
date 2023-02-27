import react from "react";

import Navbarside from "../components/Navbarside";

import Body from "../components/Body";
const Home = () => {
  return (
    <>
      <div className="flex ">
        <Navbarside />
        <Body />
      </div>{" "}
    </>
  );
};

export default Home;
