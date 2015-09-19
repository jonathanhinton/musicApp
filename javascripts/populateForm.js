define(["jquery", "getUnique"], function($, u) {

  return function(theseSongs) {
                        //u calls the getUnique module then the whole songs object
                        //gets passed in via thiseSongs, the .songs access the array
                        //of objects and then runs the unique functions on the object
    var uniqueArtists = u(theseSongs.songs).uniqueArtists;
    var uniqueAlbums = u(theseSongs.songs).uniqueAlbums;


    require(['hbs!../templates/artist'], function(template) {
      $("#artistDrop").append(template({artists: uniqueArtists}));
    });
//note on handlebars: it only accepts objects so the object artists matches the {{#each}} and goes through the string: this
    require(['hbs!../templates/album'], function(template) {
      $("#albumDrop").append(template({albums: uniqueAlbums}));
    });
  };
});