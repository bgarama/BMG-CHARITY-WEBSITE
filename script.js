
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

  /* =========================
     WEBSITE CREDITS CONFIG
     Easy configuration for non-tech users
  ========================= */
  const webConfig = {
    designerName: "Baraka",
    builderName: "Baha Digital Innovation Hub",
    engineerName: "Baha Digital Innovation Hub",
    approvalTeam: "Baha Madzo Gadze Executive Team",
    deploymentPlatform: "GitHub Pages",
    poweredBy: "Baha Digital Innovation Hub"
  };

  // Safely update footer credits if elements exist
  const designerSpan = document.getElementById("site-designer");
  const builderSpan = document.getElementById("site-builder");
  const engineerSpan = document.getElementById("site-engineer");
  const approvalSpan = document.getElementById("site-approval");
  const deploymentSpan = document.getElementById("site-deployment");
  const poweredSpan = document.getElementById("site-powered");

  if (designerSpan) designerSpan.textContent = webConfig.designerName;
  if (builderSpan) builderSpan.textContent = webConfig.builderName;
  if (engineerSpan) engineerSpan.textContent = webConfig.engineerName;
  if (approvalSpan) approvalSpan.textContent = webConfig.approvalTeam;
  if (deploymentSpan) deploymentSpan.textContent = webConfig.deploymentPlatform;
  if (poweredSpan) poweredSpan.textContent = webConfig.poweredBy;

});
