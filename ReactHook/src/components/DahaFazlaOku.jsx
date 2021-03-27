import React, { useState }from 'react';

const DahaFazlaOku = ({text, max}) => {
  
  const [hidden, setHidden] = useState(true);

  if(text.length < max){
    return (
    <span>
      {text}
    </span>);
  }

  return(
    <span>
      {hidden ? `${text.substr(0,max).trim()} ...` : text}
      {hidden ? (
          <a onClick = {() => setHidden(false)} >Daha Fazla Goster</a>
      ) : (
          <a onClick = {() => setHidden(true)}>Daha Az Goster</a>
      )}
    </span>
  );
}

export default DahaFazlaOku;