var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function validateRegist() {
  
  var userType = document.querySelector('input[name="account-type"]:checked');

  if (userType) {
      switch (userType.value) {
          case "reviewer":
              window.location.href = "mainpageaftrlogin.html";
              break;
          case "developer":
              window.location.href = "devmain.html";
              break;
          case "observer":
              window.location.href = "mainobs.html";
              break;
          default:
              break;
      }
  } else {
      alert("Please select a user type.");
  }
}