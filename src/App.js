import './App.css';
import { React, useReducer } from 'react';
import Nav from './components/Nav.js'
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage';
import FormPage from './components/FormPage'

function App() {

  const seedRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
      return (s = s * a % m) / m;
    }
  }

  const fetchAPI = (date) => {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() <0.5){
        result.push(i + ':00');
      }
      if(random() > 0.5){
        result.push(i+':30');
      }
    }

    return result;
  }

  const submitAPI = (formData) => {
    return true
  }
  const initialState = {availableTimes: fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState)

  function updateTimes(state, data) {
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate()
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('./confirmed')
    }
  }

  return (
    <>
    <Nav/>
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reservation' element={<FormPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
    </main>
    <Footer/>
    </>
  );
}

export default App;
