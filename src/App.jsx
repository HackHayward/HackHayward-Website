import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';

function App() {
    return (
        <>
            <body className="min-h-screen box-border m-0 p-0 bg-slate-500">
                {/* page header */}
                <header

                    id="home"
                >
                    {/* navbar & title section*/}
                    <NavBar />
                    <div className="lg:w-1/2 flex flex-col justify-center lg:ml-16 h-full">
                        <Hero />
                    </div>
                </header>

                    {/* about us */}
                    <div></div>
                    {/* FAQ */}
                    <div
                        className="h-screen flex flex-col items-center lg:pt-32 p-10 gap-12"
                        id="faq"
                    >

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
