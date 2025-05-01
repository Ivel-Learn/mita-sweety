//Game Tebak Angka
//Halaman Awal User
var nama  =prompt("Hai, Sebelumnya Boleh Tahu Siapa Nama Anda : ");
confirm("Hai "+ nama +" Apakah anda ingin bermain Game Tebak Angka");
//Buat Pilihan Random Kamputer
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let comp = generateRandomNumber(1, 10)
console.log(comp);
//Perulangan 
var j=1;
for(var i=3;i>=j;i--){
//Halaman Inputan Player
var p=prompt("Pilih angka 1 s.d 10");
// Buat Aturan Permainan
if(p==comp){
    hasil="Benar Menebak";
    j=i;
}else if(p<comp){
    hasil="Terlalu Rendah";
    var x=i-1;
    // Tampilkan Hasil
    if(i==1) {
        alert("Tebakan Anda "+hasil+"\n"+"Anda Sudah Tidak Memiliki Kesempatan lagi");
    }else{
        alert("Tebakan Anda "+hasil+"\n"+"Anda Memiliki Kesempatan "+ x +" Kali lagi");
    }
    
}else{
    hasil="Terlalu Tinggi"
    var x=i-1;
    // Tampilkan Hasil 
    if(i==1) {
        alert("Tebakan Anda "+hasil+"\n"+"Anda Sudah Tidak Memiliki Kesempatan lagi");
    }else{
        alert("Tebakan Anda "+hasil+"\n"+"Anda Memiliki Kesempatan "+ x +" Kali lagi");
    }
}
}
if(p==comp){
    alert("Selamat Anda "+hasil+"\nTebakan Komputer adalah : "+comp)
}else{
    alert("Maaf anda salah menebak \nTebakan Komputer Adalah : "+comp)
}