let menuItem = document.querySelector(".menuItem")
let menuBar = document.querySelector(".menuBar")
let menuItemUl = document.querySelector(".innerMenuItem")
let lists = document.querySelectorAll(".menuItem ul li")
let megaHeader = document.querySelector(".megaHeader")
let header = document.querySelector("header")
let headerDarkFlag = header.classList.contains("darkHeader")

let headerFlag = false
// menuItemUl.addEventListener("mouseenter", function () {
//     menuItem.classList.add("activeListMenu");
// });

// menuItemUl.addEventListener("mouseleave", function () {
//     menuItem.classList.remove("activeListMenu");
// });

menuBar.addEventListener("click", function () {
    headerFlag = !headerFlag; // تغییر مقدار
    if (headerFlag) {
        menuBar.classList.add("activeMenuBar")
        megaHeader.classList.add("activeMegaMenu");
        megaHeader.classList.add("activeListHeader");
        header.classList.add("darkHeader");
        setTimeout(() => {

            // نمایش آیتم‌ها از پایین به بالا (دونه‌دونه)
            lists.forEach((element, index) => {
                setTimeout(() => {
                    element.querySelector("a").style.transform = "translateY(0)";
                }, index * 100); // هر آیتم 50ms بعد از قبلی ظاهر بشه
            });

        }, 700);
    } else {
        // مخفی کردن آیتم‌ها از بالا به پایین (دونه‌دونه)
        menuBar.classList.remove("activeMenuBar")
        megaHeader.classList.remove("activeListHeader");

        lists.forEach((element, index) => {
            setTimeout(() => {
                element.querySelector("a").style.transform = "translateY(-100%)";
            }, index * 100);
        });

        // بعد از اتمام انیمیشن، megaMenu رو ببندیم
        setTimeout(() => {
            megaHeader.classList.remove("activeMegaMenu");
            if (!headerDarkFlag) {

                header.classList.remove("darkHeader");
            }
        }, lists.length * 100 + 200); // 200ms اضافه برای اطمینان
    }
});



let searchBtn = document.querySelector(".searchBtn");
let searchForm = document.querySelector(".searchForm");
let toggleSearch = document.querySelector(".toggleSearch");

searchBtn.addEventListener("click", function () {
    searchBtn.classList.toggle("activeSearchBtn");
    searchForm.classList.toggle("activeSearchForm");
    toggleSearch.classList.toggle("activeToggleSearch");
});
