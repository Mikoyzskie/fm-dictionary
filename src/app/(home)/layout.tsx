"use client"

import clsx from "clsx"
import { inter, lora, inconsolata } from "@/app/font"
import '../globals.css'
import Header from '@/components/Header'
import { useCContext } from "@/lib/Provider"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const { useFont } = useCContext();

    return (

        <body className={clsx(`max-w-[737px] w-full m-auto px-6`,
            useFont === "sans" ? inter.className : useFont === "serif" ? lora.className : inconsolata.className
        )}>
            <Header />
            {children}
        </body>

    )
}
