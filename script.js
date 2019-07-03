dragElement(document.getElementById(("drag1")));
dragElement(document.getElementById(("drag2")));
dragElement(document.getElementById(("drag3")));

dragElement(document.getElementById(("drag4")));
dragElement(document.getElementById(("drag5")));
dragElement(document.getElementById(("drag6")));
dragElement(document.getElementById(("drag7")));
dragElement(document.getElementById(("drag8")));
dragElement(document.getElementById(("drag9")));
dragElement(document.getElementById(("contact")));
dragElement(document.getElementById(("request")));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  
  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    
    pauseEvent(e);
      function pauseEvent(e){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      e.cancelBubble=true;
      e.returnValue=false;
      return false;
      }
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

(function($) {
  
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
});

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var offset=(window_top_position + 300)

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if (element_top_position <= offset){
      $(".menu").addClass('in-view');
    } else {
      $(".menu").removeClass('in-view');
    }  
  }); 
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

//change menu
var $sec4 = $('.sec4');
var $window = $(window);

function checkmenu() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var offset=(window_top_position + 200)
  
  
  $.each($sec4, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    
    if (element_top_position <= offset){
      $("#ui").addClass('current');
      $("#print").removeClass('current');
      
    } if (element_top_position >= window_bottom_position){
      $("#ui").removeClass('current');
      $("#print").addClass('current');
      
    } if (element_bottom_position <= (window_top_position + 300)){
      $("#ui").removeClass('current');
      $("#digi").addClass('current');
    } else {
      $("#digi").removeClass('current');
    }
  }); 
};
$window.on('scroll resize', checkmenu);
$window.trigger('scroll');


var zindex = 1
$(document).ready(function () {
  $(".smalldiv").mousedown(function() {
  $(this).css("z-index",zindex);
  zindex++;
  });
  $(".talldiv").mousedown(function() {
  $(this).css("z-index",zindex);
  zindex++;
  });
  $(".z").mousedown(function() {
  $(this).css("z-index",zindex);
  zindex++;
  });
  if($(window).width() < 768) {
  $("#drag1").css({"top": "5px", "left":"10vw"});
  $("#drag2").css({"top": "450px", "left":"8vw"});
  $("#drag3").css({"top": "850px", "left":"2vw"});
  $("#drag4").css({"top": "1350px", "left":"15vw"});
  $("#drag5").css({"top": "10px", "left":"10vw"});
  $("#drag8").css({"top": "495px", "left":"5vw"});
  $("#drag10").css({"top": "780px", "left":"7vw"});
  $("#drag6").css({"top": "5px", "left":"5vw"});
  $("#drag7").css({"top": "280px", "left":"7vw"});
  $("#drag9").css({"top": "550px", "left":"2vw"});
  } else {
  $("#drag1").css({"top": "15vh", "left":"15vw"});
  $("#drag2").css({"top": "110vh", "left":"60vw"});
  $("#drag3").css({"top": "140vh", "left":"12vw"});
  $("#drag4").css({"top": "-5vh", "left":"60vw"});
  $("#drag5").css({"top": "0vh", "left":"10vw"});
  $("#drag8").css({"top": "120vh", "left":"10vw"});
  $("#drag10").css({"top":"15vh", "left":"55vw"});
  $("#drag6").css({"top": "10vh", "left":"7vw"});
  $("#drag7").css({"top": "-30vh", "left":"50vw"});
  $("#drag9").css({"top": "80vh", "left":"30vw"}); 
  };
  
});


$(document).ready(function () {
  $("#arrow").click(function() {
  $('html, body').animate({
    scrollTop: $("div.sec4").offset().top
  }, 1000);
  $("#print").addClass('current');
  $("#ui").removeClass('current');
  $("#digi").removeClass('current');
  });

  $("#print").click(function() {
  $('html, body').animate({
    scrollTop: $("div.sec3").offset().top
  }, 1000);
  $("#print").addClass('current');
  $("#ui").removeClass('current');
  $("#digi").removeClass('current');
  });
  
  $("#ui").click(function() {
  $('html, body').animate({
    scrollTop: $("div.sec4").offset().top
  }, 1000);
  $("#ui").addClass('current');
  $("#print").removeClass('current');
  $("#digi").removeClass('current');
  });
  
  
  $("#digi").click(function() {
  $('html, body').animate({
    scrollTop: $("div.sec5").offset().top
  }, 1000);
  $("#digi").addClass('current');
  $("#print").removeClass('current');
  $("#ui").removeClass('current');});
});

