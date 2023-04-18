import React from "react";
import classes from './Profile.module.css'
import ProfilePage from '../../myComponents/ProfilePage/ProfilePage'
import { useEffect, useState } from "react";
const Product = () => {
    const userName = localStorage.getItem('userName')
    const api_base = "http://localhost:3001";
    const [pData, setpData] = useState([])
    const data = {
        userName: userName
    };
    // ---------- calling profile API ----------------
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("fetching resp");
                const response = await fetch("http://localhost:3001/user/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Set the Content-Type header to "application/json"
                    },
                    body: JSON.stringify(data) // Convert data to JSON string
                });
                if (response.ok) {

                    await response.json().then(data => setpData(data)); // Parse the response data as JSON
                    console.log("pdata: ", pData);
                    // if (Array.isArray(data)) {
                    //     setpData(data);; // Update the 'posts' state with the received data
                    //     console.log("data: ", data);
                    //     console.log("u:", data[0].img_url);
                    // } else {
                    //     console.error("Data received from API is not an array.");
                    // }
                } else {
                    console.error("API response not successful:", response);
                }
            } catch (error) {
                console.error(error);
                // Handle error appropriately
            }
        };
        fetchProfile();
    }, [pData]);
    // ----------------------------------------------------------------------
    return (
        <div  >
            {/* {pData[0]} */}
            <ProfilePage userName={userName} pData={pData} noOfPosts={pData.length} />
        </div>
    );
};

export default Product;
