import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Li from "./SideBar(li)";
import logout from "../../assets/logout.svg";

const SideBar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [zIndex, setZIndex] = useState("z-10");

  // removing the invisible overlay box
  useEffect(() => {
    if (!isOpen) {
      // set z-index to -z-10 after the bar is closed
      const timeoutId = setTimeout(() => setZIndex("-z-10"), 500);
      return () => clearTimeout(timeoutId);
    } else {
      // set z-index to z-10 when sidebar is opened
      setZIndex("z-10");
    }
  }, [isOpen]);

  const logoutId = () => {
    sessionStorage.removeItem("userId");
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 ${zIndex} h-screen w-full bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`fixed left-0 top-0 z-20 mt-20 h-full w-1/2 bg-white transition-transform duration-500 sm:w-1/3 lg:w-1/4 xl:w-1/6 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col font-bold">
          <Link to={"/dashboard"}>
            <Li value="Dashboard"></Li>
          </Link>
          <Link to={"/stock"}>
            <Li value="Stock"></Li>
          </Link>
          <Link to={"/sales"}>
            <Li value="Sales"></Li>
          </Link>
          <Link to={"/budget"}>
            <Li value="Budget"></Li>
          </Link>
          <Link to={"/plugins"}>
            <Li value={"Plugins"}></Li>
          </Link>
        </ul>
        <div className="mt-10 flex w-full justify-center">
          <Link to={"/"} onClick={logoutId}>
            <img src={logout} className="w-5 rotate-180" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
