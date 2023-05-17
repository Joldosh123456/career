import React from "react";
import GetCareer from "../components/HomePage/GetCareer/GetCareer";
import Header from "../components/HomePage/Header/Header";
import Footer from "../components/HomePage/Footer/Footer";
import TopCompanies from "../components/HomePage/TopCompaniesTask/TopCompanies";
import Small from "../components/SmallCard/Small";
import Hot from "../components/HomePage/Hot/Hot";
import GlobalTask from "../components/HomePage/GlobalTask/GlobalTask";
import Position from "../components/HomePage/Position/Position";
import Customer from "../components/HomePage/Customer/Customer";
import ClientTask from "../components/HomePage/ClientsTask/ClientTask";
import DownloadApp from "../components/HomePage/DownloadApp/DownloadApp";
import News from "../components/HomePage/News/News";

function HomePage() {
  return (
    <div>
      <Header />
      <GetCareer />
      <News/>
      <TopCompanies />
      <Small/>
      <Hot />
      <GlobalTask />
      <Position />
      <Customer />
      <ClientTask />
      <DownloadApp />
      <Small />
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
