/*
 * let, const ... of Array, String etc
 */

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Array Ornek
const kisiler = ['burak', 'ferhat', 'azize'];
for (let kisi of kisiler) {
  console.log(kisi);
}

// String Ornek
const isim = 'cokUuzunVeAnlamsizBirIsim';
for (let harf of isim) {
  console.log(harf);
}
