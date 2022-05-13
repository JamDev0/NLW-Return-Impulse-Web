import {Popover} from '@headlessui/react';
import {X} from 'phosphor-react'

export function CloseBtn(){
    return(
        <Popover.Button className='absolute rounded-md top-4 right-4 text-zinc-400 hover:text-zinc-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500' title='fechar formulário de feedback'>
            <X className='text-base' weight='bold'></X>
        </Popover.Button>
    )
}