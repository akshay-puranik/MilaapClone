let data=JSON.parse(localStorage.getItem("details"))||[];

function myfun(event){
  
event.preventDefault()
let flag=true;


let email=form.email.value;
if(email==""){
    alert("Please enter ur Email")
    flag=false;
}

let password=form.password.value;
if(password==""){
    alert("Please enter ur password")
    flag=false;
}
if( flag){
let result=false;
    for(let i=0;i<data.length;i++){
        let obj=data[i]
        if(obj.email==email && obj.password==password){
            result=true;
    }
    
}
}
if(result){
    alert("Login Sucessful")

    window.location.href="index.html"
}
else if(flag){
    alert("Invalid Credtials")
}

}
