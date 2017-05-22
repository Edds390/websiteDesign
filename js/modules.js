$(document).ready(function(){
  $("#coriolanusCard").click(function(e) {
      e.preventDefault();
      $('#coriolanusCard').toggleClass('moduleCard');
      $('.moduleCard').fadeOut('2500', function () {
        $('.moduleCard').remove();
        window.location.replace("moduleInfo.html")
        //$('#coriolanusCard').animate({right: "+=1500px"},'10000');

      });
     $(this).css("background-color", "#cccccc");
  });
});
