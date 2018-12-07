// Makes it so when the page is launched on mobile, it starts in the right spot.
if (screen.width <= 480) {
    document.location.url = "index.html#mobileTop";
}
// Allows a button that hides and shows the navgation when in mobile.
function navShow() {
    document.getElementById('navIcon').style.display = 'none'
    document.getElementById('navX').style.display = 'block'
    document.getElementById('headerRight').style.display = 'block'
}

function navHide() {
    document.getElementById('navIcon').style.display = 'block'
    document.getElementById('navX').style.display = 'none'
    document.getElementById('headerRight').style.display = 'none'
}