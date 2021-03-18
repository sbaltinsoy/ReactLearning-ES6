/*
 * Varsayilan Fonksiyon Parametreleri
 * function(param1 = 1, param2 = 2, param3=3){}
 */

function deneme(sayi) {
  console.log(sayi);
}

deneme(3);

// Es6  ile birlikte

function deneme1(sayi = 5) {
  console.log(sayi);
}

deneme1();
