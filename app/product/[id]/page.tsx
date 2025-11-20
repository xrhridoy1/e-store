import SinglePage from '@/components/SinglePage';
import { SingleProduct } from '@/lib/ProductFetching/Product';
import React from 'react';


export const dynamic = 'force-dynamic';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}) {


    const { id } = await params;
    const data = await SingleProduct(Number(id));
    return {
        title: data.title,
        description: data.description,

    }
}


const SignlePage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {


    const { id } = await params

    const data = await SingleProduct(Number(id));

    return (
        <div className='main-width '>
            <SinglePage data={data} />
        </div>
    );
};

export default SignlePage;