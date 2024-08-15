import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <body className="min-h-screen box-border m-0 p-0 bg-[#4948b4] overflow-x-hidden">
                {/* page header */}
                <header
                    className="h-screen bg-[rgb(48,37,45)] relative"
                    id="home"
                >
                    {/* navbar & title section*/}
                    <NavBar />
                    <div className="lg:w-1/2 flex flex-col justify-center lg:ml-16 h-full">
                        <Hero />
                    </div>
                </header>
                <div className="bg-[#c593e9] h-6"></div>
                <main className="">
                    {/* <span
                        className="h-full w-full bg-cover bg-center bg-local bg-no-repeat absolute z-0
                        brightness-50 saturate-150"
                    ></span> */}
                    {/* about us */}
                    <section

                        className="pt-32 lg:px-16 px-6 gap-12 
                        bg-[url(./assets/Background/BBackground.png)] bg-center bg-cover bg-no-repeat bg-fixed"

                      

                        id="about"
                    >
                        <AboutUs />
                    </section>
                    {/* FAQ */}
                    <section

                        className="flex flex-col items-center py-20 lg:px-16 px-6 gap-12
                        bg-[url(./assets/Background/BBackground.png)] bg-center bg-cover bg-no-repeat bg-fixed"

                     

                        id="faq"
                    >
                        <FAQ />
                    </section>
                    {/* sponsor */}
                    <section></section>
                </main>
                {/* footer */}
                <aside className="bg-[#c593e9] h-6"></aside>
                <footer className="bg-[rgb(48,37,45)]">
                    <Footer />
                </footer>
            </body>
        </>
    );
}

export default App;
