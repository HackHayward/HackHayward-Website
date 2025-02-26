import { useState } from "react";
import Card from "./Card.jsx";
import PropTypes from 'prop-types';
import saturn from '/src/assets/imgs/Background/Saturn.webp';

// Data
import { users } from '../assets/data/users.jsx';
import { RiArrowDropDownLine } from "react-icons/ri";

Teams.propTypes = {
    title: PropTypes.string.isRequired,
};

export default function Teams({ title }) {
    const [isHovered, setIsHovered] = useState(false);
    const [filter, setFilter] = useState("All");

    const filteredUsers = users.filter((organizer) => {
        if (filter === "All") return true;
        if (filter === "Organizers") return organizer.badge;
        if (filter === "Speakers") return organizer.flair?.spk;
        if (filter === "Judges") return organizer.flair?.jud;
        if (filter === "Mentors") return organizer.flair?.mnt;
        return false;
    });

    return (
        <div className="relative flex justify-center">
            <section className="flex flex-col items-center justify-items-center gap-10 text-white max-w-screen-lg z-10">
                <div className="text-white text-center font-exo2 flex flex-col gap-9">
                    <h2 className="text-5xl text-balance font-bold shadow-text-sm">
                        {title}
                    </h2>
                </div>

                {/* Desktop Style */}
                <div className="hidden md:flex max-lg:justify-center font-mono">
                    <a
                        onClick={() => setFilter("All")}
                        className={`bg-[#c593e9] hover:bg-[#cfb0e8] left-[8%] w-[175px] text-center slash-r2 p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap cursor-pointer
                            ${filter === "All" ? "border-2 border-white" : ""}`}
                    >
                        All
                    </a>
                    <a
                        onClick={() => setFilter("Organizers")}
                        className={`bg-[#c593e9] hover:bg-[#cfb0e8] left-[4%] w-[175px] text-center slash-m2 p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap cursor-pointer
                            ${filter === "Organizers" ? "border-2 border-white" : ""}`}
                    >
                        Organizers
                    </a>
                    <a
                        onClick={() => setFilter("Speakers")}
                        className={`bg-[#c593e9] hover:bg-[#cfb0e8] right-[0%] w-[175px] text-center slash-m2 p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap cursor-pointer
                            ${filter === "Speakers" ? "border-2 border-white" : ""}`}
                    >
                        Speakers
                    </a>
                    <a
                        onClick={() => setFilter("Judges")}
                        className={`bg-[#c593e9] hover:bg-[#cfb0e8] right-[4%] w-[175px] text-center slash-m2 p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap cursor-pointer
                            ${filter === "Judges" ? "border-2 border-white" : ""}`}
                    >
                        Judges
                    </a>
                    <a
                        onClick={() => setFilter("Mentors")}
                        className={`bg-[#c593e9] hover:bg-[#cfb0e8] right-[8%] w-[175px] text-center slash-l2 p-4 px-8 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap cursor-pointer
                            ${filter === "Mentors" ? "border-2 border-white" : ""}`}
                    >
                        Mentors
                    </a>
                </div>

                {/* Mobile Style */}
                <div className="md:hidden w-full flex justify-center">
                    <div 
                        className="dropdown dropdown-hover font-grotesk"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div 
                            tabIndex={0} 
                            role="button" 
                            className="bg-[#c593e9] hover:bg-[#cfb0e8] text-white lg:text-lg text-sm font-medium flex items-center justify-center rounded-full w-40 h-14 relative">
                            {filter}
                            <RiArrowDropDownLine 
                                className={`size-8 right-[8%] absolute transition-transform duration-200 ${
                                    isHovered ? "rotate-180" : ""
                                }`} 
                            />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-[#261e24] shadow-drop-sm shadow rounded-box z-[1] w-40 p-2">
                            <li><a onClick={() => setFilter("All")}>All</a></li>
                            <li><a onClick={() => setFilter("Organizers")}>Organizers</a></li>
                            <li><a onClick={() => setFilter("Speakers")}>Speakers</a></li>
                            <li><a onClick={() => setFilter("Judges")}>Judges</a></li>
                            <li><a onClick={() => setFilter("Mentors")}>Mentors</a></li>
                        </ul>
                    </div>
                </div>

                {/* Display Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredUsers.map((organizer, index) => (
                        <li key={index} className="list-none">
                            <Card 
                                name={organizer.name}
                                desc={organizer.desc}
                                pos={organizer.pos}
                                img={organizer.img}
                                badge={organizer.badge}
                                flair={organizer.flair}
                            />
                        </li>
                    ))}
                </div>
            </section>
            <div className="opacity-50 absolute top-[0%] right-[-10%] max-h-[40%] max-w-[40%] ">
                <img src={saturn} loading="lazy" alt="Saturn" className="object-cover" />
            </div>
        </div>
    );
}