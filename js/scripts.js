$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();

  $(".name").text(person1Input);

  $("#letter").show();

  event.preventDefault();

  });
});
