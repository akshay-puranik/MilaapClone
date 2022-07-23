let obj = {
  create_by: "Manoshi Dehingia",
  description: "[All the contributions shall be used for Medicines, Doctors & Logistics for On-Site Medical/Health relief camps across affected areas in different districts of Assam, India.]  Assam is facing one of the worst Floods and accompanying Landslides in history. A large part of the state has come to a standstill with thousands stranded in relief camps, awaiting help and basic amenities. To cater to the health of the people affected by the floods in the deteriorated areas of Assam, Health/Medical Camps are going to be organized.  To begin with, Health / Medical camps are going to start from Karbi Anglong (W) and Hojai and shall be extended to other affected districts in lower Assam (like Nagaon, Darrang, Barpeta, etc.) and Dima Hasao.  The rainfall and flood season is far from over, and hence the selection of places and methods deployed to organize such camps will be on a rolling basis as it comes.",
  discount: "On Every 100 rs you donate Milapp will contribute 10 rs on your behalf",
  image1: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1656590899/production/images/campaign/523508/WhatsApp_Image_2022-06-30_at_5.05.30_PM_seyrm4_1656590902.jpg",
  image2: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1656787035/production/images/campaign/523508/WhatsApp_Image_2022-07-01_at_12.12.06_AM_gyu2j8_1656787038.jpg",
  name: "Assam Needs Your Help To Set Up Medical Camps",
  price: "300000",
  donated: "290000"
}

let title = document.querySelector("#fr_title");
title.innerText = obj.name;

let slide = document.querySelector("#image_slideshow");
let img = document.createElement("img");
img.src = obj.image2

let counter = 0;
setInterval(() => {
  if (counter % 2 == 0) img.src = obj.image1;
  else img.src = obj.image2;
  counter++;
}, 3000)

slide.innerHTML = null;
slide.append(img);


let price = obj.price

main();

function main() {

  console.log("clicked")
  let donated = +obj.donated;


  let percentage = Math.floor((donated / price) * 100)
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
