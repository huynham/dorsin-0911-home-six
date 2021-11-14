import Header from "./components/SectionHeader"
import Home from "./components/SectionHome";
import React from "react";
import Service from "./components/SectionService/service";
import Feature from "./components/SectionFeature/feature";
import Pricing from "./components/SectionPricing/pricing";
import Team from "./components/SectionTeam/team";
import TeamHai from "./components/SectionTeam-2/teamHai";
import Blog from "./components/SectionBlog/blog";
import Contact from "./components/SectionContact/contact";
import Setting from "./components/SectionSetting/setting";

function App() {
  return (
    <React.Fragment>
    <Header />
    <Home />
    <Service />
    <Feature />
    <Pricing />
    <Team />
    <TeamHai />
    <Blog />
    <Contact />
    <Setting />
    </React.Fragment>
  )
}

export default App;
