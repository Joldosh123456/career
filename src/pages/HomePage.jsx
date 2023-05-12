import React from "react";
import GetCareer from "../components/HomePage/GetCareer/GetCareer";
import Header from "../components/HomePage/Header/Header";
import Footer from "../components/HomePage/Footer/Footer";
import TopCompanies from "../components/HomePage/TopCompaniesTask/TopCompanies";
import Small from "../components/SmallCard/Small";
import Hot from "../components/HomePage/Hot/Hot";
import GlobalTask from "../components/HomePage/GlobalTask/GlobalTask";

function HomePage() {
  return (
    <div>
      <Header />
      <GetCareer />
      <TopCompanies />
      <Hot />
      <GlobalTask />
      <Small />
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
