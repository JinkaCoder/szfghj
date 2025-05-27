const filterButtons = document.querySelectorAll(".filter-btn");
    const photos = document.querySelectorAll(".photo-item");
    const modal = document.getElementById("slideshow-modal");
    const modalImg = document.getElementById("slideshow-image");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const toggleTheme = document.getElementById("themeToggle");
    let currentIndex = 0;

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        photos.forEach(photo => {
          const category = photo.getAttribute("data-category");
          photo.style.display = filter === "all" || category === filter ? "block" : "none";
        });
      });
    });

    const photoList = Array.from(photos);
    photoList.forEach((photo, index) => {
      photo.addEventListener("click", () => {
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = photo.querySelector("img").src;
      });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    nextBtn.onclick = () => showSlide(1);
    prevBtn.onclick = () => showSlide(-1);

    function showSlide(direction) {
      currentIndex = (currentIndex + direction + photoList.length) % photoList.length;
      modalImg.src = photoList[currentIndex].querySelector("img").src;
    }

    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });