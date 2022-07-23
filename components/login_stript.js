  var click_count = 0;
  document.querySelector("#user_logo_sin").addEventListener("click", () => {
    if (click_count % 2 == 0) document.querySelector("#login_signup").style.display = "block";
    else document.querySelector("#login_signup").style.display = "none";
    click_count++;
  })