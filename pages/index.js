import Head from 'next/head'
import Navbar from '../components/generals/Navbar';
import HomeHeroSection from '../components/sections/homeSections/HomeHeroSection';
import HomeInnovativeSection from '../components/sections/homeSections/HomeInnovativeSection';
import HomeAboutSection from '../components/sections/homeSections/HomeAboutSection';
import HomePropertiesSection from '../components/sections/homeSections/HomePropertiesSection';
import HomeSocialSection from '../components/sections/homeSections/HomeSocialSection';
import HomeContactSection from '../components/sections/homeSections/HomeContactSection';
import Footer from '../components/generals/Footer';


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Buildit Home</title>
        <meta name="description" content="Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/Switch.svg" />
      </Head>
      <div className=''>
         <HomeHeroSection/>
         <HomeInnovativeSection/>
         <HomeAboutSection/>
         <HomePropertiesSection/>
         <HomeSocialSection/>
         <HomeContactSection/>
     </div>
    </div>
  )
}
