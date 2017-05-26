(function() {
    function CollectionCtrl() {
        //creates empty array
        this.albums = [];
        for (var i=0; i < 12; i++) {
            //makes copies of the Picasso album and pushes them to the array
            this.albums.push(angular.copy(albumPicasso));
        }
    }
    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();
