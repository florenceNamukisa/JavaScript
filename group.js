document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    const userName =document.getElementById('userName'). value;
    console.log('userName:', userName)
    const email = document.getElementById('email'). value;
    console.log("email:", email);
    const age = document.getElementById('age').value;
    console.log("age:",age);
    if(userName===""){
alert ('userName is required' )
return;
    }
    if(age > 1 || age < 100){
        alert('age must be between 1 and 100')
        return;
    }
 redirectToHomePage() 
})
function redirectToHomePage(){
    window.location.href="index.html"
}