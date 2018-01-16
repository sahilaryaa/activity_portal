function goBack()
{
  window.history.back();
}
function goTo()
{
  window.history.go(-1);
}
function goForward()
{
  window.history.forward();
}

function validate()
{
  var name=document.getElementById("ename").value;
  var password=document.getElementById("pwd").value;
  var pattern="[a-z0-9,%_+-]+@.com";
  

  if(name=='Sahil@gmail.com' && password=='arya')
  { alert("Hi " + name +"Welcome!!");
    window.location="menu.html";}
    else if(name!=pattern)
      {alert("Enter in something@com format");
        window.location="portal.html";}

}
function passwordvalid()
{
  var password1=document.getElementById("pwd").value;
  var password2=document.getElementById("pass").value;

  if(password1==password2)
  {
    alert("Succesfully Signed Up!");
    window.location="menu.html";
  }
  else
  {
    alert("Passwords don't match!");
    window.location="portalabout.html";
  }
}
