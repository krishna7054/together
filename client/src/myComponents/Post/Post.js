import Card from './../Card/Card'
import { useState } from 'react'
// import { AiOutlineInstagram } from "react-icons/aioutline";
import { FaRegComment, FaRegBookmark, FaShare, FaHeart } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg'
import { FcLikePlaceholder } from "react-icons/fc"
import { BsThreeDots } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import LikeIcon from './../LikeButton/LikeIcon';
import SendButton from './../SendButton/SendButton'
// import { IconContext } from 'react-icons';

import classes from './Post.module.css'
// import {
//     FaTh, FaThList
// } from "react-icons/fa";
// import {  } from 'react-icons/fa';

const Post = ({ userName, imageURL, title, des, likes, id }) => {

    const api_base = 'http://localhost:3001';

    const [like, setLike] = useState(false);
    const [newLikesCount, setLikes] = useState(likes)
    const [bookmark, setBookmark] = useState(false);

    const likeHandler = async () => {
        setLike(!like);
        // Update likes count based on current like state
        const newLikesCount = like ? likes : likes + 1;
        setLikes(newLikesCount);

        const data = {
            uName: userName,
            imgURL: imageURL
        };
        try {
            console.log("uname:", userName, "imgURl:", imageURL);
            const response = await fetch("http://localhost:3001/user/comment/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Set the Content-Type header to "application/json"
                },
                body: JSON.stringify(data) // Convert data to JSON string
            });
            if (response.ok) {
                console.log('liked successfully');
                // Handle successful response here
            } else {
                // Handle non-OK response here
                console.error(response);
            }
        } catch (error) {
            // Handle fetch error here
            console.error(error);
        }
    }




    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    const [hovered, setHovered] = useState(false)

    const iconStyle = {
        color: hovered ? 'red' : 'black',
        fontSize: hovered ? '1.5em' : '1em',
    };

    const handleMouseEnter = async (imageURL) => {
        setHovered(true)
        console.log(imageURL);




    }


    const handleMouseLeave = () => {
        setHovered(false);
    }
    const imageDes = (imageURL) => {

    }



    return (
        <Card className={classes.mainCard}>
            <section className={classes.top}>
                <div className={classes.postDetails}>
                    < CgProfile size={'25px'} /> <span>{userName} </span><span>  2d</span><BsThreeDots size={'25px'} className={classes.threeDots} />
                    {console.log()};
                </div>
            </section>

            <section className={classes.mid}>
                <div>
                    <img src={imageURL} alt='' />
                </div>
            </section>

            <section className={classes.bottom}>
                <div>
                    <div >
                        <section className={classes.icons} >
                            {/* INTERACTIVE ICONS */}

                            <div className={classes.lft}>
                                <span className={classes.like}> < AiFillLike size={'25px'} onMouseEnter={() => (handleMouseEnter())}
                                    onMouseLeave={handleMouseLeave} onClick={likeHandler}
                                    style={{ color: like ? "lightBlue" : "black" }} />     </span>

                                {/* <span><FaRegComment size={'25px'} />     </span><span><FaShare size={'25px'} />    </span> */}
                                <button onClick={() => (imageDes(imageURL))}>Try AI Image Describer </button>
                            </div>

                            <div className={classes.rt}>
                                <span className={classes.bookmark}>< FaRegBookmark onClick={bookmarkHandler} style={{ color: bookmark ? "lightPink" : "black" }} size={'25px'} /></span>
                            </div>


                        </section>

                        {/* NO OF LIKES */}
                        <section><span>{newLikesCount} </span> likes </section>

                        { }
                        <section><span>@</span> {title}</section>
                        <section><span > {des}</span></section>

                        <section>

                            <a href="#">View all comments</a>
                        </section>

                        {/* COMMENT FORM */}
                        <section>
                            <form method="POST">


                                <textarea aria-label="Add a comment…" placeholder="Add a comment…" autocomplete="off" autocorrect="off">
                                </textarea>
                                <div>
                                    <SendButton />
                                    {/* <button type="button">send</button> */}
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </section>

        </Card>
    )
}

export default Post; 