import { useState } from "react";
import logo from "../assets/Logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiPauseCircle,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "ADD DATA",
      icon: HiPlus,
    },
    {
      name: "COMPLETED",
      icon: HiStar,
    },
    {
      name: "ONGOING",
      icon: HiPlayCircle,
    },
    {
      name: "HIATUS",
      icon: HiPauseCircle,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <img
          src={logo}
          className="aspect-[4/3] object-contain mix-blend-Screen
        md:w-[115px] "
        />
        <div className=" flex gap-8" >
        <HeaderItem name={menu[0].name} Icon={menu[0].icon} i={0}/>
        <HeaderItem name={menu[1].name} Icon={menu[1].icon} i={1}/>
        <HeaderItem name={menu[2].name} Icon={menu[2].icon} i={2}/>
        </div>
       
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a className="text-red-600">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
