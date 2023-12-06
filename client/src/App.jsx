import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import DashboardScreen from './pages/DashboardScreen';
import BookAppointment from './pages/BookAppointment';
import CentersScreen from './pages/CentersScreen';
import NewsScreen from './pages/NewsScreen';
import ReportScreen from './pages/ReportScreen';
import SuccessAppointment from './components/SuccessAppointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path='/dashboard' element={<DashboardScreen/>}/>
        <Route path='/appointment' element={<BookAppointment/>}/>
        <Route path='/centers' element={<CentersScreen/>}/>
        <Route path='/news' element={<NewsScreen/>}/>
        <Route path='/report' element={<ReportScreen/>}/>
        <Route path='/appointment/success' element={<SuccessAppointment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
