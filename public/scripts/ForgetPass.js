


// forget and Reset password 
const forget = document.querySelector('#forget-form');
forget.addEventListener('submit', (e) => {
    e.preventDefault();
    const email1 = forget['forgetemail'].value;
    auth.sendPasswordResetEmail(email1).then(() => {
        forget.querySelector('.erorr1').innerHTML = '';
        document.querySelector('#dissuc').setAttribute('style','display: block !important;');
        setTimeout(() =>{
            document.querySelector('#dissuc').setAttribute('style','display: none !important;');
        },4000)
    }).catch(err => {
        forget.querySelector('.erorr1').innerHTML = err.message;
    })
})