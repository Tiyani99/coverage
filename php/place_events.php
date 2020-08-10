<?php

  // namespace files;

  $server_name = "localhost";
  $username = "root";
  $password = "s@kh!lE22";
  $db_name = "organization_db";

  // $company_name = 'Coronation Fund Managers';
  // $name_contact_person = 'Sakhile Mabunda';
  // $email_address = 'selebrate22@gmail.com';
  // $phone_number = '0715398516';

  $connection = mysqli_connect($server_name, $username, $password, $db_name);

  if(!$connection) {
    echo "Failed to connect to a server";
  }
  else {

    $company_name = $_POST['company_name'];
    $name_contact_person = $_POST['name_contact_person'];
    $email_address = $_POST['email_address'];
    $phone_number = $_POST['phone_number_person'];
    $cover_photo = $_POST['img'];
    $title_event = $_POST['title_event'];

    $event_type = '';

    foreach ($_POST['event_type'] as $selected) {
      $event_type .= $selected.",";
    }

    $event_location = '';
    foreach ($_POST['location'] as $selected) {
      $event_location .= $selected;
    }

    $event_start_time = $_POST['start_date'].",".$_POST['start_time'];

    $event_end_time = $_POST['end_date'].",".$_POST['end_time'];

    $event_description = $_POST['event_description'];
    
    $add_speakers = '';

    if (!empty($_POST['name_speaker1'])) {
        $add_speakers .= $_POST['name_speaker1'];
    }
    if (!empty($_POST['name_speaker2'])){
        $add_speakers .= ",".$_POST['name_speaker2'];
    }
    if (!empty($_POST['name_speaker3'])){
        $add_speakers .= ",".$_POST['name_speaker3'];
    }

    $how_to_register = '';
    foreach ($_POST['how_to_register'] as $selected) {
      $how_to_register .= $selected;
    }

    $start_registration_date = $_POST['start_reg_date'].",".$_POST['start_reg_time'];

    $end_of_registration_date = $_POST['end_reg_date'].",".$_POST['end_reg_time'];

    $query = "insert into events(company_name, name_contact_person, email_address, phone_number, cover_photo, title_event,
     event_type, event_location, event_start_time, event_end_time, event_description, speakers, event_registration, 
     start_registration_date, end_of_registration_date) values ('$company_name','$name_contact_person','$email_address','$phone_number',
     '$cover_photo','$title_event','$event_type','$event_location','$event_start_time','$event_end_time','$event_description',
     '$add_speakers','$how_to_register','$start_registration_date','$end_of_registration_date');";

    if ($connection->query($query) === TRUE) {
      echo "Form sent successfully!";
    }
    else {
      echo "Failed to send form!";
    }
  }

  function getCompanyName() {
    return $company_name;
  }
  
?>
