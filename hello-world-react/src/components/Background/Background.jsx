import React from 'react'

const Background = ( { children, style } ) => {
  return (
    <div style={{backgroundColor: '#DDFDFF', width: "100%", height: "min(100%, 100vh)", position: "absolute", ...style}}>{children}</div>
  )
}

export default Background