class fundraiser
{
    constructor(s,n,m,mn)
    {
        this.section = s
        this.name = n
        this.mail = m
        this.number = mn
    }
}

function logoclick()
{
    window.location.href = "fundraiser.html"
}
let fr_selection ="Medical"
function main(e)
{
    e.preventDefault()
    let number =document.getElementById("fr_phonenum").value

    let wrong = document.getElementById("popwrong")
    wrong.style.display = "none"
    let mob = number
    alert("otp is send to "+mob)
    let overlay = document.getElementById("overlay")
    overlay.style.display = "block"
    popinput.classList.add("open-popinput")

}

let select_div1 = document.getElementById("fr_Medical")
let select_div1_text = document.getElementById("fr_cause_medical_p")
let select_div2 = document.getElementById("fr_Education")
let select_div2_text = document.getElementById("fr_cause_education_p")
let select_div3 = document.getElementById("fr_Memorial")
let select_div3_text = document.getElementById("fr_cause_memorial_p")
let select_div4 = document.getElementById("fr_Others")
let select_div4_text = document.getElementById("fr_cause_other_p")


function d_medical()
{

    fr_selection = "medical"
    select_div2.style.backgroundColor = "white"
    select_div2_text.style.color = "black"
    select_div3.style.backgroundColor = "white"
    select_div3_text.style.color = "black"
    select_div4.style.backgroundColor = "white"
    select_div4_text.style.color = "black"
    let div_medical = document.getElementById("fr_Medical")
    div_medical.style.backgroundColor = "#691a47"
    let text = document.getElementById("fr_cause_medical_p")
    text.style.color = "white"
    let toptext = document.getElementById("fr_cause_text")
    toptext.innerText = "Medical"
    
}
function education()
{
    fr_selection = "education"
    select_div1.style.backgroundColor = "white"
    select_div1_text.style.color = "black"
    select_div3.style.backgroundColor = "white"
    select_div3_text.style.color = "black"
    select_div4.style.backgroundColor = "white"
    select_div4_text.style.color = "black"
    let div_education = document.getElementById("fr_Education")
    div_education.style.backgroundColor = "#691a47"
    let text2 = document.getElementById("fr_cause_education_p")
    text2.style.color = "white"
    let toptext2 = document.getElementById("fr_cause_text")
    toptext2.innerText = "Education"
}
function memorial()
{
    fr_selection = "memorial"
    select_div1.style.backgroundColor = "white"
    select_div1_text.style.color = "black"
    select_div2.style.backgroundColor = "white"
    select_div2_text.style.color = "black"
    select_div4.style.backgroundColor = "white"
    select_div4_text.style.color = "black"
    let div_memorial = document.getElementById("fr_Memorial")
    div_memorial.style.backgroundColor = "#691a47"
    let text3 = document.getElementById("fr_cause_memorial_p")
    text3.style.color = "white"
    let toptext3 = document.getElementById("fr_cause_text")
    toptext3.innerText = "Memorial"

}
function other()
{
    fr_selection = "other"
    select_div1.style.backgroundColor = "white"
    select_div1_text.style.color = "black"
    select_div3.style.backgroundColor = "white"
    select_div3_text.style.color = "black"
    select_div2.style.backgroundColor = "white"
    select_div2_text.style.color = "black"

    let div_other = document.getElementById("fr_Others")
    div_other.style.backgroundColor = "#691a47"
    let text4 = document.getElementById("fr_cause_other_p")
    text4.style.color = "white"
    let toptext4 = document.getElementById("fr_cause_text")
    toptext4.innerText = "Other"
}








function checkotp(e)
{
    e.preventDefault()
    let otpinput = document.getElementById("otpinput").value
    console.log("checkotp:",otpinput)
    if(otpinput === "1234")
    {
        popcorrect()
    }
    else
    {
        popwrong()
    }
}

function popcorrect()
{
    step1complete()
    popinput.classList.remove("open-popinput");
    let correct = document.getElementById("popcorrect")
    correct.style.display = "block"
}

function popwrong()
{
    popinput.classList.remove("open-popinput")
    let wrong = document.getElementById("popwrong")
    wrong.style.display = "block"
    
}


function step1complete()
{
    let name = document.getElementById("fr_name").value
    let mail = document.getElementById("fr_email").value
    let number =+document.getElementById("fr_phonenum").value

    let data = new fundraiser(fr_selection,name,mail,number)

    dataarr = []
    dataarr.push(data)
    localStorage.setItem("step1data",JSON.stringify(dataarr))
}

function nextstep(e)
{
    e.preventDefault()
    window.location.href="fundraiserstep2.html"
}