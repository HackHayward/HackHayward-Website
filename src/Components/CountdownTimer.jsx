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
            const target = new Date(targetDate);
            if (isNaN(target.getTime())) {
                console.error('Invalid target date provided');
                return;
            }
            const difference = target - new Date();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex gap-4 justify-center my-2">
            <div className="text-center">
                <span className="font-bold text-xl lg:text-4xl">{timeLeft.days}</span>
                <p className="text-sm lg:text-lg">Days</p>
            </div>
            <div className="text-center">
                <span className="font-bold text-xl lg:text-4xl">{timeLeft.hours}</span>
                <p className="text-sm lg:text-lg">Hours</p>
            </div>
            <div className="text-center">
                <span className="font-bold text-xl lg:text-4xl">{timeLeft.minutes}</span>
                <p className="text-sm lg:text-lg">Minutes</p>
            </div>
            <div className="text-center">
                <span className="font-bold text-xl lg:text-4xl">{timeLeft.seconds}</span>
                <p className="text-sm lg:text-lg">Seconds</p>
            </div>
        </div>
    );
};

CountdownTimer.propTypes = {
    targetDate: PropTypes.string.isRequired
};

export default CountdownTimer; 