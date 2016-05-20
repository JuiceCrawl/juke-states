juke.config(function($stateProvider){
  $stateProvider.state('artists',{
    url: '/artists',
    templateUrl: '/artists.html',
    controller: 'ArtistsCtrl',
    resolve: {
      artists: function(ArtistFactory){
        return ArtistFactory.fetchAll();
      }
    }
  })
  .state('artist',{
    url: '/artist/:artistId',
    templateUrl: '/artist.html',
    controller: 'ArtistCtrl',
    resolve: {
      artist: function(ArtistFactory, $stateParams){
        return ArtistFactory.fetchById($stateParams.artistId);
      }
    }
  })
  .state('artist.albums',{
    url: '/album',
    templateUrl: '/artist.album.html',
    controller: 'ArtistCtrl'
  })
  .state('artist.songs',{
    url: '/songs',
    templateUrl: '/artist.songs.html',
    controller: 'ArtistCtrl'
  });

});