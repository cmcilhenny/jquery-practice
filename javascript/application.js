//
$(document).ready(function() {
  var contacts = [];

  $('#addContact').click(function(e){
      e.preventDefault();
      var name=$('#name').val(),
         phone=$('#phone').val(),
         email=$('#email').val(),
         image=$('#image').val();
      if(!name.length) {
        alert("Please enter a name.");
      }
      else {
      $('.inputField').val("");
      addContact(name, phone, email, image);
      addImage(image);
    };
  });
  var addContact = function(name, phone, email) {
    var newContact = "<li>" + name + "<br>" + phone + "<br>" + email + "<br>" + "<span class='delete'>Delete Contact?</span></li>";
    $(newContact).hide().appendTo('ul').fadeIn(500);
  };          
  var addImage = function(image) {
    var newImage = '<img src="' + image + '">'
    $(newImage).hide().prependTo('li').fadeIn(500);
  };
  
  $('ul').on('click', 'span', function(){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    }); 
  });
 });