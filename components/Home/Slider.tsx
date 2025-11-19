'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const sliderImage = [
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
]

const Slider = () => {
    const [value, setValue] = useState(0);
    console.log(value)

    useEffect(() => {
        const interval = setInterval(() => {
            if (value === sliderImage.length - 1) {
                setValue(0)
            } else {
                setValue(pre => pre + 1)
            }
        }, 2000)
        return () => { clearInterval(interval) }
    }, [value])

    return (
        <>
            {
                sliderImage.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img}
                        alt='slider image'
                        fill
                        className={`object-contain opacity-0 ${value === idx && 'opacity-100'} transition duration-300 ease-in`}
                       
                    />
                ))
            }
        </>
    );
};

export default Slider;