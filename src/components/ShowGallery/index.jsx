import { useEffect, useState } from "react"
import { GalleryImage } from "../"
import { Link } from "react-router-dom"

const ShowGallery = () => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        const displayShows = async () => {
            const response = await fetch("https://api.tvmaze.com/shows")
            const data = await response.json()
            setShows(data)
        }

        displayShows()
    }, [])

  return (
    <div className="shows">
        {shows.map(show => (
            <Link to={`/shows/${show.id}`} key={show.id}>
            <GalleryImage show={show} />
            </Link>
        ))}
    </div>
  )
}

export default ShowGallery

