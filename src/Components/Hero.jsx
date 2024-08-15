export default function Hero() {
    return (
        <>
            {/* Title */}
            <header className="text-white flex flex-col lg:gap-4 gap-2 z-fix-10 font-exo2 animate-fade-up">
                <h1 className="lg:text-8xl sm:text-6xl text-5xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center">
                    HackHayward
                </h1>
                <p className="lg:text-4xl text-2xl mt-2 max-lg:text-center">
                    In-Person @ CSU East Bay
                </p>
                <p className="lg:text-4xl text-2xl max-lg:text-center">
                    Spring 2025
                </p>
                {/* Buttons */}
                <nav className="flex gap-4 max-lg:justify-center lg:mt-4 mt-2 font-mono">
                    <button
                        className="bg-[#c593e9] text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pr-9
                    hover:bg-[#cfb0e8] transition max-lg:text-sm slash-r animate-flip-up"
                    >
                        Pre-Register
                    </button>

                    <button
                        className="border-2 border-white text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pl-9
                    hover:bg-gray-700 transition max-lg:text-sm slash-l animate-flip-down backdrop-blur-sm"
                    >
                        Sponsor Us
                    </button>
                </nav>
            </header>
            {/* Artwork */}
            <aside
                className='bg-[url("./assets/HeroScene.png")] bg-no-repeat bg-contain bg-right-bottom

                top-0 right-0 z-0 h-full w-full absolute art-fix overflow-hidden'
            >
                <span className="flex justify-end items-end w-full h-full">
                    <img
                        src="./assets/Astro_S1_2.0.svg"
                        alt="mascot"
                        className="bottom-0 right-0 w-1/2 xl:h-5/6
                        animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out"
                    />
                </span>
            </aside>
        </>
    );
}
