window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js

/*================ Theme Components ================*/
// =require custom/build/DataModel.js
// =require custom/build/ShowcaseCollectionComponent.js
// =require custom/build/InteractiveNavigationComponent.js

// Using mock data for now
var dataModel = new DataModel()

// Site Header
var interactiveNavigation = new InteractiveNavigationComponent('slide-out-navigation-menu', 'slide-out-navigation-toggle');

// TODO: Only initialize this on the homepage
var showcaseDropdown = new ShowcaseCollectionComponent('showcase-collection-dropdown', dataModel)

$(document).ready(function() {

  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Wrap videos in div to force responsive layout.
  slate.rte.wrapTable();
  slate.rte.iframeReset();

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }

  // Social Media Feed
(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/e474d585-e572-44d2-b0e1-eaa4167f.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();
  // HERO Carousel
  $('#hero').owlCarousel({
     items: 1,
     dots: true,
     loop: true,
     autoplay: true,
   });

  // Showcase Products Carousel
  $('#showcase').owlCarousel({
    items: 1,
    dots: true,
    responsive: {
      600: {
        items: 3,
      }
    }
  })
});