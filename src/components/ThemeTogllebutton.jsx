import React from 'react'
import assets from '../assets/assets';
import { useEffect } from 'react';
const ThemeTogllebutton = ({theme, setTheme }) => {
    useEffect(()=>{
        const preferdarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (preferdarkmode ? 'dark' : 'light'));
    },[])
    useEffect( () => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
     }, [theme]);
 
  return (
    <>
  
        <button>{theme === 'dark' ?
         (
            <img onClick={()=>setTheme('light')} src = {assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full ' alt=''></img>
        )
        :
        (
            <img onClick={()=>setTheme('dark')} src = {assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full ' alt=''></img>
        ) }

        </button>
    </>
  )
}

export default ThemeTogllebutton
