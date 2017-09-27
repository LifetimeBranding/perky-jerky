var pj, p

pj = {

  init: function() {
    p = this;
    this.bindActions();
  },

  bindActions: function() {

    // NAVIGATION HOVER EFFECTS

    // Shop
    $('a#header-shop').mouseenter(function()
    {
        $('#shop-modal').removeClass('d-none');
    }).mouseleave(function()
    {
      $('#shop-modal').addClass('d-none');
    })

    // Community
    $('a#header-community').mouseenter(function()
    {
        $('#community-modal').removeClass('d-none');
    }).mouseleave(function()
    {
      $('#community-modal').addClass('d-none');
    })
  },

}

$(function(){
  pj.init();
});