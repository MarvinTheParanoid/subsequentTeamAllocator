import React from 'react'
import { useDispatch } from 'react-redux'
import { updateForm } from '../actions/form'


function FormItem(props) {
  const dispatch = useDispatch()

  function update(e) {
    const input = e.target.value
    dispatch(updateForm(props.id, input))
  }

  // function deleteItem(){

  // }

  return <>
    <label>Name<input type="text" value={props.name} onChange={update}/></label>
    {/* <button onClick={deleteItem}/> */}
  </>
}

export default FormItem