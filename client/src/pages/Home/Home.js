import React, { useState } from 'react'

const Home = () => {

    const [ bookState, setBookState ] = useState({
        search: '',
        book: []
    })

    bookState.handleInputchange = event => {
        setBookState({ ...bookState, [event.target.name]: event.target.value })
    }

    bookState.handleSearchAPI = event => {
        event.preventDefault()
    }

    return(
        <>
            <h1>Search for your favorite novels.</h1>
            <form>
                <p>
                    <label htmlFor="search">Search</label>
                    <input 
                        type="text" 
                        name="search"
                        value={bookState.search}
                        onChange={bookState.handleInputchange} />
                </p>
                <p>
                    <button onClick={bookState.handleSearchAPI}>Search Novel</button>
                </p>
            </form>
        </>
    )
}

export default Home