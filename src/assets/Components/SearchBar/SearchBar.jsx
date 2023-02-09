import React, { useState } from 'react'
import SearchIcon from '../../Images/icon-search.svg'
import SearchButton from '../SearchBar/SearchButton/SearchButton'
import InputField from '../SearchBar/InputField/InputField'
import './SearchBar.css'


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState({})

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://api.github.com/users/${searchValue}`)
        const data = await response.json()
        setResults(data)
        console.log(data)
    }

    return (

        <>
        <form className='SearchBar' onSubmit={handleSubmit}>
            <img className='SearchIcon' src={SearchIcon} alt='search icon' />
            <InputField type='text' placeholder="Search GitHub username…" onChange={handleChange}/>
            <SearchButton type='submit'  />
            
        </form>


        {Object.keys(results).length !== 0 && (

<div className='ResultsContainer'>

                <div className='ProfileContainer'>


                <div className='ProfileImg'></div>

                



                    {/* <p>Repos{results.public_repos}</p> */}
                </div>
                </div>

            )}
        </>

    )
}

export default SearchBar
