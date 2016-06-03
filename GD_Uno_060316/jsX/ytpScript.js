var onYouTubeIframeAPIReady;
(function () {
  'use strict';
  console.log ("•-----=====( ytpScript.js )=====-----•");
  /**-----=====( Player Initialization )=====-----**/
  var player,
      time_update_interval = 0;

  onYouTubeIframeAPIReady = function () {
    player = new YT.Player ('video-placeholder', {
      width       : '100%', //600,
      height      : '800', //400,
      videoId     : 'K7o1dBygyBg?rel=0', //K7o1dBygyBg  7RRKpg0XOz4  Xa0Q0J5tOP0
      /*startSeconds: '2',
      endSeconds  : '6',*/
      playerVars  : {
        color   : 'white',
        //playlistId: 'PLPmFVYd1El2kz_5lqeUhyMV87vY51l3vu',
        //playlist: '7RRKpg0XOz4,K7o1dBygyBg',
        list    : 'PLPmFVYd1El2kz_5lqeUhyMV87vY51l3vu',
        rel     : '0',
        autoplay: '0'
        //loop: '0'
      },
      events      : {
        onReady: initialize
      }
    });
  };

  var initialize = function () {
    // Update the controls on load
    updateTimerDisplay ();
    updateProgressBar ();
    // Clear any old interval.
    clearInterval (time_update_interval);
    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval (function () {
      updateTimerDisplay ();
      updateProgressBar ();
    }, 1000);
    $ ('#volume-input').val (Math.round (player.getVolume ()));
  };

  /**-----=====( Duration )=====-----**/
      // This function is called by initialize()
  var updateTimerDisplay = function () {
    // Update current time text display.
    $ ('#current-time').text (formatTime (player.getCurrentTime ()));
    $ ('#duration').text (formatTime (player.getDuration ()));
  }

  /**-----=====( Progress Bar )=====-----**/
      // This function is called by initialize()
  var updateProgressBar = function () {
    // Update the value of our progress bar accordingly.
    $ ('#progress-bar').val ((player.getCurrentTime () / player.getDuration ()) * 100);
  };

// Progress bar
  $ ('#progress-bar').on ('mouseup touchend', function (e) {
    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration () * (e.target.value / 100);
    // Skip video to new time.
    player.seekTo (newTime);
  });

  /**-----=====( Play )=====-----**/
// Playback
  $ ('#play').on ('click', function () {
    player.playVideo ();
  });

  /**-----=====( Pause )=====-----**/
  $ ('#pause').on ('click', function () {
    player.pauseVideo ();
  });

  /**-----=====( Mute/Unmute )=====-----**/
// Sound volume
  $ ('#mute-toggle').on ('click', function () {
    var mute_toggle = $ (this);
    if (player.isMuted ()) {
      player.unMute ();
      mute_toggle.text ('volume_up');
    }
    else {
      player.mute ();
      mute_toggle.text ('volume_off');
    }
  });

  /**-----=====( Set Volume )=====-----**/
  $ ('#volume-input').on ('change', function () {
    player.setVolume ($ (this).val ());
  });

  /**-----=====( Speed )=====-----**/
// Other options
  $ ('#speed').on ('change', function () {
    player.setPlaybackRate ($ (this).val ());
  });

  /**-----=====( Quality )=====-----**/
  $ ('#quality').on ('change', function () {
    player.setPlaybackQuality ($ (this).val ());
  });

  /**-----=====( Playlist Next )=====-----**/
// Playlist
  $ ('#next').on ('click', function () {
    player.nextVideo ()
  });

  /**-----=====( Playlist Previous )=====-----**/
  $ ('#prev').on ('click', function () {
    player.previousVideo ()
  });

  /**-----=====( Dynamically Queue Video )=====-----**/
// Load video
  $ ('.thumbnail').on ('click', function () {
    var url = $ (this).attr ('data-video-id');
    player.cueVideoById (url);
  });

  /**-----=====( Date Format )=====-----**/
      // Helper Functions
  var formatTime = function (time) {
    time        = Math.round (time);
    var minutes = Math.floor (time / 60),
        seconds = time - minutes * 60;
    seconds     = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ":" + seconds;
  };

  /**-----=====( ??? highlight.js )=====-----**/
  /*$ ('pre code').each (function (i, block) {
   hljs.highlightBlock (block);
   });*/

}) ();
