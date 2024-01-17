"use client"
import React, { useRef } from 'react';

export default function Audio(source: any) {

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = () => {

        if (audioRef.current?.play) audioRef.current.play();
    };
    return (
        <div>
            <audio src={`${source.search}`} ref={audioRef}></audio>
            <button onClick={playAudio}>
                <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" ><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g></svg>
            </button>
        </div>
    )
}
