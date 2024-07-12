import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import SideBar from "./SideBar";
import Logo from "../Logo";
import settings from "../../assets/settings.svg";
import { Button } from "@/Components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-30 flex h-20 w-screen border-b-4 border-orange-500 bg-white">
        <div className="ml-5 mr-5 flex w-screen items-center justify-between">
          <div className="w-12">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <Logo color={""} />
          <div className="w-12">
            <Sheet>
              <SheetTrigger asChild>
                <img
                  src={settings}
                  className="w-6 cursor-pointer text-xs lg:w-8"
                />
              </SheetTrigger>
              <SheetContent className="border-l-2 border-orange-500">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="user">User:</label>
                    <input
                      type="text"
                      id="user"
                      className="h-10 border-2 border-orange-500 bg-orange-50 pl-2"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="h-10 border-2 border-orange-500 bg-orange-50 pl-2"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      className="h-10 border-2 border-orange-500 bg-orange-50 pl-2"
                      placeholder="placeholderemail123@gmail.com"
                      disabled
                    />
                  </div>
                </div>
                <SheetFooter className="pt-5">
                  <SheetClose asChild>
                    <Button type="submit" className="bg-orange-500">
                      Save changes
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <SideBar isOpen={isOpen} />
    </>
  );
};

export default Nav;
