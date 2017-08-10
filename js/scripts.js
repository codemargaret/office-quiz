$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var niceness = $("select#niceness").val();
    var gender = $("select#gender").val();
    console.log("niceness" + niceness);
    console.log("gender" + gender);
      if (gender === 'male' && niceness === 'nice') {
        $('#jim').show();
        $("#dwight, #pam, #angela").hide();
      } else if (gender === 'male' && niceness === 'mean') {
        $('#dwight').show();
        $("#jim, #pam, #angela").hide();
      } else if (gender === 'female' && niceness === 'mean') {
        $('#angela').show();
        $("#jim, #pam, #dwight").hide();
      } else if (gender === 'female' && niceness === 'nice') {
        $('#pam').show();
        $("#jim, #dwight, #angela").hide();
      }
    }
    event.preventDefault();
  });
});
