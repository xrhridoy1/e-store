import SinglePage from '@/components/SinglePage';
import { SingleProduct } from '@/lib/ProductFetching/Product';
import { MainData } from '@/lib/type'
import React from 'react';


export async function generateStaticParams() {
    const posts = await fetch('https://fakestoreapi.com/products').then((res) => res.json())

    return posts.map((post: MainData) => ({
        id: post.id.toString(),
    }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: number }>
}) {


    const { id } = await params;
    const data = await SingleProduct(id);
    return {
        title: data.title,
        description: data.description,
       
    }
}


const SignlePage = async ({
    params,
}: {
    params: Promise<{ id: number }>
}) => {


    const { id } = await params

    const data = await SingleProduct(id);

    return (
        <div className='main-width '>
            <SinglePage data={data} />
        </div>
    );
};

export default SignlePage;