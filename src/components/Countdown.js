import React, { useEffect, useState } from 'react'
// import './Countdown.css'
const Countdown = ({ language, darkTheme }) => {

    const [time, setTime] = useState(null);

    // const endTime = 1673971200000;

    const endTime = 1676912400000;
    const getTime = () => {
        if (time !== null) return;
        let tempTime = Date.now();
        console.log(tempTime)
        let tempTimeInterval = Math.floor((endTime - tempTime) / 1000, 0)
        if (tempTimeInterval <= 0) {
            setTime(0)
            return
        }
        setTime(tempTimeInterval)
    }

    getTime();

    useEffect(() => {
        let interval;
        if (time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        if (time === 0) return;
        return () => clearInterval(interval);
    }, [time]);

    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    let formattedDays
    let formattedHours
    let formattedMinutes
    let formattedSeconds

    if (days < 10) formattedDays = `0${days}`
    else formattedDays = days
    if (hours < 10) formattedHours = `0${hours}`
    else formattedHours = hours
    if (minutes < 10) formattedMinutes = `0${minutes}`
    else formattedMinutes = minutes
    if (seconds < 10) formattedSeconds = `0${seconds}`
    else formattedSeconds = seconds

    return (
        <div className={
            "text-4 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
        }>
            {
                language === "中" ? " 倒計時" : " Countdown"
            }
            <br />
            <div
                style={{
                    // backgroundColor: 'black',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '50px',
                    // position: 'fixed',
                    // width: '100vw',
                    // height: '50px',
                    // position: 'fixed',
                    // bottom: '0px',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}>
                {/* IDO */}
                {/* {
                    language === "中" ? " 倒計時" : " Countdown"
                }
                <br /> */}
                <div className='times'>
                    {formattedDays}
                </div>
                :
                <div className='times'>
                    {formattedHours}
                </div>
                :
                <div className='times'>
                    {formattedMinutes}
                </div>
                :
                <div className='times'>
                    {formattedSeconds}
                </div>
            </div>
        </div>
    )
}

export default Countdown
