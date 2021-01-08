let form = document.querySelector('form')

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let phone = document.getElementById('phone');
let email = document.getElementById('#email');
let password = document.getElementById('#password');
let address = document.getElementById('#address');
let city = document.getElementById('#city');
let zipcode = document.getElementById('#zipcode');
let yes = document.getElementById('yes')
let no = document.getElementById('no')
let submit = document.querySelector('.submit')

let secondHtml = "./second.html"

function validate(param) {
    myRegex = /[A-Za-z]+/;
    return myRegex.test(name);
  }

  

  form.addEventListener('submit', event => {
    /*   let submit = document.querySelector('.submit')
       event.preventDefault();
       
      alert('please fill in every box')
      */ 
    event.preventDefault();
    if(!yes.checked && !no.checked){
       
         alert('check one');
         
         return;

     }else {
         window.location.href ="./second.html"
         
     }
     
     
   })
