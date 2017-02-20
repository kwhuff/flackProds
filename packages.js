var homeLink = document.getElementById('homeLink')
var packagesLink = document.getElementById('packagesLink')
var vendorsLink = document.getElementById('vendorsLink')
var contactLink = document.getElementById('contactLink')

homeLink.addEventListener("click", goToHome)
packagesLink.addEventListener("click", goToPackages)
vendorsLink.addEventListener("click", goToVendors)
contactLink.addEventListener("click", goToContact)

function goToHome(){
  window.location.href = 'index.html'
}
function goToPackages(){
  window.location.href = 'packages.html'
}
function goToVendors(){
  window.location.href = 'vendors.html'
}
function goToContact(){
  window.location.href = 'contact.html'
}
