const anime = document.getElementById('anime');

function progress(){
    var i =0;
    var run = setInterval(function frames(){
        i = i +1;
        if(i == 101){
            clearInterval(run);
        }else{
            var counter  = document.querySelector(".counter");
            counter.textContent = i + "mg/dl";
        }
    },25)
    setTimeout(function stopPoint(){
        var stop = document.querySelector(".stop");
        stop.style.display = "block";
    },5000);
    }

anime.addEventListener('click', event => {
    var finger = document.getElementById('finger');
    var tear = document.getElementById('tear');
    var box = document.getElementById('box');
    finger.style.transitionDuration="1s";
    finger.style.opacity--;

    tear.style.visibility="visible";
    tear.style.transform="translateY(200px)";
    tear.style.transitionDuration="3s";
    tear.style.opacity--;
    
    box.style.visibility="visible";
    progress();
})

