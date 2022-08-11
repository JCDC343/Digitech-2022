

//Validating submit button for comment section
function validateForm() {
  let x = document.forms["myForm"]["comment_author"].value;
  let y = document.forms["myForm"]["comment"].value;
  if (x == "") {
    alert(myComments[1]);
    return false;
  }
  if (y == "") {
      alert(myComments[2]);
      return false;
    }
return sFunction();
}



