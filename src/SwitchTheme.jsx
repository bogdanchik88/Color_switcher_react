import React from 'react'
import useThemeStore from './store/useThemeStore'


const SwitchTheme = () => {
    const themes = useThemeStore(state => state.themes)
    const setCurrentTheme = useThemeStore(state => state.setCurrentTheme)
  return (
    <div className='flex flex-col pt-4 pl-5 mb-4 gap-2 min-h-[15vh]'>
        <h3 className='font-semibold text-primary'>Choosing theme</h3>        
        <div className='flex gap-5'>
            {themes.map(t => (
            <div className='cursor-pointer text-primary' key={t} onClick={() => setCurrentTheme(t)}>{t}</div>
            ))}
        </div>
    </div>
  )
}

export default SwitchTheme
