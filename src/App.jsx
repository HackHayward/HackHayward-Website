import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FaqCollapse from './Components/FaqCollapse';
function App() {
    return (
        <>
            <body className="min-h-screen box-border m-0 p-0 bg-slate-500">
                {/* page header */}
                <header
                    className="h-screen w-screen bg-[rgb(48,37,45)] relative overflow-x-hidden"
                    id="home"
                >
                    {/* navbar & title section*/}
                    <NavBar />
                    <div className="lg:w-1/2 flex flex-col justify-center lg:ml-16 h-full">
                        <Hero />
                    </div>
                </header>
                <main className='w-screen  bg-[url("./assets/mainBG.png")]  bg-cover bg-center bg-local overflow-x-hidden'>
                    {/* about us */}
                    <div></div>
                    {/* FAQ */}
                    <div
                        className="h-screen flex flex-col items-center lg:pt-32 p-10 gap-12"
                        id="faq"
                    >
                        <div className="text-[#e1e2f0] text-center font-['Exo_2'] flex flex-col gap-6">
                            <h1 className="hidden lg:block text-6xl font-bold ">
                                FREQUENTLY ASKED QUESTIONS
                            </h1>
                            <h1 className="lg:hidden text-4xl font-bold">
                                FAQ
                            </h1>
                            <p className="lg:text-2xl font-['Roboto']">
                                If we missed anything, please contact us at{' '}
                                <a
                                    href="hackhayward@gmail.com"
                                    className="font-bold"
                                >
                                    hackhayward@gmail.com
                                </a>
                            </p>
                        </div>
                        <FaqCollapse />
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
