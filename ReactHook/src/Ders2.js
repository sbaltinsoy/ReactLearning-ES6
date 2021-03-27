import React from 'react';
import DahaFazlaOku from './components/DahaFazlaOku';
function App() {
  return (
    <div className='App'>
      <DahaFazlaOku
        text={`Selam Ben Serhat Burak ALTINSOY. Bu gun ki konumuz ReactJS de useState kullanimi. Iyi Seyirler Arkadaslar.`}
        max={10}
      />
    </div>
  );
}

export default App;
