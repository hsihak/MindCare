import {useState, React} from 'react'
import Navbar from '../components/Navbar'
import Layout from './layouts/Layout'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

const SubNavr = () => {
    return (
    <div className=' border-white flex justify-around items-center text-white bg-subheaderBg py-3 uppercase mt-2'>
            <Link to='/dashboard'>
              <div className='flex items-center'>
                    <IoChevronBackOutline/>
                    <p>Back</p>
                </div>
            </Link>
        <p className=' text-lg'>Book Appointment</p>    
        <div></div>
    </div>
    )
}

const BookAppointment = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        phoneNumber: "",
        address: "",
        hearthCardNumber: "",
    })


    const handleReset = (e) => {
        e.preventDefault();
        
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
    //   onSubmit({ email, password });
    setFormValues([...record])

    };

  return (
    <>
        <Layout>
            <Navbar/>
            <SubNavr/>
            <div className='grid grid-cols-3 gap-4 mx-4 mt-10'>
                <form onSubmit={handleSubmit} className=' gap-8 col-span-2 text-white' >
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            First Name:
                        </label>
                        <input className="border rounded py-2 px-3 opacity-50 bg-gray-500 border-gray-200" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Last Name:
                        </label>
                        <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            D.O.B
                        </label>
                        <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Phone:
                        </label>
                        <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Address:
                        </label>
                        <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Health Card:
                        </label>
                        <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* Book Appointment and Reset Field Container */}
                    <div className=' flex gap-20 justify-center mt-10'>
                        <Link to='/appointment/success'>
                            <button className=' text-white bg-green-600 py-4 px-2 rounded-full'>Book Appointment</button>
                        </Link>
                        <button className=' text-white bg-red-600 py-4 px-2 rounded-full'>Reset Above Fields</button>
                    </div>
                </form>

                <div className=' col-span-1'>
                    <h2 className='text-white'>
                        Choose Appointment Date:
                    </h2>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker orientation="landscape" />
                    </LocalizationProvider>
                </div>

            </div>
        </Layout>
    </>
  )
}

export default BookAppointment
