define(["jquery"], function($) {

  return {
    getMore: function(callback){
          $.ajax({
          url:"javascripts/moreSongs.json"
          }).done(function(data){
            callback(data);
           });
      }
    };
});