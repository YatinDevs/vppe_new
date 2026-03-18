import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SecondaryNavbar from "../Component/Navbar/SecondaryNavbar";
import SecondaryFooter from "../Component/Footer/SecondaryFooter";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";
import FloatingButtons from "../Component/FloatingButtons/FloatingButtons";
import { useSchoolSEO } from "../../hooks/useSEO";

const SecondaryLayout = () => {
  const { pathname } = useLocation();
  useSchoolSEO(pathname);

  return (
    <>
      <ScrollToTop/>
      <SecondaryNavbar />
      <FloatingButtons />
      <main className="secondary-layout">
        <Outlet />
      </main>
      <SecondaryFooter />
    </>
  );
};

export default SecondaryLayout;