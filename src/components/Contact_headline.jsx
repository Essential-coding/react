import React from 'react'
import Lines from "../assets/lines-showcase.svg"

const Contact_headline = () => {
  return (
    <>
    <div className='container-fluid headline'>
        <div className='container title-container'>
            <div className='title'>
                <a href="/home">Home</a>
            </div>
            <div className='title'>
                <a href="/contact">Contact</a>
            </div>
        </div>
        <h1>Lets Connect</h1>
        <img src={Lines} alt="" />
    </div>
    
    </>
  )
}

export default Contact_headline