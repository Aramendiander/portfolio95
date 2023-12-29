import { useState } from 'react';
import Desktop from './components/Desktop';
import Bar from './components/Bar';

function App() {
  const [activeBar, setActiveBar] = useState(false);
  

  return (
    <>
      <section id="desktop">
        <Desktop setActiveBar={setActiveBar} />
      </section>
      <Bar activeBar={activeBar} setActiveBar={setActiveBar}  />
    </>
  )
}

export default App
