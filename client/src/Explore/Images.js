import { useContext } from 'react'
import classes from './Images.module.css'
import { ImageContext } from '../Sidebar/pages/Explore'
import Image from './Image'
import Skeleton from './Skeleton'

const Images =() =>{

    const {response, isLoading, searchImage}= useContext(ImageContext);
    return (
        <>
         <div className={classes.l}>
           <h1 className={classes.ca}>Results for {searchImage || 'Mountain'}</h1>
           <div className={classes.l2}>
           {isLoading ? <Skeleton item={20}/> : response.map((data,key) => <Image key={key} data={data}/>)}
           </div>
        </div>
        </>
       
    )
}

export default Images