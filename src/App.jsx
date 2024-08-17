import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import PilotFalcon from './Components/PilotFalcon';
import Sponsor from './Components/Sponsor';

function App() {
    return (
        <>
            <header id="navbar">
                <NavBar />
            </header>
            <main
                className="bg-[url(./assets/Background/BBackground.png)] bg-contain bg-repeat-y overflow-hidden"
                id="home"
            >
                <section className="border-b-8 border-[#c593e9]">
                    <Hero />
                </section>
                {/* about us */}
                <section className="p-10 bg-black/50" id="about">
                    <AboutUs />
                </section>
                {/* FAQ */}
                <section className="p-10 bg-black/50" id="faq">
                    <FAQ />
                </section>
                {/* sponsor */}
                <section className="p-10 bg-black/50" id="sponsor-us">
                    <Sponsor />
                </section>
                {/* Scene */}
                <section>
                    <PilotFalcon />
                </section>
            </main>
            {/* footer */}
            <footer className="bg-[rgb(48,37,45)] border-t-8 border-[#c593e9]">
                <Footer />
            </footer>
        </>
    );
}

export default App;
