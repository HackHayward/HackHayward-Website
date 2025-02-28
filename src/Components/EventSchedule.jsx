// src/Components/EventSchedule.jsx
import { useState, useEffect } from 'react';
import { scheduleData } from '../assets/data/scheduleData';
import CountdownTimer from './CountdownTimer';

export default function EventSchedule() {
  const [selectedDay, setSelectedDay] = useState("March 1");
  const [currentEvent, setCurrentEvent] = useState(null);
  
  // Filter events for the selected day
  const dayEvents = scheduleData.filter(event => event.day === selectedDay);
  
  // Find current event based on time
  useEffect(() => {
    const findCurrentEvent = () => {
      const now = new Date();
      // Logic to find current event
      // ...
    };
    
    findCurrentEvent();
    const intervalId = setInterval(findCurrentEvent, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, [selectedDay]);

  return (
    <div className="font-grotesk">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold font-exo2 shadow-text">Event Schedule</h2>
        <div className="flex space-x-4">
          <button 
            onClick={() => setSelectedDay("March 1")}
            className={`px-4 py-2 rounded shadow-md transition-shadow hover:shadow-lg ${selectedDay === "March 1" 
              ? "bg-[#c593e9] text-white" 
              : "bg-black/20 text-white/80"}`}
          >
            Day 1
          </button>
          <button 
            onClick={() => setSelectedDay("March 2")}
            className={`px-4 py-2 rounded shadow-md transition-shadow hover:shadow-lg ${selectedDay === "March 2" 
              ? "bg-[#c593e9] text-white" 
              : "bg-black/20 text-white/80"}`}
          >
            Day 2
          </button>
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
              <p className="text-sm bg-black/30 px-2 py-1 rounded drop-shadow-sm"> 📍 {event.location}</p>
            </div>
            <h3 className="text-xl font-bold mt-1 shadow-text">{event.title}</h3>
            {event.description && <p className="mt-2 text-white/80 drop-shadow-sm">{event.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}