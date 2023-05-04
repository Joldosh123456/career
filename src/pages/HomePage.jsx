import React from "react";
import GetCareer from "../components/HomePage/GetCareer/GetCareer";
import Header from "../components/HomePage/Header/Header";
import Footer from "../components/HomePage/Footer/Footer";
import TopCompanies from "../components/HomePage/TopCompaniesTask/TopCompanies";

function HomePage() {
  return (
    <div>
      <Header />
      <GetCareer />
      <TopCompanies />
      <Footer />
    </div>
  );
}

export default HomePage;
