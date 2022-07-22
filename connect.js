let url = "https://maps.google.com/maps?q=Milaap%20Social%20Ventures%20India%20Pvt.%20Ltd.%20ClayWorks%20Create%20%E2%80%93%20building,11th%20KM%20Create%20Campus,%20Arakere%20Bannerghatta%20Rd,%20Bangalore,%20Karnataka,%20India%20560076&t=&z=13&ie=UTF8&iwloc=&output=embed"
  
 let container = document.getElementById("container") ;
 let iframe =document.getElementById("gmap_canvas")
    iframe.src=url;

 container.append(iframe);