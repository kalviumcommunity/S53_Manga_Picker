import { useState } from "react";
import logo from "../assets/Logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiPauseCircle,
  HiAdjustmentsHorizontal
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'; // Import js-cookie

 
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
      name: "Filter",
      icon: HiAdjustmentsHorizontal,
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
  const notify = () => toast.success('logged out!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });
  const handleLogout = () => {
    
    Cookies.remove('Username');
    Cookies.remove('token')
    console.log("Logged out");
    notify()
  };

  return (
    <>
        <div className="flex items-center justify-between p-5">
          
          <div className="flex  gap-8 items-center">
            <img
              src={logo}
              className="aspect-[4/3] object-contain mix-blend-Screen
              md:w-[115px] "
            />
            <div className=" flex gap-8" >
            <HeaderItem name={menu[0].name} Icon={menu[0].icon} i={0}/>
            {/* <HeaderItem name={menu[1].name} Icon={menu[1].icon} i={1}/> */}
            <HeaderItem name={menu[2].name} Icon={menu[2].icon} i={2}/>
            <HeaderItem name={menu[3].name} Icon={menu[3].icon} i={3}/>
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
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64 "
              >
              <li> 
                <Link to='/Signup'>
                <a  className="justify-between ">Signup</a>
                </Link> 
              </li>
              <li>
                <Link to='/Login'>
                <a>login</a>
                </Link>
              </li>
              <li>
                  <button className="text-red-600" onClick={handleLogout}> Logout</button>
              </li>
            </ul>
          </div>
          
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
      </>
  );
}

export default Header;
