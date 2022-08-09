function sendEmail(params){
  var name=document.getElementById("name")
   var email=document.getElementById("email")
  var message=document.getElementById("message")
  var tempParams={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value,

  };
 
  emailjs.send('service_gqj5avb','template_jls8vhy',tempParams,'rruPKbEwwgWT-UbOz')
  .then(function(res){
  alert("success",res.status)
  })

 name.value='';
 email.value='';
 message.value='';
}