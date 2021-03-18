import React, { Component } from 'react';

/*
 * setState, kullanicinin zaman icindeki durumu tanimlayabilmesi ve degistirebilmesi icin
 * kutuphaneyle birlikte saglanan API yontemidir
 */

/*
 * State'i dogrudan guncellemek garip hatalara ve optimize edilmesi zor bilesenlere yol acabilir
 * setState () hemen this.state ogesini degistirmez ancak bekleyen bir durum gecisi olusturur
 * this.state ogesini erismek potansiyel olarak mevcut degeri dondurebilir
 * SetState cagrilarinin eszamanli calismasi garantisi yoktur ve performan kazanclari icin cagrilari toplu olarak yapilabilir
 *
 */
function App() {
  return (
    <div className='App'>
      <KarsilamaClass />
    </div>
  );
}

export default App;

class KarsilamaClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      durum: 'iyi',
      deger: 33,
    };
  }

  degeriAzalt = () => {
    // Asagida bulunan 2 yol yanlis boyle kullanma !!!
    // this.state.deger = this.state.deger + 1;
    //this.setState({
    //deger: this.state.deger + 1,
    //});
    this.setState((previousState) => ({
      deger: previousState.deger - 1,
    }));
  };
  degeriArttir = () => {
    this.setState((previousState) => ({
      deger: previousState.deger + 1,
    }));
  };
  render() {
    return (
      <div>
        <p>{this.state.deger}</p>
        <button onClick={this.degeriArttir}>Degeri Arttir</button>
        <button onClick={this.degeriAzalt}>Degeri Azalt</button>
      </div>
    );
  }
}
