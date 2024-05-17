const showBtn = document.querySelector("#show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector("#hide-btn");
const overlay = document.getElementById("overlay");
const cinfirmBtn = document.querySelector(".confirm-btn");
const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showBtn.addEventListener("click", () => {
  removeHidden();
});
closeBtn.addEventListener("click", () => {
  addHidden();
});
overlay.addEventListener("click", () => {
  addHidden();
});
cinfirmBtn.addEventListener("click", () => {
  addHidden();
  numc.textContent = "0";
  numa.textContent = "0";
  alert(`Your order has been recieved!`);
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

const imgCup = document.querySelector(".coffee-imgc");
const imgAme = document.querySelector(".coffee-imga");
const numc = document.querySelector(".numc");
const numa = document.querySelector(".numa");

imgCup.addEventListener("click", () => {
  +numc.textContent++;
});
imgAme.addEventListener("click", () => {
  +numa.textContent++;
});
