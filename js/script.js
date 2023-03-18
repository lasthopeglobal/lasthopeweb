// jquery code
$(document).ready(function () {
  $(".sidenav").sidenav();
  $('select').formSelect();
  $('.modal').modal();
  // $('.timepicker').timepicker();
  // $('.datepicker').datepicker({
  //   autoClose: true,
  //   format: "dd/mm/yyyy",
  //   setDefaultDate: true,
  //   // firstDay: 1,
  // });

  $('input#first_name, input#middle_name,input#last_name,input#mobile_number,textarea#prayerreq ,textarea#address').characterCounter();

  $(".slider").slider({
    full_width: true,
    indicators: false,
    height: 500,
    interval: 4000
  });
  $(".dropdown-trigger").dropdown({ hover: false });

  $('.parallax').parallax();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
  });
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
  }

  $('.materialboxed').materialbox();

  //  for dark mode 
  $('.light-dark-mode').on('click', lightDarkMode);
  if(localStorage.getItem('dark-mode')){
      document.body.classList.add('dark-mode');
  }

});


//  for dark mode call function 
function lightDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if(element.classList.contains("dark-mode")){
      localStorage.setItem('dark-mode',true);
      M.toast({html: 'Dark Mode Enable!', classes: 'rounded'});
  } else {
      localStorage.removeItem('dark-mode');
      M.toast({html: 'Dark Mode Disable!', classes: 'rounded'});
  }
}


// $('.modal').modal();
// $('.collapsible').collapsible();  
// $('select').formSelect(); 
// $('.tabs').tabs();
// $('.datepicker').datepicker(); 
// $('.chips').chips();



// here: Javascript codes 

// function toggleModal() {
//     var instance = M.Modal.getInstance($("#modal3"));
//     instance.open();
// }


// Scroll To Top Button With Scroll Progress 
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#3f51b5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  // conic-gradient(rgb(63, 81, 181) 13%, rgb(215, 215, 215) 13%
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



// google translate 

function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}