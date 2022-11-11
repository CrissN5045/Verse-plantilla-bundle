(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _topNav = require('./modules/topNav');

var _tnsSlider = require('./modules/tns-slider');

var _searchFilter = require('./modules/searchFilter');

var _swDetecter = require('./modules/swDetecter');

var _mdInner = require('./modules/mdInner');

(function () {
	(0, _swDetecter.swDetecter)();
	(0, _topNav.topNav)();
	(0, _tnsSlider.tnsSingle)();
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('portfolio')) {
		// functions here
		(0, _searchFilter.searchFilter)();
	}
})();

},{"./modules/mdInner":2,"./modules/searchFilter":3,"./modules/swDetecter":4,"./modules/tns-slider":5,"./modules/topNav":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function mdInnerJson(data, rutaMd, nameObjJson, classDiv) {
	var _loop = function _loop(i) {

		var d = document,
		    $main = d.querySelector("div." + classDiv);

		fetch("assets/" + rutaMd + data[nameObjJson][i].md + ".md").then(function (res) {
			return res.ok ? res.text() : Promise.reject(res);
		}).then(function (text) {
			var div = document.createElement("div");
			div.innerHTML = new showdown.Converter().makeHtml(text);
			$main.appendChild(div);
		}).catch(function (err) {
			console.log(err);
			var message = err.statusText || "Ocurrio un error";
			$main.innerHTML = "Error " + err.status + ":" + message;
		});
	};

	for (var i = 0; i < data[nameObjJson].length; i++) {
		_loop(i);
	}
}

var mdInner = exports.mdInner = function mdInner(rutaMd, nameObjJson, classDiv) {
	function md() {
		fetch("./data.json").then(function (response) {
			return response.json();
		}).then(function (data) {
			return mdInnerJson(data, rutaMd, nameObjJson, classDiv);
		});
	}

	var funcion = md();
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchFilter = exports.searchFilter = function searchFilter() {
	// get the input data
	var fnFilter = function fnFilter(inputElement, selector, selectorContainer) {
		inputElement.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer);
		});
	};
	var fnCompareElements = function fnCompareElements(filterText, selector, selectorContainer) {
		var searchElements = document.querySelectorAll(selector);
		var searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
		searchContainers.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var swDetecter = exports.swDetecter = function swDetecter() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			return console.log('Registro de SW exitoso', reg);
		}).catch(function (err) {
			return console.warn('Error al tratar de registrar el sw', err);
		});
	}
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tnsSingle = exports.tnsSingle = function tnsSingle() {
  var slider = tns({
    container: '#tnsSingle',
    items: 1,
    slideBy: 1,
    speed: 1000,
    mode: 'gallery',
    mouseDrag: true,
    controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
  });
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
