const form = document.getElementById('form')
const UserName= document.getElementById('UserName')
const Email= document.getElementById('Email')
const Password= document.getElementById('Password')
const Password2 = document.getElementById('Password2')


// show input error message
function showError(input , message){
    const formControl = input.parentElement
    formControl.className = 'Form-Control error ' 
    const small = formControl.querySelector('small')
    small.innerHTML = message
}
// ###

// show success outline
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'Form-Control success '
}
// ###



// the big first letter
function getFiledName(input){
    return   input.id.charAt(0).toUpperCase() + input.id.slice(1)
  }
//###

// check input length
function checkLength(input , min , max){
if(input.value.length < min){
    showError(input , `${getFiledName(input)} must be at least ${min} char`)
}else if(input.value.length > max){
    showError(input , `${getFiledName(input)} must be less than ${max} char`)
}else{
    showSuccess(input)
}
}
// ###

// show is reqired
function showReqired(arrayinput){
    arrayinput.forEach(function(input){
       if(input.value.trim() === '' ){
           showError(input , ` ${getFiledName(input)} is reqired`)
       }else{
           showSuccess(input)
       }
    })

   
}
// ###

// check email valied
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input , 'email is not vailed')
    }
    ;
}
// ###

// check password match
function checkPasswordMach(input1 , input2){
   if(input1.value != input2.value){
    showError(input2 , "passwords do not mach")
   }
}

// main function
form.addEventListener('submit' , function(e){
    e.preventDefault()


    showReqired([UserName, Email, Password, Password2])


    checkEmail(Email)
    
    checkPasswordMach(Password , Password2)
    

    checkLength(UserName , 3 , 15)
    checkLength(Password , 6 , 25)
     
    
})

// ####################