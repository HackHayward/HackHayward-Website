import './App.css';

function App() {
    return (
        <>
            <body className="min-h-screen box-border	m-0 p-0 bg-slate-500">
                {/* page header */}
                <header className="h-screen flex flex-col md:flex-row bg-[#30252d]">
                    {/* nav bar, title and buttons section*/}
                    <div className="w-2/5 flex flex-col justify-between m-6 ml-16">
                        <div className="flex items-center gap-24 m-6">
                            <img
                                src="./assets/Monotone Logo.png"
                                alt="Logo"
                                className="h-full w-20"
                            />
                            <nav className="flex flex-row gap-14 text-[#E4D9CD] text-3xl font-nav font-semibol ">
                                <a href="#about" className="hover:text-white ">
                                    About
                                </a>
                                <a href="#faq" className="hover:text-white ">
                                    FAQ
                                </a>
                                <a
                                    href="#sponsor"
                                    className="hover:text-white "
                                >
                                    Sponsor Us
                                </a>
                            </nav>
                        </div>

                        <div className="text-white flex flex-col gap-4 mb-64">
                            <h1 className="text-8xl font-bold">HackHayward</h1>
                            <h3 className="text-4xl mt-2">
                                In-Person @ CSU East Bay
                            </h3>
                            <h3 className="text-4xl">Spring 2025</h3>
                            <div className="flex mt-6 space-x-4">
                                <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                                    Get Notified
                                </button>
                                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
                                    Sponsor Us
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* falcon section */}
                    <div className='bg-[url("./assets/cave_S1.svg")] bg-cover bg-right h-full w-full '></div>
                </header>
                <main>
                    {/* about us */}
                    <div></div>
                    {/* FAQ */}
                    <div></div>
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
