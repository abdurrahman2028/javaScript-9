let database = {
    email: 'abc@gmail.com',
    password: '1234'
}
document.getElementById('login-btn').addEventListener('click', function () {
    event.preventDefault();
    console.log("Login button clicked"); 
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email === database.email && password === database.password){
        window.location.href = './bank.html';
    }else{
        alert('tomare dhukte dimu na');
    }
});







