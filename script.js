/* =========================
   BAHA MADZO GADZE WEBSITE JS
========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     GALLERY LIGHTBOX
  ========================= */

  const galleryImages = document.querySelectorAll(
    ".gallery-album-card img, .featured-gallery-grid img, .gallery-grid img"
  );

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(function (img) {
      img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Gallery image preview";
      });
    });

    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });

  }

});
