import Image from 'next/image';
import React from 'react';
import { MainData } from '@/lib/type';

type SignleData = {
    data: MainData;
}

const SinglePage = ({ data }: SignleData) => {
    const { title, price, description, image, category, rating } = data;
    return (
        <div className='flex flex-col items-center gap-10 md:flex-row md:h-[calc(100vh-12vh)] mt-20'>
            <div className='relative flex-1 h-full w-full'>
                <Image
                    src={image}
                    alt=''
                    fill
                    className='object-contain select-none '
                // placeholder='blur'
                />
            </div>
            <div className=' text-slate-700 flex flex-1 flex-col items-start gap-5'>
                <strong className='text-3xl'>{title}</strong>
                <p className='text-sm'>{description}</p>
                <h3 className='text-2xl font-bold'>Price : ${price}</h3>
                <p><strong>Rate: </strong>{rating.rate}</p>
                <p><strong>Coute: </strong>{rating.count}</p>
                <p><strong>Category: </strong>{category}</p>
                <button className='bg-blue-500 text-white font-bold py-3 px-5 cursor-pointer rounded'>Add To Cart</button>
            </div>
        </div>
    );
};

export default SinglePage;