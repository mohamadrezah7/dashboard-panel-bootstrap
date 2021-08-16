


// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // get user info
    const email = signupForm['email'].value;
    const password = signupForm['pass'].value

    // sign up the users
    auth.createUserWithEmailAndPassword(email , password).then(() => {
        const modal = document.querySelector('#modal-signup');
        $(modal).modal('hide');
        $(modal).modal('handleUpdate');
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
        signupForm.querySelector('.error').innerHTML = err.message;
    })
});

// Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['username'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(() => {
        const loginBtn = document.querySelector('#login-btn');
        loginBtn.onclick = ()=>{
            location.href = "./Pages/main-page.html";
        }
       loginForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
        loginForm.querySelector('.error').innerHTML = err.message;
    })
});













