// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\n/* Hello, \u4ECA\u5929\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u76AE\u5361\u4E18 */\n\n/* \u8FD9\u91CC\u5F00\u59CB\u51C6\u5907\u5DE5\u4F5C */\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n.skin *::before, .skin *::after{\n    box-sizing: border-box;\n  }\n\n/* \u5728\u8FD9\u91CC\u7ED9\u76AE\u5361\u4E18\u4E00\u4E2A\u80CC\u666F\u8272 */\n  .skin {\n    position: relative;\n    background: #ffe600;\n    min-height: 50vh;\n  }\n\n/* \u5F00\u59CB\u7ED9\u76AE\u5361\u4E18\u753B\u9F3B\u5B50 */  \n  .nose {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 10;\n  }\n  .yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n  }\n\n/* \u8BA9\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\u52A8\u8D77\u6765 */  \n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(6deg);\n    }\n    66% {\n      transform: rotate(-6deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom;\n    animation: wave 200ms infinite linear;\n  }\n\n/* \u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B */   \n  .eye {\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n  }\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid black;\n    width: 32px;\n    height: 32px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 6px;\n    top: 0px;\n  }\n  .eye.left {\n    transform: translateX(-120px);\n  }\n  .eye.right {\n    transform: translateX(120px);\n  }\n\n/* \u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u5634\u5DF4 */    \n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n  }\n  .mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n  }\n  .mouth .up .lip {\n    border: 4px solid black;\n    height: 30px;\n    width: 100px;\n    position: relative;\n    border-top-color: transparent;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n  }\n  .mouth .up .lip::before {\n    content: \"\";\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left::before {\n    right: -6px;\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(53px);\n  }\n  .mouth .up .lip.right::before {\n    left: -6px;\n  }\n  .mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 {\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px / 300px;\n    background: #8f1e12;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    width: 200px;\n    height: 300px;\n    background: #ed5961;\n    position: absolute;\n    bottom: -160px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n  }\n\n/* \u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u8138\u988A\u7684\u7EA2\u6655 */\n  .face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n  }\n  .face.left {\n    transform: translateX(-180px);\n    background: red;\n    border-radius: 50%;\n  }\n  .face.right {\n    transform: translateX(180px);\n    background: red;\n    border-radius: 50%;\n  }\n\n/* \u4E00\u4E2A\u76AE\u5361\u4E18\u5C31\u753B\u597D\u5566 */\n/* \u5E0C\u671B\u4F60\u80FD\u559C\u6B22~ */  \n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string2 = "";
var player = {
  id: undefined,
  time: 20,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    if (_css.default[player.n] === "\n") {
      string2 += "<br>";
    } else if (_css.default[player.n] === " ") {
      string2 += "&nbsp";
    } else if (_css.default[player.n] !== undefined) {
      string2 += _css.default[player.n];
    }

    player.ui.demo.innerHTML = string2;
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 20;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.5305e96e.js.map