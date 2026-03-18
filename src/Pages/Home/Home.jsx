import React from "react";
import StudentJourney from "./StudentJourney";
// import HeroSection from "../../../../Client/src/Pages/Home/Heroection";

import HeroSection from "./Herosection";
import AboutUs from "./AboutUs";
import WhyVPP from "./WhyVPP";
import Chairmanmsg from "./Chairmanmsg";
import VisionMission from "./VisionMission";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Chairmanmsg/>
      <VisionMission/>
    </div>
  );
}

export default Home;
