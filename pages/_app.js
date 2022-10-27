import '../styles/globals.css';
import Navbar from '../components/generals/Navbar';
import Footer from '../components/generals/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>)
}

export default MyApp
