$(document).ready(function(){
  console.log('style123');
  $(".style123 li a .section-title").each(function(index, elem) {
    console.log(index);
    console.log(elem)
    // &#11044 filled circle
    // &#9312; &#9313; &#9314; (1) (2) (3)
    $(elem).before("<span class='filled-circle'>&#11044</span><span class='step-num'>&#931"+(2+index)+";</span>")
  });
  $(".style123 li").hover(
    function(evt) {
      $(evt.currentTarget).addClass('hover');
    },
    function(evt) {
      $(evt.currentTarget).removeClass('hover');
    }
  );
});

