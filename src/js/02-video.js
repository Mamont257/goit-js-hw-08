import Vimeo from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
const player = new Vimeo(iframe);
// console.log(player);

player.on('timeupdate', function(data) {
    // console.log('played the video!');
    console.dir(data.seconds);
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
