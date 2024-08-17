export default function Sponsor() {
    return (
        <>
            <div className="relative">
                <section className="flex flex-col items-center justify-items-center gap-10 text-white max-w-screen-lg">
                    <div className="text-white text-center font-exo2 flex flex-col gap-9">
                        <h2 className="text-5xl text-balance font-bold">
                            SPONSOR
                        </h2>

                        <p className="lg:text-xl sm:text-lg font-grotesk text-pretty sm:px-10">
                            Your sponsorship is crucial in bringing this event
                            to life. Every contribution you make will be
                            allocated to cover essential expenses, including
                            meals, branded apparel, and all necessary resources
                            for hosting a successful hackathon. By taking care
                            of these logistics, we will create an environment
                            where participants can fully immerse themselves in
                            the creative process. This support allows hackers to
                            develop and launch their innovative ideas, without
                            worrying about any concerns.
                        </p>
                    </div>
                    <div className="opacity-50 absolute bottom-[10%] left-[-55%] max-h-[40%] max-w-[40%]">
                        <img
                            src="../assets/Background/Uranus.png"
                            className="object-cover"
                        />
                    </div>
                    <a
                        href=""
                        className="bg-[#c593e9] hover:bg-[#cfb0e8] rounded-full p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap z-50"
                    >
                        Sponsor Us
                    </a>
                </section>
            </div>
        </>
    );
}
