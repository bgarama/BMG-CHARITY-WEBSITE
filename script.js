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

// ==========================================
// EASY CONFIGURATION FOR NON-TECH USERS
// Just change the text inside the quotes below!
// ==========================================
const webConfig = {
    designerName: "Baraka",
    approvalTeam: "Baha Madzo Gadze Executive Team",
    deploymentPlatform: "GitHub Pages" // Change this to Netlify, Vercel, or your host if needed
};

// ==========================================
// AUTOMATION LOGIC (Do not change below here)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const designerSpan = document.getElementById("site-designer");
    const approvalSpan = document.getElementById("site-approval");
    const deploymentSpan = document.getElementById("site-deployment");

    if (designerSpan) designerSpan.textContent = webConfig.designerName;
    if (approvalSpan) approvalSpan.textContent = webConfig.approvalTeam;
    if (deploymentSpan) deploymentSpan.textContent = webConfig.deploymentPlatform;
});

// Website Credits
const webConfig = {
  PoweredBy: "Baha Digital Innovation Hub",
 
};

document.getElementById("site-engineer").textContent =
  webConfig.engineerName;

document.getElementById("site-approval").textContent =
  webConfig.approvalTeam;

document.getElementById("site-powered").textContent =
  webConfig.poweredBy;


// Countdown
const launchDate = new Date("December 31, 2026 00:00:00");

const countdown = setInterval(() => {

  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hours`;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML =
      "Launching Soon";
  }

}, 1000);

