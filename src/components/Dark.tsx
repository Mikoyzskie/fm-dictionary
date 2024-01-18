import React from 'react'

export default function Dark() {
    return (
        <div className='flex gap-5 items-center group'>

            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-[#757575] peer-checked:after:translate-x-[130%] rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2.5px] after:start-[4px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all dark:border-gray-600 peer-checked:bg-[#A445ED] hover:bg-[#A445ED]"></div>
            </label>
            <div className='grid'>
                <svg className='svgtest group-hover:-rotate-90 group-hover:opacity-0 opacity-100 transition-all duration-300	' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                    className='svgtest group-hover:rotate-90 group-hover:opacity-100 opacity-0 transition-all duration-300'
                >
                    <path
                        fill="#A445ED"
                        strokeMiterlimit="10"
                        d="M11.875.188a.998.998 0 00-.875 1v2c-.004.359.184.695.496.878.313.18.695.18 1.008 0 .312-.183.5-.52.496-.878v-2a1.004 1.004 0 00-1.125-1zM4 3.374a.994.994 0 00-.781.703c-.106.367.004.758.281 1.016L4.906 6.5c.242.297.63.434 1.004.348.371-.086.664-.38.75-.75a1.004 1.004 0 00-.347-1.004L4.905 3.688a1 1 0 00-.718-.313H4zm15.688 0a1.005 1.005 0 00-.594.313l-1.407 1.406a1.005 1.005 0 00-.347 1.004c.086.37.379.664.75.75.375.086.762-.051 1.004-.348L20.5 5.094a1.002 1.002 0 00-.719-1.719h-.093zM12 5.188c-3.844 0-7 3.156-7 7 0 3.843 3.156 7 7 7s7-3.157 7-7c0-3.844-3.156-7-7-7zm0 2c2.754 0 5 2.246 5 5 0 2.753-2.246 5-5 5a5.01 5.01 0 01-5-5c0-2.754 2.246-5 5-5zm-11.188 4c-.55.05-.957.542-.906 1.093.051.551.543.957 1.094.906h2c.36.004.695-.183.879-.496a1.01 1.01 0 000-1.007c-.184-.313-.52-.5-.879-.496H.812zm20 0c-.55.05-.957.542-.906 1.093.051.551.543.957 1.094.906h2c.36.004.695-.183.879-.496a1.01 1.01 0 000-1.007c-.184-.313-.52-.5-.879-.496h-2.187zM5.47 17.593a.99.99 0 00-.563.312L3.5 19.281a1.006 1.006 0 001.406 1.438l1.407-1.406c.324-.301.41-.778.214-1.172a.996.996 0 00-1.058-.547zm12.718 0a.994.994 0 00-.78.703c-.106.367.003.758.28 1.016l1.407 1.406A1.006 1.006 0 0020.5 19.28l-1.406-1.375a1.004 1.004 0 00-.813-.312h-.093zm-6.312 2.593a.998.998 0 00-.875 1v2c-.004.36.184.696.496.88.313.18.695.18 1.008 0 .312-.184.5-.52.496-.88v-2a1.004 1.004 0 00-1.125-1z"
                        fontFamily="none"
                        fontSize="none"
                        fontWeight="none"
                        textAnchor="none"
                        transform="scale(10.66667)"
                    ></path>
                </svg>
            </div>


        </div>
    )
}
