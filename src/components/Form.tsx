"use client"
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    search: string;
}


export default function Form() {

    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        search: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.push(`/?search=${formData.search}`);
        setFormData({ search: "" })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-full bg-[#1f1f1f] rounded-2xl flex items-center mb-[45px]'>

                <input name='search' value={formData.search} type="text" className='w-full text-xl font-bold py-5 px-6 bg-transparent outline-none border-none' onChange={handleChange} autoComplete='off' />

                <div className='pr-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z" /></svg>
                </div>
            </div>
        </form>
    )
}
