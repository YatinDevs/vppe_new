import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PrimaryNavbar from "../Component/Navbar/PrimaryNavbar";
import PrimaryFooter from "../Component/Footer/PrimaryFooter";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";
import FloatingButtons from "../Component/FloatingButtons/FloatingButtons";
import { useSchoolSEO } from "../../hooks/useSEO";

const PrimaryLayout = () => {
  const { pathname } = useLocation();
  useSchoolSEO(pathname);

  return (
    <>
      <ScrollToTop/>
      <PrimaryNavbar />
      <FloatingButtons />
      <main className="primary-layout">
        <Outlet />
      </main>
      <PrimaryFooter />
    </>
  );
};

export default PrimaryLayout;