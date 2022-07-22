let amt = document.querySelector("#donation_amount");
amt.addEventListener("input", () => {
  let sub_button = document.querySelector("#confirm_donation");
  
  tip_amount = document.querySelector("#donation_tip");
  
  let current_tip = tip_amount.value * amt.value;
  document.querySelector("#opt_1").innerText = `${tip_amount.value*100}% (₹ ${current_tip}.00)`
  document.querySelector("#opt_2").innerText = `${document.querySelector("#opt_2").value * 100}% (₹ ${document.querySelector("#opt_2").value * amt.value}.00)`
  document.querySelector("#opt_3").innerText = `${document.querySelector("#opt_3").value * 100}% (₹ ${document.querySelector("#opt_3").value * amt.value}.00)`
  document.querySelector("#opt_4").innerText = `${document.querySelector("#opt_4").value * 100}% (₹ ${document.querySelector("#opt_4").value * amt.value}.00)`
  
  
  tip_amount.addEventListener("change", () => {
    current_tip = tip_amount.value * amt.value;
    
    console.log(current_tip)
  })
  
  sub_button.value = `Continue to pay ₹ ${amt.value}`
})

let form = document.querySelector("#donation_form_complete").addEventListener("submit", () => {
  event.preventDefault();
  
  var donor_data = {}
  
  donor_data.amount = amt.value;
  donor_data.name = document.querySelector("#donor_name").value;
  donor_data.tip = document.querySelector("#donation_tip").value;
  donor_data.contact = document.querySelector("#donor_country").value + " " + document.querySelector("#donor_mobile_number").value;
  donor_data.email = document.querySelector("#donor_email").value;
  
  console.log(donor_data);

  let amount = +donor_data.amount + +donor_data.tip;

  console.log(amount)
})