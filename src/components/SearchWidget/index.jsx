import React, {useEffect, useState} from 'react'
import { ShowCard, ShowList } from '../'
import { useSearch } from '../../contexts'

const SearchWidget = () => {
    const [inputValue, setInputValue] = useState('')
    const [searchString, setSearchString] = useState('')
    const {setShowData} = useSearch()

    useEffect(() => {
        const searchAPI = async () => {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
            const rawData = await response.json()
            const data = rawData.map((s) => s.show)
            setShowData(data)
        }

        searchAPI()
    }, [searchString])

    const handleInput = e => {
        const newInput = e.target.value
        setInputValue(newInput)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue('')
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} required />
        <input className="submit-btn" type="submit" value="Search"/>
    </form>
    <ShowList />
    </>
  )
}

export default SearchWidget