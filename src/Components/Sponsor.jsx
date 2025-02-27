import uranus from '/src/assets/imgs/Background/Uranus.webp';

// import sponsors
import csueb_docs from '/src/assets/imgs/sponsors/CSUEB_DOCS.svg';
import csueb_soe from '/src/assets/imgs/sponsors/CSUEB_SOE.svg';
import aws from '/src/assets/imgs/sponsors/Amazon_Web_Services_Logo.svg.png';
import GCP from '/src/assets/imgs/sponsors/GCP_Cheat_Sheet.png';
import SCLogo from '/src/assets/imgs/sponsors/updated_smith_logo.png';
import GroqLogo from '/src/assets/imgs/sponsors/GroqLogo_Black.svg';
import PerplexityLogo from '/src/assets/imgs/sponsors/Perplexity-Logo.jpg';

import ReactGA from 'react-ga4';

// sponsor URL links
const sponsorURLs = {
    'CSUEB DOCS': 'https://cs.csueastbay.edu/',
    'CSUEB SOE': 'https://www.csueastbay.edu/engineering/',
    'AWS': 'https://aws.amazon.com/',
    'GCP': 'https://cloud.google.com/',
    'Smith Center': 'https://www.csueastbay.edu/smith-center/',
    'Groq': 'https://groq.com/',
    'Perplexity': 'https://www.perplexity.ai/'
}

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
                            Sponsors
                        </h2>
                        
                        <div className="flex flex-col gap-8">
                            {/* Sponsor Logos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center z-10">
                                

                                {/* GCP Logo */}
                                <a 
                                    href={sponsorURLs['GCP']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('GCP')}
                                    className="block w-full max-w-[300px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-4 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={GCP} 
                                            alt="Powered by GCP" 
                                            className="h-[95px] object-contain"
                                        />
                                    </div>
                                </a>
                                
                                {/* AWS Logo */}
                                <a 
                                    href={sponsorURLs['AWS']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('AWS')}
                                    className="block w-full max-w-[299px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-5 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={aws} 
                                            alt="Powered by AWS" 
                                            className="h-[80px] object-contain"
                                        />
                                    </div>
                                </a>
                                {/* Perplexity Logo */}
                                {<a 
                                    href={sponsorURLs['Perplexity']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('Perplexity')}
                                    className="block w-full max-w-[300px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-4 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={PerplexityLogo} 
                                            alt="Groq" 
                                            className="h-[120px] object-contain mt-2"
                                        />

                                    </div>

                                </a>}
                                {/* Groq Logo */}
                                <a 
                                    href={sponsorURLs['Groq']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('Groq')}
                                    className="block w-full max-w-[300px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-4 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={GroqLogo} 
                                            alt="Groq" 
                                            className="h-[60px] object-contain mt-2"
                                        />

                                    </div>

                                </a>
                                {/* CSUEB SOE Logo */}
                                <a 
                                    href={sponsorURLs['CSUEB SOE']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('CSUEB SOE')}
                                    className="block w-full max-w-[300px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-4 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={csueb_soe} 
                                            alt="CSUEB School of Engineering" 
                                            className="h-16 object-contain select-none"
                                        />
                                    </div>
                                </a>
                                
                                

                                {/* CSUEB DOCS Logo */}
                                <a 
                                    href={sponsorURLs['CSUEB DOCS']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('CSUEB DOCS')}
                                    className="block w-full max-w-[300px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-4 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={csueb_docs} 
                                            alt="CSUEB Department of Computer Science" 
                                            className="h-16 object-contain"
                                        />
                                    </div>
                                </a>
                                
                                {/* Smith Center Logo */}
                                <a 
                                    href={sponsorURLs['Smith Center']} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => handleClick('Smith Center')}
                                    className="block w-full max-w-[300px] transform transition-all duration-200 active:scale-95 hover:scale-[0.98]"
                                >
                                    <div className="bg-white p-4 rounded-lg w-full h-[100px] flex items-center justify-center overflow-hidden hover:bg-gray-50 transition-colors">
                                        <img 
                                            src={SCLogo} 
                                            alt="Smith Center" 
                                            className="h-[160px] object-contain mt-2"
                                        />

                                    </div>

                                </a>

                                

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
