let key = localStorage.getItem("current_key");
let data = JSON.parse(localStorage.getItem(key)) || [];

// console.log(data)

if (data) {
  obj = data.filter((el) => {
    return el.id == key;
  })[0]
  // console.log(obj)
}
else {
  obj = {
    create_by: "Manoshi Dehingia",
    description: "[All the contributions shall be used for Medicines, Doctors & Logistics for On-Site Medical/Health relief camps across affected areas in different districts of Assam, India.]  Assam is facing one of the worst Floods and accompanying Landslides in history. A large part of the state has come to a standstill with thousands stranded in relief camps, awaiting help and basic amenities. To cater to the health of the people affected by the floods in the deteriorated areas of Assam, Health/Medical Camps are going to be organized.  To begin with, Health / Medical camps are going to start from Karbi Anglong (W) and Hojai and shall be extended to other affected districts in lower Assam (like Nagaon, Darrang, Barpeta, etc.) and Dima Hasao.  The rainfall and flood season is far from over, and hence the selection of places and methods deployed to organize such camps will be on a rolling basis as it comes.",
    discount: "On Every 100 rs you donate Milapp will contribute 10 rs on your behalf",
    image1: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1656590899/production/images/campaign/523508/WhatsApp_Image_2022-06-30_at_5.05.30_PM_seyrm4_1656590902.jpg",
    image2: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1656787035/production/images/campaign/523508/WhatsApp_Image_2022-07-01_at_12.12.06_AM_gyu2j8_1656787038.jpg",
    name: "Assam Needs Your Help To Set Up Medical Camps",
    price: "300000",
    collected: "220000"
  }
}

document.querySelector("#required_amount").innerText = obj.price;
document.querySelector("#target_amount").innerText = obj.price;

let title = document.querySelector("#fr_title");
title.innerText = obj.name;

let slide = document.querySelector("#image_slideshow");
let img = document.createElement("img");
img.src = obj.image2;

document.querySelector("#tale").innerText = obj.description;

let counter = 0;
setInterval(() => {
  if (counter % 2 == 0) img.src = obj.image1;
  else img.src = obj.image2;
  counter++;
}, 3000)

slide.innerHTML = null;
slide.append(img);


let price = obj.price

// main();

function main(obj) {

  console.log(obj)
  let donated = +obj.collected;
  console.log(donated)

  let pr = +obj.price.split(",").join("")
  console.log(pr)


  let percentage = Math.floor((donated / pr) * 100)
  console.log(percentage)
  let x = 156 - (156 * (percentage / 100))
  var style = document.createElement('style');
  // style.type = 'text/css';
  var keyFrames = `\
    @keyframes anim {\
        100% {\
            stroke-dashoffset: ${x};\
        }\
    }\
    `;
  style.innerHTML = keyFrames.replace(/x/, "0");
  document.getElementsByTagName('head')[0].appendChild(style);
}


document.querySelector("#donate_button").addEventListener("click", () => {
  document.querySelector("#overlay").style.display = "block";
})

document.querySelector("#close_button").addEventListener("click", () => {
  document.querySelector("#overlay").style.display = "none";
})


let amt = document.querySelector("#donation_amount");
let sub_button = document.querySelector("#confirm_donation");
// console.log(amt)
amt.addEventListener("input", () => {

  tip_amount = document.querySelector("#donation_tip");

  let current_tip = tip_amount.value * amt.value;
  document.querySelector("#opt_1").innerText = `${tip_amount.value*100}% (₹ ${current_tip}.00)`
  document.querySelector("#opt_2").innerText = `${document.querySelector("#opt_2").value * 100}% (₹ ${document.querySelector("#opt_2").value * amt.value}.00)`
  document.querySelector("#opt_3").innerText = `${document.querySelector("#opt_3").value * 100}% (₹ ${document.querySelector("#opt_3").value * amt.value}.00)`
  document.querySelector("#opt_4").innerText = `${document.querySelector("#opt_4").value * 100}% (₹ ${document.querySelector("#opt_4").value * amt.value}.00)`

  sub_button.value = `Continue to pay ₹ ${+amt.value + +current_tip}`
})

// var
var new_obj = {}
function tipChange() {
  var cur_total = +document.querySelector("#donation_tip").value * +amt.value + +amt.value;
  sub_button.value = `Continue to pay ₹ ${+cur_total}`
}

let form = document.querySelector("#donation_form_complete").addEventListener("submit", () => {
  event.preventDefault();

  var donor_data = {}

  donor_data.amount = amt.value;
  donor_data.name = document.querySelector("#donor_name").value;
  donor_data.tip = document.querySelector("#donation_tip").value;
  donor_data.contact = document.querySelector("#donor_country").value + " " + document.querySelector("#donor_mobile_number").value;
  donor_data.email = document.querySelector("#donor_email").value;
  
  // console.log(donor_data);

  let amount = +donor_data.amount + +donor_data.tip;

  data.forEach(function (el)
  {
    if (key == el.id)
    {
      let num = +el.collected;
      num += +amt.value;
      el.collected = num;
      new_obj = el;
    }
  })

  
  document.querySelector("#overlay").style.display = "none";
  
  localStorage.setItem("updated", JSON.stringify(data));
  main(new_obj);
  
  // console.log(amount)
})
