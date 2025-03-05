let projects = document.querySelectorAll(".section5 .projectBox")
projects.forEach((element,i) => {
    element.querySelector(".number").innerHTML=`0${projects.length-(i)}`
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loaderHome").classList.add("endLoader");
    }, 6000); 
});

let scrollBtmHomePage = document.querySelector(".scrollBtmHomePage")
scrollBtmHomePage.addEventListener("click", function (params) {
    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });

})

