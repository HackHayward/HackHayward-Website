import './App.css';
import NotificationBar from './Components/Notification';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import PilotFalcon from './Components/PilotFalcon';
import Sponsor from './Components/Sponsor';
import ReactGA from 'react-ga4';
import { useState, useEffect } from 'react';

function App() {
    //Scroll to top on load
    useEffect(()=>{
        setTimeout(()=>{
            window.scrollTo(0, 0);
        }, 100) // Timeout due to images/announcements not loading right away
    }, []);

    useEffect(() => {
        const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
        if (measurementId) {
            ReactGA.initialize(measurementId);
            ReactGA.send({
                hitType: 'pageview',
                page: '/',
                title: 'Home Page',
            });
        } else {
            console.error('Google Analytics Measurement ID not found.');
        }
    }, []);
    // Notification Display
    const [display, setDisplay] = useState(true);
    // Links
    const register = "https://gdg.community.dev/events/details/google-gdg-on-campus-california-state-university-east-bay-hayward-united-states-presents-build-with-ai-hackhayward/";

    return (
        <>
            <header id="home" className="overflow-x-hidden">
                {display && <NotificationBar setDisplay={setDisplay} register={register}/>}
                <NavBar />
            </header>
            <main className="mainBackground bg-contain bg-repeat-y overflow-x-hidden">
                <section className="border-b-8 border-[#c593e9]">
                    <Hero register={register} />
                </section>
                {/* about us */}
                <section
                    className="pt-16 p-10 bg-black/50 max-w-screen-2xl:overflow-hidden"
                    id="about"
                >
                    <AboutUs />
                </section>
                {/* FAQ */}
                <section className="p-10 bg-black/50 overflow-hidden" id="faq">
                    <FAQ register={register}/>
                </section>
                {/* sponsor */}
                <section
                    className="pb-16 p-10 bg-black/50 overflow-hidden"
                    id="sponsor-us"
                >
                    <Sponsor />
                </section>
                {/* Scene */}
                <section className="overflow-hidden">
                    <PilotFalcon />
                </section>
            </main>
            {/* footer */}
            <footer className="bg-[rgb(48,37,45)] border-t-8 border-[#c593e9] overflow-hidden">
                <Footer register={register} />
            </footer>
        </>
    );
}

export default App;
