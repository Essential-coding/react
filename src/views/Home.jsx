import React from 'react'
import Header from "../components/Header"
import Showcase from "../components/Showcase"
import Footer from '../components/Footer'
import Sponsors from "../components/Sponsors"
import Features from "../components/Features"
import About from "../components/About"
import Services from "../components/Services"
import ChooseUs from '../components/ChooseUs'
import ProjectAndCase from '../components/Project_Case'
import Team_members_testimonials from "../components/Team_members_testimonials"
import ArticlesNews from '../components/Article_news'
import SignUpSection from '../components/sign-up'




const Home = () => {
  return (
    <>
    <Header />
    <Showcase/>
    <Sponsors/>
    <Features/>
    <About/>
    <Services/>
    <ChooseUs/>
    <ProjectAndCase/>
    <Team_members_testimonials/>
    <ArticlesNews/>
    <SignUpSection/>
    <Footer />

    </>
  )
}

export default Home