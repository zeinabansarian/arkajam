const projectSlider = new Swiper('.projectSlider', {
    slidesPerView:2,
    spaceBetween: 33,
    centeredSlides:true,
    loop: true,
 speed:1000,
    // Navigation arrows
    navigation: {
      nextEl: '.nextSlider',
      prevEl: '.prevSlider',
    },
  
  });



  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const proListContainer = document.querySelector(".proListContainer");
    const loaderContainer1 = document.querySelector(".loaderContainer1");
    const filterSearchForm = document.querySelector(".filterSearchForm");
    let q;


    filterSearchForm.addEventListener("submit", (e) => {
      q = searchInput.value;
      e.preventDefault();
  
      loaderContainer1.style.display = "flex";
      fetch(`/load-projectList.inc?q=${q}`, {
        method: "POST",
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(`/load-projectList.inc?q=${q}`);
  
          proListContainer.innerHTML = data;
          loaderContainer1.style.display = "none";
        })
        .catch((error) => {
          console.error("Error:", error);
          loaderContainer1.style.display = "none";
        });
    });
    searchInput.addEventListener("input", (e) => {
      q = e.target.value;
  
      loaderContainer1.style.display = "flex";
      fetch(`/load-projectList.inc?q=${q}`, {
        method: "POST",
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(`/load-projectList.inc?q=${q}`);
  
          proListContainer.innerHTML = data;
          loaderContainer1.style.display = "none";
        })
        .catch((error) => {
          console.error("Error:", error);
          loaderContainer1.style.display = "none";
        });
    });
  })