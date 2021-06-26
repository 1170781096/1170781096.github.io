// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(txtCreditCard) {
    var a = document.getElementById(txtCreditCard).value;


    var filter = /(?:\d{4})(\s)\d{4}(\s)\d{4}(\s)\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

var expertChoose = 1;
function disableDatesExpert(expert){
  if (expert == 1){
    expertChoose = 1;
  } else if (expert == 2) {
    expertChoose = 2;
  } else if (expert == 3) {
    expertChoose = 3;
  }

}

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if ( (expertChoose == 1 && date.getDay() === (0)) || (expertChoose == 2 && date.getDay() === (3))|| (expertChoose == 3 && date.getDay() === (6)) )
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function confirmFeedback(){
  alert("You have successfully made an appointment, thank you!")
}

//function check(){
//  var notComplete = 0;
//  $('.form-control').each(function(){
//      if(!$(this).val()){
//        notComplete = 1;
//      }
//  });
//  if(notComplete == 1){
//    alert("Please fill in all field")
//  } else{}
//}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone number, the format should be (xxx)-xxx-xxxx or xxx-xxx-xxxx");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#debit").on("change", function(){
        if (!validateCreditCard("debit")){
            alert("Wrong format for credit card number, the format should be xxxx xxxx xxxx xxxx");
            $("#debit").val("");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: 0,
            maxDate: '+12M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );




    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    $("#phone").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#phone").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $('#myForm input[type="text"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
        } else{
            $(this).removeClass("error");
        }
    });

  $('#submitButton').click(function(event){
    var notComplete = 0;
    $('#nameInput, #phone, #debit, #dateInput').each(function(){
      if(!$(this).val()){
        notComplete = 1;
      }
    });
    $('#timeInput, #serviceInput').each(function(){
      if($(this).val() == "blank"){
        notComplete = 1;
      }
    });

    if(notComplete == 1){
      alert("Please fill in all fields, select service, date and time")
    } else {alert("You have successfully made an appointment with the expert, date and time you selected, thank you!")}
});

//  $('#exampleModal').on('show.bs.modal', function (e) {
//    if(notComplete == 1){
//      e.stopPropagation();
//      e.preventDefault();
//    }
// });




});
