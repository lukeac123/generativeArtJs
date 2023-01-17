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

function lerp( a, b, alpha ) {
    return a + alpha * (b-a)
   }
    
addEventListener('resize', () => {
    width = innerWidth*0.9
    height = innerHeight*0.9
    draw()
})

function draw() {
    c.fillStyle = 'brown'
    c.fillRect(0,0, width, height)

    const createGrid = () => {
        const points = []
        const count = 10
        for (let x = 0; x < count; x++){
            for (let y = 0; y < count; y++){
                const u = count <= 1? 0.5 : x / (count-1)
                const v = count <= 1? 0.5 : y / (count-1)
                // (count-1) otherwise u coordinate would never = 1 causing render to be off center
                // count <= 1? otherwise when count=1 nothing would be shown. 0.5 is middle of u/v value so renders in center

                points.push({
                    position: [ u, v ],
                    radius: Math.random()*width*0.05
                })
            }}
            return points
        };


    const points = createGrid().filter(() => Math.random() > 0.5 );
    //filter out the some of the points if random is > 0.5
    //look at using different random number types
    //can use a deterministic seed to sync up different art pieces / screens. will allways return the same random values

    points.forEach(data => {
        //destructure the data object
        const { position, radius, colour } = data
        let [ u, v ] = position

        //using liner interppolation to create a margin - could be helpful for art pieces
        //using padding css on html might be easier
        const margin = 200
        u = lerp(margin, width - margin, u)
        v = lerp(margin, height - margin, v)

        c.beginPath()
        c.arc(u, v, radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'black'
        c.fillStyle = 'purple'
        c.lineWidth = 2
        c.stroke()
        c.fill()
        c.closePath()


    })
}

draw()





/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map