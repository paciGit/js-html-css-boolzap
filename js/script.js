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
 }

 function hideSubmitIcon(){
   $('.invia .fa-paper-plane').hide();
   $('.invia .fa-microphone').show();
 }

 // Utilizzata per insertRandom & insertMessage
 function showIconInfo(){
    $('.icon-info').hide();
    $('.text-container-in').hover(
      function(){
        $('.icon-info', this).fadeIn('fast', 'linear');
      },
      function(){
        $('.icon-info', this).fadeOut('fast', 'linear');
      }
    );
  }

 function insertRandomReply(){
   var randomReply = ['Ciao bello', 'Non posso parlare al momento, ti scrivo fra poco', 'Se ti va ci vediamo per un caffè e discutiamo.', 'Finalmente ricevo un tuo messaggio, ti eri perso?', 'Che bellezza sentirti, come stai??'];
   var reply = randomReply[Math.floor(Math.random() * randomReply.length)];

   $('.section-utente').append('<div class="messaggio-chat-guy"> <div class="chat-guy-text-container text-container-in"> <p class="chat-guy-testo-messaggio"> ' + reply + '</p><p class="chat-guy-message-time"> <span class="hour">' + ora + '</span>:<span class="minute">' + minuti + '</span> </p> <div class="icon-info"> <i class="fas fa-chevron-down"></i> <div class="chat-guy-info">  </div> </div> </div>');

   showIconaInfo();
 }

 function insertMessage() {
    var messaggio = $('#type-msg').val(); //prendi il valore inserito nell'input #type-msg

    // inserisci un div con il messaggio inserito nella section
    $('.section-utente').append('<div class="msg-utente"> <div class="text-container text-container-in"> <p class="text-msg">' + messaggio + '</p> <p class="msg-time"> <span class="hour">' + ora + '</span>' + ':' + '<span class="minute">' + minuti + '</span> </p> <div class="icon-info"> <i class="fas fa-chevron-down"></i> <div class="info"> </div> </div> </div> </div>');
    $('#type-msg').val('');

    showIconInfo();
    showIconInfo();
  }

 //AZIONI ----------------------------------------
 //1. apparizione e sparizione icona Invio
 $('#type-msg').focusin(
   showSubmitIcon
 );

 $('#type-msg').focusout(
   function(){
     if ($(this).val() == '') {
       hideSubmitIcon();
     } else {
       showSubmitIcon();
     }
   }
 );

 $('.invia .fa-paper-plane').click(
   hideSubmitIcon
 );

 // // 2. Apparizione icon-info (Da rivedere)
 // $('.icon-info').hide();
 // $('.text-container').hover(
 //   function(){
 //     $('.icon-info').fadeToggle('fast', 'linear')
 //     $('.icon-info', this).fadeToggle('fast', 'linear');
 //   },
 //   function(){
 //     $('.icon-info').fadeToggle('fast', 'linear')
 //     $('.icon-info', this).fadeToggle('fast', 'linear');
 //   }
 // );


 // 3. Inserisci messaggio al click Invio
 $('.invia .fa-paper-plane').click(
   function(){
      insertMessage();

      setTimeout(insertRandomReply, 1000);

   }
  );

  // 3(?) stessa cosa del punto 3 ma l'evento è scatenzato al keypress invece che al click
  $("#type-msg").keypress(
       function() {
         showSubmitIcon(); {
         if (event.keyCode === 13) {
           insertMessage();
           setTimeout(insertRandomReply, 1000);
           hideSubmitIcon();
         }
  }

  // 4. Gestione input cerca (utenti)
    // var stringa1, stringa2;

    $('#chat-search').keyup( //ogni volta che viene premuto un tasto(qualsiasi della tastiera) nel campo 'cerca'
        function(){

          var stringa1 = $('#chat-search').val().toLowerCase(); // salvarmi input utente in campo del filtro (stringa1)
          console.log(stringa1);

          // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
          $('.contact-name').each(
            function(){

              var stringa2 = $(this).text().toLowerCase(); //salvo in una var il valore del testo del nome nel contatto (stringa2)
              console.log(stringa2);

              var confronto = stringa2.includes(stringa1); // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto stringa2.includes(stringa1)
              console.log(confronto);

               if (confronto) { //se l'occorenza è stata trovata lascio il blocco di contatto visibile

               } else { // altrimenti lo rendo non visibile (this)
                $(this).parents('.sez-dx-in').hide();
              }

            }
          );

      });