$("#1").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});;
  $("#drag1").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"});
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m1").addClass('show');
  $("#1").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});

$("#m1").click(function() {
   $(".menu").css("z-index", "999");
   $("#m1").removeClass('show');
   if ($(window).width() < 768) {
  $("#drag1").css({"top": "5vh", "left":"10vw", "position":"absolute"}).removeClass('fullscreen');
  } else {
  $("#drag1").css({ "position":"absolute"}).animate({"top": "15vh", "left":"15vw"}, 500).removeClass('fullscreen');  
  };
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');  
   $("#1").addClass('pointer');
   $('body,html').css('overflow-y','auto');

});

$("#2").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag2").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m2").addClass('show'); 
  $("#2").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m2").click(function() {
   $(".menu").css("z-index", "999");
   $("#m2").removeClass('show');
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#2").addClass('pointer');
   if ($(window).width() < 768) {
  $("#drag2").css({"top": "450px", "left":"8vw", "position":"absolute"}).removeClass('fullscreen');
  } else {
  $("#drag2").css({ "position":"absolute"}).animate({"top": "110vh", "left":"60vw"}, 500).removeClass('fullscreen'); 
  };
   $('body,html').css('overflow-y','auto');
});

$("#3").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"}); 
  $("#drag3").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"});
  $(".dst").addClass('display');
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m3").addClass('show'); 
  $("#3").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m3").click(function() {
   $(".menu").css("z-index", "999");
   $("#m3").removeClass('show'); 
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display'); 
   $("#3").addClass('pointer');
   if ($(window).width() < 768) {
  $("#drag3").css({"top": "850px", "left":"2vw", "position":"absolute"}).removeClass('fullscreen');
  } else {
  $("#drag3").css({ "position":"absolute"}).animate({"top": "140vh", "left":"12vw"}, 500).removeClass('fullscreen');
  };
   $('body,html').css('overflow-y','auto');
});

$("#4").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m4").addClass('show'); 
  $("#4").removeClass('pointer'); 
  $("#drag4").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"});
  $('body,html').css('overflow','hidden');
});
$("#m4").click(function() {
   $(".menu").css("z-index", "999");
   $("#m4").removeClass('show'); 
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display'); 
   $("#4").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag4").css({"top": "1350px", "left":"15vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag4").css({ "position":"absolute"}).animate({"top": "-5vh", "left":"60vw"}, 500).removeClass('fullscreen');  
   };
   $('body,html').css('overflow-y','auto');
});



$(".dst").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag5").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed", "opacity": "1"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  $("#drag3").css({"top": "850px", "left":"2vw", "position":"absolute"}).removeClass('fullscreen');
  } else {
  $(".desktop").addClass('display');
  $("#drag3").css({ "position":"absolute"}).animate({"top": "99vh", "left":"5vw"}, 500).removeClass('fullscreen');
  };
  $("#m5").addClass('show'); 
  $("#5").removeClass('pointer');
  
  $("#m3").removeClass('show'); 
  $("#3").addClass('pointer');
  
  $('body,html').css('overflow','hidden');

});

$("#5").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag5").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m5").addClass('show'); 
  $("#5").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m5").click(function() {
   $(".menu").css("z-index", "999");
   $("#m5").removeClass('show');
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#5").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag5").css({"top": "300px", "left":"5vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag5").css({ "position":"absolute"}).animate({"top": "0vh", "left":"10vw"}, 500).removeClass('fullscreen'); 
   };
   $('body,html').css('overflow-y','auto');
});

$("#6").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag6").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m6").addClass('show'); 
  $("#6").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m6").click(function() {
   $(".menu").css("z-index", "999");
   $("#m6").removeClass('show');
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#6").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag6").css({"top": "5px", "left":"5vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag6").css({ "position":"absolute"}).animate({"top": "10vh", "left":"7vw"}, 500).removeClass('fullscreen'); 
   };
   $('body,html').css('overflow-y','auto');
});

