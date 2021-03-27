import React, {useState, useEffect } from 'react';

const HookSayac = () => {
  const [sayac, setSayac] = useState(0);
  const[name, setName] = useState('');
  useEffect(() => {
    console.log('guncelleniyor');
    document.title = `${sayac}`
  }, [sayac]);
  return(
    <div>
      <input 
      type = 'text' 
      value = {name} 
      onChange = {(e) => (setName(e.target.value))}/>
       <button onClick = { () => setSayac(sayac+1)}>{sayac}</button>;
    </div>
  );
}

export default HookSayac;