function Pro(n,e,p){
    this.name=n;
    // this.contact_no=c;
    this.email=e;
    this.password=p;
    }
    
    
    
    let arr=JSON.parse(localStorage.getItem("details"))||[];
    function create(event){
    event.preventDefault()
    
    
     let form=document.getElementById("form");
    let name=form.name.value;
    // let contact=form.contact_no.value;
    let email=form.email.value;
    let password=form.password.value;
    let s1=new Pro(name,email,password)
    
    arr.push(s1)
    
    
    var flag=true;
    if(name=""||email==""||password==""){
    alert("Enter Required Data")
      flag=false;  
    
    }
    if(flag){
    alert("Signup Sucessful")
        localStorage.setItem("details",JSON.stringify(arr));
        window.location.href="login.html"
    }

    
    
    
    
    
    }
    