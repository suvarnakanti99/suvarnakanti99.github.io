var visible = false;
function showOrHideEmail(){
  if (visible){
    document.getElementById('mailId').innerHTML="Find my Mail";
    visible=false;
  }
  else{
    var myEmail="<a href='mailto:ruthviksuvarnakanti" +"@"+
                "gmail.com'>ruthviksuvarnakanti"+"@"+"gmail.com</a>";
    document.getElementById('mailId').innerHTML=myEmail;
    visible= true;
  }
}
