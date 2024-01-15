

export default async function Home() {

  async function searchWord(term: string) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`, {
      method: 'GET'
    })
    return response.json()
  }

  const result = await searchWord("search")
  console.log(result[0].meanings[1]);

  // const audio = new Audio;
  // audio.src = "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"

  // function playAudio() {
  //   audio.play()
  // }


  return (
    <>
      <div className='w-full bg-[#1f1f1f] rounded-2xl flex items-center mb-[45px]'>
        <input type="text" className='w-full text-xl font-bold py-5 px-6 bg-transparent outline-none border-none' />
        <div className='pr-6'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z" /></svg>
        </div>
      </div>
      <main className='mb-[124px]'>
        <div className='flex items-center justify-between mb-[42px]'>
          <div>
            <h1 className='text-[64px] font-bold'>{result[0].word}</h1>
            <p className='text-[#A445ED] text-2xl '>{result[0].phonetic}</p>
          </div>

          <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g></svg>
        </div>
        {result[0].meanings.map((defs: any) =>
          <div key={defs.definition}>
            <div className='flex items-center gap-8 mb-[43px]'>
              <span className='text-2xl'>{defs.partOfSpeech}</span>
              <div className='h-[1px] bg-[#3A3A3A] w-full' />
            </div>
            <div>
              <p className='text-xl text-[#757575] mb-[27px]'>Meaning</p>
              <ul className='text-lg mb-[41px] text-justify ml-[44px] list-disc list-outside'>

                {/* {
                  defs.definitions.map((means: any, ) => (
                    <li key={means}><p className="pl-3">{means}</p></li>
                  ))
                } */}


              </ul>
              <div className='flex gap-10 mb-[43px]'>
                <p className='text-[#757575]'>Synonyms</p>
                <p className='text-[#A445ED] text-xl font-bold'>electronic keyboard</p>
              </div>
            </div>
          </div>
        )}
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
              {result[0].sourceUrls.map((url: string) => (
                url
              ))}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" /></svg>
            </a>
          </div>
        </div>
      </main >
    </>
  )
}
