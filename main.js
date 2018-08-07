
$( document ).ready(function() {
    
    var checkboxes = $(".checkbox_check");
    actions = $(".smart-card-form");

    checkboxes.click(function() {
    
       actions.attr("hidden", !checkboxes.is(":checked"));
      
    });
      
});
$("button").click(function() {
    $(".float-label .form-control").toggleClass("invalid");
  });
  
  Array.prototype.forEach.call(
    document.querySelectorAll(".float-label>.data-clear-input"),
    function(el) {
      el.addEventListener("click", function(e) {
        e.target.previousElementSibling.value = "";
        e.target.previousElementSibling.focus();
      });
    }
  );



$('#form1').floatinglabel({
  ignoreId        : ['recaptcha', 'imagefield'],
  animationIn     : {top: '-25px', opacity: '1', left: '25px'},
  animationOut    : {top: '0', opacity: '0', left: '0'},
  delayIn         : 1500,
  delayOut        : 200,
  easingIn        : 'easeOutElastic',
  easingOut       : 'easeOutCirc',
  labelClass      : 'goodbye-placeholder',
  pinClass        : 'dealt-with-it'
});
            