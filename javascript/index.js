//Menu dropdown
function subMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}





function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (
        introPosition < screenPosition) {
        introText.classList.add('media-appear');
    }
}

window.addEventListener('scroll', scrollAppear);

function scrollCardAppear() {
    var introText = document.querySelector('.intro-card');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if (
        introPosition < screenPosition) {
        introText.classList.add('card-appear');
    }
}

window.addEventListener('scroll', scrollCardAppear);