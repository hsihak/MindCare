import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Layout from './layouts/Layout';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

const SubNavr = () => {
  return (
    <div className='border-white flex justify-around items-center text-white bg-subheaderBg py-3 uppercase mt-2'>
      <Link to='/dashboard'>
        <div className='flex items-center'>
          <IoChevronBackOutline />
          <p>Back</p>
        </div>
      </Link>
      <p className='text-lg'>Book Appointment</p>
      <div></div>
    </div>
  );
};

const BookAppointment = () => {
  const [formValues, setFormValues] = useState({
    appointmentId: '',
    userId: '', 
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    healthCard: '',
    appointmentId: '',
    selectedDateTime: dayjs(),
    dateOfAppointment: '',
    startTime: '',
    doctorAssigned: '',
    endTime: '',
  });
  const [isDataAccepted, setIsDataAccepted] = useState(false);
  const [isDateTimeValid, setIsDateTimeValid] = useState(false);
  const [errorBookAppointmentMessage, setErrorBookAppointmentMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [successMessage, setSuccessMessage] = useState('');
  const [dateOfAppointment, setDateOfAppointment] = useState('');
  const navigate = useNavigate();

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(':');
    const parsedHours = parseInt(hours, 10);
  
    const period = parsedHours >= 12 ? 'PM' : 'AM';
    const formattedHours = parsedHours % 12 || 12;
  
    return `${formattedHours}:${minutes} ${period}`;
  };

  // Add a dummy doctor list
    const dummyDoctors = ['Dr. Heisenberg', 'Dr. Los Pollos Hermanos'];

  const handleReset = () => {
    setFormValues({
      userId: '', 
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
      address: '',
      healthCard: '',
      doctorAssigned: 'Select a Doctor',
      startTime: '',
      endTime: '',
      dateOfAppointment: (0),
      doctorAssigned: '',
    });
  };

  const handleUserIdChange = (e) => {
    setFormValues({ ...formValues, userId: e.target.value });
  };

  const handleDateTimeChange = async (newDateTime) => {
      setFormValues({ 
          ...formValues, 
          selectedDateTime: newDateTime,
          dateOfAppointment: newDateTime.format('YYYY-MM-DD'),
          startTime: convertTo12HourFormat(newDateTime.format('HH:mm')),
          endTime: 1,
        });
      
      if (newDateTime) {
            
            setIsDateTimeValid(true);
            setErrorMessage('');
            
            
            const dateOfAppointment = newDateTime.format('YYYY-MM-DD');
            const startTime = convertTo12HourFormat(newDateTime.format('HH:mm'))

        
  
      try {
        const response = await axios.get(`http://localhost:5000/check-availability`, {
          params: {
            dateOfAppointment,
            startTime,
          },
        });
  
        if (response.status === 200) {
            const isAvailable = response.data.isAvailable;
  
            if (!isAvailable) {
              console.error('Selected date and time are not available');
              setErrorMessage('Selected date and time are not available');
            } else {
              // Reset error message and display success message
              setErrorMessage('');
              setSuccessMessage('Selected date and time are available!'); 
            }
          } else {
            console.error('Unexpected response when checking availability:', response);
            setErrorMessage('Error checking availability');
          }
  
        } catch (error) {
          console.error('Error checking availability:', error);
          setErrorMessage('Error checking availability');
        }}
  };
  

  const handleFetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get-user/${formValues.userId}`);

      if (response.status === 200) {
        const userData = response.data;
        setFormValues({
          ...formValues,
          firstName: userData.firstName,
          lastName: userData.lastName,
          dateOfBirth: userData.dateOfBirth,
          phoneNumber: userData.phoneNumber,
        });
      } else {
        console.error('Error fetching user data:', response);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    console.log("Form Values:", formValues);

    const requiredFields = ['userId', 'firstName', 'lastName', 'dateOfBirth', 'phoneNumber', 'healthCard', 'doctorAssigned', 'startTime'];
    const missingFields = requiredFields.filter(field => !formValues[field]);
  
    if (missingFields.length > 0) {
      const missingFieldsMessage = `Please fill in the following fields: ${missingFields.join(', ')}.`;
      setErrorBookAppointmentMessage(missingFieldsMessage);
      return;
    }
  
    try {
        const response = await axios.post('http://localhost:5000/book-appointment', {
            ...formValues,
          });
  
      if (response.status === 200) {
        // Data is accepted by the server, and the appointment is booked
        console.log(response.data); // This can be a success message from the server
        setIsDataAccepted(true);
        handleBookAppointment();
      } else if (response.status === 400) {
        // Date and time are not available
        console.error('Selected date and time are not available');
      } else {
        // Handle other status codes or error conditions
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      // Handle error conditions, e.g., show an error message to the user
    }
  };
  



  const handleBookAppointment = () => {
    // Additional logic if needed
    navigate('/appointment/success');
  };

  

  return (
    <>
      <Layout>
        <Navbar />
        <SubNavr />
        <div className='grid grid-cols-3 gap-4 mx-4 mt-10'>
          <form onSubmit={handleSubmit} className='gap-8 col-span-2 text-white'>
            <div className='flex flex-col'>
              <label className='mb-2'>User ID:</label>
              <input
                className='border rounded py-2 px-3 opacity-50 bg-gray-500'
                type='text'
                value={formValues.userId}
                onChange={handleUserIdChange}
              />
              <button type='button' onClick={handleFetchUser}>
                Fetch User
              </button>
            </div>
  <div className='flex flex-col'>
    <label className='mb-2'>Health Card:</label>
    <input
      className='border rounded py-2 px-3 opacity-50 bg-gray-500'
      type='text'
      value={formValues.healthCard}
      onChange={(e) => setFormValues({ ...formValues, healthCard: e.target.value })}
      required
    />
  </div>

  <div className='flex flex-col'>
    <label className='mb-2'>Date of Birth:</label>
    <input
      className='border rounded py-2 px-3 opacity-50 bg-gray-500'
      type='date'
      value={formValues.dateOfBirth}
      onChange={(e) => setFormValues({ ...formValues, dateOfBirth: e.target.value })}
      required
    />
  </div>

  <div className='flex flex-col'>
    <label className='mb-2'>Phone Number:</label>
    <input
      className='border rounded py-2 px-3 opacity-50 bg-gray-500'
      type='text'
      value={formValues.phoneNumber}
      onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value })}
      required
    />
  </div>

  <div className='flex flex-col'>
    <label className='mb-2'>Doctor Assigned:</label>
    <select
  className='border rounded py-2 px-3 opacity-50 bg-gray-500'
  value={formValues.doctorAssigned}
  onChange={(e) => setFormValues({ ...formValues, doctorAssigned: e.target.value })}
  required
>
  <option value='' disabled>Select Doctor</option>
  {dummyDoctors.map((doctor, index) => (
    <option key={index} value={doctor}>
      {doctor}
    </option>
  ))}
</select>
  </div>

  <div className='flex flex-col'>
    <label className='mb-2'>First Name:</label>
    <input
      className='border rounded py-2 px-3 opacity-50 bg-gray-500'
      type='text'
      value={formValues.firstName}
      onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
      required
    />
  </div>

  <div className='flex flex-col'>
    <label className='mb-2'>Last Name:</label>
    <input
      className='border rounded py-2 px-3 opacity-50 bg-gray-500'
      type='text'
      value={formValues.lastName}
      onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
      required
    />
  </div>

  <div className='flex flex-col'>
    <label className='mb-2'>Appointment ID:</label>
    <input
      className='border rounded py-2 px-3 opacity-50 bg-gray-500'
      type='text'
      value={formValues.appointmentId}
      onChange={(e) => setFormValues({ ...formValues, appointmentId: e.target.value })}
      required
    />
  </div>

            {/* Book Appointment and Reset Field Container */}
            <div className='flex gap-20 justify-center my-10'>
                <div>
                    <button className='text-white bg-green-600 py-4 px-6 rounded-full hover:bg-green-700 focus:outline-none focus:ring focus:border-green-400 transition'>
                        Book Appointment
                    </button>
                </div>

                <button className='text-white bg-red-600 py-4 px-6 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-400 transition' onClick={handleReset}>
                    Reset Above Fields
                </button>
            </div>
                    {errorBookAppointmentMessage && (
                <div className='text-red-600 mt-4'>{errorBookAppointmentMessage}</div>
                )}
          </form>

          <div className='col-span-1'>
            <h2 className='text-white'>Choose Appointment Date:</h2>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateTimePicker
    orientation='landscape'
    value={formValues.selectedDateTime || dayjs()}
    onChange={handleDateTimeChange}

        className='border rounded py-2 px-3 opacity-50 bg-gray-500'
  />
  
    </LocalizationProvider>

            {/* Display success message */}
            {successMessage && !errorMessage && (
              <div className='text-green-600 mt-4'>{successMessage}</div>
            )}
            {/* Display error message */}
            {errorMessage && (
              <div className='text-red-600 mt-4'>{errorMessage}</div>
            )}

          </div>
        </div>
      </Layout>
    </>
  );
};

export default BookAppointment;
