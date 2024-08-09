let tiles = document.querySelectorAll(".tile");
let boxes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let gameActive = true;
let x = [];
let y = [];
let turn = true;
let audio = document.createElement('audio');
let wini = document.createElement('audio');
wini.src = "mixkit-video-game-win-2016.wav";
audio.src = "pick-92276-[AudioTrimmer.com].mp3";
audio.preload = "auto";
let win = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];
function resetGame() {
    gameActive = true;
    turn = true;
    x = [];
    y = [];
    document.querySelector('.win').innerText = '';
    for (let tile of tiles) {
        tile.innerText = '';
    }
}
    for (let tile of tiles) {
        tile.addEventListener('click',
        function() {
            if (!gameActive) return;

            let id = this.getAttribute("id");
            let box = document.getElementById(id);

            if (y.includes(id) || x.includes(id)) {
                console.log("Tile already clicked");
                return;
            }

            audio.play();

            if (turn) {
                box.innerText = "X";
                x.push(id);
            } else {
                box.innerText = "O";
                y.push(id);
            }

            for (let i = 0; i < win.length; i++) {
                if ((x.includes(win[i][0]) && x.includes(win[i][1]) && x.includes(win[i][2])) || (y.includes(win[i][0]) && y.includes(win[i][1]) && y.includes(win[i][2]))) {
                    wini.play();
                    let h2 = document.querySelector('.win');
                    if (turn) {
                        h2.innerText = "X wins!";
                    } else {
                        h2.innerText = "O wins!";
                    }
                    active = false;
                    gameActive = false;
                    break;
                }
            }

            turn = !turn;
        });
    }
let reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);
