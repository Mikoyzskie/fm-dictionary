"use client"

import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
    children: ReactNode
}

interface IStates {
    useFont: string;
    setUseFont: React.Dispatch<React.SetStateAction<string>>
}

const ccontext = createContext<IStates>({
    useFont: "sans",
    setUseFont: () => { }
})

export const useCContext = () => useContext(ccontext);

export const PProvider = ({ children }: Props) => {
    const [useFont, setUseFont] = useState<string>("sans")

    return (
        <ccontext.Provider value={{ useFont, setUseFont }}>{children}</ccontext.Provider>
    )
}