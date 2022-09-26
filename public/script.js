AOS.init();

//to flip in on page load
const blurBox = document.getElementById("blur--box");
function box() {
    blurBox.classList.remove("hidden")
}

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

 
// To Create and handle cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("banner").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("banner").style.display = "none";
}else{
    document.getElementById("banner").style.display = "block";
}