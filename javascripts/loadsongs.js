define(["jquery", "populate", "populateForm", "getUnique"], function($, populate, form, unique) {
  return function(callback) {
      console.log("populating");
      populate.getSongs(function(songs) {
        // Populate song list
        require(['hbs!../templates/songs'], function(songTemplate) {
          $("#songList").html(songTemplate(songs));
        });

        // Populate drop downs
        form(songs);
    });
  };
});