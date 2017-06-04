(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};

        /**
        * @desc assigns getAlbum as album
        * @type function
        */

        var currentAlbum = Fixtures.getAlbum();
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

  /**
  * @function setSong
  * @desc Stops currently playing song and loads new audio file as currentBuzzObject
  * @param {Object} song
  */
  var setSong = function(song) {
      if (currentBuzzObject) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
      });

      SongPlayer.currentSong = song;
  }

  /**
  * @function getSongIndex
  * @desc gets index number of current song
  * @param {Object} song
  */
  var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);

  };

  /**
  * @function stopSong
  * @desc stops the buzz object current playing song
  * @param {Object} song
  */
  var stopSong = function(song) {
      currentBuzzObject.stop();
      songPlayer.currentSong.playing = null;
  }

  /**
  * @desc active song object from list of songs
  * @type {Object}
  */
  SongPlayer.currentSong = null;

  /**
  * @function playSong
  * @desc starts playing song on click, or if pause button is clicked
  * @param {Object} song
  */
  var playSong = function(song) {
      if (currentBuzzObject){
          currentBuzzObject.play();
          SongPlayer.currentSong.playing = true;
      }
  }
  /**
  * @function SongPlayer.play
  * @desc determines when to play song
  * @param {Object} song
  */
  SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
          setSong(song);
          playSong(song);

      } else if (SongPlayer.currentSong === song) {
          if (currentBuzzObject.isPaused()) {
              playSong(song);
          }
      }
  };

  /**
  * @function SongPlayer.play
  * @desc determines when to pause song
  * @param {Object} song
  */
  SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
  };

  /**
  * @function SongPlayer.previous
  * @desc determines when move to previous song - uses getSongIndex to obtain index of current song and decrease by one
  * @param click on previous button, {Object} song
  */
  SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex--;

      if (currentSongIndex < 0) {
          stopSong();

      } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
      }
  };

  /**
  * @function SongPlayer.next
  * @desc determines when move to previous song - uses getSongIndex to obtain index of current song and increase by one
  * @param click on next button, {Object} song
  */
  SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;

      if (currentSongIndex > currentAlbum.songs.length) {
          stopSong();

      } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
      }
  };

  return SongPlayer;
}

  angular
      .module('blocJams')
      .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
