import React from 'react'
import '../Banner/Banner.css'
import { useState } from "react";
import Button from '@mui/material/Button';
import Search from '../Search/Search.js'
import {useNavigate} from 'react-router-dom'

function Banner() {
    const navigate = useNavigate();
    function navigateLink() {
        navigate('/search')
      }
    const [showSearch, setShowSearch] = useState(false);
        return (
        <div className='banner'>
        <div className='banner--search'>
        {showSearch && <Search />}
            <Button 
            onClick ={()=> setShowSearch(!showSearch)}
            variant="outlined"
            className='banner--explore--btn'>{showSearch ? "Hide": "Search Dates"}</Button>
            </div>
            <div className='banner--info'>
            <h1> Get Out and Stretch your imagination</h1>
            <h3> plan a different kind of getway </h3>
            <Button 
            onClick={navigateLink}
            variant="outlined" 
            >Explore More</Button>



            </div>
            
        </div>
    )
}

export default Banner
