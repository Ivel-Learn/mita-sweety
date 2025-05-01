// Buat Respon Ubah Warna
const ubahWarna = document.getElementById('ubahWarna');
ubahWarna.addEventListener('click', function () {
    document.body.classList.toggle('ubahWarna')
});

// Buat Button Random Warna
const randomWarna = document.createElement('button');
const textRandomWarna = document.createTextNode('Warna Random');
randomWarna.appendChild(textRandomWarna);
ubahWarna.after(randomWarna);

// Buat Respon Random Warna
randomWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 215);
    const g = Math.round(Math.random() * 215);
    const b = Math.round(Math.random() * 215);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})
randomWarna.addEventListener('auxclick', function () {
    document.body.removeAttribute('style')
})

// Buat Respon Slider Warna
const sliderR = document.querySelector('body input[name=r]')
const sliderG = document.querySelector('body input[name=g]')
const sliderB = document.querySelector('body input[name=b]')
sliderR.addEventListener('input', function () {
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})
sliderG.addEventListener('input', function () {
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})
sliderB.addEventListener('input', function () {
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// Buat Respon Berdasarkan Posisi Mouse
document.body.addEventListener('mousemove', function (event) {
    const r = Math.round((event.clientX / window.innerWidth) * 215);
    const g = Math.round((event.clientY / window.innerWidth) * 215);
    const b = Math.round((r+g)/(2*r+4*g+1) * 215);
    console.log(r, g, b)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})