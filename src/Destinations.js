import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Destinations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
      .get('https://atlas-obscura-api.herokuapp.com/api/atlas/destinations')
      .then(resp => {
        console.log(resp.data)
        setLocations(resp.data)
      })
  }, [])

  return (
    <>
      {locations.map(location => {
        return <>{location.destinations}</>
      })}
    </>
  )
}
