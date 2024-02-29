import React, { useEffect, useState } from 'react';

export const VirtualAssistant = ({isComplete }) => {
    const [isSpeaking, setIsSpeaking] = useState(true);

    useEffect(() => {
        if (!isComplete) {
            const timer = setInterval(() => {
                setIsSpeaking(prevIsSpeaking => !prevIsSpeaking); 
            }, 700);

            return () => clearInterval(timer);
        }
    }, [isComplete]);

    return (
        <div className='robot'>
            <div className='ear_robot'></div>
            <div className='face_robot'>
                <div className='container_eyes'>
                    <div className='parpado_robot eye_rigth' >
                        <div className={`eye_robot  ${isSpeaking ? ' eye_robot-speak' : ''}`}></div>
                    </div>
                    
                    <div className='parpado_robot ' >
                        
                    <div className={`eye_robot  ${isSpeaking ? ' eye_robot-speak' : ''}`}></div>
                    </div>
                </div>
                <div className={`mouth_robot  ${isSpeaking ? 'mouth_robot-speak ' : ''}`}>
                    <div className={`teeth_robot ${isSpeaking ? ' teeth_robot-speak' : ''}`}>
                        <h1 className='h1_teeth'>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                    </div>
                </div>
            </div>
            <div className='ear_robot'></div>
        </div>
    )
}
