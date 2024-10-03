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
        notification.classList.remove("h-12");
        notification.classList.add("h-0");
        document.getElementById("NotificationText").classList.add("translate-y-[-10px]");
        setTimeout(()=>{
            props.setDisplay(false);
        }, 300)
    }

    return (
        <>
            <div id="NotificationBar" className="bg-[#c593e9] text-black overflow-hidden
            font-grotesk h-12 animate-h transition-all duration-300">
                <div id="NotificationText" className="flex items-center h-full text-white transition-all duration-300">
                    <div className="pl-20 flex justify-center h-full w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <p><strong>{title}:</strong> </p>
                            <p>{mssg}</p>
                            {isMore && <a href={link} target="_blank" >
                                <u className="text-sm">
                                    <strong>{action}</strong>
                                </u>
                            </a>}
                        </div>
                    </div>
                    <btn>
                        <BiX 
                        className="mr-10 size-8 cursor-pointer hover:scale-110 transition" 
                        onClick={closeBar}/>
                    </btn>
                </div>
            </div>
        </>
    )
}
