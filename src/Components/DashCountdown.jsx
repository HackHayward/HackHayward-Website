import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const DashCountdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [hasEnded, setHasEnded] = useState(false);
    const prevTimeLeft = useRef(timeLeft);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const target = new Date(targetDate);
            if (isNaN(target.getTime())) {
                console.error("Invalid target date provided");
                return;
            }
            const difference = target - new Date();

            if (difference > 0) {
                setHasEnded(false);
                setTimeLeft(prevTime => {
                    prevTimeLeft.current = prevTime;
                    return {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60)
                    };
                });
            } else {
                setHasEnded(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    const padNumber = useCallback(num => {
        return num.toString().padStart(2, '0');
    }, []);

    const renderDigit = (current, previous, position, unit) => {
        const currentDigits = padNumber(current);
        const previousDigits = padNumber(previous);
        const digit = currentDigits[position];
        const prevDigit = previousDigits[position];
        const hasChanged = digit !== prevDigit;

        return (
            <span 
                key={`${unit}-${position}-${hasChanged ? current : digit}`}
                className={`inline-block transform transition-all duration-1000 ${
                    hasChanged ? 'opacity-0 animate-[numberChange_0.5s_ease-out_forwards]' : ''
                }`}
            >
                {digit}
            </span>
        );
    };

    return (
        <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-exo2 mb-2">
                {hasEnded ? "Submission Deadline Passed" : "Time Remaining for Submissions"}
            </h3>
            
            {hasEnded ? (
                <div className="py-1">
                    <p className="text-red-400 font-bold">Submissions are now closed</p>
                    <p className="text-sm mt-1 opacity-80">Judging will begin shortly</p>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div role="timer" aria-live="polite" aria-label="Countdown timer" className="flex justify-center gap-3 my-1">
                        <div className="text-center px-1">
                            <span className="font-exo font-bold text-2xl inline-flex" aria-label={`Days: ${timeLeft.days}`}>
                                {[0, 1].map(pos => renderDigit(timeLeft.days, prevTimeLeft.current.days, pos, 'days'))}
                            </span>
                            <p className="font-grotesk text-xs" aria-hidden="true">Days</p>
                        </div>
                        <div className="text-center px-1">
                            <span className="font-exo font-bold text-2xl inline-flex" aria-label={`Hours: ${timeLeft.hours}`}>
                                {[0, 1].map(pos => renderDigit(timeLeft.hours, prevTimeLeft.current.hours, pos, 'hours'))}
                            </span>
                            <p className="font-grotesk text-xs" aria-hidden="true">Hours</p>
                        </div>
                        <div className="text-center px-1">
                            <span className="font-exo font-bold text-2xl inline-flex" aria-label={`Minutes: ${timeLeft.minutes}`}>
                                {[0, 1].map(pos => renderDigit(timeLeft.minutes, prevTimeLeft.current.minutes, pos, 'minutes'))}
                            </span>
                            <p className="font-grotesk text-xs" aria-hidden="true">Mins</p>
                        </div>
                        <div className="text-center px-1">
                            <span className="font-exo font-bold text-2xl inline-flex" aria-label={`Seconds: ${timeLeft.seconds}`}>
                                {[0, 1].map(pos => renderDigit(timeLeft.seconds, prevTimeLeft.current.seconds, pos, 'seconds'))}
                            </span>
                            <p className="font-grotesk text-xs" aria-hidden="true">Secs</p>
                        </div>
                    </div>
                    <p className="text-sm text-center font-medium mt-1 text-amber-300">
                        Submit your projects before the deadline!
                    </p>
                </div>
            )}
        </div>
    );
};

// PropTypes validation
DashCountdown.propTypes = {
    targetDate: PropTypes.string.isRequired
};

export default DashCountdown; 