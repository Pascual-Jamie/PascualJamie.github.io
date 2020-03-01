/* *********************************Topic 9 (I)****************** */

function playing(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playing);


function eKey() {
    const ePress = document.getElementById('e');
    let e = new Audio();
    e.src = "media/pianoE.wav";
    if (!e) return;
    e.currentTime = 0;
    e.play();
    ePress.classList.add('playing');
}

function fKey() {
    const fPress = document.getElementById('f');
    let f = new Audio();
    f.src = "media/pianoF.wav";
    if (!f) return;
    f.currentTime = 0;
    f.play();
    fPress.classList.add('playing');
}

function gKey() {
    const gPress = document.getElementById('g');
    let g = new Audio();
    g.src = "media/pianoG.wav";
    if (!g) return;
    g.currentTime = 0;
    g.play();
    gPress.classList.add('playing');
}

function aKey() {
    const aPress = document.getElementById('a');
    let a = new Audio();
    a.src = "media/pianoA.wav";
    if (!a) return;
    a.currentTime = 0;
    a.play();
    aPress.classList.add('playing');
}

function bKey() {
    const bPress = document.getElementById('b');
    let b = new Audio();
    b.src = "media/pianoB.wav";
    if (!b) return;
    b.currentTime = 0;
    b.play();
    bPress.classList.add('playing');
}

function c1Key() {
    const c1Press = document.getElementById('c1');
    let c1 = new Audio();
    c1.src = "media/pianoC.wav";
    if (!c1) return;
    c1.currentTime = 0;
    c1.play();
    c1Press.classList.add('playing');
}

function d2Key() {
    const d2Press = document.getElementById('d2');
    let d2 = new Audio();
    d2.src = "media/pianoD.wav";
    if (!d2) return;
    d2.currentTime = 0;
    d2.play();
    d2Press.classList.add('playing');
}
