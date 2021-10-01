const submit=document.getElementById("email")
const emailText=document.getElementById("exampleInputEmail1")

emailText.addEventListener('keyup',function () {
    const input=emailText.value
    console.log(input);
    if( input.indexOf("@gmail.com")!=-1){
        submit.removeAttribute("disabled");
    }
    else{
     submit.setAttribute("disabled","true");
    }
 })

 document.getElementById("comment").addEventListener("dblclick",function () {
    document.getElementById("comment").style.backgroundColor="#6C757C"
     
 })
 