let form = document.querySelector("#donation_form_complete").addEventListener("submit", () => {
  event.preventDefault();
  
  var donor_data = {}
  
  donor_data.amount = document.querySelector("#donation_amount").value;
  donor_data.name = document.querySelector("#donor_name").value;
  donor_data.tip = document.querySelector("#donation_tip").value;
  donor_data.contact = document.querySelector("#donor_country").value + " " + document.querySelector("#donor_mobile_number").value;
  donor_data.email = document.querySelector("#donor_email").value;
  
  console.log(donor_data);

  let amount = +donor_data.amount + +donor_data.tip;

  console.log(amount)
})