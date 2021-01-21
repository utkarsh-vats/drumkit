let drumkit = document.getElementById("drumkit");

let data = {
    "A": {
        name: "Clap",
        sound: "sounds/clap.wav",
    },
    "S": {
        name: "Hihat",
        sound: "sounds/hihat.wav",
    },
    "D": {
        name: "Kick",
        sound: "sounds/kick.wav"
    },
    "F": {
        name: "Openhat",
        sound: "sounds/openhat.wav"
    },
    "G": {
        name: "Boom",
        sound: "sounds/boom.wav"
    },
    "H": {
        name: "Ride",
        sound: "sounds/ride.wav"
    },
    "J": {
        name: "Snare",
        sound: "sounds/snare.wav"
    },
    "K": {
        name: "Tom",
        sound: "sounds/tom.wav"
    },
    "L": {
        name: "Tink",
        sound: "sounds/tink.wav"
    },
};

function playDrum(key) {
    var audio = new Audio();
    audio.src = data[key].sound;
    audio.play();
}

function handleKeys(event) {
    playDrum(event.key.toUpperCase());
}

function construct() {
    for(let key in data) {
        let drumEl = document.createElement("div");
        drumEl.classList.add("drum");

        let h2 = document.createElement("h2");
        h2.textContent = key;

        let span = document.createElement("span");
        span.textContent = data[key].name;

        drumEl.appendChild(h2);
        drumEl.appendChild(span);
        drumkit.appendChild(drumEl);

        data[key].el = drumEl;

        drumEl.addEventListener("click", (event) => {
            let key1 = event.currentTarget.querySelector("h2").textContent;
            playDrum(key1);
        });
    }
};

window.addEventListener("keydown", handleKeys);

construct();