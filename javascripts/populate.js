define(["jquery"], function($) {

  return {
    getSongs: function(callback){
          $.ajax({
          url:"https://boiling-heat-777.firebaseio.com/songs.json"
          }).done(function(firebaseData){
            console.log("firebase data : ", firebaseData);
            callback(firebaseData);
           });
      }
    };
});

//this file needs to use the ajax calls to populate the song list.  I am not sure how to return the getters for it, it will have any setter ability