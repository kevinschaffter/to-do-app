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
//= require rails-ujs
//= require jquery-ui/widgets/sortable
//= require rails_sortable
//= require bootstrap-datepicker
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function(){

  console.log('document is ready', new Date());
  $('#task_name').focus();

  $(document).keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
      $('#submit_button').click();
      return false;  
    }
  });   

  $('li').click(function() {
      id = $(this).data("id")
      window.location.href='/tasks/'+ id
    });

  $(function() {
    $('.sortable').railsSortable();
  });

});