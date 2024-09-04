import uranus from '/src/assets/imgs/Background/Uranus.webp';

export default function Sponsor() {
    return (
        <>
            <div className="relative flex justify-center ">
                <section className="flex flex-col items-center justify-items-center gap-10 text-white max-w-screen-lg">
                    <div className="text-white text-center font-exo2 flex flex-col gap-9">
                        <h2 className="text-5xl text-balance font-bold shadow-text-sm">
                            SPONSOR
                        </h2>

                        <p className="lg:text-xl sm:text-lg font-grotesk text-pretty sm:px-10 z-50 shadow-text-sm">
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
                    <a
                        href="mailto:sponsor@hackhayward.com"
                        className="bg-[#c593e9] hover:bg-[#cfb0e8] rounded-full p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap"
                    >
                        Sponsor Us
                    </a>
                </section>
                <div className="opacity-50 absolute bottom-[30%] left-[-8%] max-h-[30%] max-w-[30%]">
                    <img src={uranus} loading="lazy" alt="Uranus" className="object-cover" />
                </div>
            </div>
        </>
    );
}
