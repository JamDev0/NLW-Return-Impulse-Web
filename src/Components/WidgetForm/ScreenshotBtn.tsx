import { Camera, Sticker, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { LoadingAnimation } from "../LoadingAnimation";


interface ScreenshotBtnProps {
    OnScreenshotTook: (screenshot: string | null) => void,
    Screenshot: string | null;
}

export function ScreenshotBtn({OnScreenshotTook, Screenshot}: ScreenshotBtnProps){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);


    async function HandleTakeScreenshot(){
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const Base64Canvas = canvas.toDataURL('image/png');

        OnScreenshotTook(Base64Canvas);

        setIsTakingScreenshot(false);
    }

    if(Screenshot)
    {
        return(
            <button
             type="button"
             className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 transition-colors"
             style={{
                 backgroundImage: `url(${Screenshot})`,
                 //  Propriedades necessárias paenas para esse Sticker, por ele não ter conteudo, assim deixando o preview da print "invisivel"
                 backgroundPosition: 'right bottom',
                 backgroundSize: 200,
             }}
             onClick={()=>{OnScreenshotTook(null)}}
            >
                <Trash weight="fill"/>
            </button>
        )
    }

    return(
        <button
         type="button"
         className="bg-zinc-800 text-zinc-100 rounded-md w-10 h-10 flex justify-center items-center transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
         onClick={HandleTakeScreenshot}
        >
        { isTakingScreenshot ? <LoadingAnimation/> : <Camera className="w-6 h-6"></Camera>}
        </button>
    )
}