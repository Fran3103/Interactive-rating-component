let numberContainer = document.querySelector('.container-rate');
let rateNumber = document.querySelector('.selected');
let submit = document.querySelector('.btn');
let card1 = document.querySelector('.container');
let card2 = document.querySelector('.container-thanks');


numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText= numberSelected;
    submit.addEventListener('click', ()=> {
        card1.style.display ='none';
        card2.style.display = 'flex'; 
    })
});