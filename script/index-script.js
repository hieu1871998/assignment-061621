var popup;

function openPopup() {
    popup = document.getElementById('popup');
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
    deactivePictureMain();
}

var index = 1;

function currentPicture(n) {
    showPicture(index = n);
    activePictureMain(index);
}

function pictureChange(n) {
    showPicture(index += n);
    activePictureMain();
}

var mainPicture = document.getElementsByClassName("picture");

function activePictureMain() {
    var i;    
    for (i = 0; i < mainPicture.length; i++) {
        mainPicture[i].style.opacity = "0.5";
    }
    mainPicture[index-1].style.opacity = "1";
}

function deactivePictureMain() {
    var i;
    for (i = 0; i < mainPicture.length; i++) {
        mainPicture[i].style.opacity = "0.5";
    }
}

function showPicture(n) {
    var i;
    var current = document.getElementsByClassName("popup-header");
    var slideshowImage = document.getElementsByClassName("slideshow-picture");
    if (n > current.length) {
        index = 1;
    }
    if (n < 1) {
        index = current.length;
    }
    for (i = 0; i < current.length; i++) {
        current[i].style.display = "none";
        slideshowImage[i].style.opacity = "0.5";
    }
    current[index-1].style.display = "block";
    slideshowImage[index-1].style.opacity = "1";
}
