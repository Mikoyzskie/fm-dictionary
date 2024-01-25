"use client"

import clsx from "clsx"
import { inter, lora, inconsolata } from "@/app/font"
import '../globals.css'
import Header from '@/components/Header'
import { useCContext } from "@/lib/Provider"
import Form from "@/components/Form";
import { Providers } from '@/lib/TProvider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const { useFont } = useCContext();

    return (

        <body className={clsx(`max-w-[737px] w-full m-auto px-6 dark:bg-[#050505] bg-white dark:text-white text-[#050505]`,
            useFont === "sans" ? inter.className : useFont === "serif" ? lora.className : inconsolata.className
        )}>
            <Providers>
                <Header />
                <Form />
                {children}
            </Providers>
        </body>

    )
}
