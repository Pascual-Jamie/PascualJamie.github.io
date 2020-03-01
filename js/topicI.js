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

function cKey() {
    const cPress = document.getElementById('c');
    let c = new Audio();
    c.src = "media/pianoC.wav";
    if (!c) return;
    c.currentTime = 0;
    c.play();
    cPress.classList.add('playing');
}

function dKey() {
    const dPress = document.getElementById('d');
    let d = new Audio();
    d.src = "media/pianoD.wav";
    if (!d) return;
    d.currentTime = 0;
    d.play();
    dPress.classList.add('playing');
}
