import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Scene5 from './Components/Scene5';

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
                <section className="border-b-8 border-[rgb(207,66,170)]">
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
                <section></section>
                {/* Scene */}
                <section>
                    <Scene5 />
                </section>
            </main>
            {/* footer */}
            <footer className="bg-[rgb(48,37,45)] border-t-8 border-[rgb(207,66,170)]">
                <Footer />
            </footer>
        </>
    );
}

export default App;
