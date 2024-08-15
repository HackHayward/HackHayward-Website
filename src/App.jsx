import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <section>
                    <Hero />
                </section>
                {/* about us */}
                <section
                    className="bg-[url(./assets/Background/BBackground.png)]  bg-center bg-cover bg-no-repeat p-10"
                    id="about"
                >
                    <AboutUs />
                </section>
                {/* FAQ */}
                <section
                    className="flex flex-col items-center gap-12 p-10
                        bg-[url(./assets/Background/BBackground.png)] bg-center bg-cover bg-no-repeat"
                    id="faq"
                >
                    <FAQ />
                </section>
                {/* sponsor */}
                <section></section>
            </main>
            {/* footer */}
            <footer className="bg-[rgb(48,37,45)]">
                <Footer />
            </footer>
        </>
    );
}

export default App;
