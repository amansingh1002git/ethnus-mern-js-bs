function validate() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rpassword = document.getElementById("rpassword");
    var age = document.getElementById("age");
    var pnumber = document.getElementById("pnumber");
    var address = document.getElementById("address");
    var state = document.getElementById("state");

    if(fname.value.trim()== "" ||lname.value== "" || email.value== ""||password.value< 8||rpassword.value== password.value|| pnumber.value<10 ||address.value== "" ||age.value== "" ||state.value== "" ){
        document.getElementById("validfname").style.visibility = "visible";
        document.getElementById("validlname").style.visibility = "visible";
        document.getElementById("validemail").style.visibility = "visible";
        document.getElementById("validrpassword").style.visibility = "visible";
        document.getElementById("validage").style.visibility = "visible";
        document.getElementById("validpnumber").style.visibility = "visible";
        document.getElementById("validaddress").style.visibility = "visible";
        document.getElementById("validstate").style.visibility = "visible";
        
        

        return false;
    }
   else{
      return true;
    }
}    