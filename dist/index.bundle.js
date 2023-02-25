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

// import myScript from './scripts/myscript'
// import './sketches/briannaGhey'




// import './sketches/squares'

// sketch()
// const hi = myScript()
// console.log(hi)

//call script to make the music connection and return the float array with the music values 
//pass the music values into the canvas.js file and use as input for the update function


/***/ }),

/***/ "./src/sketches/canvas.js":
/*!********************************!*\
  !*** ./src/sketches/canvas.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objects */ "./src/utils/objects.js");
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_objects__WEBPACK_IMPORTED_MODULE_1__);



let bodies = []

const {ctx, ctxWidth, ctxHeight} = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["defineCanvas"])(innerWidth*0.8, innerHeight*0.8 )
ctx.globalCompositeOperation = "destination-over";
addEventListener('load', init)
addEventListener('resize', init)


function draw(){
  ctx.clearRect(0, 0, ctxWidth, ctxHeight); // clear canvas
  requestAnimationFrame(draw)
  bodies.forEach(object => {
   object.update()
   object.show()
  })
}

function init() {
  for (let i = 0; i < 10; i++) {
    bodies.push(new _utils_objects__WEBPACK_IMPORTED_MODULE_1__["Body"] (ctx, (1/i)*ctxWidth, 100, 10, 'blue'))
  }
  draw()
}


/***/ }),

/***/ "./src/utils/objects.js":
/*!******************************!*\
  !*** ./src/utils/objects.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Body {
    constructor(ctx, x, y, radius, color) {
      this.maybePositive = Math.random() < 0.5 ? -1 : 1;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.01;
      this.distanceFromCenter = {
        x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10,
        y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10
      };
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
  
      this.update = () => {
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * radius + this.distanceFromCenter.x;
        this.y = y + Math.sin(this.radians) * radius + this.distanceFromCenter.y;
      };
  
      this.show = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'red';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      };
    }
  }












module.exports = { Body }

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

//this should probably be variables that will remain constant across the projects 
//could pass in parameters to enable customisation, e.g height, width, global alpha, context (2d / 3d), blend mode

function defineCanvas(canvasWidth, canvasHeight) {
  const canvas = document.getElementById('canvas')
  canvas.mixBlendMode = 'overlay'
  const ctx = canvas.getContext('2d')
  canvas.width = canvasWidth
  let ctxWidth = canvas.width
  canvas.height = canvasHeight
  let ctxHeight = canvas.height
  ctx.globalAlpha = 1
  return {ctx, ctxWidth, ctxHeight}
}


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { defineCanvas, randomIntFromRange, randomColor, distance }


/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map