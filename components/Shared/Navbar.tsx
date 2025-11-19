import Link from 'next/link';
import React from 'react';

const navigationMenu = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Store',
        link: '/store'
    }
]

const Navbar = () => {
    return (
        <main className='border-b border-slate-300 shadow fixed top-0 left-0 w-full z-10 backdrop-blur bg-[#ffffff8f] rounded-b-2xl'>
            <nav className='main-width flex justify-between items-center'>
                {/* nav logo  */}
                <div>
                    <Link href={'/'}><h2 className='text-4xl font-bold py-3 text-pink-500'>E-Store</h2></Link>
                </div>
                <div className='border border-slate-300 rounded-full hidden md:flex h-12 overflow-hidden w-[400px] lg:w-[600px] select-none '>
                    <input type="text" placeholder='Search Any Item' className='flex-1 P-3 pl-5 pr-2 outline-none border-none' />
                    <p className='bg-pink-500 text-white p-2 text-2xl w-20 text-center cursor-pointer'><span className='rotate-300 inline-block '>Ϙ</span></p>

                </div>
                <div className='flex gap-3 items-center'>
                    {navigationMenu.map((item, idx) => (
                        <Link key={idx} href={item.link} className={`hover:text-pink-500 transition duration-100 ease-in `}>{item.name}</Link>
                    ))}
                    <p>🛒</p>
                </div>
            </nav>

        </main>
    );
};

export default Navbar;