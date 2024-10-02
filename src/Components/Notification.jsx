import PropTypes from 'prop-types';
import { BiX } from "react-icons/bi";

NotificationBar.propTypes = {
    setDisplay: PropTypes.func.isRequired,
};

export default function NotificationBar(props) {
    const title = "Announcement";
    const mssg = "Sample Text";
    const isMore = true;
    
    function closeBar() {
        document.getElementById("NotificationBar").classList.add("h-0");
        document.getElementById("NotificationText").classList.add("translate-y-[-10px]");
        setTimeout(()=>{
            props.setDisplay(false);
        }, 300)
    }

    return (
        <>
            <div id="NotificationBar" className="bg-[#c593e9] text-black overflow-hidden
            font-medium font-grotesk h-12 animate-h transition-all duration-300">
                <div id="NotificationText" className="flex items-center h-full text-white transition-all duration-300">
                    <div className="pl-20 flex justify-center h-full w-full">
                        <p className="flex flex-row gap-2 items-center">
                            <strong>{title}:</strong> 
                            {mssg}
                            {isMore && <a href="https://discord.com/invite/eMHWYfMKDd" target="_blank" >
                                <u className="text-sm">Read More</u>
                            </a>}
                        </p>
                    </div>
                    <BiX 
                    className="mr-10 size-8 cursor-pointer hover:scale-110 transition" 
                    onClick={closeBar}/>
                </div>
            </div>
        </>
    )
}