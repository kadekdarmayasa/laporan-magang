const backToTop = document.getElementById('back-to-top');
const yakin = document.querySelector('.yakin');

window.onscroll = function () {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}