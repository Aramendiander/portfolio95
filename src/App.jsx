import { useState, useEffect } from 'react'
import Bar from './components/Bar'
import Desktop from './components/Desktop'

function App() {
  const [activeComponent, setActiveComponent] = useState('')

  return (
    <>
      <section id="desktop">
        <Desktop />
      </section>
      <Bar />
    </>
  )
}

export default App
