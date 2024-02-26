import React, {useState, useContext, createContext} from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [showData, setShowData] = useState([])

    return (
        <SearchContext.Provider value={{showData, setShowData}}>
            {children}
        </SearchContext.Provider>
    )
} 

export const useSearch = () => useContext(SearchContext)