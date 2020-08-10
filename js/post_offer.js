
// validate form
function validate() {
  
  var offer_title = document.forms['offer_form']['offer_title'].value;
  var company = document.forms['offer_form']['company_name'].value;
  var location = document.forms['offer_form']['location'].value;
  var offer_salary_start = document.forms['offer_form']['salary_minimum'].value;
  var offer_salary_end = document.forms['offer_form']['salary_maximum'].value;
  var offer_due_date = document.forms['offer_form']['due_date'].value;
  var offer_due_time = document.forms['offer_form']['due_time'].value;
  var vacancy_details = document.forms['offer_form']['vacancy_details'].value;
  var required_skills = document.forms['offer_form']['required_skills'].value;
  var candidate_requirements = document.forms['offer_form']['candidate_requirements'].value;


  // offer_type checkboxes
  var offer_type_not_provided = new Boolean(false);

  var offer_types = document.querySelectorAll("[name='offer_type[]']:checked");
  var other_offer = document.forms['offer_form']['other_offer_type'].value;
  
  if (offer_types.length == 0 && other_offer == '') {
    offer_type_not_provided = true;
  }


  // way to receive applications
  var can_apply = new Boolean(true);

  var form_of_application = document.querySelectorAll("[name='form_of_application[]']:checked");
  if (form_of_application.length != 0) {

    for (var i = 0; i < form_of_application.length; i++) {

      if (form_of_application[i].id == 'hyperlink') {
        if (document.forms['offer_form']['application_url'].value == '') {
          alert('Application link is not provided');
          return false;
        }
        return true;
      }
      if (form_of_application[i].id == 'email') {
        if (document.forms['offer_form']['email_to_apply'].value == '') {
          alert('Email is not provided!');
          return false;
        }
        if (!document.forms['offer_form']['application_form'].value){
          alert('Application form not provided!');
            return false;
        }
        return true;
      }
  
    }

  } 
  else {
    can_apply = false;
  }
  
  
  // check if fields are provided
  if (offer_title == '' || company == '' || location == '' || offer_salary_start == '' || offer_salary_end == ''
  || offer_due_date == '' || offer_due_time == '' || vacancy_details == '' || required_skills == '' || 
  candidate_requirements == '' || offer_type_not_provided == true || can_apply == false) {
    alert("Fill all the required fields!");
    return false;
  }
  else {
    alert("Form sent successfully!");
    return true;
  }

}
