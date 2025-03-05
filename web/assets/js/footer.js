let openPopFooterBtn = document.querySelector(".openPopFooterBtn");
let popFooter = document.querySelector(".popFooter");
let closePopForm = document.querySelector(".closePopForm");

openPopFooterBtn.addEventListener("click", function (params) {
  console.log("adddddd");
  
  popFooter.classList.add("activePopFooter");
});
closePopForm.addEventListener("click", function (params) {
  popFooter.classList.remove("activePopFooter");
});

const host = {
  debug: !1,
  settings: {
    "connection.web.callcommand": "/",
    "connection.web.trust_login": "https://basispanel.ir/apicms",
    "connection.web.basiscore": "https://basispanel.ir/apicms",
    "connection.web.media": "https://basispanel.ir/apicms",
    "connection.web.userbehavior": "https://basispanel.ir/apicms",
    "default.dbsource.verb": "post",
    "default.call.verb": "get",
    "default.viewCommand.groupColumn": "prpid",
    "default.dmnid": "4931",
    "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};

let captchaInput;
let captchaContainerclass;

let loaderContainer = document.querySelector(".loaderContainer");
let formBtn = document.querySelector(".formBtn");
let loaderForm = document.querySelector(".loaderForm");
formBtn.addEventListener("click", function (params) {
  formBtn.querySelector("span").style.display = "none";
  loaderForm.style.display = "block";
  console.log(captchaInput.value);

  if (captchaInput.value == "") {
    captchaContainerclass.style.background = "#FFE1E1";
    captchaInput.setAttribute("placeholder", "لطفا عبارت امنیتی را وارد کنید");
    captchaInput.classList.add("errorPlaceholder");
    setTimeout(() => {
      captchaContainerclass.style.background = "#FFFFFF";
      captchaInput.setAttribute("placeholder", "");
      captchaInput.classList.remove("errorPlaceholder");

      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
    }, 3000);
  }
});
function onSource1(args) {
  console.log("onSource");
  const captcha = document.querySelector(
    ".homeForm1 #requestBox input[name='captcha']"
  ).value;
  const captchaid = document.querySelector(
    ".homeForm1 #requestBox input[name='captchaid']"
  ).value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  console.log("stringJson", stringJson);
  $bc.setSource("edit.object1", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
  });
}

let responsMsg = document.querySelector(".responsMsg1");
let responsMsgIn = document.querySelector(".responsMsg1 span");
async function OnProcessedEditObject1(args) {
  console.log("OnProcessedEditObject1");
  const response = args.response;
  const json = await response.json();
  console.log(json);

  if (json.errorid == 6) {
    console.log(json);
    responsMsg.style.display = "block";
    responsMsgIn.innerHTML = "درخواست شما با موفقیت ثبت گردید";
    responsMsgIn.style.color = "#1A6902";
    document.querySelector("form").reset();
    let questions = document.querySelectorAll(
      ".homeForm1 div[data-bc-question]"
    );
    setTimeout(() => {
      responsMsg.style.display = "none";
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
    }, 2000);
  }
  if (json.errorid == 4) {
    console.log(json);

    responsMsgIn.innerHTML = "مشکلی پیش آمده، لطفا مجدد تلاش فرمایید.";

    responsMsg.style.display = "block";
    responsMsgIn.style.color = "#FF2727";
    document.querySelector("form").reset();

    setTimeout(() => {
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
      responsMsg.style.display = "block";
    }, 2000);
  }
  if (json.errorid == 15 && captchaInput.value != "") {
    console.log(json);

    responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";

    setTimeout(() => {
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
      responsMsg.style.display = "block";
    }, 2000);
  }
}

function renderFn1(params) {

  
  document.querySelector(".qclass8").style.display = "block";
  captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
  captchaContainerclass = document.querySelector(".captchaContainerclass");
  loaderContainer.style.display = "none";
  console.log(loaderContainer,'loaderContainer');
  let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
  questions.forEach((element) => {
    element.classList.add("afterStar");

    let title = element.querySelector(".homeForm1 [data-bc-question-title]");
    let qInput = element.querySelector(".homeForm1 input");
    let qTxtArea = element.querySelector(".homeForm1 textarea");
    if (title) {
      title = element.querySelector(
        ".homeForm1 [data-bc-question-title]"
      ).innerHTML;
      if (qInput) {
        qInput.setAttribute("placeholder", title);
        qInput.setAttribute("aria-label", title);
      } else if (qTxtArea) {
        qTxtArea.setAttribute("placeholder", title);
        qTxtArea.setAttribute("aria-label", title);
      }
    }
    // console.log("q", qInput);
  });
}

function renderEditobject(params) {
  loaderContainer.style.display = "none";
}
