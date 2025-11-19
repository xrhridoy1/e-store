import React from 'react';
import Slider from './Slider';


const HeroSection = () => {
    return (
        <div className='h-[calc(100vh-8vh)] main-width mt-17 lg:p-10 flex flex-col lg:flex-row gap-4 items-center'>
            {/* text container  */}
            <div className='text-slate-700 flex flex-col gap-5 items-start flex-1 order-2 lg:order-1'>
                <h1 className=' text-3xl lg:text-5xl font-bold text-slate-700'>One Stop Solution <span className=' py-3 text-pink-500'>E-Store</span> </h1>
                <p className='text-base lg:text-xl'>Discover the Latest Headphones, Earphones, Mobiles, Tables etc</p>
                <p className='text-sm lg:text-lg'>Exclusive deals for you ?</p>
                <button className='px-5 py-4 bg-pink-100 text-pink-400 rounded font-bold'>Shop Now</button>
            </div>
            <div className='relative w-full h-full flex-1 order-1 lg:order-2'>
                <Slider />
            </div>
        </div>
    );
};

export default HeroSection;