AOS.init();

//to flip in on page load
const blurBox = document.getElementById("blur--box");
blurBox.classList.remove("hidden");

/*window.addEventListener("load", () => {
    blurBox.classList.remove("hidden")
})*/

//the FAQ section controll
let questCont = document.querySelectorAll(".quest-cont");
let qaCont = document.querySelectorAll(".quest");
//for each quest cont
questCont.forEach((que, index) => {
    let hiddenAns = qaCont[index].lastElementChild;
    let close = questCont[index].lastElementChild;
    let clicked = false;
    que.addEventListener("click", () => {
        if (clicked === false) {
            hiddenAns.classList.remove("hidden")
            close.style.transform = "rotate(180deg)"
            clicked = true
        } else if (clicked === true) {
            hiddenAns.classList.add("hidden")
            close.style.transform = "rotate(360deg)"
            clicked = false
        }

    })
})
/*function hideAll() {
    qaCont.forEach((item) => {
        let ans = item.lastElementChild;
        item.addEventListener("click", () =>{
            ans.classList.add("hidden");
        })
    })
}*/

//to control the mobile dropdown menu
const dropBtn = document.getElementById("open-dropdown");
const closeBtn = document.getElementById("close-dropdown");
const dropTray = document.getElementById("dropdown-tray");

dropBtn.addEventListener("click", () => {
    dropTray.classList.remove("hidden")
    dropBtn.classList.add("hidden")
    closeBtn.classList.remove("hidden")
})
closeBtn.addEventListener("click", () => {
    dropTray.classList.add("hidden")
    dropBtn.classList.remove("hidden")
    closeBtn.classList.add("hidden")
})

//to toggle password visibility!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function togglePsw() {
    let passwordInput = document.querySelectorAll(".pass-input");
    passwordInput.forEach((item, index) => {
        if (item.type === "password") {
            item.type = "text";
        } else {
            item.type = "password";
        }
    })
  } 