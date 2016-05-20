'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, album) {

  $scope.album = album;

  $scope.email = function(albumName, location){
    var emailText = `?subject=${$scope.album.name}&body=Check%20out%20this%20groovy%20album: ${window.location}`
    return emailText;
  }

  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = PlayerFactory.getCurrentSong;

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope,albums) {
    
    $scope.albums = albums;

});
