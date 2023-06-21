import React from 'react';
import { Card } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Sun from './assets/sun.png';
import Moon from './assets/Moon.png';
import styles from './index.module.css';

const Weather = ({ weatherData, mode }: any) => {
    const dayString = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const currDay = new Date().getDay();

    const currDate = new Date().toUTCString().slice(5, 16);
    const currTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <div className={styles.subContainer}>
            <p className={styles.date}>
                {currDate} , {currTime}
            </p>
            <br />
            {weatherData?.name &&
                <div className={styles.content}
                    style={{
                        background: mode ? 'url(/src/assets/d.png) no-repeat center center fixed' :
                            'url(/src/assets/Cloud.png) no-repeat',
                        backgroundPosition: 'right top'
                    }}
                >
                    <div style={{ width: '60%' }}>
                        <h3 className={styles.header}><LocationOnIcon style={{ fontSize: '20px' }} /> {weatherData?.name}</h3>
                        <p className={styles.day}>
                            {dayString.map((day, index) => (
                                <>{index == currDay && <span>{day}</span>}</>
                            ))}
                        </p>
                        <p className={styles.time}> </p>
                        <p className={styles.temp}> {Math.ceil(weatherData?.main?.temp)} &deg;C</p>
                        {/* <p>Sunrise: {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p> */}
                        {/* <p>Sunset: {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
                        <p className={styles.header}>Wind speed: {weatherData?.wind?.speed}</p>
                        <p className={styles.header}>Humidity: {weatherData?.main?.humidity} %</p>
                    </div>
                    <div className={styles.image}>
                        <img src={mode ? Sun : Moon} style={{ background: 'transparent', width: mode ? '100%' : '90%', height: mode ? '100%' : '90%', marginTop: mode ? '30%' : '0%' }} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Weather;