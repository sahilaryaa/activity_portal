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
  var logname=document.getElementById("guest").value;

  if(name=='sahil' && password=='arya')
  { alert("Hi " +logname +"Welcome!!");
    window.location="menu.html";}
    else
      {alert("Enter valid credentials.");
    window.location="portal.html";}

}

function signup()
{
  alert("Succesfully signed up");
    window.location="portal.html";
}
