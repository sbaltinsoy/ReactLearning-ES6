/*
 * Yayma Operatoru - Spread Operator
 * [...array] - [...object]
 */

const kisi = {
  isim: 'Burak',
  yas: 23,
  not: 'Selam',
};

const ek = {
  ek: 'EK :)',
};

/*
 * Kopyalama
 */

const coppyObje = { ...kisi };
console.log(coppyObje);

/*
 * Birlesme
 */

const birlesikObje = { ...kisi, ...ek };
console.log(birlesikObje);

/*
 * Ekleme
 */

const ekle = { ...kisi, ek2: '! selam !' };
console.log(ekle);

/*
 * Cikarma
 */

const { not, ...rest } = kisi;
console.log(not);
console.log(rest);
