import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'

import FormItem from './FormItem'
import { submitGroupForm, addToGroupForm } from '../actions/form'

function Form() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const form = useSelector((state) => state.form)

  function submitForm() {
    dispatch(submitGroupForm(form))
  }

  function addInputField(){
    dispatch(addToGroupForm())
  }

  return <>
    <div>
          {form.students.map((student) => {
            return <FormItem key={student.id} id={student.id} student={student} />
          })}
          <button onClick={addInputField}>
            Add Student 
          </button>
          <button onClick={submitForm}>
            Submit 
          </button>
    </div>
  </>

}

export default Form
