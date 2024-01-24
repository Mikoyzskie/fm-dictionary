"use client"

import Dark from "@/components/Dark"
import Image from "next/image"
import { inter, lora, inconsolata } from "@/app/font"
import { useCContext } from "@/lib/Provider"
import { useState } from "react"
import clsx from "clsx"


export default function Header() {

    const [fontDrop, setFontDrop] = useState(false)
    const { setUseFont, useFont } = useCContext();

    return (
        <>
            <header className='header-container mt-[58px] mb-[51.5px] flex justify-between items-center'>
                <Image src={"/logo.svg"} alt='logo' width={34} height={38} />
                <div className='flex gap-[26px] items-center relative'>
                    <div className='flex gap-4 items-center ' onClick={() => { setFontDrop(!fontDrop) }}>
                        <span className='font-bold text-lg hover:cursor-pointer'>{
                            useFont === "sans" ? "Sans Serif" : useFont === "serif" ? "Serif" : "Mono"
                        }</span>
                        <Image src={"/icon-arrow-down.svg"} alt='arrow down' width={14} height={8} onClick={() => { setFontDrop(!fontDrop) }} className="hover:cursor-pointer" />
                        <div className={clsx("font-select absolute p-6 top-10 rounded-2xl shadow-[0_5px_20px_5px_#A445ED] flex flex-col gap-4 max-w-[183px] w-full mt-[10.5px] -left-10 dark:bg-[#1f1f1f] bg-[#f4f4f4]", fontDrop ? "" : "hidden")}  >
                            <p className={`${inter.className} font-bold text-lg hover:cursor-pointer`} onClick={() => { setUseFont("sans") }}>Sans Serif</p>
                            <p className={`${lora.className} font-bold text-lg hover:cursor-pointer`} onClick={() => { setUseFont("serif") }}>Serif</p>
                            <p className={`${inconsolata.className} font-bold text-lg hover:cursor-pointer`} onClick={() => { setUseFont("mono") }}>Mono</p>
                        </div>
                    </div>
                    <div className='bg-white h-8 w-[1px]' />
                    <Dark />
                </div>
            </header>

        </>
    )
}
