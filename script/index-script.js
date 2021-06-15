function openPopup() {
    document.getElementById('popup').style.display = "block";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}

var index = 1;
showPicture(index);

function pictureChange(n) {
    showPicture(index += n);
}

function currentPicture(n) {
    showPicture(index = n)
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