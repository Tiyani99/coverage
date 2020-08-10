var counter = 0;

$(document).ready(function() {

  $("input[type='checkbox']").change(function() {
    if ( $(this).val() == "external_website" && $(this).is(":checked") ) {

      $("#external_website_url").show();
      $("#break").show();
      $("#email_for_registration").hide();

    }
    else if ( $(this).val() == "by_email" && $(this).is(":checked")) {

      $("#email_for_registration").show();
      $("#break").show();
      $("#external_website_url").hide();

    }
    else {

      $("#external_website_url").hide();
      $("#email_for_registration").hide();
      $("#break").hide();
    }
  });

  $(".speakers").click( function() {

      if (counter == 0) {
        $("#speaker1").show();
        $("#button-speaker1").show();
        $("#break-speaker1").show();
        counter = counter + 1;
      }
      else if (counter == 1) {
        $("#speaker2").show();
        $("#button-speaker2").show();
        $("#break-speaker2").show();
        counter = counter+1;
      }
      else if (counter == 2) {
        $("#speaker3").show();
        $("#button-speaker3").show();
        $("#break-speaker3").show();
        counter = counter+1;
      }
  });

  $("#button-speaker1").click( function() {
    $("#speaker1").hide();
    $("#button-speaker1").hide();
    $("#break-speaker1").hide();
    counter = counter-1;
  });

  $("#button-speaker2").click( function() {
    $("#speaker2").hide();
    $("#button-speaker2").hide();
    $("#break-speaker2").hide();
    counter = counter-1;
  });

  $("#button-speaker3").click( function() {
    $("#speaker3").hide();
    $("#button-speaker3").hide();
    $("#break-speaker3").hide();
    counter = counter-1;
  });

});
