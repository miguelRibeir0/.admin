import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import SideBar from "./SideBar";
import Logo from "../Logo";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-30 flex h-20 w-screen border-b-4 border-orange-500 bg-white">
        <div className="ml-5 mr-5 flex w-screen items-center justify-between">
          <div className="w-12">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <Logo />
          <span className="w-12" />
        </div>
      </nav>
      <SideBar isOpen={isOpen} />
    </>
  );
};

export default Nav;
