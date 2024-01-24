import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: ["400"], subsets: ["cyrillic"] })

export default function Empty() {
    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <p className={`${roboto.className} text-[64px]`}>😕</p>
            <p className='text-xl font-bold'>No Definitions Found</p>
            <p className='text-[#757575] text-center'>{"Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."}</p>
        </div>
    )
}
