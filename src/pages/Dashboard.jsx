// src/pages/Dashboard.jsx
import { useEffect, Suspense } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavBar';
import EventSchedule from '../Components/EventSchedule';
import NextEvent from '../Components/NextEvent';
import LanyardPreview from '../Components/LanyardPreview';
import DashCountdown from '../Components/DashCountdown';
import RotatingText from '../Components/RotatingText';
import Footer from '../Components/Footer';
import ReactGA from 'react-ga4';

// Import planet images for background
import uranus from '/src/assets/imgs/Background/Uranus.webp';
import mars from '/src/assets/imgs/Background/Saturn.webp';

// Fallback component for when 3D rendering fails
const LanyardFallback = () => (
  <div>
    <h2 className="text-3xl font-bold font-exo2 mb-4">Your HackHayward Badge</h2>
    <p className="text-white/80 mb-4 font-grotesk">
      Badge preview unavailable. Please try again later.
    </p>
    <div className="h-[400px] bg-gradient-to-b from-[#30252d]/50 to-[#261e24]/50 rounded-lg flex items-center justify-center">
      <div className="text-center p-6">
        <div className="text-2xl mb-2">📛</div>
        <p>3D Badge Preview</p>
        <p className="text-sm opacity-70 mt-2">Unable to load 3D preview</p>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const register = "https://gdg.community.dev/events/details/google-gdg-on-campus-california-state-university-east-bay-hayward-united-states-presents-build-with-ai-hackhayward/";
  const submissionDeadline = "2025-03-02T10:00:00"; // Update this with your actual submission deadline
  
  // Words for the rotating text
  const rotatingWords = ["Live", "Hacking", "Cooking", "Creating", "Innovating", "Building", "Collaborating", "Learning", "Tinkering", "Vibing", "Slaying", "Bussin'", "Chilling"];
  
  useEffect(() => {
    const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.send({
        hitType: 'pageview',
        page: '/live',
        title: 'Live Dashboard',
      });
    }
  }, []);

  return (
    <>
      <header id="home" className="overflow-x-hidden">
        <NavBar />
      </header>

      <main className="mainBackground bg-contain bg-repeat-y overflow-x-hidden ">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1229]/0 to-[#271d2d]/90 pointer-events-none"></div> */}
        <div className="bg-black/50">
        <section className="pt-36 px-4 md:px-10 text-white relative">
          {/* Uranus positioned behind the rotating text */}
          <div className="absolute opacity-[40%] top-[10%] right-[-5%] max-h-[40%] max-w-[40%] z-0 pointer-events-none opacity-80">
            <img src={uranus} loading="lazy" alt="Uranus" className="object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold font-exo2 text-center mb-12 animate-fade-up shadow-text relative z-10">
            <div className="flex flex-wrap items-baseline justify-center gap-2">
              <span className="inline-block">HackHayward&apos;s</span>{" "}
              <RotatingText
                texts={rotatingWords}
                mainClassName="px-4 md:px-4 text-[#c593e9] overflow-hidden py-1 inline-flex justify-center rounded-xl relative"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden py-1"
                elementLevelClassName="my-0.5 pt-0.5 pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Main content grid */}
            <div className="grid grid-cols-1 gap-6 mb-6 relative z-10">
              {/* Top Section - Badge Preview */}
              <div className="bg-black/85 backdrop-blur-md p-6 rounded-lg border border-gray-800 shadow-lg">
                <Suspense fallback={<LanyardFallback />}>
                  <ErrorBoundary FallbackComponent={LanyardFallback}>
                    <LanyardPreview />
                  </ErrorBoundary>
                </Suspense>
              </div>
              
              {/* Bottom Section - Event Info (columns on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Event Schedule (wider) */}
                <div className="bg-black/85 backdrop-blur-md p-6 rounded-lg border border-gray-800 shadow-lg h-full order-2 md:order-1">
                  <EventSchedule />
                </div>
                
                {/* Right Column - Next Event and Countdown stacked */}
                <div className="grid grid-cols-1 gap-6 grid-rows-5 order-1 md:order-2">
                    {/* Time Remaining - Fixed height */}
                    <div className="bg-black/85 backdrop-blur-md p-6 rounded-lg border border-gray-800 shadow-lg h-[180px] overflow-hidden">
                      <DashCountdown targetDate={submissionDeadline} />
                    </div>
                    
                    {/* Next Event - Fixed height */}
                    <div className="bg-black/85 backdrop-blur-md p-6 rounded-lg border border-gray-800 shadow-lg h-[180px] overflow-hidden">
                      <NextEvent />
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Only Mars remains in its original position */}
          <div className="absolute opacity-[40%] bottom-[20%] left-[-10%] max-h-[30%] max-w-[30%] z-0 pointer-events-none">
            <img src={mars} loading="lazy" alt="Mars" className="object-cover" />
          </div>
        </section>
        </div>
      </main>
      
      <footer className="bg-[rgb(48,37,45)] border-t-8 border-[#c593e9] overflow-hidden">
        <Footer register={register} />
      </footer>
    </>
  );
}

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.FallbackComponent ? <this.props.FallbackComponent /> : <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  FallbackComponent: PropTypes.elementType
};