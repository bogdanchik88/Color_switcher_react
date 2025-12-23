import { useEffect, useState } from 'react'
import Test from './Test'
import SwitchTheme from './SwitchTheme'
import useThemeStore from './store/useThemeStore'



function App() {
  const currentTheme = useThemeStore(state => state.currentTheme)

  return (
    <div className={`flex flex-col theme-${currentTheme}`}>
      <SwitchTheme/>   
      <Test/>
    </div>
  )
}

export default App
