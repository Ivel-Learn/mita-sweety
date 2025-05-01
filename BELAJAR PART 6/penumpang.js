// Buat Variabel untuk Angkot
var angkot = [];
// Buat Fungsi Tambah Penumpang
var tambahPenumpang = function (namaPenumpang, angkot) {
    // Langkah Pertama Cek Jika Angkotnya Kosong maka tambah penumpang
    if (angkot.length == 0) {
        angkot.push(namaPenumpang);
        return angkot
    } else {
        // Jika Angkotnya Tidak Kosong maka isi tempat duduk yang kosong
        for (var i = 0; i <= angkot.length; i++) {
            if (angkot[i] == undefined) {
                angkot[i] = namaPenumpang;
                return angkot
            }
            // Jika ada nama yang sama maka penumpang tersebut dianggap sudah naik angkot
            else if (angkot[i] == namaPenumpang) {
                console.log("Penumpang atas nama " + namaPenumpang + " Telah berada dalam angkot")
                return angkot
            }
            // Jika tidak ada kursi yang kosong dan nama tidak sama penumpang baru duduk dikursi paling akhir
            else if (i == angkot.length - 1) {
                angkot.push(namaPenumpang);
                return angkot;
            }
        }
    }
}
// Buat Fungsi Kurangi Penumpang
var kurangPenumpang = function (namaPenumpang, angkot) {
    var k = angkot.length;
    for (var j = 0; j < k; j++) {
        if (angkot[j] != undefined) {
            var kondisi = false;
            k=j;
        } else {
            kondisi = true;
        }
    }
    // Cek apakah angkot kosong karena belum ada penumpang
    if (angkot.length == 0) {
        console.log("Angkot Kosong Bre, tidak ada penumpang");
        return angkot;
    }
    // Cek apakah penumpang kosong karena sudah turun semua
    else if (kondisi) {
        console.log("Sorry bre, semua penumpang udah pada turun")
        return angkot;
    }
    else {
        for (var i = 0; i < angkot.length; i++) {
            // Cek penumpang tersebut duduk di kursi berapa dan kosongkan tempat duduknya
            if (angkot[i] == namaPenumpang) {
                angkot[i] = undefined;
                return angkot;
            }
        }
        // Statment bahwa penumpang yang diinput salah
        console.log("Dalam Angkot tidak terdapat penumpang atas nama " + namaPenumpang)
        return angkot;

    }
}