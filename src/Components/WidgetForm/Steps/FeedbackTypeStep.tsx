import {FeedbackTypes, FeedbackTYPE} from '..'

interface FeedbackTypeStepProps {
    FeedbackClicked: (type: FeedbackTYPE) => void;
}

export function FeedbackTypeStep(Props: FeedbackTypeStepProps){
    return(
        <main className="flex gap-x-2">
                {Object.entries(FeedbackTypes).map(([key, val])=>{
                    return (
                        <button
                            key={key}
                            className="bg-darkSurface-400 py-4 rounded-md flex flex-1 flex-col items-center justify-items-center w-24 gap-y-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={Props.FeedbackClicked}
                            >
                            <img src={val.Image.source} alt={val.Image.alt}></img>
                            <span>{val.Title}</span> 
                        </button>
                    )
                })}
        </main>
    )
}