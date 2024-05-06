import React from 'react';

import DosPlayer from "../DosPlayer";   

function App() {
  return (
    <div className="App" style={{ width: "99.5dvw", height: "calc(100dvh - 4rem)" }}>
        <DosPlayer bundleUrl="doom.jsdos" />
    </div>
  );
}

export default App;