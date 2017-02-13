$(document).ready( function() {
   slider();
});

$(document).scroll( function() {
   animate();
   controlsFixed();
})

function animate() {
   var st = $(window).scrollTop(),
       wh = $(window).height() * .8,
       adv = $('.advantage-flex'),
       visMis = $('.vis-mis-flex'),
       notify = $('.notify-flex');
   
   
   if ( st + wh > adv.offset().top ) {
      adv.addClass('animate-adv');
   }
   
   if ( st + $(window).height() < adv.offset().top + ( adv.height() * .3) ) {
      adv.removeClass('animate-adv');
   }
   
   if ( st > adv.offset().top + ( adv.height() * .7 ) ) {
      adv.removeClass('animate-adv');
   }
   

   
   if ( st + wh > visMis.offset().top ) {
      visMis.addClass('animate-vis-mis');
   }
   
   if ( st + $(window).height() < visMis.offset().top + ( visMis.height() * .5) ) {
      visMis.removeClass('animate-vis-mis');
   }
   
   if ( st > visMis.offset().top + ( visMis.height() * .7 ) ) {
      visMis.removeClass('animate-vis-mis');
   }
   
   
   
   if ( st + wh > notify.offset().top ) {
      notify.addClass('animate-notify');
   }
   
   if ( st + $(window).height() < notify.offset().top + ( notify.height() * .3 ) ) {
      notify.removeClass('animate-notify');
   }
}


function slider() {
   $('.thumb-item').click( function() {
      var $this = $(this),
          slideLength = $this.parent().children().length,
          position = $this.parent().children().index(this);
      
      $('.thumb-item').removeClass('active-thumb').eq(position).addClass('active-thumb');
      $('.slide-item').removeClass('active-slide').eq(position).addClass('active-slide');
   });
   
   $('.prev, .next').click( function() {
      var $this = $(this),
          slideLenth = $this.parent().children().length,
          curPosition = $this.parent().find('.active-thumb').index();
      
      if ( $this.hasClass('next') ) {
         if ( curPosition < slideLenth ) {
            $('.thumb-item').removeClass('active-thumb').eq(curPosition).next().addClass('active-thumb');
            $('.slide-item').removeClass('active-slide').eq(curPosition).next().addClass('active-slide');
         } else {
            $('.thumb-item').removeClass('active-thumb').first().addClass('active-thumb');
            $('.slide-item').removeClass('active-slide').first().addClass('active-slide');
         }
      } else {
         if ( curPosition === 0 ) {
            $('.thumb-item').removeClass('active-thumb').last().addClass('active-thumb');
            $('.slide-item').removeClass('active-slide').last().addClass('active-slide');
         } else {
            $('.thumb-item').removeClass('active-thumb').eq(curPosition).prev().addClass('active-thumb');
            $('.slide-item').removeClass('active-slide').eq(curPosition).prev().addClass('active-slide');
         }
      }
   });
}

function controlsFixed() {
   var $this = $('.controls-container'),
       thisHeight = $this.height(),
       parentHeight = $this.parent().height(),
       wHeight = $(window).height(),
       ot = $(window).scrollTop();
       
   
   if ( ot + wHeight > parentHeight) {
      $this.removeClass('controls-fixed');
   } else {
      $this.addClass('controls-fixed');
   }  
}