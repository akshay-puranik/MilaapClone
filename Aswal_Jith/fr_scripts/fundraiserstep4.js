let sele = JSON.parse(localStorage.getItem("step1data"))
let sl = sele.section
let data = JSON.parse(localStorage.getItem("causedata"))

let tablebox = document.getElementById("tablebx")
let tblbdy = document.createElement("tbody")
let i = 1
for(let k in data)
{
    let trow = document.createElement("tr")
    let tr1 = document.createElement("th")
    tr1.classList = "tr1b"
    tr1.style.fontWeight="bolder"
    tr1.innerText = i

    let td1 = document.createElement("td")
    td1.classList="td1t"
    td1.innerText = k
    let td2 = document.createElement("td")
    td2.classList = "td2long"

    if(k =="image1" || k =="image2" || k =="image3" || k =="image4" || k =="formurl")
    {

        
        let image = document.createElement("img")
        image.classList = "verimg"
        image.src = data[k]
        td2.append(image)
    }
    else
    {
        td2.innerText = data[k]
    }
  

    trow.append(tr1,td1,td2)

    tblbdy.append(trow)
    i++
}

tablebox.append(tblbdy)

function verify(e)
{
    e.preventDefault()
    if(sl=="medical")
    {
        console.log(1)
        let meddata = JSON.parse(localStorage.getItem("medical"))||[]
        meddata.push(data)
        localStorage.setItem("medical",JSON.stringify(meddata))
    }

    if(sl=="education")
    {
        console.log(2)
        let eddata = JSON.parse(localStorage.getItem("education"))||[]
        eddata.push(data)
        localStorage.setItem("education",JSON.stringify(eddata))
    }

    if(sl=="memorial")
    {
        console.log(3)
        let memdata = JSON.parse(localStorage.getItem("memorial"))||[]
        memdata.push(data)
        localStorage.setItem("memorial",JSON.stringify(memdata))
    }

    if(sl=="other")
    {
        console.log(4)
        let otdata = JSON.parse(localStorage.getItem("other"))||[]
        otdata.push(data)
        localStorage.setItem("other",JSON.stringify(otdata))
    }

    let s = 0
    setInterval(function()
    {
        let text = document.getElementById("vertext")
        if(s==3)
        {
            text.innerText = "This might take few seconds"
        }
        if(s==6)
        {
            text.innerText = "Verification Completed"
            let img = document.getElementById("verificationimg")
            img.src = "https://media4.giphy.com/media/ibolLe3mOqHE3PQTtk/giphy.gif?cid=ecf05e47jh9w47gybilxwvzg882ro7t91kt8jqd4hiti74a1&rid=giphy.gif&ct=g"

        }

        s++
    },1000)

    let overlay = document.getElementById("overlay")
    overlay.style.display = "block"
    popinput.classList.add("open-popinput")

}

function tohome()
{
    window.location.href="../Landing page/Landing.html"
}

function tost1()
{
    window.location.href="./fundraiser.html"
}