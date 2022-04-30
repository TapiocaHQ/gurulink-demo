import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const uploadsRoute = 'http://localhost:4000/api/upload_list'

export default function Home() {
  const [uploadList, setUploadList] = useState([])
  const [activeUploadIndex, setActiveUploadIndex] = useState(null)
  useEffect(() => {
    (async () => {
      const response = await fetch(uploadsRoute)
      const json = await response.json()
      setUploadList(json)
      if (json.length > 0) {
        setActiveUploadIndex(0)
      }
    })()
  }, [])

  const updateActiveUploadIndex = (newIndex) => {
    const count = uploadList.length
    setActiveUploadIndex((newIndex + count) % count)
  }

  const incrementActiveUploadIndex = () => {
    updateActiveUploadIndex(activeUploadIndex + 1)
  }

  const decrementActiveUploadIndex = () => {
    updateActiveUploadIndex(activeUploadIndex - 1)
  }

  const activeUpload = activeUploadIndex !== null ? uploadList[activeUploadIndex] : null

  return (
    <div>
      <Link to="/upload">Upload New Video</Link>
      <br />
      <button type="button" onClick={decrementActiveUploadIndex}>&lt;</button>
      <button type="button" onClick={incrementActiveUploadIndex}>&gt;</button>
      <h2 id='address'>{ activeUpload ? activeUpload.address : 'Address' }</h2>
      { activeUpload ? (
        <video id='video' controls type="video/mp4" src={`http://localhost:4000/videos/${activeUpload.video_file}`}></video>
      ) : null }
    </div>
  )
}