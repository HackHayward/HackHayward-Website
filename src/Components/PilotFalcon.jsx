export default function PilotFalcon() {
    return (
        <div className="max-h-[50vh] relative">
            <img
                className=" w-full"
                src="/assets/Scene5/The_eascape_background_s5.png"
            />
            <img
                src="/assets/Scene5/SpaceShip.png"
                className="absolute z-10 bottom-[0.1%] left-[4%] lg:h-[120%] lg:w-[120%]  h-[90%] w-[90%] object-contain -rotate-[22deg]  animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out"
            />
            <img
                src="/assets/Scene5/UFO.png"
                className="absolute z-10 top-[0%] left-[28%] max-h-[25%] max-w-[25%] object-contain"
            />
        </div>
    );
}
