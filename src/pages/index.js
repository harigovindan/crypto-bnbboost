import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import HeroSection from "../components/HeroSection";
import HeaderSection from "../components/HeaderSection";
import StakingSection from "../components/StakingSection";
// import InfoSection from "../components/InfoSection";
import Investments from "../components/Investments";
// import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [walletDetails, setWalletDetails] = useState({});

  const handleConnect = () => {
    debugger;
  };

  return (
    <Router>
      {/* <SideBar isOpen={isOpen} toggle={toggle} /> */}
      <NavBar toggle={toggle} onClickConnect={handleConnect} />
      {/* <HeroSection /> */}
      <HeaderSection />
      <Services />
      <StakingSection />
      <Investments walletDetails={walletDetails} />
      {/* <Footer /> */}
    </Router>
  );
};

export default Home;
