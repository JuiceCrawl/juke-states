juke.config(function($stateProvider){
  $stateProvider.state('albums',{
    url: '/albums',
    templateUrl: '/albums.html',
    controller: 'AlbumsCtrl',
    resolve:{
      albums: function(AlbumFactory){
        return AlbumFactory.fetchAll();
      }
    }
  })
  .state('album',{
    url: '/album/:albumId',
    templateUrl: '/album.html',
    controller: 'AlbumCtrl',
    resolve:{
      album: function(AlbumFactory, $stateParams){
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });
});

