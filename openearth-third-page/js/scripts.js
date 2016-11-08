$(document).ready(function(){
   $(window.location.hash).modal('show');
   $('a[data-toggle="modal"]').click(function(){
      window.location.hash = $(this).attr('href');
   });
});