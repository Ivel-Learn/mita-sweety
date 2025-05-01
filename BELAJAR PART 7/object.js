// Cara membuat Object secara literal
var mhs = {
    nama: "Ivel",
    nim: 11114310,
    jurusan: "Math",
    ipS: [3.8, 3.0, 2.8, 3.5, 2.7, 4],
    ipk: function () {
        var total = 0;
        var ips = this.ipS
        for (var i = 0; i < ips.length; i++) {
            total = total + ips[i]
        }
        return total / ips.length
    }
}

// Cara membuat objek dengan Fungsi Declaration
function inputMahasiswa(nama, nim, jurusan, ipS, ipk) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    mhs.ipS = ipS;
    mhs.ipk = function () {
        var total = 0;
        var ips = this.ipS
        for (var i = 0; i < ips.length; i++) {
            total = total + ips[i]
        }
        return total / ips.length
    }
    return mhs;
}
var mhs2 = inputMahasiswa('Declan', 545423, 'math', [2, 3, 4, 4, 3, 3]);

// cara membuat object dengan construksion
function Mahasiswa(nama, nim, jurusan, ipS, ipk) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.ipS = ipS;
    this.ipk = function () {
        var total = 0;
        var ips = this.ipS
        for (var i = 0; i < ips.length; i++) {
            total = total + ips[i]
        }
        return total / ips.length;
    }
}
var mhs3 = new Mahasiswa('loki',123223,'math',[3,3,3,3,3,3]);

function halo(){
    console.log('Halo we');
}
halo();