/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/buttons.js":
/*!***************************!*\
  !*** ./src/js/buttons.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": function() { return /* binding */ Buttons; }\n/* harmony export */ });\nconst Buttons = () => {// slide in\n  // const slideIn = document.getElementById('slide-in')\n  // if (slideIn) {\n  //   slideIn.addEventListener('mouseenter', (e) => {\n  //     isMouseOver = true\n  //     slideIn.childNodes[1].style.opacity = 1\n  //     slideIn.childNodes[1].style.transform = 'translate3D(0, 0, 0)'\n  //   })\n  //   slideIn.addEventListener('mouseleave', (e) => {\n  //     isMouseOver = false\n  //     slideIn.childNodes[1].style.transform = 'translate3D(-100%, 0, 0)'\n  //   })\n  //   slideIn.childNodes[1].addEventListener('transitionend', function () {\n  //     if (!isMouseOver) {\n  //       slideIn.childNodes[1].style.opacity = 0\n  //       slideIn.childNodes[1].style.transform = 'translate3D(100%, 0, 0)'\n  //     }\n  //   })\n  // }\n};\n\n//# sourceURL=webpack://web_template_gulp/./src/js/buttons.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/js/buttons.js\");\n/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wave */ \"./src/js/wave.js\");\n\n\n(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.Buttons)(); // Wave()\n\n//# sourceURL=webpack://web_template_gulp/./src/js/index.js?");

/***/ }),

/***/ "./src/js/wave.js":
/*!************************!*\
  !*** ./src/js/wave.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wave\": function() { return /* binding */ Wave; }\n/* harmony export */ });\nconst Wave = () => {\n  let unit = 100;\n  let canvas;\n  let context;\n  let height;\n  let width;\n  let xAxis;\n  let yAxis;\n\n  function init() {\n    canvas = document.getElementById('waveCanvas');\n    canvas.width = document.documentElement.clientWidth;\n    canvas.height = 300;\n    context = canvas.getContext('2d');\n    height = canvas.height;\n    width = canvas.width;\n    xAxis = Math.floor(height / 2);\n    yAxis = 0;\n    draw();\n  }\n\n  function draw() {\n    context.clearRect(0, 0, width, height);\n    drawWave('#000', 1, 3, 0);\n    draw.seconds = draw.seconds + 0.009;\n    draw.t = draw.seconds * Math.PI;\n    setTimeout(draw, 35);\n  }\n\n  draw.seconds = 0;\n  draw.t = 0;\n\n  function drawWave(color, alpha, zoom, delay) {\n    context.fillStyle = color;\n    context.globalAlpha = alpha;\n    context.beginPath();\n    drawSine(draw.t / 0.5, zoom, delay);\n    context.lineTo(width + 10, height);\n    context.lineTo(0, height);\n    context.closePath();\n    context.fill();\n  }\n\n  function drawSine(t, zoom, delay) {\n    let x = t;\n    let y = Math.sin(x) / zoom;\n    context.moveTo(yAxis, unit * y + xAxis);\n\n    for (let i = yAxis; i <= width + 10; i += 10) {\n      x = t + (-yAxis + i) / unit / zoom;\n      y = Math.sin(x - delay) / 3;\n      context.lineTo(i, unit * y + xAxis);\n    }\n  }\n\n  init();\n};\n\n//# sourceURL=webpack://web_template_gulp/./src/js/wave.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;