import {ChatTeardropDots} from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget(){
    return(
        <Popover className='absolute md:bottom-3 md:right-3 bottom-7 right-7 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm></WidgetForm>
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full p-4 text-white text-2xl hover:bg-brand-400 flex items-center group'>
                <ChatTeardropDots className='w-8 h-8' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}