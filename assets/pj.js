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
  menuIcon: $('.navigation__main-menu--icon > img'),
  menuSlideOut: $('.navigation__main-menu--slide-out'),
  toggleMenu: function() {
    this.menuSlideOut.css('width') === "0px" ? this.open() : this.close();
  },

  open: function() {
    this.menuSlideOut.css('width', '100%');
    //this.menuIcon.attr('src', 'null.png');
  },

  close: function() {
    this.menuSlideOut.css('width', '0px');
  }
}

// DOCUMENT LOAD
$(function(){
  pj.init();
});

