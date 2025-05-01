// Membuat Objek Angkot secara object construction
function Angkot(sopir, penumpang, rute, kas) {
    this.sopir = sopir;
    this.penumpang = penumpang;
    this.rute = rute;
    this.kas = kas;
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang)
        return this;
    }
    this.penumpangTurun = function (namaPenumpang, bayar) {
        var kondisi = true;
        var j = this.penumpang.length
        for (var i = 0; i < j; i++) {
            if (this.penumpang[i] != undefined) {
                kondisi = false;
                j = i;

            } else {
                kondisi = true;
            }
        }
        if (this.penumpang.length == 0) {
            console.log('Sorry Bre Angkot Kosong Kagak ada Penumpang')
            return this
        } else if (kondisi) {
            console.log("Bre semua penumpang udah pada turun")
            return this
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this
                } else if (i == this.penumpang.length - 1) {
                    console.log("Bre lo salah input nama penumpang yang mau turun")
                    return this
                }
            }
        }
    }
}
var angkot1 = new Angkot('rian', [], 'Central-BTP', 0);
var angkot2 = new Angkot("Rea", [], 'Central-Sudiang', 0);