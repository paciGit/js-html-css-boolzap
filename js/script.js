$( document ).ready(function() {
  console.log("Testo prova");

// VARIABILI -------------------------------------
 var ora = new Date().getHours();
 var minuti = new Date().getMinutes();



 //FUNZIONI --------------------------------------
 // General
 function showSubmitIcon(){
   $('.invia .fa-microphone').hide();
   $('.invia .fa-paper-plane').show();
 };

 function hideSubmitIcon(){
   $('.invia .fa-paper-plane').hide();
   $('.invia .fa-microphone').show();
 };

 function insertRandomReply(){
   var randomReply = ['Ciao bello', 'Non posso parlare al momento, ti scrivo fra poco', 'Se ti va ci vediamo per un caffè e discutiamo.', 'Finalmente ricevo un tuo messaggio, ti eri perso?', 'Che bellezza sentirti, come stai??']
   var reply = randomReply[Math.floor(Math.random() * randomReply.length)];

   $('.section-utente').append('<div class="msg-utente"> <div class="text-container"> <p class="text-msg"> ' + reply + '</p><p class="msg-time"> <span class="hour">' + ora + '</span>:<span class="minute">' + minuti + '</span> </p> <div class="icona-info"> <i class="fas fa-chevron-down"></i> <div class="info">  </div> </div> </div>')
 };

  function insertMessage() {
    var messaggio = $('#type-msg').val();
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

 // $('.invia .fa-paper-plane').click(
 //   hideSubmitIcon
 // )

 // 2. Apparizione icon-info (Da rivedere)
 $('.icon-info').hide();
 $('.text-container').hover(
   function(){
     $('.icon-info').fadeToggle('fast', 'linear')
     $('.icon-info', this).fadeToggle('fast', 'linear');
   },
   function(){
     $('.icon-info').fadeToggle('fast', 'linear')
     $('.icon-info', this).fadeToggle('fast', 'linear');
   }
 );


 // 3. Inserisci messaggio al click Invio
 $('.invia .fa-paper-plane').click(
   function(){
      insertMessage();
   }
  );

  // 3(?) stessa cosa del punto 3 ma l'evento è scatenzato al keypress invece che al click
 $("#type-msg").keypress(function(event) {
    if (event.keyCode === 13) {
      insertMessage();
      setTimeout(insertRandomReply, 1000);
      hideSubmitIcon()
    }
  });

 // 4. Invia msg random all'input Invio dell'utente
  setTimeout(insertRandomReply, 1000);

});
