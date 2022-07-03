import React from 'react'
import '../styles/inputField.scss'

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder="Enter a task" className='input__box' />
      <button type='submit' className='input__submit' >Go</button>
    </form>
  )
}

export default InputField