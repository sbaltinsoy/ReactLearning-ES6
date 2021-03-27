import React, { useState } from 'react';

function App() {
  const [sayac, setSayac] = useState(0);
  return (
    <div className='App'>
      <button onClick={() => setSayac(sayac + 1)}>{sayac}</button>
      <button onClick={() => setSayac((prevSayac) => prevSayac + 1)}>
        {sayac}
      </button>
    </div>
  );
}

export default App;
