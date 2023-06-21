// import './index.css';
import React, { useEffect, useState } from "react";
import Weather from './WeatherReport';
export default function WeatherReport() {

    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [data, setData] = useState<any>([]);
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 19


    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log(lat, long);
        if (lat && long) {
            test(lat, long)
            test1(lat, long)
        }
    }, [lat, long])

    async function test(lat: number, long: number) {
        await fetch(`${import.meta.env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result)
            });
    }

    async function test1(lat: number, long: number) {
        await fetch(`${import.meta.env.VITE_API_URL_TWO}/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result)
            });
    }
    return (
        <div className='container'
            style={{
                background: isDayTime ? 'url(/src/assets/cloud.jpg) no-repeat center center fixed' :
                    'url(/src/assets/night.jpg) no-repeat center center fixed',
                backgroundSize: '100% 100%',
                width: '100%'
            }}
        >
            {(data?.main != 'undefined') &&
                <>

                    <Weather weatherData={data} mode={isDayTime} />
                </>
            }
        </div>
    );
}