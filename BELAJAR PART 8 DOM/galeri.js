const conten = document.querySelector('.conten');
let tangkap = null;
conten.addEventListener('click', function (e) {
    if (e.target.className == 'listG') {
        let gambar = e.target.parentElement.previousElementSibling.firstElementChild
        gambar.setAttribute('src', e.target.getAttribute('src'))
        gambar.classList.add('fade')
        setTimeout(function(){
            gambar.classList.remove('fade')
        },500)
        if(tangkap != null){
            tangkap.classList.remove('aktif')
        }
        e.target.classList.add('aktif')
        tangkap = e.target
    }
})