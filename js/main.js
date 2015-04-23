/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, jQuery, document, videos */

function l(data) {
  'use strict';
  console.log(data);
}

var mainContent = $('#main-content'),
  windowHeight = $(window).height(),
  windowWidth = $(window).width(),
  player = document.getElementById('player'),
  $player = $('#player'),
  $caption = $('#player-caption'),
  $captionToggle = $('#nav-captions'),
  $audioToggle = $('#nav-audio'),
  nowPlaying = 0;

function layout() {

  var mainHeight = mainContent.height();


  if (mainHeight < (windowWidth * 0.5625)) {

    var width = (mainHeight * 1.777777778);
    $('#holder').width(width);

  } else {
    $('#holder').width('100%');
  }

}

$(window).resize(function() {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  layout();
});

jQuery(document).ready(function () {
  'use strict';

   layout();

  player.addEventListener('canplay', function() {
    player.volume = 0;
    player.play();
  }, true);

  player.addEventListener('ended', function() {
    nowPlaying++;
    var next = videos[nowPlaying];
    if (next) {
      $player.attr('src', next.webm);
      $caption.html(next.caption);
      player.load();
    } else {
      $player.attr('src', '');
      $caption.show().html('FIN');
    }

  }, true);

  if (videos.length) {
    $player.attr('src', videos[0].webm);
    $caption.html(videos[0].caption);
  }

  $captionToggle.on('click', function() {
    $caption.toggle();
  });

  $audioToggle.on('click', function() {
    if (player.volume === 0) {
      player.volume = 1;
    } else {
      player.volume = 0;
    }
  });

});