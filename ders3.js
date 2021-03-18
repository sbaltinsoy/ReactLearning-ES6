/*
 * Sablon Degismezleri - Template Literals :)
 */

/* Con Satirli Dizeler */

// Eskiden
const dizi = 'Birinci Satir \n Ikinci Satir';
console.log(dizi);
// Simdi
const dizi2 = `
Birinci Satir
Ikinci satir
`;
console.log(dizi2);

/* Ifade enterpolasyonu - 
ifadeleri normal karakter dizilerine gomme */
const a = 3;
const b = 4;
// Eskiden
const ifade = 'a ile b nin toplami: ' + (a + b) + 'dir';
console.log(ifade);

// simdi
const ifade2 = `a ile b nin toplami: ${a + b}'dir`;
console.log(ifade2);
