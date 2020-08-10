<?php

  $server_name = "localhost";
  $username = "root";
  $password = "s@kh!lE22";
  $db_name = "organization_db";

  $connection = mysqli_connect($server_name, $username, $password, $db_name);

  if(!$connection) {
    echo "Not connected to the server!";
  }
  else {

    $offer_title = $_POST['offer_title'];
    $company_name = $_POST['company_name'];
    $location = $_POST['location'];
    $offer_type = '';

    if ($_POST['other_offer_type']) {
      $offer_type = $_POST['other_offer_type'];
    }
    else {
      foreach ($_POST['offer_type'] as $selected) {
        $offer_type .= $selected;
      }
    }

    $salary_minimum = $_POST['salary_minimum'];
    $salary_maximum = $_POST['salary_maximum'];

    $salary_period = '';
    $salary_item = $_POST['payment_period'];
    if ($salary_item == 'per year') {
      $salary_period = 'per year';
    }
    else if ($salary_item == 'per month') {
      $salary_period = 'per month';
    }
    else if ($salary_item == 'per week') {
      $salary_period = 'per week';
    }
    else if ($salary_item == 'per day') {
      $salary_period = 'per day';
    }
    else if ($salary_item == 'per hour') {
      $salary_period = 'per hour';
    }

    $checkboxSelected = $_POST['benefits'];
    $offer_benefits = '';
    foreach ($checkboxSelected as $selected) {
      $offer_benefits .= $selected.",";
    }

    $vacancy_details = $_POST['vacancy_details'];
    $required_skills = $_POST['required_skills'];
    $candidate_requirements = $_POST['candidate_requirements'];

    if(!empty($_POST['email'])) {
      $email = $_POST['email'];
      $application_form = $_POST['application_form'];
    }
    else if($_POST['hyperlink']) {
      $application_link = $_POST['hyperlink'];
    }
    else {
      $email = $_POST['email'];
      $application_form = $_POST['application_form'];
      $application_link = $_POST['hyperlink'];
    }

    $offer_closing_date = $_POST['due_date'].",". $_POST['due_time'];
    
    $query = "insert into offer(offer_title, company_name, location, offer_type, salary_minimum, salary_maximum, salary_period, offer_benefits, 
    vacancy_details, required_skills, candidate_requirements, email, application_form, application_link, offer_closing_date, 
    offer_posted_date) values ('$offer_title','$company_name','$location','$offer_type','$salary_minimum','$salary_maximum','$salary_period'
    '$offer_benefits','$vacancy_details','$required_skills','$candidate_requirements','$email','$application_form','$application_link',
    '$offer_closing_date',now());";
    
    $connection->query($query);
  }
  
?>
