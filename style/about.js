let activateOne = document.querySelector('.op1');
let activateTwo = document.querySelector('.op2');
let activateThree = document.querySelector('.op3');
let displayText1= document.querySelector('.column1');
let displayText2= document.querySelector('.column2');
let displayText3= document.querySelector('.column3');

activateOne.addEventListener('click', ()=>{
    if(displayText1.style.display == 'none'){
        displayText1.style = 'block'
    }else(displayText1.style.display = 'none')
})

activateTwo.addEventListener('click', ()=>{
    if(displayText2.style.display == 'none'){
        displayText2.style = 'block'
    }else(displayText2.style.display = 'none')
})

activateThree.addEventListener('click', ()=>{
    if(displayText3.style.display == 'none'){
        displayText3.style = 'block'
    }else(displayText3.style.display = 'none')
})