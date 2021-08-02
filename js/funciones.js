function mostrarmenu(){
	
	document.getElementById("menu_desplegable").style.visibility="visible";
}


function ocultar(){
document.getElementById("menu_desplegable").style.visibility="hidden";
}


$(document).ready(function(){ //Hacia arriba
  irArriba();
});

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}


function buscar_trabajo() {
    alert("MENSAJE ENVIADO CORRECTAMENTE");
}






var App = (function () {

  //=== Use Strict ===//
  'use strict';

  //=== Private Variables ===//
  var gallery = $('#js-gallery');

  //=== Gallery Object ===//
  var Gallery = {
    zoom: function(imgContainer, img) {
      var containerHeight = imgContainer.outerHeight(),
      src = img.attr('src');
      
      if ( src.indexOf('/products/normal/') != -1 ) {
        // Set height of container
        imgContainer.css( "height", containerHeight );
        
        // Switch hero image src with large version
        img.attr('src', src.replace('/products/normal/', '/products/zoom/') );
        
        // Add zoomed class to gallery container
        gallery.addClass('is-zoomed');
        
        // Enable image to be draggable
        img.draggable({
          drag: function( event, ui ) {
            ui.position.left = Math.min( 100, ui.position.left );
            ui.position.top = Math.min( 100, ui.position.top );
          }
        });
      } else {
        // Ensure height of container fits image
        imgContainer.css( "height", "auto" );
        
        // Switch hero image src with normal version
        img.attr('src', src.replace('/products/zoom/', '/products/normal/') );
        
        // Remove zoomed class to gallery container
        gallery.removeClass('is-zoomed');
      }
    },
    switch: function(trigger, imgContainer) {
      var src = trigger.attr('href'),
      thumbs = trigger.siblings(),
			img = trigger.parent().prev().children();
      
      // Add active class to thumb
      trigger.addClass('is-active');
      
      // Remove active class from thumbs
      thumbs.each(function() {
        if( $(this).hasClass('is-active') ) {
          $(this).removeClass('is-active');
        }
      });

      // Reset container if in zoom state
      if ( gallery.hasClass('is-zoomed') ) {
        gallery.removeClass('is-zoomed');
        imgContainer.css( "height", "auto" );
      }

      // Switch image source
      img.attr('src', src);
    }
  };

  //=== Public Methods ===//
  function init() {

    // Listen for clicks on anchors within gallery
    gallery.delegate('a', 'click', function(event) {
      var trigger = $(this);
      var triggerData = trigger.data("gallery");

      if ( triggerData === 'zoom') {
        var imgContainer = trigger.parent(),
        img = trigger.siblings();
        Gallery.zoom(imgContainer, img);
      } else if ( triggerData === 'thumb') {
        var imgContainer = trigger.parent().siblings();
        Gallery.switch(trigger, imgContainer);
      } else {
        return;
      }

      event.preventDefault();
    });

  }

  //=== Make Methods Public ===//
  return {
    init: init
  };

})();

App.init();

function anadir_carrito(){
    alert("PRODUCTO AÑADIDO CORRECTAMENTE");
	
    var resul= document.getElementById("datos").innerHTML+1;
    document.getElementById("datos").innerHTML=2;
}


function comprar(){
	alert("COMPRA REALIZADA");
	
}