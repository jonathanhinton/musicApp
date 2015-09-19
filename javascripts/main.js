define(["jquery", "hbs", "lodash", "firebase", "bootstrap", "material", "getMore", "DOMaccess", "populateForm", "getUnique", "songTemplates"], function($, handlebars, _, firebase, bootstrap, material, getMore, DOMaccess, form, unique, templates) {



$.material.init();
var myFirebaseRef = new Firebase("https://listenup.firebaseio.com/");

var allSongsArray = [];
var allSongsObject = {};
var originalSongsArray = [];


myFirebaseRef.child("songs").on("value", function(snapshot) {
  //this firebase reference holds all the information that was in my ajax call
  var songs = snapshot.val();
  console.log("songs", songs);

  allSongsArray = [];

  for (var key in songs){
    allSongsArray[allSongsArray.length] = songs[key];
  }

allSongsObject = {songs : allSongsArray};

originalSongsArray = allSongsArray.slice();

$("#songList").html(templates.songs(allSongsObject));

var uniqueArtist = unique(allSongsArray).uniqueArtists;
console.log("unique artists", uniqueArtist);

$("#artistDrop").html(templates.artists({artists: uniqueArtist}));

var uniqueAlbum = unique(allSongsArray).uniqueAlbums;
console.log("unique albums", uniqueAlbum);

$("#albumDrop").html(templates.albums({albums: uniqueAlbum}));


});



$(".btn-primary").click(function(){
  $(this).toggleClass("btn-danger");
});

// loadsongs();
//POPULATE DOM

  // populate.getSongs(function(songs) {
  //     require(['hbs!../templates/songs'], function(songTemplate) {
  //       $("#songList").html(songTemplate(songs));
  //     });
  // });

  // populate.getSongs(function(songs) {
  //     require(['hbs!../templates/album'], function(songTemplate) {
  //       $("#albumDrop").html(songTemplate(songs));
  //     });
  // });

  // populate.getSongs(function(songs) {
  //     require(['hbs!../templates/artist'], function(songTemplate) {
  //       $("#artistDrop").html(songTemplate(songs));
  //     });
  // });

//REMOVE MUSIC WITH BUTTON
  DOMaccess.destroy();


});








//   function addSongs(data) {
//     var songListItems = $();
//     var artistDropDown = $();
//     var albumDropDown = $();
//     for (var i = 0; i < data.length; i++) {
//       var currentSong = data[i];
//           songListItems = songListItems.add(

//             "<div class='songSection'><h2 class='song'>" + currentSong.name + "</h2><p class='artist'>Performed by " + currentSong.artist + "</p>" + "<p class='album'>On the album " + currentSong.album + "</p>" + "<button class='destroy'><span class='glyphicon glyphicon-remove-circle'></span>DELETE!!!</button></div>"
//       );
// //     // Populate Artist dropdown list with artist info
//       artistDropDown = artistDropDown.add(
//         "<option>" + currentSong.artist + "</option>"
//         );
// //     // Populate Album dropdown list with album info
//       albumDropDown = albumDropDown.add(
//         "<option>" + currentSong.album + "</option>"
//         );

//     // Add to the DOM
//     DOMaccess.songList.append(songListItems);
//     DOMaccess.artistDrop.append(artistDropDown);
//     DOMaccess.albumDrop.append(albumDropDown);
//     }
//   }

//ADD MUSIC WITH BUTTON
  // $(document).one("click", "#loadMore", function(){
  //   getMore.getMore(function(songs) {
  //     require(['hbs!../templates/songs'], function(songTemplate) {
  //       $("#songList").append(songTemplate(songs));
  //     });
  //   });
  // });



  // $(document).on("click", ".destroy", function() {
  //     // console.log("clicked");
  //     $(this).parent().hide('fast', function () {
  //       $(this).remove();
  //     });
  // });

// $(document).ready(function(){

//ADD SONGS TO DOM


//     // Add to the DOM
//     $("#artistDrop").append(artistDropDown);


//     // Add to the DOM
//     $("#albumDrop").append(albumDropDown);
//     };
//   }

// //THESE SONGS INITIALIZE ON LOAD
//   $.ajax({
//     url:"javaScripts/songs.json"
//   }).done(addSongs);

// //ADD MORE SONGS ON CLICK
  // $("#get-more-music").click(function() {
  //   $.ajax({
  //     url:"javaScripts/moreSongs.json"
  //   }).done(addSongs);
  // });





// // Hide parent element of button clicked.  This works on dynamically generated html by searching the documnet using the .on function then assigning an event handler to the target and executing the desired function.  There is a callback function within the hide function that will remove the element after the hide animation runs.
//   $(document).on("click", ".destroy", function() {
//       console.log("clicked");
//       $(this).parent().hide('fast', function () {
//         $(this).remove();
//       });
//   });
// });

// LESSONS LEARNED: line 4 declares the function addSongs to populate the DOM with the key/values in the JSON file.  line 5 declares the variable which is an empty jquery string which will build up in the for loop on lines 6 through 11.  line 7 declares a variable currentSong which is each iteration of the JSON object songs.  The variable songListItems is updated in line 8 - 10.  it takes the empty jquery string and adds 1)  new div's each with their own specific class so that the objects within them can be deleted all at once...I wonder if the class name is even necessary since I are targeting each item for deletion by parent object...just deleted the class and it worked just fine.  I am going to leave it in for now because it was so much work...and I might want to use it later.  so...coming down to line 26 the problem I encountered was that the button is being created dynamically and on page load does not exist.  It is all located within the Div with the #songList so I needed to target the div that everydata was being created to, and then add a dynamic event listener using .on() the event is "click" the only class that matters was the one we created on the button.  Because the remove is targeting the parent element and not a specific class the class name doesn't NOTE: CHANGED CODE SO LINE NUMBERS MIGHT HAVE CHANGED.