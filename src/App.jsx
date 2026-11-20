import { useState, useEffect } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
 
function App() {
  const [largeText, setLargeText] = useState(() => {
    const savedSetting = localStorage.getItem('largeText')
    return savedSetting === 'true'
})

  useEffect(() => {
      localStorage.setItem('largeText', largeText)
  }, [largeText])

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Elisha Mel Altair Narisma" />
      </div>
    </SettingsContext>
  )
}

export default App