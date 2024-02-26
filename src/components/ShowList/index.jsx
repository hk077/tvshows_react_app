import React from 'react'
import ShowCard from '../ShowCard'
import { useSearch } from '../../contexts'

const ShowList = () => {
  const { showData } = useSearch()
  

  return (
    <>
      {showData.map(s => 
    s.image ? <ShowCard key={s.id} show={s} /> : ''
)}
</>
  )
}

export default ShowList