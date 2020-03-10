function Dropp() {
  document.getElementById("dropdownMenuButtonClick").classList.toggle('show.bs.dropdown');
};
window.onclick = function (event) {
  if (!event.target.match('dropdown-menu')) {
    var dropdown = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show.bs.dropdown')) {
        openDropdown.classList.remove('show.bs.dropdown');
      }
    }
  }
};
// selected elements
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

// sizing
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight * 0.1;
var headingSize = windowWidth * 0.1;

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight * 0.1;
  headingSize = windowWidth * 0.1;
  if (headingSize > windowHeight * 0.3) headingSize = windowHeight * 0.3;

  for (var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize + 'px';
    labels[i].style.height = fontSize + 'px';
    labels[i].style.marginTop = '-' + fontSize * 0.6 + 'px';
  }

  header.style.height = windowHeight + 'px';
  heading.style.fontSize = headingSize + 'px';
  heading.style.height = headingSize + 'px';
  heading.style.marginTop = '-' + headingSize * 0.6 + 'px';

}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0);
  if (closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

window.onload = resize;

function ChangeHeartColor() {
  var Color = document.getElementById("iconHeart")
  Color.className = "icon-heart-filled icon-pink"
};

// if () {
//   Color.className = "icon-heart-filled icon-pink"
// } else {
//   var ColorClean = document.getElementById("iconHeart")
//   ColorClean.className = "icon-heart icon-pink"
// };

function PickDate() {
  var x = document.getElementById("yourDate").value;
  document.getElementById("demo").innerHTML = x;
};

// function SpecialNote() {
//   var YourNote = document.getElementById('YourText').value;
//   document.getElementById('something').innerHTML = x;
// };

//toggle menu view>>OK   
function navMenu() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
};
//btn>>ERROR   
function slideBtn() {
  var btnRwd = document.getElementsById("btnShare");
  if (btnRwd.className === "btn_share") {
    btnRwd.className += "rwd";
  } else {
    btnRwd.className = "btn_share";
  }
};
(function () {
  var $body = document.body,
    $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

  if (typeof $menu_trigger !== 'undefined') {
    $menu_trigger.addEventListener('click', function () {
      $body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
    });
  }

}).call(this);

$(".menu-toggle").on('click', function () {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});