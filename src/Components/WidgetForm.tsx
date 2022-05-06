import { CloseBtn } from "./CloseBtn";
import BugIcon from '../Assets/BugIcon.svg';
import IdeaIcon from '../Assets/IdeaIcon.svg';
import ThoughtIcon from '../Assets/ThoughtIcon.svg';
import { useState } from "react";


const FeedbackTypes = {
    Bug: {
        Title: 'Problema',
        Image: {
            source: BugIcon,
            alt: 'Icone de "bug", um problema'
        }
    },
    Idea: {
        Title: 'Ideia',
        Image: {
            source: IdeaIcon,
            alt: 'Icone de lampada, simbolizando ideia'
        }
    },
    Other: {
        Title: 'Outro',
        Image: {
            source: ThoughtIcon,
            alt: 'Icone de pensamento'
        }
    }
}

type FeedbackTYPE = keyof typeof FeedbackTypes;

export function WidgetForm(){
    const [FeedbackType, setFeedbackType] = useState<FeedbackTYPE | null>(null)


    return(
        <div className="bg-darkSurface-500 p-4 relative rounded-2xl mb-4 flex flex-col items-center gap-y-6 shadow-lg w-[calc(100vw-2rem)]  md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseBtn></CloseBtn>
            </header>

            {!FeedbackType ? (
                <main className="flex gap-x-2">
                    {Object.entries(FeedbackTypes).map(([key, val])=>{
                        return (
                            <button
                                key={key}
                                className="bg-darkSurface-400 py-4 rounded-md flex flex-1 flex-col items-center justify-items-center w-24 gap-y-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                type="button"
                                onClick={()=> setFeedbackType(key as FeedbackTYPE)}
                                >
                                <img src={val.Image.source} alt={val.Image.alt}></img>
                                <span>{val.Title}</span> 
                            </button>
                        )
                    })}
            </main>
            ) : (
                <h1>AA</h1>
            )}

            

            <footer className='text-xs text-neutral-400'>
                Feito com ♥ pela <a className='underline underline-offset-2' href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}