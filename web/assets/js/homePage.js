let changeFlag = 0;


document.querySelector("header").classList.add("darkHeader")
let lSection2 = document.querySelector(".section2 .lSection")
lSection2.classList.add("leftAnim")
const projectBoxes = document.querySelectorAll('.projectBox');



document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loaderHome").classList.add("endLoader");
    }, 6000); // Loader disappears after 3 seconds
});



projectBoxes.forEach(element => {
    element.classList.add("topBoxes")
    
});

let projects = document.querySelectorAll(".section3 .productBox")

projectBoxes.forEach((box, index) => {
                    
    box.classList.add(`delay-[${Math.floor(0.1*(index+1)*10)/10}s]`);
});
const homeSlider = new Swiper('.homeSlider', {
    // Optional parameters
    mousewheel: true,
    speed: 1000,

    on: {
        slideChange: function () {
            if(this.activeIndex==2){
                console.log("2222222");
                
                projectBoxes.forEach((box, index) => {
                    box.classList.add("topBoxes");
                  });
                projectBoxes.forEach((box, index) => {
                    box.classList.remove("bottomBoxes");
                  });
              
            }
           else  if (changeFlag > this.activeIndex ) {
            console.log(this.activeIndex);
            
                lSection2.classList.add("leftAnim")
                lSection2.classList.remove("rightAnim")

              
            } 
           
            else if(this.activeIndex==4){
                projectBoxes.forEach((box, index) => {
                    box.classList.remove("topBoxes");
                  });
                projectBoxes.forEach((box, index) => {
                    box.classList.add("bottomBoxes");
                  });
              
            }
            else {
                lSection2.classList.remove("leftAnim")
                lSection2.classList.add("rightAnim")
               

                
            }
            
            changeFlag = this.activeIndex
         
        },
    },
});
let scrollBtmHomePage = document.querySelector(".scrollBtmHomePage")
scrollBtmHomePage.addEventListener("click", function (params) {
    homeSlider.slideTo(1, 1000)
})

