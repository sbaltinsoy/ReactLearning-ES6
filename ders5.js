/*
 * Ok fonskyionlari - Arrow Functions
 * Daha kisa fonksiyon sozdizimi
 */

// eski
function topla(a, b) {
  return a + b;
}

// yeni (arrow function)
const topla1 = (a, b) => a + b;

// eski
function pozitifMi(sayi) {
  return sayi >= 0;
}

// yeni (arrow function)
const pozitifMi1 = (sayi) => sayi > 0;

//eski
function rastgeleSayi() {
  return Math.random();
}

// yeni (arrow function)
const rastgeleSayi2 = () => {
  console.log('rastgele Sayi Uretiliyor');
  return Math.random();
};
