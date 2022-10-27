import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/generals/Navbar';
import AboutHeroSection from '../../components/sections/aboutSections/AboutHeroSection';
import AboutStatisticsSection from '../../components/sections/aboutSections/AboutStatisticsSection';
import AboutTeamSection from '../../components/sections/aboutSections/AboutTeamSection';
import Footer from '../../components/generals/Footer';

function About() {
  return (
    <div>
        <Head>
        <title>Buildit About</title>
        <meta name="description" content="Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/Switch.svg" />
      </Head>
        <div>
   <AboutHeroSection/>
   <AboutStatisticsSection/>
   <AboutTeamSection/>
   </div>
    </div>
  )
}

export default About