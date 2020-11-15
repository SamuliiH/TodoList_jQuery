$(document).ready(function(){
 $('#btn1').click(function(e){
   e.preventDefault();
   var input1 = $('#input1').val();
   $('ul').append(`<li>${input1}<button class="del">X</button></li>`);

   $('.del').click(function(e) {
     $(e.target.parentNode).remove();
     $('#input1').focus();
   }); //// end of del click

   $('#input1').val("");
   $('#input1').focus();
 }); // end of submit function
}); // end of submit doc
