import React, { useState } from 'react'
import SearchIcon from '../../Images/icon-search.svg'
import SearchButton from './SearchButton/SearchButton'
import InputField from './InputField/InputField'
import './SearchApp.css'
import LocationIcon from '../../Images/icon-location.svg'
import BlogIcon from '../../Images/icon-website.svg'
import TwitterIcon from '../../Images/icon-twitter.svg'
import CompanyIcon from '../../Images/icon-company.svg'

import classnames from 'classnames';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [results, setResults] = useState({
        followers: 3938, public_repos: 8, following: 9, login: 'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4', name: 'The Octocat', created_at: '2011-01-25T17:11:51Z',
        location: 'San Francisco', blog: 'https://github.blog', company: '@github'
    })



    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    // Gets searched git user information and throws an error if invalid search
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!searchValue) {
            return setErrorMessage('Invalid User!')
        }

        try {
            const response = await fetch(`https://api.github.com/users/${searchValue}`)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json()
            setErrorMessage('')
            setResults(data)
            console.log(data)
        } catch (error) {
            setErrorMessage(`Invalid User!`)
        }
    }

    // Changes date form when displaying in results container
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    };


    return (

        <>

            <form className='SearchBar' onSubmit={handleSubmit}>
                <img className='SearchIcon' src={SearchIcon} alt='search icon' />
                <InputField className={errorMessage ? 'input-error' : ''} type='text' placeholder="Search GitHub username…" onChange={handleChange} spellCheck='false' />
                {errorMessage && <div className="error">{errorMessage}</div>}
                <SearchButton type='submit' />
            </form>



            <div className='ResultsContainer'>

                <div className='ProfileContainer'>


                    <img className='ProfileImg' src={results.avatar_url} alt='profile' />
                    <div className='ProfileChild'>
                        <h2>{results.name ? results.name : 'N/A'}</h2>
                        <span>@{results.login}</span>
                        <span>Joined {formatDate(results.created_at)}</span>
                    </div>
                </div>

                <p>{results.bio ? results.bio : 'This profile has no bio.'}</p>

                <div className='StatsContainer'>

                    <div className='StatsChild'>
                        <span>Repos</span>
                        <span>{results.public_repos ? results.public_repos : '0'}</span>

                    </div>

                    <div className='StatsChild'>
                        <span>Followers</span>
                        <span>{results.followers ? results.followers : '0'}</span>

                    </div>

                    <div className='StatsChild'>
                        <span>Following</span>
                        <span>{results.following ? results.following : '0'}</span>

                    </div>

                </div>

                <div className='LinksContainer'>
                    <div className={classnames("LinksChild", { 'not-available': !results.location })}>
                        <img className='ProfileIcon' src={LocationIcon} alt='Icon' />
                        <span >{results.location ? results.location : 'Not Available'}</span>
                    </div>
                    <div className={classnames("LinksChild", { 'not-available': !results.blog })}>
                        <img className='ProfileIcon' src={BlogIcon} alt='Icon' />
                        <a href={results.blog || 'https://github.blog'}>{results.blog ? results.blog : 'Not Available'}</a>
                    </div>
                    <div className={classnames("LinksChild", { 'not-available': !results.twitter_username })}>

                        <img className='ProfileIcon' src={TwitterIcon} alt='Icon' />

                        <a href={`https://twitter.com/${results.twitter_username}`}>{results.twitter_username ? results.twitter_username : 'Not Available'}</a>
                    </div>
                    <div className={classnames("LinksChild", { 'not-available': !results.company })}>

                        <img className='ProfileIcon' src={CompanyIcon} alt='Icon' />

                        <span>{results.company ? results.company : 'Not Available'}</span>
                    </div>
                </div>



            </div>

        </>

    )
}

export default SearchBar


