import React from "react";
import { useState } from 'react'
import Card from '../../myComponents/Card/Card'
import Post from '../../myComponents/Post/Post'
import SearchBar from "../../myComponents/Search/SearchBar";
import classes from './Home.module.css'
import CrtBtn from "../../myComponents/Buttons/create/CrtBtn";
// import SearchBar from "../../../../myComponents/SendButton/SearchBar";
import cloudinary from "cloudinary"
import axios from "axios"
const Dashboard = () => {
    cloudinary.config({
        cloud_name: 'dwhcgeanj',
        api_key: '559212626126411',
        api_secret: 'm9-MWDuehvqa25G6HhcHxyo17Wo',
        secure: true
    });

    // const dotenv = require('dotenv')
    // dotenv.config()
    const un = localStorage.getItem('userName')
    const [username, setUser] = useState(un)
    const [image_url, setImg] = useState('')
    const [title, setTit] = useState('')
    const [description, setDes] = useState('')
    const api_base = 'http://localhost:3001';

    // const [imagePreview, setImagePreview] = useState('');

    const [imageFile, setImageFile] = useState(null);



    const [isSignIn, setSignIn] = useState(localStorage.getItem('isSignIn'))




    const logOutHand = () => {
        localStorage.removeItem('isSignIn')
        window.location.reload(false)
        // setSignIn(localStorage.removeItem('isSignIn'))
    }
    const [showModal, setShowModal] = useState(false);
    const [imagePreview, setImagePreview] = useState("");

    // function previewImage(event) {
    //     setImagePreview(URL.createObjectURL(event.target.files[0]));
    //     setImg(event.target.files[0].name);
    //     // console.log(event.target.files);
    // }
    function previewImage(e) {

        // console.log("API KEY", process.env.API_KEY);
        const selectedFile = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImagePreview(reader.result);
        }

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
            setImageFile(selectedFile);
        }
        // -------------------------
        // const file = event.target.files[0];
        const imageURL = URL.createObjectURL(selectedFile);
        setImagePreview(imageURL);
        // setImg(imageURL);
        console.log("image url: ", imageFile);
        cloudinary.v2.uploader
            .upload(imageFile,
                { public_id: "sample_woman" })
            .then(result => console.log("result: ", result));
    }


    // const postHandler = (e) => {
    //     e.preventDefault();
    //     console.log("url: ", image_url);
    //     postHand();
    //     setImg('')
    //     setTit('')
    //     setDes('')
    //     setImagePreview('')
    //     setImg('')
    //     setShowModal(!showModal)

    // }
    const postHandler = async (e) => {
        e.preventDefault();
        // ------------------------------
        const fData = new FormData();
        fData.append('file', imageFile);
        fData.append('upload_preset', 'ml_default');
        // Upload image to Cloudinary
        console.log("posting to cloudanry");
        axios.post('https://api.cloudinary.com/v1_1/dwhcgeanj/image/upload', fData)
            .then(res => {
                const imageUrl = res.data.secure_url;
                console.log("final url: ", imageUrl);
            })
            .catch(error => {
                console.error("Error uploading image to Cloudinary:", error);
            });

        // ------------------------------
        const formData = new FormData();
        formData.append('image', image_url); // Assuming 'image' is the field name expected by the backend
        formData.append('userName', username);
        formData.append('title', title);
        formData.append('des', description);

        const data = await fetch(api_base + "/user/post/new", {
            method: "POST",
            body: formData
        }).then(response => {
            console.log('posted successfully');
        }).catch(error => console.error(error));

        setImg('')
        setTit('')
        setDes('')
        setImagePreview('')
        setImg('')
        setShowModal(!showModal)
    }


    return (
        <div >
            <div className={classes.nav}>
                <div className={classes.srch}>
                    <SearchBar />
                </div>



                <button className={classes.button31} onClick={() => (setShowModal(true))}>Create Post</button>
                {showModal && <button className={classes.button32} onClick={() => (setShowModal(false))}>Close</button>}
                {isSignIn && <button className={classes.lgoutbtn} onClick={logOutHand}>Log Out</button>}
            </div>
            {/* Modal */}
            {/* <div className={classes.logout}>

            </div> */}

            <div className={classes.mod}>
                {showModal && (
                    <div className={classes.insModal}>
                        <form className={classes.inp} enctype="multipart/form-data" onSubmit={postHandler}>
                            <label htmlFor="imageInput">Select an image: </label>
                            <input className={classes.inp}
                                type="file"
                                id="image"
                                name='image'
                                onChange={previewImage}
                            />
                            <br />
                            <div className={classes.formDisp}>
                                {imagePreview && (
                                    <img id="imagePreview" src={imagePreview} alt="Selected Image" />
                                )}
                                <div className={classes.txtDisp}>
                                    <span>Enter Title</span>
                                    <input type="text" className={classes.inp} placeholder="Enter Title" value={title} onChange={(e) => (setTit(e.target.value))} />
                                    <br />
                                    <span >Description</span>
                                    <input type="text" className={`${classes.inp} ${classes.des}`} placeholder="Describe your Post" value={description} onChange={(e) => (setDes(e.target.value))} />
                                </div>
                            </div>
                            <button className={classes.postBtn} type="submit">Post</button>
                        </form>
                    </div>
                )}
            </div>

            {/* <div className={classes.post}>
                {postData.map((post, index) => (
                    <Post
                        key={index}
                        uName={post.username}
                        imageURL={post.image_url}
                        title={post.title}
                        des={post.description}
                        likes={post.likes}
                    />
                ))}
            </div> */}
        </div >
    );
};

export default Dashboard;