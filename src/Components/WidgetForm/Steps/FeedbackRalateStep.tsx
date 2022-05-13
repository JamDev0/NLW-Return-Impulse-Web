import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackTYPE, FeedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseBtn } from "../../CloseBtn";
import { LoadingAnimation } from "../../LoadingAnimation";
import { ScreenshotBtn } from "../ScreenshotBtn";

interface FeedbackRalateStepProps {
    FeedbackTypeInProps: FeedbackTYPE;
    BackArrowFunction: () => void;
    OnFeedbackSend: () => void;
}


export function FeedbackRalateStep({FeedbackTypeInProps, BackArrowFunction, OnFeedbackSend}: FeedbackRalateStepProps){
    const SelectedFeedbackType = FeedbackTypes[FeedbackTypeInProps];

    const [Screenshot, setScreenshot] = useState<string | null>(null);
    const [Coment, setComent] = useState<string>('');

    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    async function HandleSubmitForm(event: FormEvent){
        event.preventDefault();

        setIsSendingFeedback(true);

        await api.post('/feedbacks', {
            Type: FeedbackTypeInProps,
            Comment: Coment,
            Screenshot: Screenshot,
        });

        setIsSendingFeedback(false);

        OnFeedbackSend();
    }


    return(
        <>
            <header className="flex gap-2 text-xl leading-6">
                <button 
                 type='button'
                 onClick={BackArrowFunction}
                 className='absolute top-4 left-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500'
                >
                    <ArrowLeft
                     weight='bold'
                     className='w-4 h-4 text-zinc-400 hover:text-zinc-100'
                     alt='voltar a seleção de tipos de feedback'
                    ></ArrowLeft>
                </button>

                <img
                 className="w-6 h-6"
                 src={SelectedFeedbackType.Image.source}
                 alt={SelectedFeedbackType.Image.alt}
                ></img>
                <span>{SelectedFeedbackType.Title}</span>
                
                <CloseBtn></CloseBtn>
            </header>

            <form onSubmit={HandleSubmitForm} className="my-4 w-full">
                <textarea
                 className="bg-transparent min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 resize-none border-zinc-600 rounded-md focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                 placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
                 onChange={event => {setComent(event.target.value)}}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotBtn 
                     Screenshot={Screenshot}
                     OnScreenshotTook={setScreenshot}
                    />

                    <button 
                     className="bg-brand-500 flex-1 flex justify-center items-center p-2 text-sm border-transparent rounded-md transition-colors hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
                     type="submit"
                     disabled={Coment.length === 0 || isSendingFeedback}
                    >
                        {isSendingFeedback ? <LoadingAnimation/> : 'Enviar feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}