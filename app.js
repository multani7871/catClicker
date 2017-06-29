$(document).ready(function() {

  let clicks1 = 0;
  $('.cat1').click(function() {
    clicks1++;
    $(this).children().text(clicks1);
  });

  let clicks2 = 0;
  $('.cat2').click(function() {
    clicks2++;
    $(this).children().text(clicks2);
  });

});


// TODO: store the cats in an object (catName, catImage, catClickCount);
