define(["jquery"], function($) {

  return {
    getSongs: function(callback){
          $.ajax({
          url:"javascripts/songs.json"
          }).done(function(thing){
            callback(thing.songs);
           });
      }
    };
});

//this file needs to use the ajax calls to populate the song list.  I am not sure how to return the getters for it, it will have any setter ability