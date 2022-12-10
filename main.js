/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/fieldGame.css":
/*!*******************************!*\
  !*** ./src/css/fieldGame.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game/./src/css/fieldGame.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_appGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/appGame.js */ \"./src/js/appGame.js\");\n/* harmony import */ var _js_appGame_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_appGame_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_fieldGame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/fieldGame.css */ \"./src/css/fieldGame.css\");\n\n\n\n\n//# sourceURL=webpack://game/./src/index.js?");

/***/ }),

/***/ "./src/js/appGame.js":
/*!***************************!*\
  !*** ./src/js/appGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: Goblin } = __webpack_require__(/*! ./goblin/goblin.js */ \"./src/js/goblin/goblin.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const fiedls = document.querySelector('.fieldGame');\n  const btn = document.querySelector('.activeGoblinBtn');\n  const gonlin = new Goblin(fiedls);\n\n  btn.addEventListener('click', () => {\n    // gonlin.movingdGoblin();\n    // console.log('click')\n    // statusGame = true;\n    setInterval(() => {\n      gonlin.movingdGoblin();\n    }, 1500);\n  });\n});\n\n\n//# sourceURL=webpack://game/./src/js/appGame.js?");

/***/ }),

/***/ "./src/js/goblin/goblin.js":
/*!*********************************!*\
  !*** ./src/js/goblin/goblin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goblin)\n/* harmony export */ });\nclass Goblin {\n  constructor(fields) {\n    this.fields = fields;\n  }\n\n  movingdGoblin() {\n    const boxes = this.fields.querySelectorAll('.box');\n    const active = this.fields.querySelector('.box_active');\n\n    if (active === null) {\n      // console.log('Start');\n\n      boxes[Math.floor(Math.random() * 16)].classList.add('box_active');\n    } else {\n      const boxId = Number(active.dataset.id);\n      let item = Math.floor(Math.random() * 16);\n\n      active.classList.remove('box_active');\n\n      if (boxId === item) {\n        // console.log(`ПОвтор ${boxId} ${item}`)\n        item = Math.floor(Math.random() * 4);\n      }\n\n      boxes[item].classList.add('box_active');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/js/goblin/goblin.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;