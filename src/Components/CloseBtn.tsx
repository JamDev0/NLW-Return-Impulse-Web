import {Popover} from '@headlessui/react';
import {X} from 'phosphor-react'

export function CloseBtn(){
    return(
        <Popover.Button className='absolute top-4 right-4 text-zinc-400' title='fechar formulário de feedback'>
            <X className='text-base' weight='bold'></X>
        </Popover.Button>
    )
}