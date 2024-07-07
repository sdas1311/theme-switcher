import { useEffect, useState } from 'react'

import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const light = () => setThemeMode('light');
  const dark = () => setThemeMode('dark');

  //actual change of theme
  useEffect(() => {
    let html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, light,dark}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
                </div>
                        
                <div className="w-full max-w-sm mx-auto">
                  <Card/>
                </div>
            </div>
      </div>
    </ThemeProvider>
  )
}

export default App
