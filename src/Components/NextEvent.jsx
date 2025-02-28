// src/Components/NextEvent.jsx

import { scheduleData } from '../assets/data/scheduleData';

export default function NextEvent() {
  // Logic to find the next upcoming event
  const findNextEvent = () => {
    const now = new Date();
    
    // Sort events by their timestamp and find the next one that hasn't started yet
    const sortedEvents = [...scheduleData].sort((a, b) => {
      const aTime = new Date(`${a.day}, 2025 ${a.time}`);
      const bTime = new Date(`${b.day}, 2025 ${b.time}`);
      return aTime - bTime;
    });
    
    return sortedEvents.find(event => {
      const eventTime = new Date(`${event.day}, 2025 ${event.time}`);
      return eventTime > now;
    });
  };
  
  
  const nextEvent = findNextEvent();
  
  // // Format the date string for CountdownTimer
  // const getEventDateString = () => {
  //   if (!nextEvent) return null;
    
  //   // Convert to ISO format expected by CountdownTimer
  //   const dateObj = new Date(`${nextEvent.day}, 2025 ${nextEvent.time}`);
  //   return dateObj.toISOString();
  // };

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold font-exo2 mb-2 shadow-text">Next Up</h2>
      
      {nextEvent ? (
        <div className="overflow-hidden">
          <div className="mb-1">
            <span className="text-[#c593e9] font-medium drop-shadow-md text-shadow-purple-glow">{nextEvent.time} • {nextEvent.location}</span>
            <h3 className="text-xl font-bold mt-1 truncate drop-shadow-md shadow-text">{nextEvent.title}</h3>
          </div>
          <p className="text-white/70 text-sm line-clamp-2 drop-shadow-sm">{nextEvent.description}</p>
        </div>
      ) : (
        <p className="drop-shadow-md">All events have concluded!</p>
      )}
    </div>
  );
}