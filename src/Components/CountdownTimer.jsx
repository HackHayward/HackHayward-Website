import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex gap-4 justify-center my-2">
            <div className="text-center">
                <span className="font-bold text-xl">{timeLeft.days}</span>
                <p className="text-sm">Days</p>
            </div>
            <div className="text-center">
                <span className="font-bold text-xl">{timeLeft.hours}</span>
                <p className="text-sm">Hours</p>
            </div>
            <div className="text-center">
                <span className="font-bold text-xl">{timeLeft.minutes}</span>
                <p className="text-sm">Minutes</p>
            </div>
            <div className="text-center">
                <span className="font-bold text-xl">{timeLeft.seconds}</span>
                <p className="text-sm">Seconds</p>
            </div>
        </div>
    );
};

CountdownTimer.propTypes = {
    targetDate: PropTypes.string.isRequired
};

export default CountdownTimer; 