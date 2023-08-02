const icon = document.getElementById('show');
const pass = document.getElementById('password');

icon.addEventListener('click' , ()=>{

    if (pass.type == "password") {
        
        pass.type = "text";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');


    }
    else {
        
        pass.type = "password";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');

    }


})