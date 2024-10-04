import PropTypes from 'prop-types';
import { BiX } from "react-icons/bi";

NotificationBar.propTypes = {
    setDisplay: PropTypes.func.isRequired,
};

export default function NotificationBar(props) {
    const title = "🚀 The Power of Networking";
    const mssg = "Workshop by MLT!";
    // Ignore action & link if isMore == false
    const isMore = true;
    const action = "Join here";
    const link = "https://lu.ma/slcpoj81";
    
    function closeBar() {
        const notification = document.getElementById("NotificationBar");
        notification.classList.remove("sm:h-12", "h-16");
        notification.classList.add("h-0");
        document.getElementById("NotificationText").classList.add("translate-y-[-10px]");
        setTimeout(()=>{
            props.setDisplay(false);
        }, 300)
    }

    return (
        <>
            <div id="NotificationBar" className="bg-[#c593e9] text-white text-sm sm:text-base
            overflow-hidden font-grotesk h-16 sm:h-12 transition-all duration-300">
                <div id="NotificationText" className="flex items-center h-full
                transition-all duration-300">
                    <div className=" flex justify-center items-center h-full w-full">
                        <div className="flex max-sm:flex-col gap-2 items-center text-nowrap">
                            <p><strong>{title}:</strong> </p>
                            <p>{mssg}
                            {isMore && <a href={link} target="_blank" >
                                <u className="text-sm ml-2">
                                    <strong>{action}</strong>
                                </u>
                            </a>}
                            </p>
                            
                        </div>
                    </div>
                    <btn>
                        <BiX 
                        className="size-8 cursor-pointer hover:scale-110 absolute right-2 top-4 sm:top-2 transition" 
                        onClick={closeBar}/>
                    </btn>
                </div>
            </div>
        </>
    )
}
