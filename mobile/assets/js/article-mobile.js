

let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {
    console.log(args);
    
}
document.querySelector('.submitComment').addEventListener('click', (event) => {
    //  let input1  = document.querySelector('.namee')
    event.preventDefault();
    let textar = document.querySelectorAll('.commentP input')
    let emptyFlag = false;
    textar.forEach(element => {
        if (element.value == "") {
            emptyFlag = true
        }
    });
    if (!emptyFlag) {

        let val = document.querySelector(".commentP textarea").value;
        let userName = document.querySelector(".commentP .userName").value;
        console.log("val", val);
        $bc.setSource('db.send', true)
        $bc.setSource('db.senduserName', userName)
        $bc.setSource('db.sendcomment', val)
        $bc.setSource('db.run', true)
        let sendbox = document.querySelector('.messageSend')
        let text = sendbox.querySelector('p')
        text.innerHTML = 'درخواست شما با موفقیت ثبت شد'
        commentP.reset()
        messageSend.style.display = "block"

        document.querySelector(".commentP").reset();
        setTimeout(() => {
            messageSend.style.display = "none"
        }, 3500)
    }
    else {
        let sendbox = document.querySelector('.messageSend')
        let text = sendbox.querySelector('p')
        text.innerHTML = 'فیلدهای الزامی را پر کنید'
        messageSend.style.display = "block"

        setTimeout(() => {
            messageSend.style.display = "none"
        }, 3500)

    }


})





const commentListSlider = new Swiper('.commentListSlider', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});
const relatedBlog = new Swiper('.relatedBlog', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});
const relatedProductSlider = new Swiper('.relatedProductSlider', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});
const relatedProjectSlider = new Swiper('.relatedProjectSlider', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});