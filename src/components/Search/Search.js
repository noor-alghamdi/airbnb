import React from 'react'
import '../Search/Search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";



function Search() {
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    

    const selectionRange = {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',  
        }
        endDate.setDate(endDate.getDate() + 1);

        function handleSelect(ranges){
            setStartDate(ranges.selection.startDate)
            setEndDate(ranges.selection.endDate)
        }  
        
    return (
        <div className='search'>
        <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}/> 
        </div>
    )
}

export default Search
