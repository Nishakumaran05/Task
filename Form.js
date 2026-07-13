

var username = document.getElementById("username")
var password = document.getElementById("password")
var conform = document.getElementById("correct")

var nameregex = /^[A-Za-z ]{3,}$/;
var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

var redname = document.getElementById("nametxt")
var redpass = document.getElementById("passwordtxt")
var redconfirm = document.getElementById("confirmtxt")

var validate;

function namevalidation(){
    debugger
    if (nameregex.test(username.value)) {
        redname.innerHTML = ""
        return true
    }
    else {
        redname.innerHTML = "Please Enter Valid Username"
        return false
    }
}

function passwordvalidation(){
    debugger
    if (passwordregex.test(password.value)) {
        redpass.innerHTML = ""
        return true
    }
    else{
        redpass.innerHTML = "Enter Valid Password"
        return false
    }
}

function confirmvalidation(){
    debugger
    if(conform.value === password.value){
        redconfirm.innerHTML = ""
        return true
    }
    else{
        redconfirm.innerHTML = "Password Do not Match"
        return false
    }
}


function validation() {
    debugger
    if(namevalidation() && passwordvalidation() && confirmvalidation()){
        validate = true
    }   
    else{
        validate = false
    }
}

function submitForm() {
    debugger
    validation()
    if (validate) {
        alert("Submitted Successfully")
    }
    else {
        alert("Please enter correct text")
    }
}

function resetForm() {
    debugger
    username.value = ""
    password.value = ""
    conform.value = ""

    redname.innerHTML = "";
    redpass.innerHTML = "";
    redconfirm.innerHTML = "";
}

// username.value != "" && (conform.value == password.value) && conform.value != ""

// var username = document.getElementById("username");
// var password = document.getElementById("password");
// var conform = document.getElementById("correct");

// var nameregex = /^[A-Za-z ]{3,}$/;
// var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

// var validate = false;

// function validation() {

//     validate = false;

//     if (!nameregex.test(username.value)) {
//         alert("Username must contain at least 3 letters.");
//         return;
//     }

//     if (!passwordregex.test(password.value)) {
//         alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
//         return;
//     }

//     if (password.value !== conform.value) {
//         alert("Passwords do not match.");
//         return;
//     }

//     validate = true;
// }

// function submitForm() {
//     validation();

//     if (validate) {
//         alert("Submitted Successfully");
//     } else {
//         alert("Please enter correct details.");
//     }
// }

// function resetForm() {
//     username.value = "";
//     password.value = "";
//     conform.value = "";
//     validate = false;
// }