// Buat Function Hasil
let hasil = function (Player, Komputer) {
    if (Player == Komputer) {
        return "SERI"
    } else if (Player == 1 && Komputer == 2) {
        return "Player Menang"
    } else if (Player == 2 && Komputer == 3) {
        return "Player Menang"
    } else if (Player == 3 && Komputer == 1) {
        return "Player Menang"
    } else {
        return "Komputer Menang"
    }
}

// Buat Pilihan User
let pPlayer = 0;
const batu = document.querySelector(".batuPlayer");
const gunting = document.querySelector(".guntingPlayer");
const kertas = document.querySelector(".kertasPlayer");
batu.addEventListener('click', function () {
    pPlayer = 1;
    // Buat Pilihan Komputer
    let gCom = document.querySelector("img.gCom")
    let pCom = Math.floor(Math.random() * 3 + 1);
    if (pCom == 1) {
        gCom.setAttribute('src', 'aset/batu.png')
    } else if (pCom == 2) {
        gCom.setAttribute('src', 'aset/gunting.png')
    } else {
        gCom.setAttribute('src', 'aset/kertas.png')
    }
    // Tentukan Hasil
    const hHasil = hasil(pPlayer, pCom);
    // Tampilkan Hasil
    let info = document.querySelector(".info")
    info.innerHTML = hHasil;
});
gunting.addEventListener('click', function () {
    pPlayer = 2;
    // Buat Pilihan Komputer
    let gCom = document.querySelector("img.gCom")
    let pCom = Math.floor(Math.random() * 3 + 1);
    if (pCom == 1) {
        gCom.setAttribute('src', 'aset/batu.png')
    } else if (pCom == 2) {
        gCom.setAttribute('src', 'aset/gunting.png')
    } else {
        gCom.setAttribute('src', 'aset/kertas.png')
    }
    // Tentukan Hasil
    const hHasil = hasil(pPlayer, pCom);
    // Tampilkan Hasil
    let info = document.querySelector(".info")
    info.innerHTML = hHasil;
});
kertas.addEventListener('click', function () {
    pPlayer = 3;
    // Buat Pilihan Komputer
    let gCom = document.querySelector("img.gCom")
    let pCom = Math.floor(Math.random() * 3 + 1);
    if (pCom == 1) {
        gCom.setAttribute('src', 'aset/batu.png')
    } else if (pCom == 2) {
        gCom.setAttribute('src', 'aset/gunting.png')
    } else {
        gCom.setAttribute('src', 'aset/kertas.png')
    }
    // Tentukan Hasil
    const hHasil = hasil(pPlayer, pCom);
    // Tampilkan Hasil
    let info = document.querySelector(".info")
    info.innerHTML = hHasil;
})
batu.addEventListener('mouseleave', function () {
    // Buat Pilihan Komputer
    let gCom = document.querySelector("img.gCom")
    gCom.setAttribute('src', '')
    let info = document.querySelector(".info")
    info.innerHTML = 'Silahkan Anda Pilih Apa';
});
gunting.addEventListener('mouseleave', function () {
    // Buat Pilihan Komputer
    let gCom = document.querySelector("img.gCom")
    gCom.setAttribute('src', '')
    let info = document.querySelector(".info")
    info.innerHTML = 'Silahkan Anda Pilih Apa';
});
kertas.addEventListener('mouseleave', function () {
    // Buat Pilihan Komputer
    let gCom = document.querySelector("img.gCom")
    gCom.setAttribute('src', '')
    let info = document.querySelector(".info")
    info.innerHTML = 'Silahkan Anda Pilih Apa';
});