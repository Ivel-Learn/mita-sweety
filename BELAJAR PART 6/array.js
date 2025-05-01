var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// //Ini Belajar Length ==> untuk menghitung panjang array
// for (var i=arr.length-1;i>=0;i--){
//     console.log(arr[arr.length - i-1])
// }
// //Ini Belajar Join ==> Untuk Menggabungkan eleman array
//     a=arr.join(' ')
//     console.log(a)

// // Ini Belajar push == > Menambah Elemen Array dari Belakang
// arr.push(7,2,3,4,5);
// console.log(arr.join("-"))
// console.log(arr.length)
// // Ini Belajar pop ==> Mengurangi Elemen Array dari Belakang
// arr.pop()
// console.log(arr.join("-"))
// console.log(arr.length)
// // Ini Belajar sifth ==> Mengurangi Elemen Array dari depan
// arr.shift()
// console.log(arr.join("-"))
// console.log(arr.length)
// //  Ini Belajar unsifth ==> Menambah Elemen Array dari Depan
// arr.unshift(19,18,17,16)
// console.log(arr.join("-"))
// console.log(arr.length)

// //Ini Belajar Slice==> untuk mengambil elemen array tanpa menghapus elemen tersebut dari array sebelumnya
// var arr2 = arr.slice(2, 5);
// console.log(arr.join('-'));
// console.log(arr2.join('-'));
// //Ini belajar splice==> untuk mengambil elemen array dengan mengahapus elemen tersebut dari array sebelumnya
// var arr2 = arr.splice(2, 5,4,3,2,1,0);
// console.log(arr.join('-'));
// console.log(arr2.join('-'));

// // Ini Belajara forEach==> Looping untuk mengambil nilei elemen pada Array namun tidak bukan lagi menjadi Array
// var arr=["Dora","feri","gero","Hiro","Ire","Jiro"];
// arr.forEach(function(e,i){
//     console.log("mahasiswa ke- "+ (i+1) + " adalah "+e) ;
// });
// Ini belajar map==> Looping untuk mengambil nilai elemen pada Array untuk menjadi array baru
var arr=[1,2,3,4,5,6,7,8];
var arr2=arr.map(function(e,i){
    return e+i
})
console.log(arr2)