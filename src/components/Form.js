import { React, useState } from 'react'
import Clicker from './Button';
import { Typography } from '@mui/material';

const Form = (props) => {
    const [fullName, setFullName] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState('');
    const [times, setTimes] = useState('');
    const [eventType, setEventType] = useState('');

    const getIsFormValid = () => {
        return (
        fullName &&
        guests &&
        date !== '' &&
        times !== 'select' &&
        eventType !== 'select'
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitForm(e)
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <div class="form">
        <Typography variant="h1" component='h1'>
            Complete to Form
        </Typography>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <div className="Field">
                <label>
                Full name <sup>*</sup>
                </label>
                <input
                value={fullName}
                onChange={(e) => {
                    setFullName(e.target.value)
                }}
                placeholder="Full name" />
            </div>
            <div className="Field">
                <label>Number of guests</label>
                <input value={guests}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                onChange={(e) => {
                setGuests(e.target.value)
                }}
                />
            </div>
            <div className="Field">
                <label>
                    Date
                </label>
                <input value={date}
                type='date'
                onChange={(e) => {
                    handleChange(e.target.value)
                }} />
            </div>
            <div className="Field">
                <label>Choose time</label>
                <select
                value={times}
                onChange={(e) => {
                setTimes(e.target.value);
                }}>
                    <option value="select">Select a time</option>
                    {
                        props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>
                            {availableTimes}
                        </option>})
                    }
                </select>
            </div>
            <div className="Field">
                <label>
                Type of event <sup>*</sup>
                </label>
                <select
                value={eventType}
                onChange={(e) => {
                setEventType(e.target.value);
                }}
                >
                <option value="select">Select event</option>
                <option value="birthday">Birthday</option>
                <option value="party">Party</option>
                <option value="wedding">Wedding</option>
                </select>
            </div>
            <Clicker content="Submit the form" type='submit' disabled={!getIsFormValid()} />
            </fieldset>
        </form>
        </div>
  );
};

export default Form