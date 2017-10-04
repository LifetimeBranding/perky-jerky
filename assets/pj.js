var pj, p
var pj_navmenu

// MAIN CONTROLLER
pj = {

  init: function() {
    p = this;
    this.bindActions();
  },

  bindActions: function() {
    //
  },
}

pj_navmenu = {
  toggleMenu: function() {
    let menuSlideOut = $('.navigation__main-menu--slide-out');
    let currentWidth = menuSlideOut.css('width');
    console.log(currentWidth);
    (currentWidth === "0px") ? menuSlideOut.css('width', '150px') : menuSlideOut.css('width', '0px');
  }
}

// DOCUMENT LOAD
$(function(){
  pj.init();
});