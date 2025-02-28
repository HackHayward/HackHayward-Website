import PropTypes from 'prop-types';
import heroMobile from '/src/assets/imgs/hero/HeroScene-mobile.webp';
import heroDesktop from '/src/assets/imgs/hero/HeroScene.webp';
import astro from '/src/assets/imgs/hero/Astro.webp';
import ReactGA from 'react-ga4';
import CountdownTimer from './CountdownTimer';
import { useCountdown } from '../context/CountdownContext';
import ShinyText from './ShinyText';

Hero.propTypes = {
    register: PropTypes.string.isRequired,
};

export default function Hero(props) {
    const { hasCountdownEnded } = useCountdown();
    
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
            {/* Title */}
            <div className="bg-[#30252d] min-h-[calc(100vh-8rem)] grid grid-cols-10 pt-24">
                <div className="text-white col-[2/10] row-[1] place-content-center z-10 flex flex-col gap-3">
                    <h1 className="lg:text-6xl sm:text-4xl text-4xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center font-exo2	animate-fade-up	shadow-text">
                        Build with AI: HackHayward
                    </h1>
                    {/* Tagline or mission statement */}
                    {/* <p className="lg:text-3xl text-xl mt-2 max-lg:text-center font-thin animate-fade-up shadow-text">
                        Innovate. Create. Collaborate.
                    </p> */}
                    {/* <p className="lg:text-4xl text-2xl mt-2 max-lg:text-center font-grotesk animate-fade-up shadow-text">
                        Hosted by:
                        <br />
                        <p className="lg:text-3xl text-xl font-thin">
                            Department of Computer Science @ CSUEB
                        </p>
                    </p> */}
                    <p className="lg:text-4xl text-2xl max-lg:text-center font-grotesk animate-fade-up shadow-text">
                        March 1st & 2nd, 2025
                    </p>
                    
                    {/* Countdown Timer - only shown before event starts */}
                    {!hasCountdownEnded && (
                        <div className="flex gap-4 max-lg:justify-center mt-2 animate-fade-up">
                            <div className="bg-black/30 backdrop-blur-sm p-1 pb-4 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                                <div className="animate-fade-up">
                                    <CountdownTimer targetDate="2025-03-01T08:00:00" />
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Conditional rendering based on countdown status */}
                    {hasCountdownEnded ? (
                        // Countdown ended - Show View Live Dashboard button
                        <div className="flex gap-4 max-lg:justify-center lg:mt-4 mt-2 font-mono lg:pb-0 max-[375px]:pb-4">
                            <a
                                className="bg-[#c593e9] text-white lg:h-16 lg:px-14 h-12 px-7
                                hover:bg-[#cfb0e8] transition-all duration-300 max-lg:text-sm rounded-full animate-flip-up text-center flex items-center"
                                href="/live"
                                onClick={() => handleClick('View Live Dashboard')}
                            >
                                <div className="flex items-center gap-2">
                                    {/* Live indicator dot with pulsing animation */}
                                    <div className="relative flex h-2.5 w-2.5 mr-1">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                                    </div>
                                    <ShinyText 
                                        text="View Live Dashboard" 
                                        disabled={false} 
                                        speed={1.5} 
                                        className="font-semibold text-white tracking-wide lg:text-lg" 
                                    />
                                </div>
                            </a>
                        </div>
                    ) : (
                        // Countdown still active - Show Register and Sponsor Us buttons
                        <div className="flex gap-4 max-lg:justify-center lg:mt-4 mt-2 font-mono lg:pb-0 max-[375px]:pb-4">
                            <a
                                className="bg-[#c593e9] text-white lg:h-16 lg:px-14 h-12 px-6 pr-10
                                hover:bg-[#cfb0e8] transition max-lg:text-sm slash-r animate-flip-up text-center flex items-center"
                                target="_blank"
                                href={props.register}
                                onClick={() => handleClick('Register')}
                            >
                                {/* Invisible span to reserve width */}
                                <span className="absolute inset-0 flex items-center justify-center">Register</span>
                                {/* Actual visible text */}
                                <span className="invisible">Pre-Register</span>
                            </a>
                            <span className="slash-l-line animation-flip-down"></span>
                            <a
                                className="border-2 border-white text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pl-9
                                hover:bg-gray-700 transition max-lg:text-sm slash-l animate-flip-down text-center flex items-center"
                                href={hasCountdownEnded ? "mailto:contact@hackhayward.com" : "mailto:sponsor@hackhayward.com"}
                                onClick={() => handleClick(hasCountdownEnded ? 'Contact Us' : 'Sponsor Us')}
                            >
                                {hasCountdownEnded ? 'Contact Us' : 'Sponsor Us'}
                            </a>
                        </div>
                    )}
                </div>
                <div className="col-[1/11] row-[1] place-self-end z-0">
                    <div className="relative">
                        <picture>
                            <source
                                srcSet={heroMobile}
                                media="(max-width: 26.5625rem)"
                            />
                            <img
                                src={heroDesktop}
                                alt="A space cave background scene with warm yellow lighting"
                                className="object-contain max-h-[calc(100vh-2rem)]"
                            />
                        </picture>

                        <img
                            src={astro}
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
