(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  function validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var website = document.getElementById("website");
    var message = document.getElementById("message");

    if(name.value== "" || email.value== ""||website.value== ""||message.value== ""){
        document.getElementById("validName").style.visibility = "visible";
        document.getElementById("validEmail").style.visibility = "visible";
        document.getElementById("validWebsite").style.visibility = "visible";
        document.getElementById("validMessage").style.visibility = "visible";
        name.style.border = "solid 3px red";
        email.style.border = "solid 3px red";
        website.style.border = "solid 3px red";
        message.style.border = "solid 3px red";

        return false;
    }
   else{
      return true;
    }
  }
