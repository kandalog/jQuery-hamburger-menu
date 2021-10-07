// drawerを展開するとメニューが白色になる条件を追加
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  jQuery('.drawer-icon').toggleClass('change-white');

  return false;
});

jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html, body').animate({
    scrollTop: position
  },
  300);
});


jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('to-top').removeClass('is-show');
  }
});

// drawerのリンク先をクリックするとdrawerが消える
jQuery('.close').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-icon').removeClass('change-white');
});

// スクロールに合わせてハンバーガーメニューの色を変える
jQuery(window).on('scroll', function() {
  if ( 780 < jQuery(this).scrollTop()) {
    jQuery('.drawer-icon').addClass('change');
  } else {
    jQuery('.drawer-icon').removeClass('change');
  }
});