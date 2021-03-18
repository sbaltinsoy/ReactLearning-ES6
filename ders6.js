/*
 * Yayma Operatoru - Spread Operator
 * [...array] - [...object]
 */

const topla = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];
console.log(topla(...numbers));

/*
 * Kopyalama
 */

const yeniNumbers = [...numbers];
console.log(yeniNumbers);

/*
 * Birlesme
 */

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const birlesikNumbers = [...numbers1, ...numbers2];
console.log(birlesikNumbers);

/*
 * Ekleme
 */

const numbers3 = [1, 2, 3];
const yeni = [5, ...numbers3, 7];
console.log(yeni);
