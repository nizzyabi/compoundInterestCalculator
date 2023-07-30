import React from 'react'

export default function Layout(props) {
    const { children } = props
    return (
        <div className='min-h-screen bg-slate-900 text-white flex flex-col gap-10 sm:gap-12 md:gap-15 p-4'>
            <header className='flex flex-col gap-4 items-center justify-center max-w-[800px] pt-16 sm:pt-20 w-full mx-auto'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-center'><span className='hover:text-cyan-500'>Compound </span> <span className='hover:text-pink-300'>Interest </span> <span className='hover:text-yellow-600'>Calculator</span></h1>
                <div className='flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl'>
                    <i className="fa-solid fa-money-bill-wave hover:animate-spin"></i>
                    <i className="fa-solid fa-money-bill-wave hover:animate-spin"></i>
                    <i className="fa-solid fa-money-bill-wave hover:animate-spin"></i>

                </div>
            </header>
            <p className='text-center text-slte-200 text-lg md:text-base'>Compound time!</p>
            <main className='flex-1 flex flex-col gap-4 max-w-[600px] w-full mx-auto'>
                {children}
            </main>
            <footer></footer>
        </div>
    )
}
