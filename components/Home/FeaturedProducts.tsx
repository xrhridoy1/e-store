import React from 'react';
import ProductCard from '../Shared/ProductCard';
import { Featured } from '@/lib/ProductFetching/Product';
import { MainData } from '@/lib/type';


const FeaturedProducts = async () => {
    const data = await Featured()
    return (
        <main className='bg-slate-50 py-10'>
            <section className='main-width'>
                <div>
                    <h1 className='text-3xl font-bold text-center py-10 text-slate-700'>Feature Products</h1>
                </div>
                <main className='flex justify-center flex-wrap gap-4'>
                    {data.map((data: MainData) => (
                        <ProductCard key={data.id} data={data} />
                    ))}
                </main>
            </section>
        </main>
    );
};

export default FeaturedProducts;