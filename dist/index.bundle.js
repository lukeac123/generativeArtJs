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
/* harmony import */ var _sketches_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sketches/canvas */ "./src/sketches/canvas.js");
/* harmony import */ var _sketches_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sketches_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_myscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/myscript */ "./src/scripts/myscript.js");



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

/***/ "./src/sketches/canvas.js":
/*!********************************!*\
  !*** ./src/sketches/canvas.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth - 20
const canvasWidth = canvas.width
canvas.height = innerHeight - 20
const canvasHeight = canvas.height
c.globalCompositeOperation = "destination-over";

addEventListener('resize', () => {
  canvas.width = innerWidth - 20
  canvas.height = innerHeight - 20
  init()
})

function init() {
  for (let i = 0; i < 10; i++) {
    objects.push(new Object (i*100, 100, 10, 'blue'))
  }
  draw()
}

let objects = []

function draw(){
  requestAnimationFrame(draw)
  c.clearRect(0, 0, canvasWidth, canvasHeight); // clear canvas
  objects.forEach(object => {
   object.update()
   object.show()
  })
}


init()




//Can the objects be kept in a different file - maybe these can be converted into react components ?
//Would using react components cause any issues ?

function Object(x, y, radius, color){
  this.maybePositive = Math.random() < 0.5 ? -1 : 1
  this.radians = Math.random()*Math.PI*2;
  this.velocity = 0.01 ;
  this.distanceFromCenter = {
    x: (Math.random() < 0.5 ? -1 : 1)*Math.random()*10,
    y: (Math.random() < 0.5 ? -1 : 1)*Math.random()*10
  }
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color

  this.update = () => {
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * radius + this.distanceFromCenter.x;
    this.y = y + Math.sin(this.radians) * radius + this.distanceFromCenter.y;
  }

  this.show = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.strokeStyle = 'red'
    c.fill()
    c.stroke()
    c.closePath()
  }
}




  // for (let i = 0; i < canvasWidth; i++) {
  //   for (let j = 0; j < canvasHeight; j++) {
  //     c.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
  //     c.fillRect(j * 100, i * 100, 100, 100);
  //   }
  // }



          // c.beginPath();
        // const x = 100; // x coordinate
        // const y = 100; // y coordinate
        // const radius = 20; // Arc radius
        // const startAngle = 0; // Starting point on circle
        // const endAngle = Math.PI*2; // End point on circle
        // const counterclockwise = true; // clockwise or counterclockwise
        // c.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        // c.lineWidth = 1;
        // c.strokeStyle = 'black';
        // c.fill();

        // c.moveTo(75, 50);
        // c.lineTo(100, 75);
        // c.lineTo(100, 25);
        // c.fill();


/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map