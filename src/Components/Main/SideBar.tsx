import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Li from "./SideBar(li)";

const SideBar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [zIndex, setZIndex] = useState("z-10");
  const [theme, setTheme] = useState(false);

  // removing the invisible overlay box
  useEffect(() => {
    if (!isOpen) {
      // set z-index to -z-10 after the bar is closed
      const timeoutId = setTimeout(() => setZIndex("-z-10"), 500);
      return () => clearTimeout(timeoutId);
    } else {
      // set z-index to z-10 when sidebar is opened
      setZIndex("z-10");
      const theme = sessionStorage.getItem("theme");
      theme === "true" ? setTheme(true) : setTheme(false);
    }
  }, [isOpen, theme]);

  const logoutId = () => {
    sessionStorage.removeItem("userId");
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 ${zIndex} h-screen w-full bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`fixed left-0 top-0 z-20 mt-20 h-full w-1/2 bg-white transition-transform duration-500 sm:w-1/3 lg:w-1/4 xl:w-1/6 dark:bg-neutral-950 dark:text-slate-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
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
            {theme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 rotate-180"
              >
                <path
                  fill="#fff"
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 rotate-180"
              >
                <path
                  fill="#000"
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
              </svg>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
