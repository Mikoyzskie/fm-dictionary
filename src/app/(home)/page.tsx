import clsx from "clsx"
import Loading from "@/components/Loading"
import Link from "next/link"
import Audio from "@/components/Audio";
import Empty from "@/components/Empty";

interface AudioItem {
  source: string
}

export default async function Home(params: any) {

  let isLoading = false;

  async function searchWord() {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${params.searchParams.search}`, {
        method: 'GET'
      })
      isLoading = true;
      return response.json()
    } catch (error) {
      return
    } finally {
      isLoading = false;
    }
  }

  const result = await searchWord()

  const audioArr: AudioItem[] = []

  if (result[0]) {
    result[0].phonetics.map((auds: any) => {
      if (auds.audio) {
        audioArr.push(auds.audio.toString())
      }
    })
  }


  if (params.searchParams.search === undefined) return (
    <p> </p>
  )


  return (
    <>
      {!result[0] &&
        <Empty />
      }
      {
        result[0] &&
        <main className='lg:mb-[124px] md:mb-[118px] mb-[89px] w-full'>
          <div className='flex items-center justify-between mb-[32px] md:mb-[42px]'>
            <div>
              <h1 className='text-[32px] md:text-[64px] font-bold'>{result[0].word}</h1>
              <p className='text-[#A445ED] text-2xl '>{result[0].phonetic}</p>
            </div>
            <Audio search={audioArr[0]} />
          </div>
          {result[0].meanings.map((defs: any, index: number) => {

            const syms = defs.synonyms
            const ants = defs.antonyms

            return (
              <div key={index}>
                <div className='flex items-center gap-4 md:gap-8 mb-[31px] md:mb-[43px]'>
                  <span className='italic text-lg md:text-2xl font-bold'>{defs.partOfSpeech}</span>
                  <div className='h-[1px] bg-[#E9E9E9] dark:bg-[#3A3A3A] w-full' />
                </div>
                <div>
                  <p className='md:text-xl text-base text-[#757575] mb-[17px] md:mb-[27px]'>Meaning</p>
                  <ul className='text-[17px] md:text-lg mb-[24px] md:mb-[41px] text-justify ml-6 md:ml-[44px] list-disc list-outside'>

                    {
                      defs.definitions.map((means: any, index: number) => {
                        return (
                          <li key={index}>
                            <p className="md:pl-3 my-[13px]">{means.definition}</p>
                            {
                              means.example === undefined ? "" : <p className="pl-3 my-[13px] text-[#757575]">{`"${means.example}"`}</p>
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                  {syms.length > 0 ? (
                    <div className={clsx("flex gap-10",
                      ants.length === 0 ? "mb-6 md:mb-[43px]" : ""
                    )}>
                      <p className='text-[#757575] md:text-[20px] text-base'>Synonyms</p>
                      <p className="text-[#A445ED] text-base md:text-xl font-bold text-justify">
                        {
                          syms.map((sym: string, index: number) => (
                            <span key={sym} className="inline-block text-justify">
                              <Link href={`/?search=${sym}`}>
                                {sym}
                              </Link>
                              {
                                index < syms.length - 1 && <span>&nbsp;&nbsp;&nbsp;</span>
                              }
                            </span>
                          ))
                        }
                      </p>

                    </div>
                  ) : ""
                  }
                  {ants.length > 0 ? (
                    <div className="flex gap-10 mb-[43px] mt-[12px]">
                      <p className='text-[#757575]'>Antonyms</p>
                      <p className="text-[#A445ED] text-xl font-bold inline-block text-justify">
                        {
                          ants.map((ant: string, index: number) => (
                            <span key={index} className="inline-block text-justify">
                              <Link href={`/?search=${ant}`}>
                                {ant}
                              </Link>
                              {
                                index < ants.length - 1 && <span>&nbsp;&nbsp;&nbsp;</span>
                              }
                            </span>
                          ))
                        }
                      </p>

                    </div>
                  ) : ""
                  }

                </div>
              </div>
            )
          }
          )}

          <div>
            <div className='h-[1px] bg-[#E9E9E9] dark:bg-[#3A3A3A] w-full mb-[21px]' />
            <div className='flex md:items-center md:gap-[25px] text-sm md:flex-row flex-col'>
              <span className='text-[#757575]'>Source</span>
              <a href={`${result[0].sourceUrls[0]}`} target='_blank' className='flex items-center gap-2'>
                {result[0].sourceUrls[0]}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" /></svg>
              </a>
            </div>
          </div>

        </main >
      }
    </>
  )
}
