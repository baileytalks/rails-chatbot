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

$(document).ready(function() {
  $('.first').click(function(event) {
    setTimeout(function() {
      var content = $('.first').html();
      $('.alienmessage').after(
        $('<div/>')
        .addClass('message')
        .html("<img class='profile' src='https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png'>")
        .prepend("<div class='chatbox'></div")
      );
      $('.chatbox').append(content);
    },500);
    setTimeout(function() {
      $('.message').after(
        $('<div/>')
        .addClass('alienmessage')
        .html("<img class='alienprofile' src='https://media.giphy.com/media/r9u2BEXZUzGo/giphy.gif'>")
        .prepend("<div class='alienchatbox'></div")
      );
    },2000);
    event.preventDefault();
  });
});

$(document).ready(function() {
  $('.second').click(function(event) {
    setTimeout(function() {
      var content = $('.second').html();
      $('.alienmessage').after(
        $('<div/>')
        .addClass('message')
        .html("<img class='profile' src='https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png'>")
        .prepend("<div class='chatbox'></div")
      );
      $('.chatbox').append(content);
    },500);
    setTimeout(function() {
      $('.message').after(
        $('<div/>')
        .addClass('alienmessage')
        .html("<img class='alienprofile' src='https://media.giphy.com/media/r9u2BEXZUzGo/giphy.gif'>")
        .prepend("<div class='alienchatbox'></div")
      );
    },2000);
    event.preventDefault();
  });
});

$(document).ready(function() {
  $('.third').click(function(event) {
    setTimeout(function() {
      var content = $('.third').html();
      $('.alienmessage').after(
        $('<div/>')
        .addClass('message')
        .html("<img class='profile' src='https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png'>")
        .prepend("<div class='chatbox'></div")
      );
      $('.chatbox').append(content);
    },500);
    setTimeout(function() {
      $('.message').after(
        $('<div/>')
        .addClass('alienmessage')
        .html("<img class='alienprofile' src='https://media.giphy.com/media/r9u2BEXZUzGo/giphy.gif'>")
        .prepend("<div class='alienchatbox'></div")
      );
    },2000);
    event.preventDefault();
  });
});
