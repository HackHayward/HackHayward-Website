import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';

function App() {
    return (
        <>
            <body className="min-h-screen box-border m-0 p-0 bg-slate-500">
                {/* page header */}
                <header className="h-screen w-screen bg-[rgb(48,37,45)] relative overflow-x-hidden">
                    {/* navbar & title section*/}
                    <NavBar />
                    <div className="lg:w-1/2 flex flex-col justify-center lg:ml-16 h-full">
                        <Hero />
                    </div>
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
