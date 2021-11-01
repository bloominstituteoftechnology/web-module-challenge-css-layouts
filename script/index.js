let dataBase = [];
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let form = document.getElementById('form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    alert('Check the console')
    dataBase.push(`Name: ${name} Email: ${email}`);
    console.log(dataBase);
    dataBase = [];
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
})

const button1 = function (){
    alert('This Button Does Not Work Yet');
};