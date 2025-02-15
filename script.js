

window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // Must match the transition duration in CSS
  });
    


function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}


// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  // Scroll-to-Top Functionality
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  window.addEventListener("scroll", function () {
    const scrollBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
  
  // Lightbox Functionality
  function openLightbox(src, alt) {
    document.getElementById("lightboxImg").src = src;
    document.getElementById("caption").innerText = alt;
    document.getElementById("lightbox").style.display = "block";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
 





  