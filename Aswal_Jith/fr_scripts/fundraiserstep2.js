let fr_type = "Myself"
function ben_type()
{
    fr_type = document.getElementById("ben_selection").value
    if(fr_type == "Myself")
    {
        let formselct1 = document.getElementById("myself_form")
        formselct1.style.display="block"
        let formselct2 = document.getElementById("individual_form")
        formselct2.style.display="none"
        let formselct3 = document.getElementById("group_form")
        formselct3.style.display="none"
    }
    if(fr_type == "Individual")
    {
        let formselct1 = document.getElementById("myself_form")
        formselct1.style.display="none"
        let formselct3 = document.getElementById("group_form")
        formselct3.style.display="none"
        let formselct2 = document.getElementById("individual_form")
        formselct2.style.display="block"
      
    }
    if(fr_type == "Group")
    {
        let formselct1 = document.getElementById("myself_form")
        formselct1.style.display="none"
        let formselct2 = document.getElementById("individual_form")
        formselct2.style.display="none"
        let formselct3 = document.getElementById("group_form")
        formselct3.style.display="block"
    }
}
class benificiarymydata
{
    constructor(d,n,a,r)
    {
        this.name = n
        this.displaypic = d 
        this.age = a 
        this.residence = r 
    }
}

class benificiaryinddata
{
    constructor(rel,relname,d,a,r,num)
    {
        this.relation = rel 
        this.relative_s_name=relname 
        this.displaypic = d 
        this.age = a 
        this.residence = r 
        this.beneficiary_s_number = num 
    }
}

class benificiarygrpdata
{
    constructor(dis,name,pos,loc,gnum,pnum)
    {
        this.displaypic = dis
        this.groupname = name
        this.position = pos
        this.location = loc
        this.personalnumber = pnum
        this.groupnumber = gnum
    }
}

function tostep3()
{
    if(fr_type == "Myself")
    {
        let dispic = document.getElementById("mydispic").value
        let name = document.getElementById("myname").value
        let age = document.getElementById("myage").value
        let reside = document.getElementById("myreside").value
        console.log(dispic)
        if(dispic==""|| name==""||age==""||reside=="")
        {
            alert("Please fill all the details")
        }
        else
        {
            let data = new benificiarymydata(dispic,name,age,reside)
            localStorage.setItem("beneficiarymydetails",JSON.stringify(data))
            alert("Step 2 Completed")
            window.location.href="fundraiserstep3.html"
        }
        
    }
    if(fr_type == "Individual")
    {
        let dispic = document.getElementById("inddispic").value
        let relation =  document.getElementById("indrelation").value
        let relativesname = document.getElementById("indrelname").value
        let age = document.getElementById("indage").value
        let reside = document.getElementById("indresid").value
        let num = document.getElementById("indnum").value
        
        if(dispic=="" || relation=="" || relativesname == "" || age =="" || reside=="" || num =="")
        {
            alert("Please fill all the details")
        }
        else
        {
            let data = new benificiaryinddata(relation,relativesname,dispic,age,reside,num)
            localStorage.setItem("beneficiaryinddetails",JSON.stringify(data))
            alert("Step 2 Completed")
            window.location.href="fundraiserstep3.html"
        }
        
    }
    if(fr_type == "Group")
    {
        let dispic = document.getElementById("grpdispic").value
        let position =  document.getElementById("grpposition").value
        let gname = document.getElementById("grpname").value
        let gcontact = document.getElementById("grporgnum").value
        let location = document.getElementById("grplocation").value
        let gpersonalnum = document.getElementById("grppernum").value
        
        if(dispic=="" || position=="" || gname=="" || gcontact=="" || location=="" || gpersonalnum=="")
        {
            alert("Please fill all the details")
        }
        else
        {
            let data = new benificiarygrpdata(dispic,gname,position,location,gpersonalnum,gcontact)
            localStorage.setItem("beneficiaryinddetails",JSON.stringify(data))
            alert("Step 2 Completed")
            window.location.href="fundraiserstep3.html"
        }
        
    }
}