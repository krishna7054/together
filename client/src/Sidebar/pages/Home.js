import React from "react";
import { useState } from "react";
import Card from "../../myComponents/Card/Card";
import Post from "../../myComponents/Post/Post";
import SearchBar from "../../myComponents/Search/SearchBar";
import classes from "./Home.module.css";
import CrtBtn from "../../myComponents/Buttons/create/CrtBtn";
import { useEffect } from "react";
// import SearchBar from "../../../../myComponents/SendButton/SearchBar";

const Dashboard = () => {
  const api_base = "http://localhost:3001";
  const un = localStorage.getItem("userName");
  const [username, setUser] = useState(un);
  // const [image_url, setImg] = useState('')
  const [title, setTit] = useState("");
  const [description, setDes] = useState("");
  const [imageFile, setImageFile] = useState(null);

  // const [imagePreview, setImagePreview] = useState('');

  const [isSignIn, setSignIn] = useState(localStorage.getItem("isSignIn"));

  // fetching data

  const [posts, setPosts] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [t, setT] = useState("");
  const [d, setD] = useState("");
  const [nol, setNol] = useState("");
  const [iU, setIu] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("fetching resp");
        const response = await fetch(api_base + "/allposts/all"); // Make a GET request to the backend API endpoint
        console.log("fetched");
        console.log("response", response);
        if (response.ok) {
          setFetched(true);
          const data = await response.json(); // Parse the response data as JSON
          console.log("data: ", data);
          if (Array.isArray(data)) {
            setPosts(data); // Update the 'posts' state with the received data
            console.log("data: ", data);
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
    localStorage.removeItem("isSignIn");
    window.location.reload(false);
  };
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
    formData.append("image", imageFile);
    // formData.append('image', image_url); // Assuming 'image' is the field name expected by the backend
    formData.append("userName", username);
    formData.append("title", title);
    formData.append("des", description);

    const data = await fetch(api_base + "/user/post/new", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("posted successfully");
        setTit("");
        setDes("");
        setImagePreview("");
        setImageFile(null);
        setShowModal(!showModal);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className={classes.nav}>
        <div className={classes.srch}>
          <SearchBar />
        </div>

        {/* <button className={classes.button31} onClick={() => (setShowModal(true))}>Create Post</button> */}

        <div>
          <button
            type="button"
            className={classes.button31}
            onClick={() => setShowModal(true)}
          >
            <span className={classes.buttontext}>Create Post</span>
            <span className={classes.buttonicon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                class="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line>
              </svg>
            </span>
          </button>
        </div>

        {/* {showModal && <button className={classes.button32} onClick={() => (setShowModal(false))}>Close</button>} */}

        {/* {isSignIn && <button className={classes.lgoutbtn} onClick={logOutHand}>Log Out</button>} */}
        {isSignIn && (
          <button className={classes.lgoutbtn} onClick={logOutHand}>
            Log Out
          </button>
        )}
      </div>
      {/* Modal */}
      {/* <div className={classes.logout}>

            </div> */}

      <div className={classes.mod}>
        <div className={classes.cs}>
          {showModal && (
            <button
              className={classes.button32}
              onClick={() => setShowModal(false)}
            >
              <span className={classes.text}>Close</span>
              <span className={classes.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
              </span>
            </button>
          )}
          {showModal && (
            <div className={classes.insModal}>
              <form
                className={classes.inp}
                enctype="multipart/form-data"
                onSubmit={postHandler}
              >
                <label htmlFor="imageInput">Select an image: </label>
                <input
                  className={classes.inp}
                  type="file"
                  id="image"
                  name="image"
                  onChange={previewImage}
                />
                <br />
                <div className={classes.formDisp}>
                  {imagePreview && (
                    <img
                      id="imagePreview"
                      src={imagePreview}
                      alt="Selected Image"
                    />
                  )}
                  <div className={classes.txtDisp}>
                    <span>Enter Title</span>
                    <input
                      type="text"
                      className={classes.inp}
                      placeholder="Enter Title"
                      value={title}
                      onChange={(e) => setTit(e.target.value)}
                    />
                    <br />
                    <span>Description</span>
                    <input
                      type="text"
                      className={`${classes.inp} ${classes.des}`}
                      placeholder="Describe your Post"
                      value={description}
                      onChange={(e) => setDes(e.target.value)}
                    />
                  </div>
                </div>
                {/* <button className={classes.postBtn} type="submit">Post</button> */}

                <button className={classes.postBtn} type="submit">
                  <span className={classes.label}>Post</span>
                  <span className={classes.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </span>
                </button>
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
          {/* <h1>{console.log("posts: ", posts)}</h1> */}
          {/* {posts} */}
          {fetched && (
            <div>
              {console.log("inside div")}
              {posts?.length > 0 ? (
                posts
                  .slice()
                  .reverse() // Reverse the array
                  .map((post, index) => (
                    // Render each post item
                    <Post
                      key={index}
                      id={post._id}
                      imageURL={post.img_url}
                      title={post.title}
                      des={post.des}
                      userName={post.userName}
                      likes={post.noOfLikes}
                    />
                  ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}

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
      </div>
    </div>
  );
};

export default Dashboard;
