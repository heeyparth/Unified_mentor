// Your web app's Firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyBgob9eMQsXXz22xAeliMf5vGgEIXYQP90",
    authDomain: "befit-7147f.firebaseapp.com",
    projectId: "befit-7147f",
    storageBucket: "befit-7147f.appspot.com",
    messagingSenderId: "1013627377540",
    appId: "1:1013627377540:web:ddcb87762961e439f5afd1"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
const auth= getAuth()
const database=getDatabase(app)

function register()
 {
    full_name=document.getElementById('name').value
    email=document.getElementById('signupemail').value
    password=document.getElementById('signuppassword').value
    payment=document.getElementById('signuppayment').value




   if(validate_email(email)==false || validate_password(password)==false){
  alert('Email or Password is outta Line!!')
  return
 }
 if(valida_name(full_name)==false){
    alert('enter the name properly')
    return
 }
 if(validate_payment(payment)==false){
 alert('pay for the plan')
 return
 }


 auth.createUserWithEmailAndPassword(email,password)
 .then(function(){
    var user = auth.currentUser
     
     var databaes_ref = database.ref()
     //create user data
      var user_data = {
        full_name:full_name,
        email:email,
        payment:payment,
        last_login: Date.now()
      }
databaes_ref.child('user/' + user.uid).set(user_data)

    alert('User signUp successfully!!')

})
.catch(function(error){
    var error_code = error.code
    var error_message = error.message
    alert(error_message)
 })




}
function validate_payment(payment){
    if(payment=="")
    {
        return false
    }else{
        return true
    }
}
function valida_name(full_name){
    if(full_name==""){
        return false
    }else{
        return true
    }
}
function validate_email(email){
    expression=/^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email)==true){
        return true
    }else{
    
        return false
    }
}

function validate_password(password){
    if(password<6){
        
        return false
    }else{
        return true
    }
}*/