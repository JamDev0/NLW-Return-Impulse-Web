import { CloseBtn } from "./CloseBtn";

// import BugImage

const FeedbackTypes = {
    Bug: {
        Title: 'Problema',
        Image: {
            source: '',
            alt: ''
        }
    },
    Idea: {
        Title: 'Ideia',
    },
    Other: {
        Title: 'Outro',
    }
}

export function WidgetForm(){
    return(
        <div className="bg-darkSurface-500 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]  md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseBtn></CloseBtn>
            </header>

            <main>
                
            </main>

            <footer className='text-xs text-neutral-400'>
                Feito com ♥ pela <a className='underline underline-offset-2' href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}