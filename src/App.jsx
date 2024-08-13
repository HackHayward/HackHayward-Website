import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';

function App() {
    return (
        <>
            <body className="min-h-screen box-border m-0 p-0 bg-[#4948b4]">
                {/* page header */}
                <header
                    className="h-screen bg-[rgb(48,37,45)] relative overflow-x-hidden"
                    id="home"
                >
                    {/* navbar & title section*/}
                    <NavBar />
                    <div className="lg:w-1/2 flex flex-col justify-center lg:ml-16 h-full">
                        <Hero />
                    </div>
                </header>
                <main className="">
                    <span
                        className="h-full w-full   bg-cover bg-center bg-local absolute z-0
                    brightness-50 saturate-150"
                    ></span>
                    {/* about us */}
                    <div
                        className="lg:h-full h-[160vh] flex flex-col items-center gap-10 lg:pt-20 p-10  bg-[url(./assets/Background/Background.png)]  bg-center bg-cover bg-no-repeat overflow-x-hidden  "
                        id="about"
                    >
                        <AboutUs />
                    </div>
                    {/* FAQ */}
                    <div
                        className="h-screen flex flex-col items-center lg:pt-32 p-10 gap-12  bg-[url(./assets/Background/Background.png)]  bg-center bg-cover bg-no-repeat overflow-x-hidden overflow-y-hidden"
                        id="faq"
                    >
                        <FAQ />
                    </div>
                    {/* sponsor */}
                    <div></div>
                </main>
                {/* footer */}
                <footer></footer>
            </body>
        </>
    );
}

export default App;
