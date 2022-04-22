import React from 'react'
import '../Header/Header.css'
import HederIcon from '../../images/airbnb12.png'
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

function Header() {
    return (
        <div className='header'>
        <img
            className='header--icon'
            src={HederIcon}
            alt='airbnb-icon'
        />
        <div className='header--center'>
            <input type='text' />
            <SearchIcon/>
        </div>
        <div className='header--right'>
            <p>Become a host</p>
            <PublicIcon/>
            <ExpandMoreIcon/>
            <Avatar/>

        </div>
            
        </div>
    )
}

export default Header
