import React from "react";
import GetCareer from "../components/HomePage/GetCareer/GetCareer";
import Header from "../components/HomePage/Header/Header";
import Footer from "../components/HomePage/Footer/Footer";
import Small from "../components/SmallCard/Small";


function HomePage() {
  return (
    <div>
      <Header />
      <GetCareer />
      <Small/>
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
