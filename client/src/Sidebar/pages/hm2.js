import React from "react";
import { useState } from 'react'
import Card from '../../myComponents/Card/Card'
import Post from '../../myComponents/Post/Post'
import SearchBar from "../../myComponents/Search/SearchBar";
import classes from './Home.module.css'
import CrtBtn from "../../myComponents/Buttons/create/CrtBtn";
import { useEffect } from "react";
// import SearchBar from "../../../../myComponents/SendButton/SearchBar";


const Dashboard = () => {


    const api_base = 'http://localhost:3001';
    const un = localStorage.getItem('userName')
    const [username, setUser] = useState(un)
    // const [image_url, setImg] = useState('')
    const [title, setTit] = useState('')
    const [description, setDes] = useState('')
    const [imageFile, setImageFile] = useState(null);

    // const [imagePreview, setImagePreview] = useState('');


    const [isSignIn, setSignIn] = useState(localStorage.getItem('isSignIn'))


    // fetching data

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                console.log("fetching resp");
                const response = await fetch(api_base + "/allposts/all"); // Make a GET request to the backend API endpoint
                console.log("fetched");
                console.log("response", response);
                if (response.ok) {
                    const data = await response.json(); // Parse the response data as JSON
                    console.log("data: ", data);
                    if (Array.isArray(data)) {
                        setPosts(data); // Update the 'posts' state with the received data
                    } else {
                        console.error("Data received from API is not an array.");
                    }
                } else {
                    console.error("API response not successful:", response);
                }
            } catch (error) {
                console.error(error);
                // Handle error appropriately
            }
        };
        fetchPosts();
    }, []);




    const logOutHand = () => {
        localStorage.removeItem('isSignIn')
        window.location.reload(false)

    }
    const [showModal, setShowModal] = useState(false);
    const [imagePreview, setImagePreview] = useState("");


    function previewImage(event) {

        const file = event.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setImagePreview(imageURL);
        // setImg(imageURL);
        setImageFile(file);
        console.log(imageFile, 49);

    }



    const postHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", imageFile)
        // formData.append('image', image_url); // Assuming 'image' is the field name expected by the backend
        formData.append('userName', username);
        formData.append('title', title);
        formData.append('des', description);

        const data = await fetch(api_base + "/user/post/new", {
            method: "POST",
            body: formData
        }).then(response => {
            console.log('posted successfully');
            setTit('')
            setDes('')
            setImagePreview('')
            setImageFile(null)
            setShowModal(!showModal)
        }).catch(error => console.error(error));

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



            <div className={classes.post}>
                {/* {posts.map(post => (
                    // Map through the posts array and render Post component for each post
                    <Post
                        key={post._id} // Assuming each post has a unique '_id' field in MongoDB
                        title={post.data.post.title}
                        description={post.data.post.des}
                        noOfLikes={post.data.post.noOfLikes}
                        imageURL={post.data.post.img_url}
                    />
                ))} */}
                <h3>bhai aa ja</h3>
                <h1>{console.log("posts: ", posts)}</h1>
                {posts}
                {/* <div>
                    {posts.length > 0 ? (
                        posts.map(post => (
                            // Render each post item
                            <div key={post.id}>
                                <h2>{post.data.post.title}</h2>
                                <h3>{post.data.post.des}</h3>
                                <h3>{post.data.post.noOfLikes}</h3>
                                <h3>imageURL={post.data.post.img_url}</h3>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div> */}

                {/* {posts.map((post, index) => (
                    // Map through the posts array and render Post component for each post
                    <div key={index}>
                        <h2>{post.data.post.title}</h2>
                        <h3>{post.data.post.des}</h3>
                        <h3>{post.data.post.noOfLikes}</h3>
                        <h3>imageURL={post.data.post.img_url}</h3>

                    </div>
                ))} */}
            </div>
        </div >
    );
};

export default Dashboard;