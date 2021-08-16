
    document.querySelector('.btnclose').addEventListener('click', (e) =>{
      e.preventDefault();
      const removecol = document.querySelector('#mycardcon');
      removecol.classList.toggle('d-none');
    });

     //Change Navbar Toggler Button
     const navbtn = document.querySelector('.nav-button1');

     navbtn.addEventListener('click' , (e) => {
         e.preventDefault();
         navbtn.classList.toggle('change');
     })