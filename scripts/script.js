$(function () {
  //output is clear at start
  $("#textOutput").val("");


//function allows user to click to input text
  $("#btnSend").click(function (e) {
    e.preventDefault();
    var getInput = $("#textInput").val();
    
    $("#textOutput")
      .append("<p>" + getInput + "</p>")
      .addClass("sentText");

    //Clears text box for next Input
    $("#textInput").val("");
});
});
  //function allows you to press enter to input text
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    $("#btnSend").click();
  
  }
});

$('#btnClear').click(function (e) {
  e.preventDefault();
  //clears text out put
  $('#textOutput').text(''); 
  //clears textbox
  $('#textInput').val('');
});

