export default function PilotFalcon() {
    return (
        <div className="max-h-[50vh] relative">
            <img
                className=" w-full"
                src="/assets/Scene5/The_eascape_background_s5.png"
            />
            <img
                src="/assets/Scene5/SpaceShip.png"
                className="absolute z-10 bottom-[0.1%] left-[4%] lg:h-[120%] lg:w-[120%]  h-[90%] w-[90%] object-contain -rotate-[22deg]"
            />
            <img
                src="/assets/Scene5/UFO.png"
                className="absolute z-10 top-[0%] left-[28%] h-[25%] w-[25%] object-contain"
            />
        </div>
    );
}
