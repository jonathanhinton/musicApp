define(["lodash"], function(_) {
//the array is passed in from populateForm.js and then the different methods are applied
  return function(songsArray){
    var uniqueArtists = _.chain(songsArray)
                        .uniq("artist")
                        .pluck("artist")
                        .value();

    var uniqueAlbums = _.chain(songsArray)
                        .uniq("album")
                        .pluck("album")
                        .value();
    //after running the methods on each var the function returns an object with 2 keys
    return {
      uniqueArtists: uniqueArtists,
      uniqueAlbums: uniqueAlbums
    };
  };

});