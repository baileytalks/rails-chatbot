// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

// A counter is required so that the chat messages appear sequential, and so
// that the game doesn't end too soon
var counter = 2

// While this file does not talk to the DB, here is an array of fake DB records
var responsearray = [
  {threat: 3, response: 'ARGH! HUMANS MUST DIE!'},
  {threat: 1, response: 'Aaah, OK then. We come in peace 🌸'},
  {threat: 2, response: 'I WANT TO SEE YOUR LEADER!'},
  {threat: 2, response: 'ARE HUMANS TASTY THOUGH? WE ARE HUNGRY!'},
  {threat: 2, response: 'WE HEARD THERE WAS OIL FOR THE TAKING!'},
  {threat: 2, response: 'WE DO NOT LIKE IT HERE!'},
  {threat: 2, response: 'WHY IS THE AIR SO CLEAN! ARGH!'}
]

$(document).ready(function() {
  $('.option').click(function(event) {
    // Hide the chat options while the alien is responding
    $('.selector').hide();

    // Find which of the options were selected
    var thisclass = this.className.slice(0, -7)

    // The human chat appears slightly delayed
    setTimeout(function() {
      var content = $('.' + thisclass).html();
      $('.alienmessage').last().after(
        $('<div/>')
        .addClass('message')
        .html("<img class='profile' src='https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png'>")
        .prepend("<div class='chatbox' id='" + counter + "'></div")
      );
      $('#'+counter).append(content);
      counter = counter + 1
    },100);

    // If it's the first 2 turns, the game cannot end since the threat level is
    // medium only
    // Alien response is currently selected at random otherwise
    if (counter < 6) {
      var array = responsearray.slice(2, -1);
      var aliencontent = array[Math.floor(Math.random()*array.length)];
    } else {
      var aliencontent = responsearray[Math.floor(Math.random()*responsearray.length)];
    }

    // When the alien response is used, it is deleted so it will not show up again
    for (var i = responsearray.length - 1; i >= 0; i--) {
      if (responsearray[i] === aliencontent) {
       responsearray.splice(i, 1);
      }
    }

    // The alien's message is further delayed
    setTimeout(function() {
      $('.message').last().after(
        $('<div/>')
        .addClass('alienmessage')
        .html("<img class='alienprofile' src='https://media.giphy.com/media/r9u2BEXZUzGo/giphy.gif'>")
        .prepend("<div class='alienchatbox' id='" + counter + "'></div")
      );
      $('#'+counter).append(aliencontent.response);
      counter = counter + 1
    },1200);

    // If the threat level of the alien response is too high or low, the human
    // user sees a message and the game ends
    setTimeout(function() {
      if ( aliencontent.threat === 3) {
        alert('Oh no! The alien has destroyed planet Earth and all its inhabitants 😰')
        location.reload();
      } else if ( aliencontent.threat === 1) {
        alert("Thank goodness! You have schmoozed the alien overload and they've agreed to be our friends! 😊")
        location.reload();
      }
      // If the game hasn't ended, the selection of chat options comes back
      $('.selector').show();
    },2000);

    // This prevents the page from reloading
    event.preventDefault();
  });
});
