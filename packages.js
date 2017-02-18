var homeLink = document.getElementById('homeLink')
var packagesLink = document.getElementById('packagesLink')
var vendorsLink = document.getElementById('vendorsLink')

homeLink.addEventListener("click", goToHome)
packagesLink.addEventListener("click", goToPackages)
vendorsLink.addEventListener("click", goToVendors)

function goToHome(){
  window.location.href = '/'
}
function goToPackages(){
  window.location.href = '/flackProds/index.html/packages.html'
}
function goToVendors(){
  window.location.href = '/flackProds/index.html/vendors.html'
}
