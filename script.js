function MobileMenu() {
    document.getElementById("Sidebar").style.right = "0"
}
function CloseMenu() {
    document.getElementById("Sidebar").style.right = "-350px"
}
let myButton = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;
    if (myButton > currentScrollPosition) {
        document.getElementById("myBtn").style.opacity = "0" ;
    }
    else {
        document.getElementById("myBtn").style.opacity = "1";
    }
    myButton = currentScrollPosition;
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function OpenTab(evt, TabName) {
    let tabContent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.getElementsByClassName("Tab");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" Active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " Active";
}

let coll = document.getElementsByClassName("accordion");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
let Btn = document.getElementsByClassName("show");
for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click", function () {
        console.log(Btn[i])
        let content = this.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            Btn[i].innerHTML = "مشخصات بیشتر"
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            Btn[i].innerHTML = "بستن"
        }
    })
}
