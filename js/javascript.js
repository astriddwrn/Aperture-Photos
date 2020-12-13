// FORM CONTACT US
var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
var formatEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function kirim(){
    var nameValidation=0;
    if(nname.value.match(letters)){
        nameValidation=1;
    }

    var emailValidation=0;
    if(eemail.value.match(formatEmail)){
        emailValidation=1;
    }

    if(nname.value=="" || eemail.value=="" || pphone.value=="" || mmessage.value==""){
        alert("Please fill out every fields.")
    }
    else if(nameValidation==0){
        alert("Name is not valid.")
        nname.focus();
    }
    else if(emailValidation==0){
        alert("Email is not valid.")
        eemail.focus();
    }
    else if(isNaN(pphone.value)){
        alert("Phone number is not valid.")
        pphone.focus();
    }
    else{
        nname.value="";
        eemail.value="";
        pphone.value="";
        mmessage.value="";
        alert("Your form has been submitted.");
    }
}

$("[href=#"+1+"]").addClass('active');

$(document).ready(function(){
    // $sections incleudes all of the container divs that relate to menu items.
    var $sections = $('.parent');
    
    // The user scrolls
    $(window).scroll(function(){
      
      // currentScroll is the number of pixels the window has been scrolled
      var currentScroll = $(this).scrollTop();
      
      // $currentSection is somewhere to place the section we must be looking at
      var $currentSection
      
      // We check the position of each of the divs compared to the windows scroll positon
      $sections.each(function(){
        // divPosition is the position down the page in px of the current section we are testing      
        var divPosition = $(this).offset().top;
        
        // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
        // the -1 is so that it includes the div 1px before the div leave the top of the window.
        if( divPosition - 1 < currentScroll ){
          // We have either read the section or are currently reading the section so we'll call it our current section
          $currentSection = $(this);
          
          // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        }
        
        // This is the bit of code that uses the currentSection as its source of ID
        var id = $currentSection.attr('id');
          $('a').removeClass('active');
          $("[href=#"+id+"]").addClass('active');
        
      })
  
    });

    $("#menuContainer").click(function(){
        $("#list").toggle(1000);
      });

    $("li a").click(function(){
        $("#list").hide(1000);
    })

  });

 