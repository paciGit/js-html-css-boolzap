// General
$(document).ready(function() {

  // Search
  $('#search').keyup(function() {
    search();
  });

  // Inverti all'inserimento di un testo, Mic & Arrow
  $('.write input').keyup(function() {
    var input = $('.write input').val();
    if (input.length !== 0) {
      $('.arrow').removeClass('not-display').addClass('display-block');
      $('.microphone').removeClass('display-block').addClass('not-display');
    } else {
      $('.arrow').removeClass('display-block').addClass('not-display');
      $('.microphone').removeClass('not-display').addClass('display-block');
    }
  });

  // Invia un messaggio ad un Utente e ricevi una risposta dopo N secondi
  $('#send').click(function() {
    send();
  });

  $('.write input').keydown(function() {
    if (event.which === 13) {
      send();
    }
  });

  // Al click di un utente, si aprirà la chat e i messaggi già inseriti
  $('.user').click(function() {
    changeChat($(this));
  });

  // Mostra e nascondi il menu dei bubble, con la possibilità di Eliminare
  $(document).on('click', '.bubble i', function() {
      toggleOption($(this));
  });

  $(document).on('click', '.delete', function() {
      deleteBubble($(this));
  });

});


// Funzioni
function search() {
  var search = $('#search').val().toLowerCase();
  // Search
  $('.user').each(function() {
    var user = $(this).find('h2').text().toLowerCase();
    if (user.includes(search)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

// Invio, chat e utenti
function send() {
  var text = $('.write input').val();
  var chat = $('.chat-utente.container-flex');
  var bubble = $('.template .bubble').clone();
  var contact = $('.user.select');
  var info = $('.info-utente.container-flex');
  var date = new Date;
  var time = addZero(date.getHours()) + ':' + addZero(date.getMinutes());
  if (text !== '') {
    bubble.addClass('send');
    bubble.children('p').text(text);
    bubble.children('span').text(time);
    chat.append(bubble);
    contact.prependTo('.contact ul');
    contact.children('span').text(time);
    info.find('span').text(time);
    $('.write input').val('');
    setTimeout(receive, 1000);
  }
}

// Ricezione risposte casuali & varie
function receive() {
  var text = ['Ma di cosa stai parlando?', 'XD', 'Sisi, certo ;)', 'Okok', 'Certamente, come dici tu.'];
  var textIndex = text[getRandomInclus(0, text.length - 1)];
  var chat = $('.chat-utente.container-flex');
  var bubble = $('.template .bubble').clone();
  var contact = $('.user.select');
  var date = new Date;
  var time = addZero(date.getHours()) + ':' + addZero(date.getMinutes());
  bubble.addClass('receive');
  bubble.children('p').text(textIndex);
  bubble.children('span').text(time);
  chat.append(bubble);
}

function addZero(number) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

function changeChat(userSelect) {
  var contactSelect = $('.user.select');
  var dataElement = userSelect.attr('data-element');
  var info = $(".info-utente[data-element='" + dataElement + "']");
  var infoSelect = $('.info-utente.container-flex');
  var chat = $(".chat-utente[data-element='" + dataElement + "']");
  var chatSelect = $('.chat-utente.container-flex');
  if (!userSelect.hasClass('select')) {
    // Quando inserisco un messaggio la chat si dispone in alto
    userSelect.removeClass('not_select').addClass('select');
    contactSelect.removeClass('select').addClass('not_select');

    // Al click della chat corrispondente, si avrà in alto la foto profilo e informazioni
    info.removeClass('not-display').addClass('container-flex');
    infoSelect.removeClass('container-flex').addClass('not-display');

    chat.removeClass('not-display').addClass('container-flex');
    chatSelect.removeClass('container-flex').addClass('not-display');
  }
}

function toggleOption(userSelect) {
  var optionTemplate = $('.template .option').clone();
  var optionBubble = $('.bubble .option');
  optionBubble.remove();
  if (!userSelect.siblings().hasClass('option')) {
    userSelect.parent().append(optionTemplate);
    // console.log('if');
  } else {
    optionBubble.remove();
    // console.log('else');
  }
}

// Funzione data per eliminare il messaggio selezionato
function deleteBubble(userSelect) {
  var message = userSelect.closest('.bubble');
  message.remove();
}

function getRandomInclus(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
