class causedetails
{
    constructor(title,img1,img2,img3,img4,fund,crename,story,frmurl,location)
    {
        this.name = title 
        this.image1 = img1 
        this.image2 = img2 
        this.image3 = img3 
        this.image3 = img4
        this.price = fund
        this.create_by = crename
        this.description = story 
        this.formurl = frmurl
        this.location = location
    }
}

function main(e)
{
    e.preventDefault()
    let title = document.getElementById("fr_s3_title").value 
    let image1 = document.getElementById("fr_s3_img1").value 
    let image2 = document.getElementById("fr_s3_img2").value 
    let image3 = document.getElementById("fr_s3_img3").value 
    let image4 = document.getElementById("fr_s3_img4").value 
    let fund = +document.getElementById("fr_s3_fund").value 
    let story = document.getElementById("fr_s3_story").value
    let name = document.getElementById("fr_s3_name").value
    let form = document.getElementById("fr_s3_form").value
    let location = document.getElementById("fr_s3_location").value
    let data = new causedetails(title,image1,image2,image3,image4,fund,name,story,form,location)
    localStorage.setItem("causedata",JSON.stringify(data))

    alert("Step 3 completed")
    window.location.href = "fundraiserstep4.html"
}