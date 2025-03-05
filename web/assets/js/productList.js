document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const proListContainer = document.querySelector(".proListContainer");
  const loaderContainer1 = document.querySelector(".loaderContainer1");
  const filterSearchForm = document.querySelector(".filterSearchForm");
  const selectFilter = document.querySelector(".selectFilter");
  let q;
  let newCatid = 213460;
    let catid = document.querySelector(".catid")?.innerHTML
    if (catid) {
        
        selectFilter.value=catid
    }else{
        
        selectFilter.value=newCatid
    }



  filterSearchForm.addEventListener("submit", (e) => {
    q = searchInput.value;
    e.preventDefault();

    loaderContainer1.style.display = "flex";
    fetch(`/load-productList.inc?catid=${newCatid}&q=${q}&type=1`, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(`/load-productList.inc?catid=${newCatid}&q=${q}&type=1`);

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
    fetch(`/load-productList.inc?catid=${newCatid}&q=${q}&type=1`, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(`/load-productList.inc?catid=${newCatid}&q=${q}&type=1`);

        proListContainer.innerHTML = data;
        loaderContainer1.style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
        loaderContainer1.style.display = "none";
      });
  });
  selectFilter.addEventListener("change", function (e) {
    newCatid = e.target.value;
    loaderContainer1.style.display = "flex";
    fetch(`/load-productList.inc?catid=${newCatid}&q=${q}&type=2`, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);

        proListContainer.innerHTML = data;
        loaderContainer1.style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
        loaderContainer1.style.display = "none";
      });
  });
});
