import React from 'react'
import {Link} from 'react-router-dom'

const SubNavbar = () => {
  return (
    <div className=' border-white flex justify-around text-white bg-subheaderBg py-3 uppercase mt-2'>
        <Link to='/appointment'>
            <p className=' text-lg'>Book Appointment</p>    
        </Link>
        <Link to='/centers'>
            <p className=' text-lg'>Centers</p>
        </Link>
        <Link to='/news'>
            <p className=' text-lg'>News</p>
        </Link>
        <Link to='/report'>
            <p className=' text-lg'>Report</p>
        </Link>

    </div>
  )
}

export default SubNavbar
