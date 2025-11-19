import Image from 'next/image';
import React from 'react';
import { MainData } from './../../lib/type';
import Link from 'next/link';

type ProductCardProps = {
    data: MainData;
};


const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <Link href={`/product/${data.id}`} >
            <section className='max-w-[400px] sm:max-w-[270px] w-full bg-white p-4 shadow-lg mb-3 rounded-xl hover:-translate-y-1 transition border'>
                <div className='relative h-[300px] w-[250px] mb-5'>
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                        className='object-contain mb-5'
                    />
                </div>
                <div>
                    <p className='mb-5 text-slate-700'>{(data.title).substring(0, 25)}...</p>
                    <h3 className='font-bold mb-5 text-slate-700'>$ {data.price}</h3>
                    <button className='py-2 px-4 bg-pink-500 text-white rounded '>Buy Now</button>
                </div>
            </section>
        </Link>
    );
};

export default ProductCard;