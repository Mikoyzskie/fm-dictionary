import Image from 'next/image'

export default function Home() {
  return (
    <main className='mb-[124px]'>
      <div className='flex items-center justify-between mb-[42px]'>
        <div>
          <h1 className='text-[64px] font-bold'>keyboard</h1>
          <p className='text-[#A445ED] text-2xl '>{'/ˈkiːbɔːd/'}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g></svg>
      </div>
      <div className='flex items-center gap-8 mb-[43px]'>
        <span className='text-2xl'>noun</span>
        <div className='h-[1px] bg-[#3A3A3A] w-full' />
      </div>
      <div>
        <p className='text-xl text-[#757575] mb-[27px]'>Meaning</p>
        <ul className='text-lg list-disc ml-[22px] mb-[41px] text-justify'>
          <li className='text-[#A445ED]'><p className='text-[#fff]'>(etc.) A set of keys used to operate a typewriter, computer etc.</p></li>
          <li className='text-[#A445ED]'><p className='text-[#fff]'>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</p></li>
          <li className='text-[#A445ED]'><p className='text-[#fff]'>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</p></li>
        </ul>
        <div className='flex gap-10 mb-[43px]'>
          <p className='text-[#757575]'>Synonyms</p>
          <p className='text-[#A445ED] text-xl font-bold'>electronic keyboard</p>
        </div>
      </div>
      <div className='flex items-center gap-8 mb-[43px]'>
        <span className='text-2xl'>verb</span>
        <div className='h-[1px] bg-[#3A3A3A] w-full' />
      </div>
      <div>
        <p className='text-xl text-[#757575] mb-[27px]'>Meaning</p>
        <ul className='text-lg list-disc ml-[22px] mb-[39px] text-justify'>
          <li>
            <div className='flex flex-col gap-[13px]'>
              <p>To type on a computer keyboard.</p>
              <p className='text-[#757575]'>{"“Keyboarding is the part of this job I hate the most.”"}</p>
            </div>
          </li>
        </ul >
      </div >
      <div>
        <div className='h-[1px] bg-[#3A3A3A] w-full mb-[21px]' />
        <div className='flex items-center gap-[25px] text-sm'>
          <span className='text-[#757575]'>Source</span>
          <a href="https://en.wiktionary.org/wiki/keyboard" target='_blank' className='flex items-center gap-2'>
            https://en.wiktionary.org/wiki/keyboard
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" /></svg>
          </a>
        </div>
      </div>
    </main >
  )
}
