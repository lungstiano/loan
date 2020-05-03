var slide = document.getElementById('amountRange');
var sliderDiv = document.getElementById("total");

    sliderDiv.innerHTML=slide.value;

slide.oninput = function() {
    sliderDiv.innerHTML = "R" + this.value;
    // console.log(this.value);
}

var amount = document.getElementById("field").value;


amount.oninput = function()
{
    sliderDiv.innerHTML= "R" + amount;
   //console.log(amout)
}

$("#field1").change(function(){
  var amountEnterd=$(this).val();
    $('.input-total').text("R"+ amountEnterd);
  });


//the slider of months
$(".mRange1").change(function(){
var numberOfMonths=$(this).val();
console.log(numberOfMonths);
  $('#monthRange1').val(numberOfMonths);
});
$("#monthRange1").change(function(){
  var numberOfMonths=$(this).val();
    $('.mRange1').val(numberOfMonths);
  });



  $(".mRange2").change(function(){
    var numberOfMonths=$(this).val();
    console.log(numberOfMonths);
      $('#monthRange2').val(numberOfMonths);
    });
    
    $("#monthRange2").change(function(){
      var numberOfMonths=$(this).val();
        $('.mRange2').val(numberOfMonths);
      });



$(document).ready(function(){
  $('.next').on('click', function(){

    var currentDiv = $('.active');
    var nextDiv = currentDiv.next();

        if(nextDiv.length){
             currentDiv.removeClass('active').css('z-index', -1);            
             nextDiv.removeClass('not-active');
             currentDiv.addClass('not-active');
  
          }
          else{
            var currentDiv = $('.not-active');
            var nextDiv = currentDiv.next();

            currentDiv.removeClass('not-active').css('z-index', 10);
            nextDiv.addClass('not-active');
            currentDiv.addClass('active');
         
          }

  });

//   $('.prev').on('click', function(){
//     var currentImg = $('.active');
//     var prevImg = currentImg.prev();

//     if(prevImg.length){
//       currentImg.removeClass('active').css('z-index', -10);
//       prevImg.addClass('active').css('z-index', 10);
//     }
//   });

});

