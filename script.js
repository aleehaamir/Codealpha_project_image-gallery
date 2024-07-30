document.addEventListener("DOMContentLoaded", function () {
    var imageThumbs = document.getElementById("image-thumbs");
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    var popupCaption = document.getElementById("popup-caption");
    var close = document.getElementById("close");
  
    var captions = [
        "Image 1",
        "Image 2",
        "Image 3",
        "Image 4",
        "Image 5",
        "Image 6",
        "Image 7",
        "Image 8",
        "Image 9",
        "Image 10"
    ];
  
    for (var i = 1; i <= 10; i++) {
        var thumb = document.createElement("img");
        thumb.src = "images/image" + i + ".jpg";
        thumb.alt = "Image " + i;
        thumb.classList.add("thumb");
        imageThumbs.appendChild(thumb);
  
        (function (index) {
            thumb.addEventListener("click", function () {
                popup.style.display = "block";
                popupImage.src = this.src;
                popupCaption.textContent = captions[index - 1];
            });
        })(i);
    }
  
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
  });
  