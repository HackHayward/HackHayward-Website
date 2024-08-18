export default function Hero() {
    return (
        <>
            {/* Title */}

            <div className="bg-[#30252d] min-h-[calc(100vh-8rem)] grid grid-cols-10">

                <div className="text-white col-[2/10] row-[1] place-content-center z-50 flex flex-col gap-3 ">
                    <h1 className="lg:text-8xl sm:text-6xl text-5xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center font-exo2	animate-fade-up	shadow-text">
                        HackHayward
                    </h1>
                    <p className="lg:text-4xl text-2xl mt-2 max-lg:text-center font-grotesk animate-fade-up shadow-text">
                        Hosted by CSU East Bay
                    </p>
                    <p className="lg:text-4xl text-2xl max-lg:text-center font-grotesk animate-fade-up shadow-text">

              

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
                        <span className="slash-l-line animation-flip-down"></span>
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
                                srcSet="./assets//hero/HeroScene-mobile.webp"
                                media="(max-width: 26.5625rem)"
                            />
                            <img
                                src="./assets/hero/HeroScene.webp"
                                alt="A space cave background scene with warm yellow lighting"
                                className="object-contain max-h-[calc(100vh-2rem)]"
                            />
                        </picture>

                        <img
                            src="./assets/hero/Astro.webp"
                            alt="A cartoon astronaut falcon mascot in a space suit, floating in space"
                            className="absolute bottom-[1%] right-[3%] h-[80%] w-[80%] object-contain
        animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
