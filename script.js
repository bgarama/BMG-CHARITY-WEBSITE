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

// ==========================================
// EASY CONFIGURATION FOR NON-TECH USERS
// Just change the text inside the quotes below!
// ==========================================
const webConfig = {
    designerName: "Your Designer Name",
    builderName: "Your Builder Name",
    deploymentPlatform: "GitHub Pages / Netlify / Vercel"
};

// ==========================================
// AUTOMATION LOGIC (Do not change below here)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const designerSpan = document.getElementById("site-designer");
    const builderSpan = document.getElementById("site-builder");
    const deploymentSpan = document.getElementById("site-deployment");

    if (designerSpan) designerSpan.textContent = webConfig.designerName;
    if (builderSpan) builderSpan.textContent = webConfig.builderName;
    if (deploymentSpan) deploymentSpan.textContent = webConfig.deploymentPlatform;
});


