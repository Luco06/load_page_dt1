const anime = document.getElementById('anime');
anime.addEventListener('click', event => {
    var finger = document.getElementById('finger');
    var tear = document.getElementById('tear');
    finger.style.transitionDuration="1s";
    finger.style.opacity--;

    tear.style.visibility="visible";
    tear.style.transform="translateY(235px)";
    tear.style.opacity--;
    tear.style.transitionDuration="3s";

})