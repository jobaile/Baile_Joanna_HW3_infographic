(() => {
  //variables
  var TopBtn = document.querySelector('#backToTop');
  
  //functions
  //track scroll for back top
  function trackScroll() {
    console.log( 'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' + 'left: ' + (window.pageXOffset || document.documentElement.scrollLeft) );
    var scroll = window.pageYOffset;
    if (scroll > 40) {
      TopBtn.style.display = ("block");
    }
    if (scroll < 40) {
      TopBtn.style.display = ("none");
    }
  }

  //Back To Top function
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }

//listeners 
  window.addEventListener('scroll', trackScroll);
  TopBtn.addEventListener('click', backToTop);
	
})();