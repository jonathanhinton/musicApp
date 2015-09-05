define(["jquery", "getMore"], function($, getMore) {
  return {
    addMusic : function(){
      console.log("you have clicked");
    },
    songList : $("#songList"),
    moreMusic : $("#get-more-music")
  };
//   var DomAccess {
//     songTitle : $(".song"),
//     artistName : $(".artist"),
//     albumName : $(".album")
//   };
//   return {
//     populateDom : function() {

//     }
//   }
});

//this module will be used to access the DOM by getting elements and