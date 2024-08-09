export default function Hero() {
    return (
        <>
            {/* title */}
            <div className="text-white flex flex-col lg:gap-4 gap-2 z-fix-10 font-['Exo_2']">
                <h1 className="lg:text-8xl sm:text-6xl text-5xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center">
                    HackHayward
                </h1>
                <h3 className="lg:text-4xl text-2xl mt-2 max-lg:text-center">
                    In-Person @ CSU East Bay
                </h3>
                <h3 className="lg:text-4xl text-2xl max-lg:text-center">
                    Spring 2025
                </h3>
                {/* Buttons */}
                <div className="flex gap-4 max-lg:justify-center lg:mt-4 mt-2 font-['Space_Mono']">
                    <button
                        className="bg-purple-500 text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pr-9
                    hover:bg-purple-700 transition max-lg:text-sm slash-r"
                    >
                        Get Notified
                    </button>
                    <button
                        className="border-2 border-white text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pl-9
                    hover:bg-gray-700 transition max-lg:text-sm slash-l"
                    >
                        Sponsor Us
                    </button>
                </div>
            </div>
            {/* Artwork */}
            <div
                className='bg-[url("./assets/cave_S1.svg")] bg-no-repeat bg-contain bg-right-bottom
                top-0 right-0 z-0 h-full w-full absolute mobile-fix flex justify-end overflow-hidden'
            >
                <div
                    className='bg-[url("./assets/Astro_S1_2.0.svg")] bg-no-repeat bg-contain bg-left-bottom
                    top-0 right-0 w-1/2 animate-wiggle animate-infinite animate-duration-[30000ms] animate-delay-1000 animate-ease-in-out'
                ></div>
            </div>
        </>
    );
}
