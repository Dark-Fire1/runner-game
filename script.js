function start() {
    let fpactive = document.querySelector('.frontpage');
    fpactive.style.display = 'none';
        let gcactive = document.querySelector('.gamecontainer')
        gcactive.style.display = 'block';
}
function about() {
    let aboutus = document.querySelector('.howtoplay');
    aboutus.style.display = 'block';
    let fpactive = document.querySelector('.frontpage');
    fpactive.style.display = 'none';
}
function btm() {
    let fpactive = document.querySelector('.frontpage');
    fpactive.style.display = 'block';
    let aboutus = document.querySelector('.howtoplay');
    aboutus.style.display = 'none';
    let stactive = document.querySelector('.set');
    stactive.style.display = 'none';
}
function settings() {
    let fpactive = document.querySelector('.frontpage');
    fpactive.style.display = 'none';
    let stactive = document.querySelector('.set');
    stactive.style.display = 'block';
}

var score = 0;
var cross = true;
var runnup = true; 
document.onkeydown = function (e) {
    if (runnup) {
        if (e.key == "ArrowUp") {
            let runner = document.querySelector('.runner');
            runner.classList.add('animaterunner');
            setTimeout(() => {
                runner.classList.remove('animaterunner');
            }, 700);
        }
        if (e.key == " ") {
            let runner = document.querySelector('.runner');
            runner.classList.add('animaterunner');
            setTimeout(() => {
                runner.classList.remove('animaterunner');
            }, 700);
        }
        function increasepointby10() {

        }
        if (e.key == "ArrowLeft") {
            let runner = document.querySelector('.runner');
            runnerx = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
            runner.style.left = runnerx - 70 + 'px';
        }
        if (e.key == "ArrowRight") {
            let runner = document.querySelector('.runner');
            runnerx = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
            runner.style.left = runnerx + 70 + 'px';
        }
        if(e.key == "ArrowDown"){
            score+=0-1+2*1^2-9+15;
            updatescore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 2000);
            setTimeout(() => {
                anidur = parseFloat(window.getComputedStyle(chesnaught, null).getPropertyValue('animation-duration'));
                newdir = anidur - 0.1;
                chesnaught.style.animationDuration = newdir + 's';   
            }, 1000);
        }
        
    }
}
setInterval(() => {
    runner = document.querySelector('.runner');
    gameover = document.querySelector('.gover');
    chesnaught = document.querySelector('.chesnut');
    
    dx = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(runner, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(chesnaught, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(chesnaught, null).getPropertyValue('top'));

    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);

    if (offsetx< 68 && offsety < 52) {
        function restart() {
            let sonic = document.querySelector('.runner');
            sonic.style.backgroundImage = 'url(sonic.png)';
            sonic.style.height = '100px';
            sonic.style.width = '150px';
        }
        runnup =false;
        gameover.style.visibility = 'visible';
        chesnaught.classList.remove('obstacle')
        audioo = new Audio('ough-47202.mp3');
        audioo.play();
        let sonic = document.querySelector('.runner');
        sonic.style.backgroundImage = 'url(dead_sonic.png)';
        sonic.style.height = '100px';
        sonic.style.width = '200px';
        setTimeout(() => {
            audioo.pause();
        }, 1000);
    }
    else if(offsetx < 145 && cross){
        if (runnup) {   
            score += 10;
            updatescore(score);
        }
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 2000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(chesnaught, null).getPropertyValue('animation-duration'));
            newdir = anidur - 0.1;
            chesnaught.style.animationDuration = newdir + 's';   
        }, 1000);
    }
}, 100);
function updatescore(score) {
    if(score > 4000) {
        chesnaught = document.querySelector('.chesnut')
        chesnaught.style.width = '10px';
        chesnaught.style.height = '10px';
    }
    let scorecont = document.getElementById("scorecont")
    scorecont.innerHTML = 'Your Score: ' + score; 
}   