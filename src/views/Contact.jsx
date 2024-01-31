import React from 'react';
import Header from '../components/Header';
import Contact_headline from '../components/Contact_headline';
import Contact_address from '../components/Contact_address';
import Registration_form from '../components/Registration_form';
import Contact_Map from '../components/Contact_Map';
import Footer from "../components/Footer";


const Contact = () => {
  return (
    <>
    <Header/>
    <Contact_headline/>
    <Contact_address/>
    <Registration_form/>
    <Contact_Map/>
    <Footer />
    </>
  )
}

export default Contact