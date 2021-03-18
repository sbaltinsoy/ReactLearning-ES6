// let - const - var

// 1 - degisken tanimlama
var tarih;
console.log(tarih);

// 2 - deger atama
tarih = new Date();
console.log(tarih);

// 3 - Scope

/*
 * Global Scope - var , let , const
 * Herhangi bir fonksiyon ya da blok icinde tanimlanmamis program icersinden
 * her yerden erisilebilir olan degiskenler global scope sahibidirler
 */

var t = new Date();

function tarihiGetir() {
  console.log(t);
}

tarihiGetir();

/*
 * Function Scope - var
 * Yalnizca icinde bulundugu fonksiyondan erisilebilen degiskenler function scope sahibidirler
 */

function t2() {
  var t3 = new Date();
  console.log(t3);
}

t2();

// console.log(t3);

/*
 * Block Scope {}
 * let, const ile tanimlanan degiskenler sadece tanimlandiklari bloktan erisilebilirler
 */

function say() {
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

  //console.log(i);
}

say();

const degismez = 3;
console.log(degismez);
//degismez++;
//console.log(degismez);

// Var Kullanimi Neden tavsiye edilmiyor ?

var pi = 3.14;
console.log(pi);

var pi = 3;
console.log(pi);
// hata yapmaya acik bir tanimlama turudur
