$(document).ready(main);


function main(){
    video = document.getElementById('introduction-video');
source = document.getElementById('introduction-video-source');
 if (screen.width < 550) {
    video.pause();
    source.setAttribute('src', "graphics/videos/background-movil.mp4");
    video.load();
    video.play();
 }else{
     
 }
}


