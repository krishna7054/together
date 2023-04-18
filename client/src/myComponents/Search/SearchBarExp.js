
import  { useContext, useEffect, useState } from 'react';
import classes from './SearchBarExp.module.css'
import { ImageContext } from '../../Sidebar/pages/Explore';


const SearchBarExp = () => {
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    // };

    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext);
    // var [page, setPage]=useState(1);

    // useEffect(()=>{
    //     handleButtonSearch()
    // },[page])
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search logic here, such as making a API call
        console.log(`Searching for: ${searchValue}`);
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
      }

      const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchValue("");
        setSearchImage(searchValue);
      }

      const handleEnterSearch = e => {
        if(e.key === 'Enter') {
          fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
          setSearchValue("");
          setSearchImage(searchValue);
        }
    }

    return (
        <div>

        <div className={classes.search}>

            <form onSubmit={handleSubmit} className={classes.form}>

                <input className={classes.input} placeholder="Search Users..." value={searchValue} type="text" onChange={handleInputChange} onKeyDown={handleEnterSearch} />
                <button  onClick={handleButtonSearch} className={classes.reset} type="submit">Search</button>
            </form>
        </div>
                {/* <div className={classes.pagei}>
                    <button onClick={()=>{
                        setPage(page+1);
                        console.log("clicked")}
                    }>Next</button>
                </div> */}
        </div>
    );
};

export default SearchBarExp;