$("#7").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag7").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m7").addClass('show'); 
  $("#7").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m7").click(function() {
   $(".menu").css("z-index", "999");
   $("#m7").removeClass('show'); 
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#7").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag7").css({"top": "280px", "left":"15vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag7").css({ "position":"absolute"}).animate({"top": "-30vh", "left":"50vw"}, 500).removeClass('fullscreen');   
   };
   $('body,html').css('overflow-y','auto');
});

$("#8").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag8").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m8").addClass('show'); 
  $("#8").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m8").click(function() {
   $(".menu").css("z-index", "999");
   $("#m8").removeClass('show'); 
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#8").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag8").css({"top": "495px", "left":"5vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag8").css({ "position":"absolute"}).animate({"top": "120vh", "left":"10vw"}, 500).removeClass('fullscreen');
   };
   $('body,html').css('overflow-y','auto');
});

$("#9").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag9").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m9").addClass('show'); 
  $("#9").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m9").click(function() {
   $(".menu").css("z-index", "999");
   $("#m9").removeClass('show');
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#9").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag9").css({"top": "550px", "left":"2vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag9").css({ "position":"absolute"}).animate({"top": "80vh", "left":"30vw"}, 500).removeClass('fullscreen');   
   };
   $('body,html').css('overflow-y','auto');
});


$("#10").click(function() {
  $(".menu").removeClass('in-view').css({"z-index": "-1"});
  $("#drag10").addClass('fullscreen').css({"top": "0vh", "left":"0vw", "position":"fixed"}); 
  if($(window).width() < 768) {
  $(".mobile").addClass('display');
  } else {
  $(".desktop").addClass('display');
  };
  $("#m12").addClass('show'); 
  $("#10").removeClass('pointer');
  $('body,html').css('overflow','hidden');
});
$("#m12").click(function() {
   $(".menu").css("z-index", "999");
   $("#m12").removeClass('show');
   $(".desktop").removeClass('display');
   $(".mobile").removeClass('display');
   $("#10").addClass('pointer');
   if ($(window).width() < 768) {
   $("#drag10").css({"top": "775px", "left":"7vw", "position":"absolute"}).removeClass('fullscreen');
   } else {
   $("#drag10").css({ "position":"absolute"}).animate({"top":"15vh", "left":"55vw"}, 500).removeClass('fullscreen');   
   };
   $('body,html').css('overflow-y','auto');
});

$("#resumebutton").click(function() {
  $("#request").addClass('display'); 
  if ($(window).width() < 768) {
  $("#request").css({"top": "15vh", "left":"55vw", "position":"absolute"});
  } else {
  $("#request").css({"top": "15vh", "left":"55vw", "position":"absolute"}); 
  };
});

$("#m11").click(function() {
  $("#request").removeClass('display'); 
  // if ($(window).width() < 768) {
  // $("#request").css({"top": "30vh", "left":"55vw", "position":"absolute"});
  // } else {
  // $("#request").css({"top": "30vh", "left":"55vw", "position":"absolute"}); 
  // };
});

$("#contactbutton").click(function() {
  $("#contact").addClass('display');
  if ($(window).width() < 768) {
  $("#contact").css({"width":"98vw","top": "40vh", "left":"1vw", "position":"absolute"});
  $(".maillink").css({"padding":"5px"});
  } else {
  $("#contact").css({"top": "25vh", "left":"25vw", "position":"absolute"}); 
  };
});

$("#m10").click(function() {
  $("#contact").removeClass('display'); 
  // if ($(window).width() < 768) {
  // $("#contact").css({"top": "25vh", "left":"45vw", "position":"absolute"});
  // } else {
  // $("#contact").css({"top": "25vh", "left":"45vw", "position":"absolute"});
  // };
});

var copyEmailBtn = document.querySelector('.mailbutton');  
copyEmailBtn.addEventListener('click', function(event) {  
  var emailLink = document.querySelector('.maillink');  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('copied: ' + msg);  
  } catch(err) {  
    console.log('could not copy');  
  }  
  window.getSelection().removeAllRanges();  
});