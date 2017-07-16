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

var counter = 2

$(document).ready(function() {
  $('.option').click(function(event) {
    var thisclass = this.className.slice(0, -7)
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
    },500);
    setTimeout(function() {
      $('.message').last().after(
        $('<div/>')
        .addClass('alienmessage')
        .html("<img class='alienprofile' src='https://media.giphy.com/media/r9u2BEXZUzGo/giphy.gif'>")
        .prepend("<div class='alienchatbox' id='" + counter + "'></div")
      );
      var aliencontent = 'ARGH! HUMANS MUST DIE!'
      $('#'+counter).append(aliencontent);
      counter = counter + 1
    },2000);
    event.preventDefault();
  });
});
