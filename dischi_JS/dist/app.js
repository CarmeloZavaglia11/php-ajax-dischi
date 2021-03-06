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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.select ul li').click(function () {
    $('.select ul li').removeClass('selected');
    $(this).addClass('selected');
    $('.cd').removeClass('active');
    var genre = $(this).text(); // if (genre == 'All') {
    // 	$('.cd').addClass('active')
    // }  else {
    // 	$('.cd.' + genre).addClass('active');
    // }

    ajaxGenre(genre);
  }); // CHIAMATA AJAX GET CD

  ajaxCd(); // SETTO LA SELECT A GENERI

  $('.options select').val('Genere');
});

function ajaxCd() {
  $.ajax({
    url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
    method: "GET",
    success: function success(data) {
      for (var i = 0; i < data.length; i++) {
        var source = $("#authors").html();
        var template = Handlebars.compile(source);
        var context = {
          'author': data[i].author
        };
        var html = template(context);
        $('.select_2 ul').append(html);
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var context = data[i];
        var html = template(context);
        $('.cds-container').append(html);
      }
    },
    error: function error(errori) {
      alert("ERRORE!: " + errori);
    }
  });
}

function ajaxAuthors(autore) {
  $.ajax({
    url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
    method: "GET",
    success: function success(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].author == autore) {
          var source = $("#entry-template").html();
          var template = Handlebars.compile(source);
          var context = data[i];
          var html = template(context);
          $('.cds-container').append(html);
        }
      }
    },
    error: function error(errori) {
      alert("ERRORE!: " + errori);
    }
  });
}

function ajaxGenre(genere) {
  $.ajax({
    url: 'http://localhost/php/04/php-ajax-dischi/dischi_JS/db.php',
    method: "GET",
    success: function success(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].genre == genere || genere == 'All') {
          var source = $("#entry-template").html();
          var template = Handlebars.compile(source);
          var context = data[i];
          var html = template(context);
          $('.cds-container').append(html);
        }
      }
    },
    error: function error(errori) {
      alert("ERRORE!: " + errori);
    }
  });
} // CHIAMATA AJAX GET AUTHORS


$(document).on('click', '.select_2 ul li', function () {
  $('.cds-container').empty();
  $('.select_2 ul li').removeClass('selected');
  $(this).addClass('selected');
  var authorSelected = $(this).text();
  ajaxAuthors(authorSelected);
}); // OPZIONI SCELTA

$('.options select').click(function () {
  if ($(this).val() == 'Genere') {
    $('.select').addClass('active');
    $('.select_2').removeClass('active');
  } else if ($(this).val() == 'Autore') {
    $('.cds-container').empty();
    $('.select_2').addClass('active');
    $('.select').removeClass('active');
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Boolean\MAMP\php\04\php-ajax-dischi\dischi_JS\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\Boolean\MAMP\php\04\php-ajax-dischi\dischi_JS\src\app.scss */"./src/app.scss");


/***/ })

/******/ });