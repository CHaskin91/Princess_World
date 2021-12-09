cross = true;
score = 0;
    document.onkeydown = function(e) {
        console.log(e.keyCode);
        if (e.keyCode == 38) {
            princess = document.querySelector('.princess');
            princess.classList.add('animateprincess');

            setTimeout(() => {
                princess.classList.remove('animateprincess');
            }, 700);
        }  
        
        if (e.keyCode == 37) {
            princess = document.querySelector('.princess');
            princessx = parseInt(window.getComputedStyle(princess, null).getPropertyValue('left'));
            princess.style.left = princessx - 112 + "px";
        } 
        
        if (e.keyCode == 39) {
            princess = document.querySelector('.princess');
            princessx = parseInt(window.getComputedStyle(princess, null).getPropertyValue('left'));
            princess.style.left = princessx + 112 + "px";
        }
    }

    setInterval(() => {
        princess = document.querySelector('.princess');
        gameover = document.querySelector('.gameover');
        obstacle = document.querySelector('.obstacle');

        dx = parseInt(window.getComputedStyle(
            princess, null).getPropertyValue('left'));
  
        dy = parseInt(window.getComputedStyle(
            princess, null).getPropertyValue('bottom'));
  
        ox = parseInt(window.getComputedStyle(
            obstacle, null).getPropertyValue('left'));
  
        oy = parseInt(window.getComputedStyle(
            obstacle, null).getPropertyValue('bottom'));
  
        offsetx = Math.abs(dx - ox);
        offsety = Math.abs(dy - oy);
  
        console.log(offsetx, offsety);

        if (offsetx < 120 && offsety <= 144) {
            if (score != 0)
                scorecount.innerHTML = "Your Score: " + score;
            gameover.style.visibility = 'visible';
            obstacle.classList.remove('animateobstacle');
        } else if (offsetx < 125 && cross) {
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setInterval(() => {
                obsanidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                obstacle.style.animationDuration = obsanidur - 0.01 + 's';
            }, 500);
        }
    }, 10);

    function updateScore(score) {
        scorecount.innerHTML = "Your Score: " + score;
    }