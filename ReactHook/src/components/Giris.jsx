import React, { useState } from 'react';

const Giris = () => {
  const [isim, setIsim] = useState({
    ad: '',
    soyad:'',
  });
  return(
    <form>
      <input name="ad" type="text" value={isim.ad} onChange={event => setIsim({...isim,ad: event.target.value})}></input>
      <br/>
      <input name="soyad" type="text" value={isim.soyad} onChange={event => setIsim({...isim,soyad: event.target.value})}></input>

      <div>
        Ad: {isim.ad}
        <br/>
        Soyad: {isim.soyad}
      </div>
    </form>
  );
}

export default Giris;