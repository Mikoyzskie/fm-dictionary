import Dark from "@/components/Dark"
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
                    <Dark />
                </div>
            </header>

        </>
    )
}
