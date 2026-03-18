import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Layout Components
import Layout from "./Layout/Layout";
import PrePrimaryLayout from "./Layout/PrePrimaryLayout";
import PrimaryLayout from "./Layout/PrimaryLayout";
import SecondaryLayout from "./Layout/SecondaryLayout";

// Main Pages
import Home from "./Pages/Home/Home";
import AdmissionForm from "./Pages/Admission/AdmissionForm";

import PrimaryHome from "./Pages/Primary/Home/PrimaryHome"


// Secondary Pages
import SecondaryHome from "./Pages/Secondary/Home/SecondaryHome"
import PrimaryOurTeam from "./Pages/Primary/AboutUs/PrimaryOurTeam";
import PrimaryPtaMembers from "./Pages/Primary/AboutUs/PrimaryPtaMembers";
import PrimaryAchievement from "./Pages/Primary/Achievement/PrimaryAchievement";
import PrimaryCurriculum from "./Pages/Primary/Curriculum/PrimaryCurriculum";
import SecondaryPtaMembers from "./Pages/Secondary/AboutUs/SecondaryPtaMembers";
import SecondaryOurTeam from "./Pages/Secondary/AboutUs/SecondaryOurTeam";
import SecondaryAchievements from "./Pages/Secondary/Achievements/SecondaryAchievements";
import SecondaryCurriculum from "./Pages/Secondary/Curriculum/SecondaryCurriculum";

import PrePrimaryFacilities from "./Pages/PrePrimary/Home/PrePrimaryFacilities";
import PrePrimaryHome from "./Pages/PrePrimary/Home/PrePrimaryHome";
import PrePrimaryOurTeam from "./Pages/PrePrimary/AboutUs/PrePrimaryOurTeam";
import PrePrimaryPTAMembers from "./Pages/PrePrimary/AboutUs/PrePrimaryPTAMembers";
import PrePrimaryAchievements from "./Pages/PrePrimary/Achievements/PrePrimaryAchievements";
import PrePrimaryCurriculum from "./Pages/PrePrimary/Curriculum/PrePrimaryCurriculum";

import GeneralRules from "./Pages/Home/GeneralRules";
import PrimaryAbout from "./Pages/Primary/AboutUs/PrimaryAbout";
import PrimaryVishakhaCommitee from "./Pages/Primary/AboutUs/PrimaryVishakhaCommitee";
import PrePrimaryAdmissionProcess from "./Pages/PrePrimary/Admission/PrePrimaryAdmissionProcess";
import PrePrimaryform from "./Pages/PrePrimary/Admission/PrePrimaryform";
import Primaryform from "./Pages/Primary/Admission/Primaryform";
import PrimaryAdmissionProcess from "./Pages/Primary/Admission/PrimaryAdmissionProcess";
import PrimaryGuidelines from "./Pages/Primary/Admission/PrimaryGuidelines";
import SecondaryGuidelines from "./Pages/Secondary/Admission/SecondaryGuidelines";
import SecondaryAdmissionProcess from "./Pages/Secondary/Admission/SecondaryAdmissionProcess";
import Secondaryform from "./Pages/Secondary/Admission/Secondaryform";
import PrePrimaryGuidelines from "./Pages/PrePrimary/Admission/PrePrimaryGuidelines";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Main Routes with Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
         <Route path="/general-rules" element={<GeneralRules/>}/>
          <Route path="admission" element={<AdmissionForm />} />
        </Route>

        {/* Pre-Primary Section Routes with Separate Layout */}
        <Route path="/pre-primary" element={<PrePrimaryLayout />}>
          <Route index element={<PrePrimaryHome />} />
          <Route path="preprimaryourteam" element={<PrePrimaryOurTeam />} />
          <Route path="preprimaryptamembers" element={<PrePrimaryPTAMembers />} />
          <Route path="pre-primary-admission-process" element={<PrePrimaryAdmissionProcess/>}/>
          <Route path="pre-primary-admissionform" element={<PrePrimaryform/>}/>
          <Route path="pre-primary-guidelines" element={<PrePrimaryGuidelines/>}/>
          <Route path="achievements" element={<PrePrimaryAchievements />} />
          <Route path="curriculum" element={<PrePrimaryCurriculum />} />
        </Route>

        {/* Primary Section Routes with Separate Layout */}
        <Route path="/primary" element={<PrimaryLayout />}>
          <Route index element={<PrimaryHome />} />
          <Route path="about" element={<PrimaryAbout />} />
          <Route path="about/team" element={<PrimaryOurTeam />} />
          <Route path="about/pta" element={<PrimaryPtaMembers />} />
          <Route path="about/vishakhacommittee" element={<PrimaryVishakhaCommitee />} />
          <Route path="primary-admission-form" element={<Primaryform/>}/>
          <Route path="primary-admission-process" element={<PrimaryAdmissionProcess/>}/>
          <Route path="primary-guidelines" element={<PrimaryGuidelines/>}/>

          <Route path="curriculum" element={<PrimaryCurriculum />} />
          <Route path="achievements" element={<PrimaryAchievement />} />
        </Route>

        {/* Secondary Section Routes with Separate Layout */}
        <Route path="/secondary" element={<SecondaryLayout />}>
          <Route index element={<SecondaryHome />} />
          <Route path="about/pta" element={<SecondaryPtaMembers />} />
          <Route path="about/team" element={<SecondaryOurTeam />} />

          <Route path="secondary-admission-process" element={<SecondaryAdmissionProcess/>}/>
          <Route path="secondary-admission-form" element={<Secondaryform/>}/>
          <Route path="secondary-guidlines" element={<SecondaryGuidelines/>}/>
          <Route path="achievements" element={<SecondaryAchievements />} />
          <Route path="curriculum" element={<SecondaryCurriculum />} />

          
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;