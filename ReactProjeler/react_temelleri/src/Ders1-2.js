import React, { Component } from 'react';
// #### Ders1
// ReactJS'te bir component yazmanin iki yolu vardir bunlar
// Class Component (Stateful), Functional Component (Stateless)
/// #### Ders 2
/*
 * React, state ve props ile bilesenlerde veri akisini kontrol eder.
 * State ve props bileseni dinamik verilerle olusturmak icin kullanilir
 */
//
// ReactJS'de componentlara veri gondermek icin props kullanilir. (Immutable)
// Immutable dan kasit sabit degismezlerdir

/*
 * State, ReactJS bileseninin veri deposu gibidir. Cogunlukla kullanici dugmeyi tiklamak
 * bazi metin yazmak, bazi tuslara basmak vb. bazi eylemler gerceklestirdiginde
 * bileseni guncellemek icin kullanilir
 *
 * React.Component tum sinif tabanli ReactJS bilesenleri icin temel siniftir
 * Bir sinif React.Component sinifini her devraldiginda constructor otomatik olarak sinifa degeri null olarak
 * ayarlanmis olarak state durumuna atar. Constructor kullanarak bunu guncelleyebiliriz.
 */

// ### Ders 3

function App() {
  return (
    <div className='App'>
      <KarsilamaClass isim='Class' yas='2' />
      <Karsilama isim='Burak' yas='23' />
    </div>
  );
}

export default App;

// # Ders 1-2
/* Functional Component (Stateless) */
// aptal componentlarda deniyor kendisine ne verirsen onu donduruyor
// JS - ES6 fonksiyonu
// React elemani dondurur
// props parametresi alir

const Karsilama = (props) => {
  return (
    <p>
      Merhaba {props.isim} senin yasin {props.yas}
    </p>
  );
};

// yukaridaki propsu asagidaki gibi ayiradabiliriz
// ayni sonucu elde etmis oluruz
/*
const Karsilama = ({ isim, yas}) => {
  return (
    <p>
      Merhaba {isim} senin yasin {yas}
    </p>
  );
};
*/

//### Ders 1-2
/* Class Component (Stateful) */

// ES6 class
// React elemani dondurur
// props parametresi alir
// state yonetimi
// functional component e gore daha kompleks
// yasam-dongusu methodlarina sahiptir
// render() methodu

class KarsilamaClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      durum: 'iyi',
      deger: 33,
    };
  }

  render() {
    return (
      <div>
        <p>Karsilama Class Component</p>
        <p>
          {'-->'} {this.props.isim} -- {this.props.yas}
        </p>
        <p>{this.state.durum}</p>
        <p>{this.state.deger}</p>
      </div>
    );
  }
}
