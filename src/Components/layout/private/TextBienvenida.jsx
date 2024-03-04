import { useEffect, useState } from "react";

export const TextBienvenida = ({ userName, totalTime, setTotalTime, setIsComplete, isComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [showFullText, setShowFullText] = useState(false);
    const interval = 50;

    useEffect(() => {
        if (userName) {
            const text = `Bienvenida ${userName}, soy Mónica, tu asistente virtual. ¿En qué te puedo ayudar hoy?`;

            let index = 0;
            const timer = setInterval(() => {
                if (!showFullText && index < text.length) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                } else {
                    if (showFullText) {
                        setDisplayText(text)
                    }
                    clearInterval(timer);
                    setIsComplete(true);
                    setTotalTime((text.length * interval) / 1000);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [userName,showFullText]);
    const handleClick = () => {
        setShowFullText(true);
    };
    return (
        <div className="container__text" onClick={handleClick}>
            <p>{displayText}</p>
        </div>
    );
};
