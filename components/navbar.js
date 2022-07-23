const export_navbar = () => {
  return `<div id="navbar_container">
    <div id="left_buttons">
      <img class="to_be_padded_nav" id="logo_image" src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png">
      <div class="nav_element full_size">Home</div>
      <div class="nav_element full_size">Donate</div>
      <div class="nav_element full_size">Lend</div>
      <div class="nav_element full_size">Pricing</div>
      <div class="nav_element full_size">Contact us</div>
    </div>
    <div id="right_buttons">
      <div class="to_be_padded_nav" id="nav_start_fr_button">Start a fundraiser</div>
      <div class="to_be_padded_nav" id="user_logo">
        <img id="user_logo_sin" src="../assets/navbar_user_logo.png">
      </div>
      <div id="login_signup" class="viz">
        <a href="">Login</a>
        <a href="">Register</a>
      </div>
    </div>
  </div>`
}

export default export_navbar;