import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact_address = () => {
  return (
    <>
      <div className='container-fluid info'>
        <div className='container address'>
          <div className='location info-detail'>


            <div className='info-image'>

            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />


            </div>

            <div className='info-container container'>

              <h5 className='address-headline'>

                Visit Us
              </h5>



              <p className='info-text'>
              Sveavägen 31
              </p>

              <p className='info-text'>
              111 34 STOCKHOLM
              </p>

            </div>

          </div>

          <div className='call info-detail'>

            <div className='info-image'>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>



            <div className='info-container container'>

              <h5 className='address-headline'>
                Call us

              </h5>

              <p className='info-text'>
                +46 (8) 121 470 50
              </p>

              <p className='info-text'>
              +46 (8) 121 470 51
              </p>
            </div>

          </div>

          <div className='email info-detail'>

            <div className='info-image'>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>


            <div className='info-container container'>


              <h5 className='address-headline'>

                Email us

              </h5>



              <p className='info-text'>
              <a href="/home">info@crito.com</a>
              </p>

              <p className='info-text'>
              <a href="/home">support@crito.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>

     
    </>
  )
}

export default Contact_address