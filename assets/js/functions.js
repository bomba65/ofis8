$( document ).ready(function() {  

  $(".phone-number").inputmask({"mask": "+7 (999) 999-9999"});

  var arrowPrev = '<img class="prev-arrow" src="catalog/view/theme/default/img/yellow-arr.png" />';
  var arrowNext = '<img class="next-arrow" src="catalog/view/theme/default/img/yellow-arr.png" />';

  $("#ex2").change(function(){
    $("#min-price").html(slider.getValue()[0]);
    $("#max-price").html(slider.getValue()[1]);
  });
});

if (document.getElementById('ex2') != null) {
  var slider = new Slider('#ex2', {});
}