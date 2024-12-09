var userNameInput = document.getElementById("userName")
var userEmailInput= document.getElementById("userEmail")
var userPassInput = document.getElementById("userPass")
var emailInput =document.getElementById('email')
var passInput =document.getElementById('pass')
var signUpbtn =document.getElementById('signUpbtn')
var validDiv  =document.querySelector(".validDiv")
var validDivlog =document.querySelector(".validDivlog")
var signin =document.querySelector(".signin")
var signUpDiv =document.querySelector('.sign-up ')
var signupAnchor =document.querySelector('.signup')
var loginDiv =document.querySelector('.loginDiv')
var loginbtn =document.getElementById('login')
var  welcome =document.getElementById('welcomePage')
var welcomeName=document.getElementById('weclomeName')
var logOut =document.getElementById('logout')
var regexUserName =/^[A-Za-z\s]{2,}$/
var regexUserEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
var regexUserPass=/^[0-9]{6,}$/
var index =0;
var users =[]
users =JSON.parse(localStorage.getItem('allusers' ,users))|| []

signUpbtn.addEventListener('click' ,function(){
   if(validateDate()){
    signUp()
   }
     
});
userNameInput.addEventListener('input' , function(){
    if(regexUserName.test(userNameInput.value)){
        userNameInput.classList.remove('is-invalid');
        userNameInput.classList.add('is-valid');
    }
    else{
        userNameInput.classList.remove('is-valid');
        userNameInput.classList.add('is-invalid');
    }
})
userEmailInput.addEventListener('input' , function(){
    if(regexUserEmail.test(userEmailInput.value)){
        userEmailInput.classList.remove('is-invalid');
        userEmailInput.classList.add('is-valid');
    }
    else{
    userEmailInput.classList.remove('is-valid');
        userEmailInput.classList.add('is-invalid');
    }
})

userPassInput.addEventListener('input' , function(){
    if(regexUserPass.test(userPassInput.value)){
        userPassInput.classList.remove('is-invalid');
        userPassInput.classList.add('is-valid');
    }
    else{
        userPassInput.classList.remove('is-valid');
        userPassInput.classList.add('is-invalid');
    }
})

signin.addEventListener('click' ,function(){
    signUpDiv.classList.add('d-none')
    loginDiv.classList.remove('d-none')

})

loginbtn.addEventListener('click' , function (){
 
  logIn()
  
})

signupAnchor.addEventListener('click' ,function(){
signUpDiv.classList.remove('d-none')
    loginDiv.classList.add('d-none')
})

logOut.addEventListener('click', function() {
    welcome.classList.add('d-none'); 
    loginDiv.classList.remove('d-none'); 
    emailInput.value =''
    passInput.value =''
    validDivlog.innerHTML=''
});
function signUp(){
    var userData ={
        name: userNameInput.value,
        email:userEmailInput.value,
        password:userPassInput.value,
    }
    users.push(userData)
    localStorage.setItem('allusers' ,JSON.stringify(users))
    console.log(users)
  return users;
}
function validateDate() {

    if (userEmailInput.value === '' || userNameInput.value === '' || userPassInput.value === '') {
        validDiv.innerHTML = `<span class="text-danger">All inputs are required</span>`;
        return false;
    }
    if (!regexUserName.test(userNameInput.value)) {
        validDiv.innerHTML = `<span class="text-danger">Invalid name format</span>`;
        return false;
    }

    if (!regexUserEmail.test(userEmailInput.value)) {
        validDiv.innerHTML = `<span class="text-danger">Invalid email format</span>`;
        return false;
    }

    if (!regexUserPass.test(userPassInput.value)) {
        validDiv.innerHTML = `<span class="text-danger">Password must be at least 6 digits</span>`;
        return false;
    }

    
    for (let i = 0; i < users.length; i++) {
        if (userEmailInput.value === users[i].email) {
            validDiv.innerHTML = `<span class="text-danger">Email already exists</span>`;
            return false;
        }
    }

   
    validDiv.innerHTML = `<span class="text-success">Success</span>`;
    return true;
}
function logIn(){
    var isFound;
    if(emailInput.value =='' || passInput.value ==''){
        validDivlog.innerHTML=  `<span class="text-danger">All input are requierd  </span> ` 
    }
    else {
       
    for(var i=0 ;i<users.length ;i++){
      
        if((emailInput.value === users[i].email) &&(passInput.value === users[i].password))
           { validDivlog.innerHTML= `<span class="text-success">  success </span> ` 
             loginDiv.classList.add('d-none')
             welcome.classList.remove('d-none') 
        
            welcomeName.innerHTML = `<h2>Welcome ${users[i].name} </h2>`
             isFound=true
              break;
            } 
        }
      if(!isFound){
        validDivlog.innerHTML=  `<span class="text-danger">  inccorecct email or password </span> `     
      }
    }
}


