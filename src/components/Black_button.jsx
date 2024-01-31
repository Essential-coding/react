import React from 'react'

const Black_button = ({text, url, type, icon}) => {
  return (
    <a className={type} href={url}> {text} <i className={icon}></i></a>
  )
}

export default Black_button


