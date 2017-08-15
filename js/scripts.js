$(document).ready(function(){
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();
      var total = 0;
    $("input:checkbox[name=stress-test]:checked").each(function(){
      var $this=$(this).val();
       total = total + Number($this);
       console.log(total);
    });
    if (total >= 15){
      $("#results").text("You are stressed out!!!");
    }else if (total > 8 && total < 15 ){
    $("#results").text("You somewhat stressed out!!!");
  }else{
    $("#results").text("You are not stressed out!!!")
  }
    $("#stress-levels").show();

  });
});
