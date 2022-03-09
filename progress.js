const move = () => {
    const maxProgressBarWidth = document.getElementById('porgress-bar').clientWidth;
    let currentProgressBarWidth = document.getElementById('progress').clientWidth;
    const currentProgressBar = document.getElementById('progress');

    const moving = () => {
        if (currentProgressBarWidth == maxProgressBarWidth) {
            return;
        }
        else {
            currentProgressBar.style.width = currentProgressBarWidth + 1 + 'px';
            currentProgressBarWidth++;

        }

    }
    setInterval(moving, 10);

}