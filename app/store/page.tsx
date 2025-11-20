
import ProductCard from '@/components/Shared/ProductCard';
import CategoryLInk from '@/components/Store/CategoryLInk';
import { MainData } from '@/lib/type';


export const dynamic = 'force-dynamic';

const StorePage = async ({ searchParams }: { searchParams: Promise<{ category?: string }> }) => {
    const params = await searchParams;
    const category = params?.category || '';


    let url = ''
    if (category === '') {
        url = 'https://fakestoreapi.com/products'
    } else {
        url = `https://fakestoreapi.com/products/category/${category}`
    }
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();

    return (
        <main className='flex gap-3 main-width mt-20 '>
            <div className='w-1/4 min-h-screen'>
                <CategoryLInk category={category} />
            </div>
            <div className='w-full'>
                {category && <p className='p-4'>{category}</p>}
                <div className='flex flex-wrap gap-3 justify-center'>

                    {data.map((item: MainData) => (
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default StorePage;