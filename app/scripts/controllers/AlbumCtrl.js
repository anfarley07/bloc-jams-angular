(function() {
      function AlbumCtrl() {
          $scope.albumData = albumPicasso = {
              title: 'The Colors',
              artis: 'Pablo Picasso',
              label: 'Cubism',
              year:  '1881',
              albumArtUrl: 'assets/images/album_covers/01.png',
              songs: [
                  { title: 'Blue', duration: '161.71', audioURL: 'assets/music/blue' },
                  { title: 'Green', duration: '103.96', audioURL: 'assets/music/green' },
                  { title: 'Red', duration: '268.45', audioURL: 'assets/music/red' },
                  { title: 'Pink', duration: '125.14', audioURL: 'assets/music/pink' },
                  { title: 'Magenta', duration: '374.22', audioURL: 'assets/music/magenta'},
              ]
          }
      }
      angular
          .module('blocJams')
          .controller('AlbumCtrl', AlbumCtrl);
})();
