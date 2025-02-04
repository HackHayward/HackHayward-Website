import uranus from '/src/assets/imgs/Background/Uranus.webp';

// import sponsors
import csueb_docs from '/src/assets/imgs/sponsors/CSUEB_DOCS.svg';
import csueb_soe from '/src/assets/imgs/sponsors/CSUEB_SOE.svg';
import aws from '/src/assets/imgs/sponsors/Amazon_Web_Services_Logo.svg.png';
import GCP from '/src/assets/imgs/sponsors/GCP_Cheat_Sheet.png';
import SCLogo from '/src/assets/imgs/sponsors/SmithCenter.jpg';

import ReactGA from 'react-ga4';

export default function Sponsor() {
    const handleClick = (platform) => {
        ReactGA.event({
            category: 'hackathon',
            action: 'Click',
            label: platform,
        });
        console.log(`Google Analytics Event: ${platform} clicked`);
    };
    return (
        <>
            <div className="relative flex justify-center ">
                <section className="flex flex-col items-center justify-items-center gap-10 text-white max-w-screen-lg">
                    <div className="text-white text-center font-exo2 flex flex-col gap-9">
                        <h2 className="text-5xl text-balance font-bold shadow-text-sm">
                            SPONSORS
                        </h2>
                        
                        <div className="flex flex-col gap-8">
                            {/* Sponsor Logos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
                                
                                
                                {/* CSUEB SOE Logo */}
                                <div className="bg-white p-4 rounded-lg w-full max-w-[300px] flex items-center justify-center">
                                    <img 
                                        src={csueb_soe} 
                                        alt="CSUEB School of Engineering" 
                                        className="h-16 object-contain"
                                    />
                                </div>
                                
                                
                                {/* CSUEB DOCS Logo */}
                                <div className="bg-white p-4 rounded-lg w-full max-w-[300px] flex items-center justify-center">
                                    <img 
                                        src={csueb_docs} 
                                        alt="CSUEB Department of Computer Science" 
                                        className="h-16 object-contain"
                                    />
                                </div>
                                {/* GCP Logo */}
                                <div className="bg-white p-4 rounded-lg w-full max-w-[300px] flex items-center justify-center">
                                    <img 
                                        src={GCP} 
                                        alt="Powered by GCP" 
                                        className="h-16 object-contain"
                                    />
                                </div>

                                {/* AWS Logo */}
                                <div className="bg-white p-4 rounded-lg w-full max-w-[300px] flex items-center justify-center">
                                    <img 
                                        src={aws} 
                                        alt="Powered by AWS" 
                                        className="h-16 object-contain"
                                    />
                                </div>
                                
                                {/* Smith Center Logo */}
                                <div className="bg-white p-4 rounded-lg w-full max-w-[300px] flex items-center justify-center">
                                    <img 
                                        src={SCLogo} 
                                        alt="Smith Center" 
                                        className="h-16 object-contain"
                                    />
                                </div>


                            </div>
                        </div>

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
                        onClick={() => handleClick('Sponsor Us')}
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
