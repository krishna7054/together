import  { createContext,useState } from "react";
import ExploreSmall from '../../Explore/ExploreSmall'
import Images from "../../Explore/Images";
import SearchBar from "../../myComponents/Search/SearchBarExp";
import classes from './Explore.module.css'
import UseAxios from "../../Hooks/UseAxios";

export const ImageContext = createContext();

function About() {
  // var page=1;
  var [page, setPage]=useState(1);
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = UseAxios(`search/photos?page=${page}&query=mountains&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  
 

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

    return (
        <ImageContext.Provider value={value}>
          <div className={classes.k1}>
            <ExploreSmall />
            <div className={classes.k}>
            <SearchBar page={page}/>
            </div>
            </div>
            <div className={classes.k2}>
            <Images/>
            </div>
            <div>
             
            </div>
           
           
            
        </ImageContext.Provider>
    );
};
export default About;