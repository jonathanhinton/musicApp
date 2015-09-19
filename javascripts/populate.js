define(["jquery"], function($) {

  return {
    getSongs: function(callback){
          $.ajax({
          url:"https://listenup.firebaseio.com/.json"
          }).done(function(firebaseData){
            console.log("firebase data : ", firebaseData);
            callback.call(this, firebaseData);
           });
      }
    };
});

//this file needs to use the ajax calls to populate the song list.  I am not sure how to return the getters for it, it will have any setter ability
//XHR = xml http request