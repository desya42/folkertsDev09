$(function () {
 

  $("#btnSend").click(function (e) {
    e.preventDefault();
    var getInput = $("#textInput").val();
    //then maybe some other div?
    $("#textOutput")
      .append("<p>" + getInput + "</p>")
      .addClass("sentText");

    //Clears text box for next Input
    $("#textInput").val("");
  });
});
  /*$('#textInput').keypress(function (e) {
    if (e.which == 13) {
      var getInput = $('#textInput').val(); 
      $('#textOutput').append('<p>'+getInput+'</p>').addClass("sentText"); 
      $('#textInput').val('');
      return false; 
    }
  });
  
  $('#clear').click(function (e) {
    e.preventDefault();
    $('#textOutput').text(''); 
    $('#textInput').val('');
  });





