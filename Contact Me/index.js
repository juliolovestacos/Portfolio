function ValidateForm(){

 var validFirstName = false;
 var validLastName = false;
 var validPhone = false;
 var validEmail = false;

  
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;

  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value


 
  
   /*********** VALIDATES FIRSTNAME******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >=20 ||  !myContact.firstname.value.match(letters))
 errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters are accepted</p>";
 else
 validFirstName = true; 
  
     /*********** VALIDATES LASTNAME******** */
 if (myContact.lastname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >=50 ||  !myContact.lastname.value.match(letters))
 errorMessages += "<p>The lastname must be less than 50 characters and it is required. Only letters are accepted</p>";
 else
 validLastName = true; 
  
      /*********** VALIDATES EMAIL******** */
 if (myContact.email.value==null ||
 myContact.email.value=== "" ||
!myContact.email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))

 errorMessages += "<p> Email Not Valid.</p>";
 else
 validEmail = true; 
    

   /*********** VALIDATES PHONE NUMBER******** */
 if (myContact.phone.value==null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 ||  
!myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted</p>";
 else
 validPhone = true; 
  

  

  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return ( validFirstName && validLastName && validPhone && validEmail) ;
}

