import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShowCard } from "../../components"

const ShowPage = () => {
  const [show, setShow] = useState({image: {}, rating: {}})
  const {id} = useParams()

  useEffect(() => {
    const displayShow = async () => {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setShow(data)
    }

    displayShow()
}, [])

  return <ShowCard show={show}/>
}

export default ShowPage
