// src/Components/EventSchedule.jsx
import { useState, useEffect } from 'react';
import { scheduleData } from '../assets/data/scheduleData';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EventSchedule() {
  const [selectedDay, setSelectedDay] = useState("March 1");
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Filter events for the selected day
  const dayEvents = scheduleData.filter(event => event.day === selectedDay);
  
  // Find current event based on time
  useEffect(() => {
    const findCurrentEvent = () => {
      const now = new Date();
      // Logic to find current event
      // ...
      const currentEvent = dayEvents.find(event => {
        
        const eventStart = new Date(`${event.day}, 2025 ${event.time}`);
        const eventEnd = new Date(eventStart);
        eventEnd.setHours(eventStart.getHours() + (event.durationHours || 1)); // Default to 1 hour if duration not specified
        return now >= eventStart && now < eventEnd;
      });
      setCurrentEvent(currentEvent);
    };
    
    findCurrentEvent();
    const intervalId = setInterval(findCurrentEvent, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, [selectedDay, dayEvents]);

  // Get display text for selected day
  const getDayDisplayText = (day) => {
    return day === "March 1" ? "Day 1" : "Day 2";
  };

  // Helper function to get map URL for locations
  const getLocationMapUrl = (location) => {
    // Map of locations to their map URLs
    const locationMaps = {
      "Core 1st floor Entrance area": "https://bit.ly/CoreBuildingMap",
      "Core 178/179 Entrepreneurship Hub": "https://bit.ly/CoreBuildingMap",
      "Core Multiple work rooms 1st and 3rd floor": "https://bit.ly/CoreBuildingMap",
      "Core 176": "https://bit.ly/CoreBuildingMap",
      "Dinning Commons": "https://bit.ly/DinningCommons",
      "Valley Business Technical (VBT) Building": "https://bit.ly/VBTmap",
      "VBT Building Room 124": "https://bit.ly/VBTmap",
      "VBT Building 1st floor": "https://bit.ly/VBTmap"
    };

    // Try to find a specific match
    if (locationMaps[location]) {
      return locationMaps[location];
    }

    // If not found but contains "Core", return the Core building map
    if (location.includes("Core")) {
      return "https://bit.ly/CoreBuildingMap";
    }

    // If not found but contains "VBT", return the VBT building map
    if (location.includes("VBT")) {
      return "https://bit.ly/VBTmap";
    }

    // Default URL for unknown locations (could be campus map)
    return "https://bit.ly/CampusMap";
  };

  // Extract URL from description if it exists
  const extractUrlFromDescription = (description) => {
    if (!description) return null;
    
    const urlMatch = description.match(/https?:\/\/[^\s)]+/);
    return urlMatch ? urlMatch[0] : null;
  };

  return (
    <div className="font-grotesk">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-3 lg:gap-0">
        <h2 className="text-3xl font-bold font-exo2 shadow-text">Event Schedule</h2>
        
        {/* Tab buttons for desktop only - hidden on tablet and mobile */}
        <div className="hidden lg:flex font-grotesk overflow-hidden rounded-full">
          <a
            onClick={() => setSelectedDay("March 1")}
            className={`w-[110px] text-center p-2.5 transition text-sm cursor-pointer slash-r2
              ${selectedDay === "March 1" 
                ? "bg-white text-black hover:bg-[#e9e9e9] font-bold" 
                : "bg-[#c593e9] text-white hover:bg-[#cfb0e8] font-medium"}`}
          >
            Day 1
          </a>
          <a
            onClick={() => setSelectedDay("March 2")}
            className={`w-[110px] text-center p-2.5 transition text-sm cursor-pointer slash-l2 -ml-4
              ${selectedDay === "March 2" 
                ? "bg-white text-black hover:bg-[#e9e9e9] font-bold" 
                : "bg-[#c593e9] text-white hover:bg-[#cfb0e8] font-medium"}`}
          >
            Day 2
          </a>
        </div>
        
        {/* Dropdown menu for mobile and tablet (including iPads) */}
        <div className="lg:hidden flex justify-center">
          <div 
            className="dropdown dropdown-hover font-grotesk"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div 
              tabIndex={0} 
              role="button" 
              className="bg-[#c593e9] hover:bg-[#cfb0e8] text-white text-sm font-medium flex items-center justify-center rounded-full w-32 h-10 relative">
              {getDayDisplayText(selectedDay)}
              <RiArrowDropDownLine 
                className={`size-6 right-[8%] absolute transition-transform duration-200 ${
                  isHovered ? "rotate-180" : ""
                }`} 
              />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-[#261e24] shadow-drop-sm shadow rounded-box z-[1] w-32 p-2">
              <li><a onClick={() => setSelectedDay("March 1")}>Day 1</a></li>
              <li><a onClick={() => setSelectedDay("March 2")}>Day 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {dayEvents.map((event) => (
          <div 
            key={event.id}
            className={`p-4 rounded-md transition-all shadow-md hover:shadow-lg ${
              currentEvent?.id === event.id 
                ? "bg-[#c593e9]/40 border-l-4 border-[#c593e9]" 
                : "bg-black/20 hover:bg-black/30"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold drop-shadow-sm">{event.time}</p>
              <div className="flex items-center">
                <p className="text-sm bg-black/30 px-2 py-1 rounded drop-shadow-sm flex items-center">
                  {event.location}
                  {event.location !== "Submit Online" && event.location !== "Submission Closed" && (
                    <a 
                      href={getLocationMapUrl(event.location)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-1.5 text-[#c593e9] hover:text-white transition-colors"
                      title={`View map for ${event.location}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaMapMarkerAlt className="inline-block" />
                    </a>
                  )}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-1 shadow-text">{event.title}</h3>
            {event.description && (
              <p className="mt-2 text-white/80 drop-shadow-sm">
                {event.description.replace(/\(https?:\/\/[^\s)]+\)/, '')}
                {extractUrlFromDescription(event.description) && (
                  <a 
                    href={extractUrlFromDescription(event.description)}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-1 text-[#c593e9] hover:text-white underline transition-colors"
                  >
                    View Details
                  </a>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}