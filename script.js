document
  .querySelector(".hamburger")
  .addEventListener("click", function () {
    document.querySelector(".menu-button-container").classList.toggle("active");
    document.querySelector(".header-contacts").classList.toggle("hidden");
    document.querySelector(".m-menu").classList.toggle("hidden");
  });

const TOKEN = "5899219382:AAG2nnU-U_eadWorOweyjX3oNqzxy0p0s0c";
const CHAT_ID = "-862931544";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById("success");

document.getElementById("meas").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отрправитель: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.phone.value}\n`;
  message += `<b>Площадь объекта, кв.м.: </b> ${this.square.value}\n`;
  message += `<b>Тип объекта: </b> ${this.object.value}\n`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.phone.value = "";
      success.style.display = "flex";
      setTimeout(() => (success.style.display = "none"), 2000);
    })
    .catch((err) => {
      console.log("err");
    })
    .finally(() => {
      console.log("fin");
    });
});

document.getElementById("req").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отрправитель: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.phone.value}\n`;
  message += `<b>Дата замера: </b> ${this.data.value}\n`;
  message += `<b>Адреc: </b> ${this.adress.value}\n`;
  message += `<b>Комментарий: </b> ${this.comment.value}\n`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.phone.value = "";
      success.style.display = "flex";
      setTimeout(() => (success.style.display = "none"), 2000);
    })
    .catch((err) => {
      console.log("err");
    })
    .finally(() => {
      console.log("fin");
    });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
