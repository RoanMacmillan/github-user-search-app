
import React, { useState } from 'react'

function InputField({type = 'text', placeholder, value, onChange, spellCheck, className}) {

  return (
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        spellCheck={spellCheck}
        className={className}
      />
  )

  }

 
  
export default InputField
