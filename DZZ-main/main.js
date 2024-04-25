document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".brightness_factor_link");

    links.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.closest('.brightness_cell').classList.add("brightness_gradient");
        });

        link.addEventListener("mouseleave", function() {
            this.closest('.brightness_cell').classList.remove("brightness_gradient");
        });
    });
});