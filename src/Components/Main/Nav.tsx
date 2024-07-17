import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spiral as Hamburger } from "hamburger-react";
import SideBar from "./SideBar";
import Logo from "../Logo";
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
import { userInfo, userUpdate } from "../Config/fetchrequests";

const Nav = () => {
  // hamburger menu flag
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [theme, setTheme] = useState(false);

  //Getting the user id
  const userId = Number(sessionStorage.getItem("userId"));

  //Fetching the username and password
  const { data: info } = useQuery({
    queryKey: ["info", userId],
    queryFn: () => userInfo(userId),
  });

  //Displaying both the username and password as default values
  useEffect(() => {
    setUser(info?.username);
    setPassword(info?.password);
    const theme = sessionStorage.getItem("theme");
    theme === "true" ? setTheme(true) : setTheme(false);
  }, [info]);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
      sessionStorage.setItem("theme", "true");
    } else {
      document.body.classList.remove("dark");
      sessionStorage.setItem("theme", "false");
    }
  }, [theme]);

  //DB update on submit
  const onSubmit = async () => {
    await userUpdate(userId, user, password);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-30 flex h-20 w-screen border-b-4 border-orange-500 bg-white dark:bg-neutral-950">
        <div className="ml-5 mr-5 flex w-screen items-center justify-between">
          <div className="w-12">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={`${theme ? "white" : "black"}`}
            />
          </div>
          <Logo color={`${theme ? "white" : ""}`} />
          <div className="w-12">
            <Sheet>
              <SheetTrigger asChild>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-6 cursor-pointer text-xs lg:w-8"
                >
                  {/* Settings svg */}
                  <path
                    d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v17.7c0 7.8 4.8 14.8 11.6 18.7c6.8 3.9 15.1 4.5 21.8 .6l13.8-7.9c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-14.4 8.3c-6.5 3.7-10 10.9-10 18.4s3.5 14.7 10 18.4l14.4 8.3c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-13.8-7.9c-6.7-3.9-15.1-3.3-21.8 .6c-6.8 3.9-11.6 10.9-11.6 18.7v17.7c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V467.8c0-7.9-4.9-14.9-11.7-18.9c-6.8-3.9-15.2-4.5-22-.6l-13.5 7.8c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l14-8.1c6.5-3.8 10.1-11.1 10.1-18.6s-3.5-14.8-10.1-18.6l-14-8.1c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l13.6 7.8c6.8 3.9 15.2 3.3 22-.6c6.9-3.9 11.7-11 11.7-18.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"
                    fill={theme ? "#fff" : "#000"}
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="h-screen border-l-2 border-orange-500 dark:bg-neutral-950">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="user" className="dark:text-slate-50">
                      User:
                    </label>
                    <input
                      type="text"
                      id="user"
                      className="h-10 border-2 border-orange-500 bg-orange-50 pl-2 dark:border-gray-100 dark:border-opacity-50 dark:bg-neutral-950 dark:text-slate-50"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="dark:text-slate-50">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="h-10 border-2 border-orange-500 bg-orange-50 pl-2 dark:border-gray-100 dark:border-opacity-50 dark:bg-neutral-950 dark:text-slate-50"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="dark:text-slate-50">
                      Email:
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="h-10 border-2 border-orange-500 bg-orange-50 pl-2 dark:border-gray-100 dark:border-opacity-50 dark:bg-neutral-950 dark:text-slate-50"
                      placeholder="placeholderemail123@gmail.com"
                      disabled
                    />
                  </div>
                </div>
                <SheetFooter className="pt-5">
                  <SheetClose asChild>
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-300 dark:bg-orange-500 dark:text-slate-50 dark:hover:bg-orange-300"
                      onClick={onSubmit}
                    >
                      Save changes
                    </Button>
                  </SheetClose>
                </SheetFooter>
                <div
                  className={`absolute left-1/2 top-[82%] ${theme ? "w-11" : "w-8"} -translate-x-1/2 transform cursor-pointer lg:top-[90%]`}
                  onClick={() => setTheme(!theme)}
                >
                  {theme ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-full w-full"
                    >
                      <path
                        fill="#f8fafc"
                        d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="h-full w-full"
                    >
                      <path
                        fill="#f97316"
                        d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                      />
                    </svg>
                  )}
                </div>
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
