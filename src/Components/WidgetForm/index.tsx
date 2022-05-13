import { CloseBtn } from "../CloseBtn";

import { useState } from "react";

import BugIcon from '../../Assets/BugIcon.svg';
import IdeaIcon from '../../Assets/IdeaIcon.svg';
import ThoughtIcon from '../../Assets/ThoughtIcon.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackRalateStep } from "./Steps/FeedbackRalateStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const FeedbackTypes = {
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

export type FeedbackTYPE = keyof typeof FeedbackTypes;


export function WidgetForm(){
    const [FeedbackType, setFeedbackType] = useState<FeedbackTYPE | null>(null);
    const [FeedbackSend, setFeedbackSend] = useState(false);

    function HandleFeedbackTypeRestart(){
        setFeedbackSend(false)
        setFeedbackType(null);
    }


    return(
        <div className="bg-darkSurface-500 p-4 relative rounded-2xl mb-4 flex flex-col items-center gap-y-6 shadow-lg w-[calc(100vw-2rem)]  md:w-auto">
            

            {FeedbackSend ? (
                <FeedbackSuccessStep BtnClick={HandleFeedbackTypeRestart}/>
            ) : (
                <>
                    {!FeedbackType ? (
                        <FeedbackTypeStep
                        FeedbackClicked={setFeedbackType}
                        />
                    ) : (
                        <FeedbackRalateStep
                        FeedbackTypeInProps={FeedbackType}
                        BackArrowFunction={HandleFeedbackTypeRestart}
                        OnFeedbackSend={()=>{setFeedbackSend(true)}}
                        />
                    )}
                </>
            )
            }

            

            

            <footer className='text-xs text-neutral-400'>
                Feito com ♥ pela <a className='underline underline-offset-2' href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}