var weddingVideo1 = document.getElementById('weddingVid1')
var weddingVideo2 = document.getElementById('weddingVid2')
var weddingVideo3 = document.getElementById('weddingVid3')
var weddingButton1 = document.getElementById('button1')
var weddingButton2 = document.getElementById('button2')
var weddingButton3 = document.getElementById('button3')

weddingButton1.addEventListener("click", displayWedding1)
weddingButton2.addEventListener("click", displayWedding2)
weddingButton3.addEventListener("click", displayWedding3)

var homeLink = document.getElementById('homeLink')
var packagesLink = document.getElementById('packagesLink')
var vendorsLink = document.getElementById('vendorsLink')
var contactLink = document.getElementById('contactLink')
var homeLink2 = document.getElementById('homeLink2')
var packagesLink2 = document.getElementById('packagesLink2')
var vendorsLink2 = document.getElementById('vendorsLink2')
var contactLink2 = document.getElementById('contactLink2')

homeLink.addEventListener("click", goToHome)
packagesLink.addEventListener("click", goToPackages)
vendorsLink.addEventListener("click", goToVendors)
contactLink.addEventListener("click", goToContact)
homeLink2.addEventListener("click", goToHome)
packagesLink2.addEventListener("click", goToPackages)
vendorsLink2.addEventListener("click", goToVendors)
contactLink2.addEventListener("click", goToContact)


function goToHome(){
  window.location.href = 'flackProds/index.html'
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
function displayWedding1(){
  $(weddingVideo1).removeClass("noDisplay")
  $(weddingVideo2).addClass("noDisplay")
  $(weddingVideo3).addClass("noDisplay")
}

function displayWedding2(){
  $(weddingVideo1).addClass("noDisplay")
  $(weddingVideo2).removeClass("noDisplay")
  $(weddingVideo3).addClass("noDisplay")
}

function displayWedding3(){
  $(weddingVideo1).addClass("noDisplay")
  $(weddingVideo2).addClass("noDisplay")
  $(weddingVideo3).removeClass("noDisplay")
}

$(window).scroll(function () {
   $('#landscape').css({
      'top' : ($(this).scrollTop()/6)+"px"
   });
});
