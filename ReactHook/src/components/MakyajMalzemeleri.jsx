import React, { useState } from 'react';

const MakyajMalzemelerim = () => {
  
  const [isim, setIsim] = useState('');
  const [malzemelerim, setMalzemelerim] = useState([]);

  const listeyeEkle = (event) => {
    event.preventDefault();
    setMalzemelerim(prevMalzemelerim => [
      ...prevMalzemelerim,
      {id: malzemelerim.length, item: isim}
    ]);
    setIsim('');
  }
  return(
    <React.Fragment>
      <form onSubmit = {listeyeEkle}>
        <input name='malzeme' type='text' value={isim} onChange ={(event) => setIsim(event.target.value)} />
      </form>

      <ul>
        {
          malzemelerim.map(malzeme => (
            <li key = {malzeme.id}>
              {malzeme.item}
            </li>
          ))
        }
      </ul>
    </React.Fragment>   
  );
}

export default MakyajMalzemelerim;