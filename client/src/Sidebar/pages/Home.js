import React from "react";
import Card from '../../myComponents/Card/Card'
import Post from '../../myComponents/Post/Post'
import SearchBar from "../../myComponents/Search/SearchBar";
import classes from './Home.module.css'
import Nav from '../Nav'

// import SearchBar from "../../../../myComponents/SendButton/SearchBar";

const Dashboard = () => {
    return (
        <div className={classes.home}>
            {/* <SearchBar /> */}
            <div className={`${classes.searchBox} relative`}>

                {/* <SearchBar /> */}


            </div>

        </div >
    );
};

export default Dashboard;