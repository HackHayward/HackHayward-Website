export default function Hero() {
    return (
        <>
            {/* Title */}
            <div className="bg-[#30252d] h-[calc(100vh-8rem)] grid grid-cols-10">
                <div className="text-white col-[2/10] row-[1] place-content-center z-50">
                    <h1 className="lg:text-8xl sm:text-6xl text-5xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center">
                        HackHayward
                    </h1>
                    <p className="lg:text-4xl text-2xl mt-2 max-lg:text-center">
                        In-Person @ CSU East Bay
                    </p>
                    <p className="lg:text-4xl text-2xl max-lg:text-center">
                        Spring 2025
                    </p>
                </div>
                <div className='bg-[url("./assets/HeroScene.png")] bg-no-repeat bg-contain bg-right-bottom h-full w-full col-[1/11] row-[1] relative'>
                    <img
                        src="./assets/Astro_S1.png"
                        alt="mascot"
                        className="absolute right-[10%] bottom-[10%] h-[25%] w-[25%] object-contain
        animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out"
                    />
                </div>
            </div>
        </>
    );
}
