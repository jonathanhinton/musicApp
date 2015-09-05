define(["jquery"], function($) {

  return {
    getSongs: function(callback){
          $.ajax({
          url:"javascripts/songs.json"
          }).done(function(songList){
            callback(songList);
           });
      }
    };
});

//this file needs to use the ajax calls to populate the song list.  I am not sure how to return the getters for it, it will have any setter ability