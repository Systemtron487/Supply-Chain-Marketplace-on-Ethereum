import "../styles/globals.css";

//Internal Import 
import {TrackingProvider} from '../Conetxt/TrackingContext'
import { NavBar , Footer } from "../Components"

export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <NavBar></NavBar>
    <Component {...pageProps} />
    <div id="modal"></div>
    </TrackingProvider>
    <Footer></Footer>
    </>
  ) 
}
