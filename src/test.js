import string from "./css.js";

let string2 = "";

const player = {
  id: undefined,
  time: 20,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    if (string[player.n] === "\n") {
      string2 += "<br>";
    } else if (string[player.n] === " ") {
      string2 += "&nbsp";
    } else if (string[player.n] !== undefined) {
      string2 += string[player.n];
    }
    player.ui.demo.innerHTML = string2;
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 50;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 20;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
