function resetScore() {
    document.getElementById("npc-score").innerHTML = "0";
    document.getElementById("score").innerHTML = "0";
    document.getElementById("timer").innerHTML = "00:00";
}

function initalClickListeners() {
    document.getElementById("start").onclick = () => {
        document.getElementById("start-content-container").style.display = "none";
        resetScore();
        go("game");
        
        document.getElementsByTagName("canvas")[0].focus();
    }
    
    document.getElementById("restart").onclick = () => {
        document.getElementById("game-over").style.display = "none";
        document.getElementById("game-win").style.display = "none";
        resetScore();
        go("game");
        
        document.getElementsByTagName("canvas")[0].focus();
    }
    
    document.getElementById("go-back").onclick = () => {
        document.getElementById("game-over").style.display = "none";
        document.getElementById("game-win").style.display = "none";
        resetScore();
        document.getElementById("start-content-container").style.display = "block";
    }
}

export default { initalClickListeners };