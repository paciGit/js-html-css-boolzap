$( document ).ready(function() {
  console.log("Testo prova");

 //FUNZIONI --------------------------------------
 // First step
 function showSubmitIcon(){
   $('.invia .fa-microphone').hide();
   $('.invia .fa-paper-plane').show();
 }

 function hideSubmitIcon(){
   $('.invia .fa-paper-plane').hide();
   $('.invia .fa-microphone').show();
 }

 //AZIONI ----------------------------------------
 //1. apparizione e sparizione icona Invio
 $('#type-msg').focusin(
   showSubmitIcon
 );

 $('#type-msg').focusout(
   function(){
     if ($(this).val() == '') {
       hideSubmitIcon()
     } else {
       showSubmitIcon()
     }
   }
 );

 //2. Apparizione icon-info (Da rivedere)
 // $('.text-container').hover(
 //   function(){
 //     $('.icon-info').fadeToggle('fast', 'linear')
 //   },
 //   function(){
 //     $('.icon-info').fadeToggle('fast', 'linear')
 //   }
 // )


 // 3. Inserisci messaggio al click Invio
 $('.invia .fa-paper-plane').click(
   function(){
     var messaggio = $('#type-msg').val();
     $('.text-msg').html(messaggio)
   }
 )

});
