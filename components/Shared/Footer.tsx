import Link from 'next/link';
import React from 'react';

const LinkIcon = ['F', 'Tw', 'ins', 'Lik']

const Footer = () => {
    return (
        <div className='bg-pink-200 mt-10'>
            <main className='main-width py-10 text-slate-700 flex gap-4 flex-col lg:flex-row'>
                {/* company and link */}
                <section className='flex flex-col md:flex-row w-full gap-3'>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-3xl font-bold mb-3'>Our Company</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati, fugit inventore consequatur alias at, </p>
                        <div className='flex gap-2 my-2'>
                            {
                                LinkIcon.map((item, idx) => (
                                    <p key={idx}
                                        className='h-10 w-15 text-center border rounded-xl  p-2'
                                    >{item}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-3xl font-bold mb-3'>Quick Link</h3>
                        <ul >
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/store'}>Store</Link></li>
                        </ul>
                    </div>
                </section>
                {/* subscription  */}
                <section className='w-full'>
                    <h3 className='text-2xl md:text-3xl font-bold mb-3'>Subscribe To Our News Letter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati, fugit inventore consequatur alias at, </p>
                    <form className='border border-pink-400 w-[350px] flex gap-2 rounded-xl overflow-hidden mt-3'>
                        <input type="email" placeholder='Enter email to Subscribe' className='w-full py-3 px-2 outline-none border-none' />
                        <button className='bg-pink-500 py-3 px-5 text-white'>Subscribe</button>
                    </form>
                </section>
            </main>
            <p className='text-center inline-block py-5 w-full text-slate-700'>&copy; All the right reserved E-store</p>
        </div>
    );
};

export default Footer;