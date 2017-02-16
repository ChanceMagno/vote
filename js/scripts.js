$(document).ready(function(){
  $("form#under18").submit(function(event) {
    var age = parseInt($("input#under18").val());

    if(age < 18) {
      $("#underAge").show();
    } else {
      $("#ofAge").show();
    }
    event.preventDefault();
  });
});
