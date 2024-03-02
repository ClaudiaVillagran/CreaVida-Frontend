import { useEffect, useState } from "react";

export const TextBienvenida = ({ userName, totalTime, setTotalTime, setIsComplete, isComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const interval = 50;

    useEffect(() => {
        if (userName) {
            const text = `Bienvenida ${userName}, soy Mónica, tu asistente virtual. ¿En qué te puedo ayudar hoy?`;

            let index = 0;
            const timer = setInterval(() => {
                if (index < text.length) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(timer);
                    setIsComplete(true);
                    setTotalTime((text.length * interval) / 1000);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [userName]);

    return (
        <div className="container__text">
            <p>{displayText}</p>
        </div>
    );
};
