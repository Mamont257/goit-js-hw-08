import Vimeo from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
const player = new Vimeo(iframe);
// console.log(player);

let endTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', function(data) {
    console.dir(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
});

if(endTime){player.setCurrentTime(endTime)};

console.log(endTime);
