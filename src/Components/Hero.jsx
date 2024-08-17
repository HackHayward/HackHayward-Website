export default function Hero() {
    return (
        <>
            {/* Title */}

            <div className="bg-[#30252d] min-h-[calc(100vh-8rem)] grid grid-cols-10">
                <div className="text-white col-[2/10] row-[1] place-content-center z-50 flex flex-col gap-3  animate-fade-up">
                    <h1 className="lg:text-8xl sm:text-6xl text-5xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center font-exo2 		">
                        HackHayward
                    </h1>
                    <p className="lg:text-4xl text-2xl mt-2 max-lg:text-center font-grotesk">
                        Hosted by CSU East Bay
                    </p>
                    <p className="lg:text-4xl text-2xl max-lg:text-center font-grotesk">
                        Spring 2025
                    </p>

                    <div className="flex gap-4 max-lg:justify-center lg:mt- mt-2 font-mono">
                        <a
                            className="bg-[#c593e9] text-white lg:h-16 lg:px-14 h-12 px-6 pr-10 

                    hover:bg-[#cfb0e8] transition max-lg:text-sm slash-r animate-flip-up text-center flex items-center"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeU9aUxOy_6qdsvOSsVW1t91Z3ITRi5ziucR6b4joI-dKJLaQ/viewform"
                        >
                            Pre-Register
                        </a>
                        <span className="slash-l-line"></span>
                        <a
                            className="border-2 border-white text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pl-9

                    hover:bg-gray-700 transition max-lg:text-sm slash-l animate-flip-down text-center flex items-center"
                            href=""
                        >
                            Sponsor Us
                        </a>
                    </div>
                </div>
                <div className="col-[1/11] row-[1] place-self-end">
                    <div className="relative">
                        <picture>
                            <source
                                srcSet="./assets/HeroScene-mobile.png"
                                media="(max-width: 26.5625rem)"
                            />
                            <img
                                src="./assets/HeroScene.png"
                                alt="A space cave background scene with warm yellow lighting"
                                className="object-contain max-h-[calc(100vh-2rem)]"
                            />
                        </picture>
                        <img
                            src="./assets/Astro_S1_2.0.svg"
                            alt="A cartoon astronaut falcon mascot in a space suit, floating in space"
                            className="absolute bottom-[5%] right-[10%] lg:h-[60%] lg:w-[60%] h-[80%] w-[80%] object-cover
        animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out z"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
