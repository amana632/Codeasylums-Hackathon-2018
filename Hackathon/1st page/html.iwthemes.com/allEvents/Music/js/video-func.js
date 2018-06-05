  /* =================================
     VIDEO BACKGROUND           
  =================================== */
  if (matchMedia('(min-width: 640px)').matches) {
     
     $(document).ready(function() {
      var videobackground = new $.backgroundVideo($('body'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "video",
        "types": ["ogv","webm"]
      });
    });

  }