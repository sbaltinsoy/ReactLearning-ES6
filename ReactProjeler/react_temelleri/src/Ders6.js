import React from 'react';

// Listeler

const Kitap = (props) => (
  <div>
    {props.kitap.isim} - {props.kitap.adet}
  </div>
);

function App() {
  const kitaplar = [
    {
      isim: 'Suc ve Ceza',
      adet: 30,
    },
    {
      isim: 'Bin Omrum Olsa',
      adet: 3,
    },
    {
      isim: 'Bulbul',
      adet: 44,
    },
    {
      isim: 'Kelebegin Ruyasi',
      adet: 7,
    },
  ];
  return (
    <div className='App'>
      {kitaplar.map((item, key) => (
        <Kitap key={key} kitap={item} />
      ))}
    </div>
  );
}

export default App;
