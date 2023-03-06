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

const Post = () => {

    const [like, setLike] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    const likeHandler = () => {
        setLike(!like);
    }
    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    const [hovered, setHovered] = useState(false)

    const iconStyle = {
        color: hovered ? 'red' : 'black',
        fontSize: hovered ? '1.5em' : '1em',
    };

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }



    return (
        <Card className={classes.mainCard}>
            <section className={classes.top}>
                <div className={classes.postDetails}>
                    < CgProfile size={'25px'} /> <span>Arrushi </span><span>  2d</span><BsThreeDots size={'25px'} className={classes.threeDots} />
                </div>
            </section>

            <section className={classes.mid}>
                <div>
                    <img src="https://cdn.wallpapersafari.com/16/69/rcj6Cz.jpg" alt='' />
                </div>
            </section>

            <section className='bottom'>
                <div>
                    <div >
                        <section className='icons' >
                            {/* INTERACTIVE ICONS */}
                            <span className={classes.like}> < AiFillLike size={'25px'} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} onClick={likeHandler} style={{ color: like ? "lightBlue" : "black" }} />     </span>

                            <span><FaRegComment size={'25px'} />     </span><span><FaShare size={'25px'} />    </span><span className={classes.bookmark}>< FaRegBookmark onClick={bookmarkHandler} style={{ color: bookmark ? "lightPink" : "black" }} size={'25px'} /></span>
                        </section>

                        {/* NO OF LIKES */}
                        <section><span>99 </span> likes</section>

                        { }
                        <section><span >@Atrayee</span> Trying to ragain curiosity</section>
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