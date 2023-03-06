import React, { useState } from 'react';

// import ShopRegForm from "./../../../../myComponents/SignUp/ShopRegForm"
// import SignUp from "../../../../myComponents/SignUp/SignUp";
import classes from './SignUp.module.css'

// import * as mongoose from "mongoose";

// import mongoose from 'mongoose';
const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://abhishekh:Business123@clustertodo.4hus5ks.mongodb.net/together", { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// mongoose.connect("mongodb://localhost:27017/toget", { useNewUrlParser: true })
// mongoose.connect('mongodb://127.0.0.1:27017/toget', {
//     useNewUrlParser: true,
// });


const ShopSchema = new mongoose.Schema({
    shopName: { type: String, required: true },

});

const Shop = mongoose.model('toget', ShopSchema);


const SignUp = () => {

    const [shopName, setShopName] = useState('');

    const handleError = (err) => {
        console.log(err);
    }


    // const [formData, setFormData] = useState({});
    // ----------------------------------------------------------------

    const handleSubmit = () => {
        // e.preventDefault();

        const item = new Shop({ shopName: shopName })
        item.save(function (err) {
            if (err) return handleError(err);
        })

        // const newShop = new Shop(shopName);
        // newShop.save()
        //     .then(() => {
        //         console.log('Data saved successfully');
        //     })
        //     .catch(err => {
        //         console.log('Error saving data: ', err);
        //     });
    };

    // const data = {
    //     shopName,
    // };
    // // setFormData(data);

    // const newShop = new Shop(shopname);
    // newShop.save()
    //     .then(() => {
    //         console.log('Data saved successfully');
    //     })
    //     .catch(err => {
    //         console.log('Error saving data: ', err);
    //     });

    return (
        <div className={classes.signup}>
            <h1>Become a seller</h1>


            <form onSubmit={handleSubmit} >
                <h3>Shop Details</h3>
                <label htmlFor="shop_name">Shop Name:</label>
                <input
                    type="text"
                    id="shop_name"
                    name="shop_name"
                    value={shopName}
                    onChange={e => setShopName(e.target.value)}
                /><br />


                <button type="submit">Submit</button>
            </form>
            {/* <ShopRegForm /> */}
        </div>
    );
};

export default SignUp;






























// import mongoose from 'mongoose';
// mongoose.connect("mongodb://localhost:27017/togetdb", { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// const ShopSchema = new mongoose.Schema({
//     shopName: { type: String, required: true },

// });

// const Shop = mongoose.model('Shop', ShopSchema);

// const SignUp = () => {

//     const [shopName, setShopName] = useState('');

//     const handleError = (err) => {
//         console.log(err);
//     }

//     const handleSubmit = () => {
//               const item = new Shop({ shopName: shopName })
//         item.save(function (err) {
//             if (err) return handleError(err);
//         })
//     };










// ------------------------------------------------------------------------

// import React from "react";
// // import ShopRegForm from "./../../../../myComponents/SignUp/ShopRegForm"
// // import SignUp from "../../../../myComponents/SignUp/SignUp";
// import classes from './SignUp.module.css'

// const SignUp = () => {
//     return (
//         <div className={classes.signup}>
//             <h1>Become a seller</h1>
//             {/* <ShopRegForm /> */}
//         </div>
//     );
// };

// export default SignUp;