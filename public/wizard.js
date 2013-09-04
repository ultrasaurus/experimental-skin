
$(document).ready(function(){
  console.log('ready');
    $(".wizard").accessibleTabs({
        tabhead:'legend',
        tabbody:'fieldset',
        currentInfoText:'',
        fx:"show",
        fxspeed:null
    });
});
