import React from 'react'
import Layout from '../pages/layouts/Layout'
import {Link} from 'react-router-dom'
import { IoChevronBackOutline } from "react-icons/io5";
import Logo from '../assets/mindcare-logo.png';
import CheckMark from '../assets/Icon-checkmark-circle.png'
import Navbar from './Navbar';

const SuccessAppointment = () => {
  return (
    <div>
        <Layout>
        <Navbar/>
        <div className=' border-white flex text-white bg-subheaderBg uppercase'>
            <div className='flex items-center pl-6'>
                <IoChevronBackOutline />
                <Link to='/appointment'>
                    <p className=' text-lg'>Home</p>    
                </Link>
            </div>
        </div>

        <div className='flex justify-center items-center flex-col text-white text-2xl h-screen'>
            <img src={Logo} alt="mind care logo" className=" w-1/4 bg-transparent" />
            <p>Appointment Booked Successfully</p>
            <p>Thank you for Choosing MindCare</p>
            <p>Further Information will be Send on your Email</p>
            <div className=' pt-10'>
                <img src={CheckMark} alt="checkmark icon" className=" w-40" />
            </div>
        </div>
        </Layout>
    </div>
  )
}

export default SuccessAppointment
