import React from 'react'
import '../Banner/Banner.css'
import Button from '@mui/material/Button';
// import Banner from '../../images/banner.png'


function Banner() {
    return (
        <div className='banner'>
            <div className='banner--info'>
            <h1> Get Out and Stretch your imagination</h1>
            <h3> plan a different kind of getway </h3>
            <Button variant="outlined">Explore More</Button>



            </div>
            
        </div>
    )
}

export default Banner
