export default class Timer {
    constructor(time) {
        this.time = time
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.time = this.time - 1;
            this.updateTimeDisplay()

            if (this.time === 0) {
                this.stopTimer();
                go("game-win");
            }
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    updateTimeDisplay() {
        let minutes = Math.floor(this.time / 60)
        if (minutes < 10) {
            minutes = "0" + minutes
        }

        let seconds = this.time % 60
        if (seconds < 10) {
            seconds = "0" + seconds
        }

        document.getElementById("timer").innerHTML = minutes + ":" + seconds
    }

    resetTimer() {
        this.time = 0
        this.updateTimeDisplay()
    }
}