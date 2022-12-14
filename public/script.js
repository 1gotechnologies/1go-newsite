AOS.init();

//to flip in on page load
const blurBox = document.getElementById("blur--box");
const skyBox = document.getElementById("sky--box");

window.addEventListener("load", () => {
    setTimeout(() => {
        blurBox.classList.remove("hidden")
    } , 2000);
    setTimeout(() => {
        skyBox.classList.remove("hidden")
    } , 3500);
})

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