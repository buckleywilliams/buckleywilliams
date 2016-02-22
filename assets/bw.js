var elem = document.querySelector('.projects');

imagesLoaded( elem, function() {
  var iso = new Isotope( elem, {
    itemSelector: '.project',
    layoutMode: 'masonry'
  });
});

