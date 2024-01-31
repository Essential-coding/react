import React from 'react'

const Buttons = ({text, url, type, icon}) => {
  return (
    <a className={type} href={url}>
      {text}
      <i className={icon}></i></a>
  )
}

export default Buttons