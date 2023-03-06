import { useState } from "react";
import classes from './App.module.css';


import {
    FaSearch
} from "react-icons/fa";

import {
    RiSettings4Fill
} from "react-icons/ri";

import {
    MdOutlineExplore, MdAddToPhotos
} from "react-icons/md";
import { CgProfile } from 'react-icons/cg'



import {
    ImHome
} from "react-icons/im";

import {
    AiTwotoneNotification
} from "react-icons/ai";

import {
    SiGooglemessages
} from "react-icons/si";

import {
    FaBars,
} from "react-icons/fa";

import { NavLink } from 'react-router-dom';
// import Sidebar from "./sb";



const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(true);
    const [isActive, setIsActive] = useState(false);


    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <ImHome />
        },
        {
            path: "/explore",
            name: "Explore",
            icon: <MdOutlineExplore />
        },
        {
            path: "/message",
            name: "Message",
            icon: <SiGooglemessages />
        },
        {
            path: "/myorders",
            name: "My Orders",
            icon: <CgProfile />
        },

        {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile />
        },
        {
            path: "/signup",
            name: "Become a Seller",
            icon: <RiSettings4Fill />
        }
    ]
    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className="flex">
            <div className={` ${open ? "w-72" : "w-20 "}  bg-dark-purple  p-5  pt-8 relative duration-300 `}>

                <img src="./assets/Calendar.png" className={` cursor-pointer left-4 top-1.5 w-7 ml-2 fixed border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} alt="sds" />

                <div className={`flex gap-x-4 items-center`}>
                    <NavLink to={"./home"}  >
                        <img src="https://i.ibb.co/fC5HcdW/t-logo.png" alt='icon' width={"100px"} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                    </NavLink>
                    <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}> Welcome</h1>
                </div>

                <ul className={`pt-6 fixed`}>


                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} >
                            <li
                                onClick={handleClick} key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${item.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} bg-blue-500 hover:bg-blue-700 ${isActive ? 'active:bg-blue-800' : ''} text-white font-bold py-2 px-4 rounded`}>
                                {item.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>{item.name}</span>

                            </li>
                            {console.log(isActive)}

                            {/* <div className={classes.icon}>{item.icon}</div>
                            <div style={{ display: (window.innerWidth < 1150) ? "none" : "block" }} className={classes.link_text}>{item.name}</div> */}
                        </NavLink>))}


                    {/* {Menus.map((Menu, index) => (
                        <li key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>

                            <img src={`./assets/${Menu.src}.png`} />

                            <span className={`${!open && "hidden"} origin-left duration-200`}> {Menu.title} </span>
                        </li>
                    ))} */}
                </ul>
            </div>

            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div>
            <main>{children}</main>
        </div>
    );
};
export default Sidebar;
