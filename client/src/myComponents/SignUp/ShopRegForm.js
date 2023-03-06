
import React, { useState } from 'react';
import mongoose from 'mongoose';
// import ShopRegForm from './ShopRegForm/ShopRegForm'
// import ShopSchema from './../../../models/ShopSchema'
// require('dot-env').config();


// mongoose.connect('mongodb+srv://abhishekh:Business123@clustertodo.4hus5ks.mongodb.net/toDo_V2', { useNewUrlParser: true })

const ShopSchema = new mongoose.Schema({
    shopName: { type: String, required: true },
    // shopType: { type: String, required: true },
    // openTime: { type: String, required: true },
    // closeTime: { type: String, required: true }
});


const Shop = mongoose.model('Shop', ShopSchema);

// const shopTypes = [
//     'kirana shop',
//     'grocery shop',
//     'fruits and vegetables shop',
//     'Hair Cutting Saloon',
//     'Beauty parlour',
//     'cloth shop',
//     'sweets shop',
//     'construction shop',
//     'books & stationary',
//     'mobile shop',
//     'automobile showroom',
//     'automobile repair',
//     'shoes shop'
// ];

const ShopRegForm = ({ onSubmit }) => {
    const [shopName, setShopName] = useState('');
    // const [shopType, setShopType] = useState('');
    // const [openTime, setOpenTime] = useState('');
    // const [closeTime, setCloseTime] = useState('');


    const [formData, setFormData] = useState({});
    // ----------------------------------------------------------------
    // const Shop = mongoose.model('Shop', ShopSchema);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            shopName,
            // shopType,
            // openTime,
            // closeTime
        };
        setFormData(data);

        const newShop = new Shop(data);
        newShop.save()
            .then(() => {
                console.log('Data saved successfully');
            })
            .catch(err => {
                console.log('Error saving data: ', err);
            });
    };

    // ----------------------------------------------------------------

    // const Shop = mongoose.model('Shop', ShopSchema);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit(formData);
    // }


    return (
        <div>

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

                {/* <label htmlFor="shop_type">Shop Type:</label>
                <select
                    id="shop_type"
                    name="shop_type"
                    value={shopType}
                    onChange={e => setShopType(e.target.value)}
                >
                    <option value="" disabled>Select shop type</option>
                    {shopTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select><br />

                <label htmlFor="open_time">Opening Time:</label>
                <input
                    type="time"
                    id="open_time"
                    name="open_time"
                    value={openTime}
                    onChange={e => setOpenTime(e.target.value)}
                /><br />

                <label htmlFor="close_time">Closing Time:</label>
                <input
                    type="time"
                    id="close_time"
                    name="close_time"
                    value={closeTime}
                    onChange={e => setCloseTime(e.target.value)}
                /><br /> */}
                <button type="submit"></button>
            </form>
        </div>
    );
};

export default ShopRegForm;
