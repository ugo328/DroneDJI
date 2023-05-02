let photosSection = document.querySelector('.photos-container');
let videosSection = document.querySelector('.videos-container');
let photosBtn = document.getElementById('photos');
let videosBtn = document.getElementById('videos');
let galleryBtn = document.getElementById('gallery');

function switchVisiblePhotos() {
  if(!photosSection) return;

  if (getComputedStyle(photosSection).display == 'none') {
    videosBtn.style.color = 'white';
    photosBtn.style.color = '#CA141D';
    photosSection.style.display = 'block';
    videosSection.style.display = 'none';
  } 
}

function switchVisibleVideos() {
    if(!videosSection) return;
    
     if (getComputedStyle(videosSection).display == 'none') {
      photosBtn.style.color = 'white';
      videosBtn.style.color = '#CA141D';
      photosSection.style.display = 'none';
      videosSection.style.display = 'block';
    }
}

  if (localStorage.key(0) === "isVideos") {
    photosBtn.style.color = 'white';
    videosBtn.style.color = '#CA141D';
    photosSection.style.display = 'none';
    videosSection.style.display = 'block';

    localStorage.removeItem("isVideos");
   } else {
    photosBtn.style.color = '#CA141D';
  }

photosBtn.addEventListener('click', switchVisiblePhotos);
videosBtn.addEventListener('click', switchVisibleVideos);





