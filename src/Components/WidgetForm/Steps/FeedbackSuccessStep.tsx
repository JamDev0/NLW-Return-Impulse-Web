import { CloseBtn } from "../../CloseBtn";
import SuccessIcon from '../../../Assets/SuccessIcon.svg'

interface FeedbackSuccessStepProps {
    BtnClick: () => void
}

export function FeedbackSuccessStep({BtnClick}:FeedbackSuccessStepProps){
    return(
        <>
            <header>
                <CloseBtn></CloseBtn>
            </header>

            <div
             className="flex flex-col items-center justify-center py-10 w-[304px]"
            >
                <img
                 src={SuccessIcon}
                 className='w-10 h-10'
                 ></img>
                <span
                 className="text-5 leading-6 mt-2"
                >Agradecemos o feedback!</span>

                <button
                 onClick={BtnClick}
                 className="bg-zinc-800 rounded-md text-sm leading-6 py-2 px-6 mt-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Quero enviar outro
                </button>
            </div>

        </>
    )
}