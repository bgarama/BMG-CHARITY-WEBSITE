
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
    designerName: "Baha Digital Innovation Hub",
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

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  const clickableImages = document.querySelectorAll(
    ".featured-gallery-grid img, .gallery-album-card img, .course-structure-grid img"
  );

  clickableImages.forEach((img) => {
    img.style.cursor = "pointer";

    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "auto";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      document.body.style.overflow = "auto";
    }
  });
});

/* ===============================
   COURSE STRUCTURE LIGHTBOX
=============================== */

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lightbox-trigger");

  if (!images.length) return;

  let currentIndex = 0;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    <div class="lightbox-counter">1 / ${images.length}</div>
    <button class="lightbox-prev" aria-label="Previous image">&#10094;</button>
    <div class="lightbox-container">
      <img class="lightbox-image" src="" alt="">
    </div>
    <button class="lightbox-next" aria-label="Next image">&#10095;</button>
    <div class="lightbox-controls">
      <button class="lightbox-zoom-out" aria-label="Zoom out">−</button>
      <button class="lightbox-reset" aria-label="Reset zoom">⟲</button>
      <button class="lightbox-zoom-in" aria-label="Zoom in">+</button>
    </div>
  `;

  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector(".lightbox-image");
  const closeBtn = overlay.querySelector(".lightbox-close");
  const prevBtn = overlay.querySelector(".lightbox-prev");
  const nextBtn = overlay.querySelector(".lightbox-next");
  const zoomInBtn = overlay.querySelector(".lightbox-zoom-in");
  const zoomOutBtn = overlay.querySelector(".lightbox-zoom-out");
  const resetBtn = overlay.querySelector(".lightbox-reset");
  const counter = overlay.querySelector(".lightbox-counter");

  function updateTransform() {
    lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  }

  function showImage(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt || `Image ${currentIndex + 1}`;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
    resetZoom();
  }

  function openLightbox(index) {
    showImage(index);
    overlay.classList.add("active");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    resetZoom();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  zoomInBtn.addEventListener("click", function () {
    scale = Math.min(scale + 0.25, 4);
    updateTransform();
  });

  zoomOutBtn.addEventListener("click", function () {
    scale = Math.max(scale - 0.25, 1);
    if (scale === 1) {
      translateX = 0;
      translateY = 0;
    }
    updateTransform();
  });

  resetBtn.addEventListener("click", resetZoom);

  lightboxImage.addEventListener("wheel", function (e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      scale = Math.min(scale + 0.2, 4);
    } else {
      scale = Math.max(scale - 0.2, 1);
      if (scale === 1) {
        translateX = 0;
        translateY = 0;
      }
    }
    updateTransform();
  });

  lightboxImage.addEventListener("mousedown", function (e) {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    lightboxImage.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    lightboxImage.style.cursor = "grab";
  });

  lightboxImage.addEventListener("dblclick", function () {
    if (scale === 1) {
      scale = 2;
    } else {
      resetZoom();
      return;
    }
    updateTransform();
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "+" || e.key === "=") {
      scale = Math.min(scale + 0.25, 4);
      updateTransform();
    }
    if (e.key === "-") {
      scale = Math.max(scale - 0.25, 1);
      if (scale === 1) {
        translateX = 0;
        translateY = 0;
      }
      updateTransform();
    }
    if (e.key === "0") resetZoom();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  overlay.addEventListener("touchstart", function (e) {
    if (e.touches.length === 1) {
      touchStartX = e.changedTouches[0].screenX;
    }
  });

  overlay.addEventListener("touchend", function (e) {
    if (e.changedTouches.length === 1) {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;

      if (swipeDistance > 50) {
        showPrev();
      } else if (swipeDistance < -50) {
        showNext();
      }
    }
  });
});

