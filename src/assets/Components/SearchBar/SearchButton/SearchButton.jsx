import React from 'react'
const SearchButton = ({type, onClick }) => {
  return (
      <button type={type} className='SearchButton' onClick={onClick}>Search</button>
  )
}

export default SearchButton
