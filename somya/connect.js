
  let url = "https://maps.google.com/maps?q=Milaap%20Social%20Ventures%20India%20Pvt.%20Ltd.%20ClayWorks%20Create%20%E2%80%93%20building,11th%20KM%20Create%20Campus,%20Arakere%20Bannerghatta%20Rd,%20Bangalore,%20Karnataka,%20India%20560076&t=&z=13&ie=UTF8&iwloc=&output=embed"
  
  let container = document.getElementById("container") ;
  let iframe =document.getElementById("gmap_canvas")
     iframe.src=url;

container.append(iframe)

document.getElementById("container").style.display="block";
document.getElementById("singapore").style.display="none";
document.getElementById("USA").style.display = "none";
document.getElementById("ind_gmap_logo").style.display = "block";
document.getElementById("sin_gmap_logo").style.display = "none";
document.getElementById("us_gmap_logo").style.display = "none";
document.getElementById("ind").style.color="#9C3353";




let india = () => {
   let url = "https://maps.google.com/maps?q=Milaap%20Social%20Ventures%20India%20Pvt.%20Ltd.%20ClayWorks%20Create%20%E2%80%93%20building,11th%20KM%20Create%20Campus,%20Arakere%20Bannerghatta%20Rd,%20Bangalore,%20Karnataka,%20India%20560076&t=&z=13&ie=UTF8&iwloc=&output=embed"
  
   let container = document.getElementById("container") ;
   let iframe =document.getElementById("gmap_canvas")
      iframe.src=url;

 container.append(iframe);

      document.getElementById("india_address").style.display="block";
      document.getElementById("container").style.display="block";
      document.getElementById("singapore").style.display="none";
      document.getElementById("USA").style.display = "none";
      document.getElementById("ind_gmap_logo").style.display = "block";
      document.getElementById("sin_gmap_logo").style.display = "none";
      document.getElementById("us_gmap_logo").style.display = "none";
      document.getElementById("ind").style.color="#9C3353"
      document.getElementById("sin").style.color="grey"
      document.getElementById("us").style.color="grey"
 }

 let singapore = () => {
   document.getElementById("india_address").style.display="none";
   document.getElementById("container").style.display="none";
   document.getElementById("singapore").style.display="block";
   document.getElementById("USA").style.display = "none";
   document.getElementById("ind_gmap_logo").style.display = "none";
   document.getElementById("sin_gmap_logo").style.display = "block";
   document.getElementById("us_gmap_logo").style.display = "none";
   document.getElementById("sin").style.color="#9C3353"
   document.getElementById("us").style.color="grey"
   document.getElementById("ind").style.color="grey"
 }

 let US = () => {
   document.getElementById("india_address").style.display="none";
   document.getElementById("container").style.display="none";
   document.getElementById("singapore").style.display="none";
   document.getElementById("USA").style.display = "block";
   document.getElementById("ind_gmap_logo").style.display = "none";
   document.getElementById("sin_gmap_logo").style.display = "none";
   document.getElementById("us_gmap_logo").style.display = "block";
   document.getElementById("us").style.color="#9C3353"
   document.getElementById("ind").style.color="grey"
   document.getElementById("sin").style.color="grey"
 }

 let suggestion = () => {
  document.getElementById("form").style.display="none";
  document.getElementById("confirm").style.display="block";
 }

