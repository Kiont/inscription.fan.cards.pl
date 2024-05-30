document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    var images = document.querySelectorAll('.shaky-image');

    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            image.style.transform = "scale(1.1)";
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = "scale(1)";
        });
    });
});
