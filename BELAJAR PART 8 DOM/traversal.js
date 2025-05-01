// const card1 = document.querySelector(".card");
// const exit1 = document.querySelector(".exit");
// exit1.addEventListener('click',function(){
//     card1.style.display = 'none';
// })
// const card2 = document.querySelector(".card:nth-child(2)");
// const exit2 = document.querySelector(".card:nth-child(2) .exit");
// exit2.addEventListener('click',function(){
//     card2.style.display = 'none';
// })
// const card3 = document.querySelector(".card:nth-child(3)");
// const exit3 = document.querySelector(".card:nth-child(3) .exit");
// exit3.addEventListener('click',function(){
//     card3.style.display = 'none';
// })
// const card4 = document.querySelector(".card:nth-child(4)");
// const exit4 = document.querySelector(".card:nth-child(4) .exit");
// exit4.addEventListener('click',function(){
//     card4.style.display = 'none';
// })

// const exit = document.querySelectorAll('.exit');
// const card = document.querySelectorAll('.card')
// for(let i=0;i<exit.length;i++){
//     exit[i].addEventListener('click',function(){
//         card[i].style.display = 'none'
//     })
// }

/* Ini Baru Cara dengan Traversal */
const exit = document.querySelectorAll('.exit');
// for (let i=0;i<exit.length;i++){
//     exit[i].addEventListener('click',function(e){
//         e.target.parentElement.style.display ='none'
//     });
// };
exit.forEach(function(el){
    el.addEventListener('click',function(e){
        e.target.parentElement.style.display = 'none'
    })
});

console.log(exit[0].parentNode)