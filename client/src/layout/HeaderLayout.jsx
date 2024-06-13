import { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  let token = localStorage.getItem("access_token");
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderLayout;
