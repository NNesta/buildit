import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InnovativeSection from '../components/InnovativeSection';
import OwnerSection from '../components/OwnerSection';
import PropertiesSection from '../components/PropertiesSection';
import SocialSection from '../components/SocialSection';
import ContactSection from '../components/ContactSection';


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Buildit Home</title>
        <meta name="description" content="Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/Switch.svg" />
      </Head>
      <div className=''>
        <Navbar/>
         <Header/>
         <InnovativeSection/>
         <OwnerSection/>
         <PropertiesSection/>
         <SocialSection/>
         <ContactSection/>
         <Footer/>
     </div>
    </div>
  )
}
