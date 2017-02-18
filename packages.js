var homeLink = document.getElementById('homeLink')
var packagesLink = document.getElementById('packagesLink')
var vendorsLink = document.getElementById('vendorsLink')

homeLink.addEventListener("click", goToHome)
packagesLink.addEventListener("click", goToPackages)
vendorsLink.addEventListener("click", goToVendors)

function goToHome(){
  window.location.href = '/index.html'
}
function goToPackages(){
  window.location.href = 'flackProds/packages.html'
}
function goToVendors(){
  window.location.href = 'flackProds/vendors.html'
}
