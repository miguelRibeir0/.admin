import Li from "./SideBar(li)";
import logout from "../../assets/logout.svg";
import { Link } from "react-router-dom";

const SideBar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-10 h-screen w-full bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`fixed left-0 top-0 z-20 mt-20 h-full w-1/2 bg-white transition-transform duration-500 sm:w-1/3 lg:w-1/4 xl:w-1/6 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col font-bold">
          <Li value="Dashboard"></Li>
          <Li value="Stock"></Li>
          <Li value="Sales"></Li>
          <Li value="Budget"></Li>
        </ul>
        <div className="mt-10 flex w-full justify-center">
          <Link to={"/"}>
            <img src={logout} className="w-5 rotate-180" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
