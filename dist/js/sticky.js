var stickEl = $('.sticky'),
  stickyElTop = stickEl.offset().top;

var sticky = function(){  
  var scrollTop = $(window).scrollTop();  
         
  if (stickyElTop < scrollTop+20) {   
      stickEl.addClass('is-fixed');  
  } else {  
      stickEl.removeClass('is-fixed');   
  }  
};
    
$(window).scroll(function() {
  sticky();
}); 