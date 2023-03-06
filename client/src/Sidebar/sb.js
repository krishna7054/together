import React, { useState } from 'react';
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


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
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


    return (
        <div>



            <main>{children}</main>
        </div >
    );
};

export default Sidebar;



// SEARCH REMOVED
// {
        //     path: "/comment",
        //     name: "Search",
        //     icon: <FaSearch />
        // }