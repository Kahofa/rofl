document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const navigation = document.querySelector('.header-navigation');

    menuBtn.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});


document.getElementById('form').addEventListener("submit", Login);

function Login(event) {
    
    event.preventDefault();

    var el = document.getElementById('form');

    var name = el.name.value;
    var pass = el.pass.value;


    var error = "";

    if (name == "" || pass == "" ) {
        error = "Mistake! Fill in all the fields";
    } else if (name.length < 3 || name.length > 13 || pass.length < 5 || name.length > 20) {
        error = "The name or password is too short or too long";
    } else if (pass.split('@').length > 1) {
        error = "Invalid password";
    }

    if (error != "") {
        document.getElementById('error').innerHTML = error;
    } else if(error == ""){
        if(name == "хочу смотреть" ?? pass == "порно")
        window.location = 'http://porno365.expert/?refresh';
        else
        error = "Mistake! Fill in all the fields"
    }
}