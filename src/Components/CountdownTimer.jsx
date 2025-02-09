import { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const target = new Date(targetDate);
            if (isNaN(target.getTime())) {
                console.error('Invalid target date provided');
                return;
            }
            const difference = target - new Date();
            
            if (difference > 0) {
                setHasStarted(false);
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setHasStarted(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    if (hasStarted) {
        return (
            <div className="text-center">
                <h2 className="text-3xl">HackHayward is now live!</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            <div role="timer" aria-live="polite" aria-label="Countdown timer" className="flex gap-4 justify-center my-2">
                <div className="text-center">
                    <span className="font-bold text-xl lg:text-4xl" aria-label={`Days: ${timeLeft.days}`}>{timeLeft.days}</span>
                    <p className="text-sm lg:text-lg" aria-hidden="true">Days</p>
                </div>
                <div className="text-center">
                    <span className="font-bold text-xl lg:text-4xl" aria-label={`Hours: ${timeLeft.hours}`}>{timeLeft.hours}</span>
                    <p className="text-sm lg:text-lg" aria-hidden="true">Hours</p>
                </div>
                <div className="text-center">
                    <span className="font-bold text-xl lg:text-4xl" aria-label={`Minutes: ${timeLeft.minutes}`}>{timeLeft.minutes}</span>
                    <p className="text-sm lg:text-lg" aria-hidden="true">Minutes</p>
                </div>

                <div className="text-center">
                    <span className="font-bold text-xl lg:text-4xl" aria-label={`Seconds: ${timeLeft.seconds}`}>{timeLeft.seconds}</span>
                    <p className="text-sm lg:text-lg" aria-hidden="true">Seconds</p>
                </div>

            </div>
            <p className="text-white lg:text-3xl sm:text-xl font-mono">
                Until HackHayward!
            </p>
        </div>
    );
};

const isValidDateString = (props, propName, componentName) => {
        const value = props[propName];
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            return new Error(
                `Invalid ${propName} supplied to ${componentName}. Expected ISO 8601 date string.`
            );
        }
    };

CountdownTimer.propTypes = {
    targetDate: isValidDateString
};


export default CountdownTimer; 