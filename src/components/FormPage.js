import React from 'react'
import Form from './Form'

const FormPage = (props) => {
  return (
    <Form availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
  )
}

export default FormPage