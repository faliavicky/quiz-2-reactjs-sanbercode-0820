 /* buatlah arrow function volume balok dan kubus, 
 gunakan rest parameter di parameter functionnya. lalu tampilkan hasil 
 perhitungannya dengan template literal */

 //rumus volume balok = panjang * lebar * tinggi
 const volBalok = (panjang,lebar,tinggi) => {
     return panjang * lebar * tinggi;
 }

 console.log(volBalok(5,10,2));

 //rumus volume kubus = sisi * sisi * sisi
 const volKubus = (sisi) => {
    return sisi* sisi * sisi;
}

console.log(volKubus(5,5,5));