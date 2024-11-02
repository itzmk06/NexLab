"use client";
import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import { themesBrowser } from '@/constants/constant';


export default function Theme(){
    const {mode,setMode}=useTheme();

    return(
        <Menubar className='relative border-none bg-transparent shadow-none'>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[slate=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[slate=open]:bg-dark-200">
                    {
                        mode==='light'?
                        (<Image
                        src="/assets/icons/sun.svg"
                        width={25}
                        height={25}
                        alt={'light mode'}
                        className='active-theme'
                        />):
                        (<Image
                        src="/assets/icons/moon.svg"
                        width={20}
                        height={20}
                        alt={'dark mode'}
                        className='active-theme'
                        />)
                    }
                </MenubarTrigger>
                <MenubarContent className='absolute -right-10 mt-1 min-w-[120px] rounded-lg border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300 '>
                    {
                        themesBrowser.map((item)=>{
                            return<MenubarItem 
                                        className='flex cursor-pointer items-center gap-3 p-2 dark:focus:bg-dark-400' 
                                        key={item?.label}
                                        onClick={
                                            ()=>{
                                            setMode(item?.value)
                                                if(item?.value!=="computer"){
                                                    localStorage.theme=item?.value;
                                                }else{
                                                    localStorage.removeItem("theme");
                                                }
                                            }
                                        }
                                        >
                                <Image 
                                    src={item?.icon}
                                    width={18}
                                    alt={item?.value}
                                    height={18}
                                    className={`${mode===item?.value&&'active-theme'}`}
                                />
                                <p className={`body-semibold text-light-500 ${mode===item.value? 'text-primary-500':'text-dark100_light900'}`}>{item?.label}</p>
                            </MenubarItem>
                        })
                    }
                </MenubarContent>
            </MenubarMenu>
</Menubar>

    )
}