//Section 1 button color change start
var button = document.getElementById("button");
  button.onmouseover = function() {
    button.style.backgroundColor = "yellow";
  };
  button.onmouseout = function() {
    button.style.backgroundColor = "red";
  };

//Section 1 button color change end


// //section 2 coursel
// var images = document.querySelectorAll("#image1 img");
// var current = 0;

// function slider() {
//   for (var i = 0; i < images.length; i++) {
//     images[i].classList.remove("active");
//   }
//   current = (current + 1) % images.length;
//   images[current].classList.add("active");
// }

// setInterval(slider, 3000);

//Sectin 3 picture Zoom start
const img = document.getElementById("image2");
let zoom = 1;

img.addEventListener("mouseover", function () {
  zoom +=1;
  img.style.transform = `scale(${zoom})`;
});

img.addEventListener("mouseout", function () {
  zoom = 1;
  img.style.transform = `scale(${zoom})`;
});
//Sectin 3 picture Zoom end

//Section 4 filter the image gallery start 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//

// map start

function initMap() {
    var options ={
        center: { lat:37.7749,lng: -122.4194},
        zoom: 8,
      };
  map = new google.maps.Map(document.getElementById("map"),options );
}
// map end

//form js start
// function myfunc() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let zcode = document.getElementById("zcode").value;
//     let phone = document.getElementById("phone").value;
  
  
//     if (/^[a-zA-Z]/.test(name)) {
//         document.getElementById("first").innerHTML = " "
//     } else {
//         document.getElementById("first").innerHTML = "charecter should be letter";
      
//     }
  
  
//     if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
//         document.getElementById("second").innerHTML = " "
//     } else {
//         document.getElementById("second").innerHTML = "invalid email";
  
//     }
//     if (/^\[10000-90000]/.test(zcode)) {
//         document.getElementById("third").innerHTML = " "
//     } else {
//         document.getElementById("third").innerHTML = "invalid Zipcode";
  
//     }
  
//     if (/^\d{10}$/.test(phone)) {
//         document.getElementById("fourth").innerHTML = " "
//     } else {
//         document.getElementById("fourth").innerHTML = "phone number should be 10.";
//         return 
//     }
//   }
function myfunc(){
  
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var zipCode= document.getElementById("Zipcode").value;
  var phoneNumber =document.getElementById("Phone number").value;
  
  
  
  
  if (/^[a-zA-Z]{2,23}/.test(name)) {
      document.getElementById("none").innerHTML = " "
  } else {
      document.getElementById("none").innerHTML = "charecter should be 2 to 23";
    
  }
  
  
  if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
      document.getElementById("none1").innerHTML = " "
  } else {
      document.getElementById("none1").innerHTML = "invalid email";
  
  }
  if (/^[10000-90000]/.test(zipCode)) {
      document.getElementById("none2").innerHTML = " "
  } else {
      document.getElementById("none2").innerHTML = "invalid Zipcode";
  
  }
  
  if (/^\d{10}$/.test(phoneNumber)) {
      document.getElementById("none3").innerHTML = " "
  } else {
      document.getElementById("none3").innerHTML = "phone number should be 10.";
      return false;
  }
  
  
  
  };
// form end

//slide show start
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//slide show end

// page loader start

(function(loader) {

    window.addEventListener('beforeunload', function(e) {
      activateLoader();
    });
  
    window.addEventListener('load', function(e) {
      deactivateLoader();
    });
  
    function activateLoader() {
      loader.style.display = 'block';
      loader.style.opacity = 1;
    }
  
    function deactivateLoader() {
      /**
       * ensures that the loading animation plays for at least a second to give the
       * appearance of seamless loading on pages that execute and load extremely
       * quickly (i.e., intranet pages)
       */
      setTimeout(function() {
        deactivate();
      }, 1000);
  
      function deactivate() {
        loader.style.opacity = 0;
        loader.addEventListener('transitionend', function() {
          loader.style.display = 'none';
        }, false);
      }
    }
  
  })(document.querySelector('.o-page-loader'));

  // Page loader end


//   // Function to display the 403 error message
// function displayErrorMessage() {
//   try {
//     throw new Error("403 Forbidden");
//   } catch (error) {
//     console.error(error.message);
//    document.write("Error: " + error.message);
//   }
// }

// // Attach the error handling function to the click event of the navbar item
// document.getElementById("error").addEventListener("click", displayErrorMessage);

// // error end

//animation 
