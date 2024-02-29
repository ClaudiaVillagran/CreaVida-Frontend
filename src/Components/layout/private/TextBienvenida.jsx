import { useEffect, useState } from "react";

export const TextBienvenida = ({ totalTime, setTotalTime, setIsComplete, isComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const interval = 50;
    const text = 'Biienvenida, soy Mónica, tu asistente virtual ¿En qué te puedo ayudar hoy?';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            
            if (index < text.length-1) {
                setDisplayText(prevText => prevText + text[index]);
                index++;
            } else {
                clearInterval(timer);
                setIsComplete(true);
                setTotalTime((text.length * interval) / 1000);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container__text">
            <p>{displayText}</p>
        </div>
    );
};
