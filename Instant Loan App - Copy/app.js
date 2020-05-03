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

$(document).ready(function(){
  $('.next').on('click', function(){


    var currentDiv = $('.active');
    var nextDiv = currentDiv.next();


        if(nextDiv.length){
            currentDiv.removeClass('active').css('z-index', -10);
            nextDiv.addClass('active').css('z-index', 10);
            nextDiv.removeClass('not-active');
            currentDiv.addClass('not-active');
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

