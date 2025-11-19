'use client'

import { useRouter } from "next/navigation";

const categoryLink = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]


const CategoryLInk = ({ category }: { category: string }) => {
    const route = useRouter()

    const handleOnClick = (item: string) => {
        if (item === '') {
            route.push('/store')
        } else {
            route.push(`/store?category=${item}`)
        }
    }

    return (
        <div className='sticky top-20'>
            <ul>
                <li
                    onClick={() => handleOnClick('')}
                    className={`text-center border mb-3 p-2 rounded-lg border-slate-300 text-slate-700 cursor-pointer hover:bg-slate-50 transition duration-75 ${category === '' && 'bg-slate-100 hover:bg-slate-100'}`}> All</li>
                {categoryLink.map((item) => (

                    <li
                        onClick={() => handleOnClick(item)}
                        key={item}
                        className={`text-center border mb-3 p-2 rounded-lg border-slate-300 text-slate-700 cursor-pointer hover:bg-slate-50 transition duration-75 ${category === item && 'bg-slate-100 hover:bg-slate-100'}`}>{item}

                    </li>

                ))}
            </ul>

        </div>
    );
};

export default CategoryLInk;