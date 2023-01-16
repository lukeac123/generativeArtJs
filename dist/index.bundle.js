/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sketches_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sketches/static */ "./src/sketches/static.js");
/* harmony import */ var _sketches_static__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sketches_static__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_myscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/myscript */ "./src/scripts/myscript.js");
// import './sketches/canvas'



// sketch()
const hi = Object(_scripts_myscript__WEBPACK_IMPORTED_MODULE_1__["default"])()
console.log(hi)

//call script to make the music connection and return the float array with the music values 
//pass the music values into the canvas.js file and use as input for the update function


/***/ }),

/***/ "./src/scripts/myscript.js":
/*!*********************************!*\
  !*** ./src/scripts/myscript.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return myScript; });
function myScript(){
    const x = 5
    const y = 10 
    const z = x + y
    return z
}

/***/ }),

/***/ "./src/sketches/static.js":
/*!********************************!*\
  !*** ./src/sketches/static.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth*0.9
let width = canvas.width
canvas.height = innerHeight*0.9
let height = canvas.height
// c.globalCompositeOperation = "destination-over";
    
addEventListener('resize', () => {
    width = innerWidth*0.9
    height = innerHeight*0.9
    draw()
})

function draw() {
    c.fillStyle = 'gray'
    c.fillRect(0,0, width, height)

    const createGrid = () => {
        const points = []
        const count = 5 
        for (let x = 0; x < count; x++){
            for (let y = 0; y < count; y++){
                const u = x / count
                const v = y / count
                points.push([ u, v ])
            }}
            return points
        };


    const points = createGrid()
    points.forEach(([ u, v ]) => {
        u = u*width
        v = v*height

        c.beginPath()
        c.arc(u, v, 100, 0, Math.PI * 2, false)
        c.fillStyle = 'blue'
        c.strokeStyle = 'red'
        c.fill()
        c.stroke()
        c.closePath()


    })
}

draw()





/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map