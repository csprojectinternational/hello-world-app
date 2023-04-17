import React from 'react'
import { Link } from 'react-router-dom'
import YellowButton from '../YellowButton/YellowButton'

const BackButton = () => {
  return (
    <Link to="/" style={{textDecoration: "none", position: "absolute", left: "20px", top: "calc(50px + 5vmin)" }}>
      <YellowButton style={{height: '5vmin', fontSize: 'min(3vmin, 1rem)'}}>BACK</YellowButton>
    </Link>
  )
}

export default BackButton