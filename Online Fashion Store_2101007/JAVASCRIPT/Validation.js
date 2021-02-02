function validate()
    {
      if (document.Loginpage.Firstname.value =="")
        {
          alert("* Please Enter Firstname *");
          return false;
        }
 
      if (document.Loginpage.Lastname.value =="")
        {
          alert("* Please Enter Lastname *");
          return false;
        }

       if (document.Loginpage.Email.value =="")
        {
          alert("* Please Enter Email Address *");
          return false;
        }

        if (document.Loginpage.Password.value =="")
        {
          alert("* Please Enter Password *");
          return false;
        }

      if (document.Loginpage.phone.value =="")
        {
          alert("* Please Enter Contact No*");
          return false;
        }
          alert("* Sucessfully Signup *")
 
    }