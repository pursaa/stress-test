$(document).ready(function(){
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();
      var total = 0;
    $("input:checkbox[name=stress-test]:checked").each(function(){
      var $this=$(this).val();
       total = total + 1;
    });
    if (total >= 4){
      $("#results").text("You are stressed out!!!");
      $("#stress-levels").show();

    }
  });
});
