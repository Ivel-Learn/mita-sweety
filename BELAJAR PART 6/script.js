function jumlahVolumeDuaKubus(a,b){
var total;
var volumeA;
var volumeB;
volumeA = a * a * a;
volumeB = b * b * b;
total = volumeA + volumeB;
    return total
}
var a = prompt("Masukan Sisi Kubus Pertama");
var b = prompt('Masukan Sisi Kubus Kedua');
alert(" Luas Volume :" + jumlahVolumeDuaKubus(a,b));