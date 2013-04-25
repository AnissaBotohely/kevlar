$(document).ready(function(){


    var myPlaylist = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer_1",
  cssSelectorAncestor: "#jp_container_1"
}, [
  {
    title:"Cro Magnon Man",
    artist:"The Stark Palace",
    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
    oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
  },
  {
    title:"Lentement",
    artist:"Miaow",
    mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
    oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
    poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
  }
], {
  playlistOptions: {
    displayTime: 'medium'
  },
  swfPath: "/js",
  supplied: "ogv, m4v, oga, mp3"
});

});
