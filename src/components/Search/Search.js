import React from 'react'
import '../Search/Search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'





function Search() {
    const navigate = useNavigate();
    function navigateLink() {
        navigate('/search')
    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <EmojiPeopleOutlinedIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
        <Button onClick={navigateLink}> Search Airbnb</Button>

        </div>
    )
}

export default Search
