document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () => {
        var popupVideo = document.querySelector('.popup-video');
        var popupVideoElement = document.querySelector('.popup-video video');
        popupVideo.style.display = 'block';
        popupVideoElement.src = vid.getAttribute('src');
        
        // Unmute the video
        popupVideoElement.muted = false;
    }
});

document.querySelector('.popup-video span').onclick = () => {
    var popupVideo = document.querySelector('.popup-video');
    var popupVideoElement = document.querySelector('.popup-video video');
    popupVideo.style.display = 'none';
    
    // Mute the video
    popupVideoElement.muted = true;
}