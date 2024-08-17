import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import PilotFalcon from './Components/PilotFalcon';
import Sponsor from './Components/Sponsor';
import MLH from './Components/MLH';

function App() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="bg-[url(./assets/Background/BBackground.png)] bg-contain bg-repeat-y">
                <section className="border-b-8 border-[#c593e9]">
                    <Hero />
                </section>
                {/* about us */}
                <section
                    className="p-10 bg-black/50 overflow-hidden"
                    id="about"
                >
                    <AboutUs />
                </section>
                {/* FAQ */}
                <section className="p-10 bg-black/50 overflow-hidden" id="faq">
                    <FAQ />
                </section>
                {/* sponsor */}
                <section
                    className="p-10 bg-black/50 overflow-hidden"
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
                <Footer />
            </footer>
        </>
    );
}

export default App;
