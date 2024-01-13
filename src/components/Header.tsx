import React from 'react'
import Image from "next/image"

export default function Header() {
    return (
        <>
            <header className='header-container mt-[58px] mb-[51.5px] flex justify-between items-center'>
                <Image src={"/logo.svg"} alt='logo' width={34} height={38} />
                <div className='flex gap-[26px] items-center'>
                    <div className='flex gap-4 items-center'>
                        <span className='font-bold text-lg'>Sans Serif</span>
                        <Image src={"/icon-arrow-down.svg"} alt='arrow down' width={14} height={8} />
                    </div>
                    <div className='bg-white h-8 w-[1px]'></div>
                    <div className='flex gap-5 items-center'>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-[#757575] peer-checked:after:translate-x-[130%] rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2.5px] after:start-[4px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all dark:border-gray-600 peer-checked:bg-[#A445ED] hover:bg-[#A445ED]"></div>
                        </label>

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
                    </div>
                </div>
            </header>

        </>
    )
}
