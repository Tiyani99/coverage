var aboutUsBtn = document.getElementById("click_ak511");
var modalContainer = document.querySelector(".modal-container");
var closeModalContainer = document.querySelector(".model-close");

var signIn = document.querySelector(".sign-in-btn");
var signInModal = document.querySelector(".sign-in-modal");
var closeSignInModal = document.querySelector(".close-sign-in");

var signUp = document.querySelector(".sign-up-btn");
var signUpModal = document.querySelector(".sign-up-modal");
var closeSignUpModal = document.querySelector(".close-sign-up");

var signUpLink = document.querySelector(".sign-up-link");

// buttons inside modals
var signUpBtn = document.querySelector(".login-btn2");
var signInBtn = document.querySelector(".login-btn1");

signInBtn.addEventListener("click", function(){
  var company_email = document.getElementById("username").value;
  var company_password = document.getElementById("password").value;

  if (company_email == '' || company_password == ''){

    if (company_email == ''){
      document.getElementById("error_email").style.display = "block";
      return false;
    }
    else {
      document.getElementById("error_email").style.display = "none";
    }
    
    if (company_password == '') {
      document.getElementById("error_password").style.display = "block";
      return false;
    }
    else {
      document.getElementById("error_password").style.display = "none";
    }
     
    // TO-DO: if any of the two is wrong
    return false;
  }
  else {
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';

    document.getElementById("error_email").style.display = "none";
    document.getElementById("error_password").style.display = "none";

    alert("Login successful!");

    return true;
  }
});

signUpBtn.addEventListener("click", function(){

  var company_name = document.getElementById("company_name").value;
  var company_email = document.getElementById("username_company").value;
  var company_password = document.getElementById("company_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var registration_no = document.getElementById("registration_no").value;
  var vat_no = document.getElementById("vat_no").value;
  var date_of_reg = document.getElementById("date_of_reg").value;
  var address1 = document.getElementById("address1").value;
  var country_name = document.getElementById("country_name").value;
  var country_code = document.getElementById("country_code").value;

  if (company_name == '' || company_email == '' || company_password == '' || confirm_password == '' || registration_no == '' || vat_no == '' ||
     date_of_reg == '' || address1 == '' || country_name == '' || country_code == '') {
      if (company_name == ''){
        document.getElementById("error_company_name").style.display = "block";
      }
      if (company_email == ''){
        document.getElementById("error_company_email").style.display = "block";
      }
      if (company_password == ''){
        document.getElementById("ewfjwb").style.display = "block";
      }
      if (confirm_password == ''){
        document.getElementById("ufiuebiv").style.display = "block";
      }
      if (registration_no == ''){
        document.getElementById("error_reg_no").style.display = "block";
      }
      if (vat_no == ''){
        document.getElementById("error_vat_no").style.display = "block";
      }
      if (date_of_reg == ''){
        document.getElementById("error_reg_date").style.display = "block";
      }
      if (address1 == ''){
        document.getElementById("skdchb").style.display = "block";
      }
      if (country_name == ''){
        document.getElementById("fkniebr").style.display = "block";
      }
      if (country_code == ''){
        document.getElementById("kjfbu").style.display = "block";
      }
      
      return false;
  }
  else {
    alert("Sign up is successful!");

    document.getElementById("error_company_name").style.display = "none";
    document.getElementById("error_company_email").style.display = "none";
    document.getElementById("ewfjwb").style.display = "none";
    document.getElementById("ufiuebiv").style.display = "none";
    document.getElementById("error_reg_no").style.display = "none";
    document.getElementById("error_vat_no").style.display = "none";
    document.getElementById("error_reg_date").style.display = "none";
    document.getElementById("skdchb").style.display = "none";
    document.getElementById("fkniebr").style.display = "none";
    document.getElementById("kjfbu").style.display = "none";

    document.getElementById("company_name").value = '';
    document.getElementById("username_company").value = '';
    document.getElementById("company_password").value = '';
    document.getElementById("confirm_password").value = '';
    document.getElementById("registration_no").value = '';
    document.getElementById("vat_no").value = '';
    document.getElementById("date_of_reg").value = '';
    document.getElementById("address1").value = '';
    document.getElementById("address2").value = '';
    document.getElementById("address3").value = '';
    document.getElementById("country_name").value = '';
    document.getElementById("country_code").value = '';

    signUpModal.classList.remove("sign-up-modal-active");

    return true;
  }
});

// about us
aboutUsBtn.addEventListener("click", function() {
  modalContainer.classList.add("container-active");
});

closeModalContainer.addEventListener("click", function() {
  modalContainer.classList.remove("container-active");
});

// sign in
signIn.addEventListener("click", function() {
  signInModal.classList.add("sign-in-modal-active");
});

closeSignInModal.addEventListener("click", function() {
  signInModal.classList.remove("sign-in-modal-active");

  document.getElementById("username").value = '';
  document.getElementById("password").value = '';

  document.getElementById("error_email").style.display = "none";
  document.getElementById("error_password").style.display = "none";
});

// sign up
// button
signUp.addEventListener("click", function() {
  signUpModal.classList.add("sign-up-modal-active");
});
// link
signUpLink.addEventListener("click", function() {
  signUpModal.classList.add("sign-up-modal-active");
});
closeSignUpModal.addEventListener("click", function() {
  signUpModal.classList.remove("sign-up-modal-active");
  
  document.getElementById("error_company_name").style.display = "none";
  document.getElementById("error_company_email").style.display = "none";
  document.getElementById("ewfjwb").style.display = "none";
  document.getElementById("ufiuebiv").style.display = "none";
  document.getElementById("error_reg_no").style.display = "none";
  document.getElementById("error_vat_no").style.display = "none";
  document.getElementById("error_reg_date").style.display = "none";
  document.getElementById("skdchb").style.display = "none";
  document.getElementById("fkniebr").style.display = "none";
  document.getElementById("kjfbu").style.display = "none";

  document.getElementById("company_name").value = '';
  document.getElementById("username_company").value = '';
  document.getElementById("company_password").value = '';
  document.getElementById("confirm_password").value = '';
  document.getElementById("registration_no").value = '';
  document.getElementById("vat_no").value = '';
  document.getElementById("date_of_reg").value = '';
  document.getElementById("address1").value = '';
  document.getElementById("address2").value = '';
  document.getElementById("address3").value = '';
  document.getElementById("country_name").value = '';
  document.getElementById("country_code").value = '';
});

// side bar
function toggleSideBarButton() {
  document.getElementById('sidebar').classList.toggle('isactive');
}

toggleSideBarButton();

// validate

