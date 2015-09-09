define(["jquery", "getMore", "populate"], function($, getMore, populate) {
  return {
    songList : $("#songList"),
    moreMusic : $("#get-more-music"),
    artistDrop : $("#artistDrop"),
    albumDrop : $("#albumDrop"),
    destroy : function() {
                $(document).on("click", ".destroy", function() {
                // console.log("clicked");
                $(this).parent().hide('fast', function () {
                  $(this).remove();
                  });
                });
              }
  };
});

//this module will be used to access the DOM by getting elements and