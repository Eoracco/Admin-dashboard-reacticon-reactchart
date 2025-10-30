"use client"

import { Command } from 'cmdk'
import React, { useEffect, Dispatch, SetStateAction } from 'react'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { FiEye, FiPlus, FiLink, FiPhone } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'


export const CommandMenu = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {

    const [value, setValue] = useState("");

    useEffect(() => {
        const down = (e: KeyboardEvent) => {  // 使用原生 KeyboardEvent
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"
            className='fixed inset-0 bg-stone950/50' onClick={() => setOpen(false)}>

            <DialogTitle className="sr-only">
                Global Command Menu
            </DialogTitle>
            <div className="fixed inset-0 bg-black/50" /> {/* 添加遮罩层 */}
            <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full  bg-white rounded-lg shadow-lg border-stone-300 border overflow-hidden max-w-lg
            mx-auto mt-12"
                onClick={(e) => e.stopPropagation()}>


                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder="Type a command or search..."
                    className="w-full p-4 text-lg border-b border-gray-200 outline-none"
                />
                <Command.List className="max-h-96 overflow-y-auto p-2">
                    <Command.Empty className="p-4 text-center text-gray-500">
                        No results found for {" "}
                        <span className='text-violet-500'>{value}</span>
                    </Command.Empty>

                    <Command.Group
                        heading="Team"
                        className="p-2 text-sm font-medium text-gray-500"
                    >
                        <Command.Item
                            className="px-4 py-2 rounded cursor-pointer hover:bg-gray-100 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-600"
                            onSelect={() => console.log('a selected')}
                        >
                            <FiPlus></FiPlus>
                            Invite Member
                        </Command.Item>
                        <Command.Item
                            className="px-4 py-2 rounded cursor-pointer hover:bg-gray-100 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-600"
                            onSelect={() => console.log('b selected')}
                        >
                            <FiEye></FiEye>
                            See org Chart
                        </Command.Item>
                        <Command.Separator className="h-px bg-gray-200 my-2" />

                    </Command.Group>
                    <Command.Group
                        heading="Intergrations"
                        className="p-2 text-sm font-medium text-gray-500"
                    >
                        <Command.Item
                            className="px-4 py-2 rounded cursor-pointer hover:bg-gray-100 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-600"
                            onSelect={() => console.log('a selected')}
                        >
                            <FiLink></FiLink>
                            Link Services
                        </Command.Item>
                        <Command.Item
                            className="px-4 py-2 rounded cursor-pointer hover:bg-gray-100 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-600"
                            onSelect={() => console.log('b selected')}
                        >
                            <FiPhone></FiPhone>
                            Contact Support
                        </Command.Item>
                        <Command.Separator className="h-px bg-gray-200 my-2" />

                    </Command.Group>

                    <Command.Item
                        className="flex p-2 transition-colors text-sm rounded cursor-pointer hover:bg-stone-700 rouneded gap-2 items-center justify-center bg-stone-950 text-stone-50"
                        onSelect={() => console.log('b selected')}>

                        <FiLogOut></FiLogOut>
                        Sign Out
                    </Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}