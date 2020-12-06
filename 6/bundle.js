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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MIN_PRICE, MAX_PRICE, MAX_DESCRIPTIONS, HOURS_IN_DAY, MINUTES_IN_HOUR, TRIP_TYPES, CITY_DATA, DESCRIPTIONS_DATA, LABEL_OF_TYPES, PHOTO_DATA, getRandomInteger, getRandomBoolean, SERVISES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PRICE", function() { return MIN_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PRICE", function() { return MAX_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DESCRIPTIONS", function() { return MAX_DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_IN_DAY", function() { return HOURS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES_IN_HOUR", function() { return MINUTES_IN_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIP_TYPES", function() { return TRIP_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY_DATA", function() { return CITY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONS_DATA", function() { return DESCRIPTIONS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_OF_TYPES", function() { return LABEL_OF_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTO_DATA", function() { return PHOTO_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBoolean", function() { return getRandomBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVISES", function() { return SERVISES; });
const MIN_PRICE = 1;
const MAX_PRICE = 1000;
const MAX_DESCRIPTIONS = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const TRIP_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const CITY_DATA = [`Tel-Aviv`, `Minsk`, `Rome`, `Madrid`, `Moskow`, `Baku`, `New York`, `London`];
const DESCRIPTIONS_DATA = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget.
Fusce tristique felis at fermentum pharetra.
Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`];

const TO = ` to `;
const IN = ` in `;

const LABEL_OF_TYPES = {
  'Taxi': TO,
  'Bus': TO,
  'Train': TO,
  'Ship': TO,
  'Transport': TO,
  'Drive': TO,
  'Flight': TO,
  'Sightseeing': IN,
  'Restaurant': IN,
  'Check-in': IN
};


const PHOTO_DATA = `http://picsum.photos/248/152?r=`;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomBoolean = () => {
  return (
    Boolean(getRandomInteger(0, 1))
  );
};

const SERVISES = [
  {
    type: `meal`,
    title: `Add breakfast`,
    cost: getRandomInteger(10, 30),
    isChecked: getRandomBoolean()
  },
  {
    type: `luggage`,
    title: `Add luggage`,
    cost: getRandomInteger(10, 20),
    isChecked: getRandomBoolean()
  },
  {
    type: `transfer`,
    title: `Book tickets`,
    cost: getRandomInteger(5, 15),
    isChecked: getRandomBoolean()
  },
  {
    type: `comfort`,
    title: `Switch to comfort`,
    cost: getRandomInteger(10, 30),
    isChecked: getRandomBoolean()
  },
  {
    type: `meal`,
    title: `Lunch in city`,
    cost: getRandomInteger(30, 70),
    isChecked: getRandomBoolean()
  },
  {
    type: `transfer`,
    title: `Order Uber`,
    cost: getRandomInteger(10, 30),
    isChecked: getRandomBoolean()
  },
  {
    type: `transfer`,
    title: `Rent a car`,
    cost: getRandomInteger(50, 150),
    isChecked: getRandomBoolean()
  }
];



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: points */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points", function() { return points; });
/* harmony import */ var _view_info_trip_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/info-trip-template.js */ "./src/view/info-trip-template.js");
/* harmony import */ var _view_nav_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/nav-template.js */ "./src/view/nav-template.js");
/* harmony import */ var _view_trip_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/trip-filters.js */ "./src/view/trip-filters.js");
/* harmony import */ var _view_trip_sort_template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/trip-sort-template.js */ "./src/view/trip-sort-template.js");
/* harmony import */ var _view_trip_EditForm_template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/trip-EditForm-template.js */ "./src/view/trip-EditForm-template.js");
/* harmony import */ var _view_trip_point_template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/trip-point-template.js */ "./src/view/trip-point-template.js");
/* harmony import */ var _view_trip_List_Empty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/trip-List-Empty.js */ "./src/view/trip-List-Empty.js");
/* harmony import */ var _mocks_mocksData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mocks/mocksData.js */ "./src/mocks/mocksData.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
const QUANTITY_PINS = 0;










const points = new Array(QUANTITY_PINS).fill().map(_mocks_mocksData_js__WEBPACK_IMPORTED_MODULE_7__["generateTripPoint"]);


const tripElement = document.querySelector(`.trip-main`);
const tripControls = tripElement.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const eventsContainer = tripEvents.querySelector(`.trip-events__list`);

const renderTripPoint = (tripListElement, tripPoint) => {
  const tripComponent = new _view_trip_point_template_js__WEBPACK_IMPORTED_MODULE_5__["default"](tripPoint);
  const editTripComponent = new _view_trip_EditForm_template_js__WEBPACK_IMPORTED_MODULE_4__["default"](tripPoint);

  const replaceTripPointToEditForm = () => {
    tripListElement.replaceChild(editTripComponent.getElement(), tripComponent.getElement());
  };

  const replaceEditFormToTripCard = () => {
    tripListElement.replaceChild(tripComponent.getElement(), editTripComponent.getElement());
  };

  const onEscDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceEditFormToTripCard();
      document.removeEventListener(`keydown`. onEscDown);
    }
  };

  tripComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceTripPointToEditForm();
    document.addEventListener(`keydown`, onEscDown);
  });

  editTripComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditFormToTripCard();
    document.addEventListener(`keydown`, onEscDown);
  });

  editTripComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEditFormToTripCard();
    document.addEventListener(`keydown`, onEscDown);
  });

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["render"])(tripListElement, tripComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
};

const renderBoard = () =>{
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["render"])(tripControls, new _view_nav_template_js__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTERBEGIN);
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["render"])(tripControls, new _view_trip_filters_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEvents, new _view_trip_sort_template_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTERBEGIN);

  if (points.length === 0) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEvents, new _view_trip_List_Empty_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  } else {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["render"])(tripElement, new _view_info_trip_template_js__WEBPACK_IMPORTED_MODULE_0__["default"](points).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTERBEGIN);
    points.forEach(((point) => renderTripPoint(eventsContainer, point)));
  }
};
renderBoard();


/***/ }),

/***/ "./src/mocks/mocksData.js":
/*!********************************!*\
  !*** ./src/mocks/mocksData.js ***!
  \********************************/
/*! exports provided: getSumCost, getTripDates, getTripRoute, generateTripPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSumCost", function() { return getSumCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripDates", function() { return getTripDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripRoute", function() { return getTripRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripPoint", function() { return generateTripPoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const generateTripType = () => {
  const randomIndex = Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_1__["TRIP_TYPES"].length - 1);

  return _const_js__WEBPACK_IMPORTED_MODULE_1__["TRIP_TYPES"][randomIndex];
};

const generateDestination = () => {
  const randomIndex = Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_1__["CITY_DATA"].length - 1);

  return _const_js__WEBPACK_IMPORTED_MODULE_1__["CITY_DATA"][randomIndex];
};


const getPhotoPath = () => `${_const_js__WEBPACK_IMPORTED_MODULE_1__["PHOTO_DATA"]}${Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 10)}`;


const getRandomPhotos = () => {
  const emptyPhotos = new Array(Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 10)).fill(undefined).map(getPhotoPath);

  return emptyPhotos.filter((item, index) => emptyPhotos.indexOf(item) === index);
};


const calculateDifferenceTime = (begin, end) => {
  const hours = end.diff(begin, `hour`) % _const_js__WEBPACK_IMPORTED_MODULE_1__["HOURS_IN_DAY"];
  const minutes = end.diff(begin, `minute`) % _const_js__WEBPACK_IMPORTED_MODULE_1__["MINUTES_IN_HOUR"];

  return `${hours > 0 ? `${hours}H ${minutes}M` : `${minutes}M` }`;
};


const generateTime = () => {
  const daysGap = Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-7, 7);
  const hoursGap = Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 48);
  const minutesGap = Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 60);
  const days = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`);
  const beginTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(hoursGap, `hour`);
  const endTime = beginTime.add(hoursGap, `hour`).add(minutesGap, `minute`);

  return {
    day: days,
    begin: beginTime,
    end: endTime,
    difference: calculateDifferenceTime(beginTime, endTime),
  };
};


const generatePrice = () => Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["MIN_PRICE"], _const_js__WEBPACK_IMPORTED_MODULE_1__["MAX_PRICE"]);


const getDescriptions = () => {
  const arrDescription = `${_const_js__WEBPACK_IMPORTED_MODULE_1__["DESCRIPTIONS_DATA"]}`.split(`.`);

  return arrDescription[Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 12)];
};


const getRandomDescriptions = () => {
  const emptyArrOfDescriptions = new Array(Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 5)).fill(undefined).map(getDescriptions);

  return emptyArrOfDescriptions.filter((item, index) => emptyArrOfDescriptions.indexOf(item) === index);
};


const getServices = () =>{
  let servicesCopy = [..._const_js__WEBPACK_IMPORTED_MODULE_1__["SERVISES"]];

  return servicesCopy[Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, servicesCopy.length - 1)];
};


const getRandomServices = () => {
  const arrEmptyServices = new Array(Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 5)).fill(undefined).map(getServices);

  return arrEmptyServices.filter((item, index) => arrEmptyServices.indexOf(item) === index);
};


const getSumCost = (obj) => Object.values(obj.map(((it) => it.price))).reduce((a, b) => a + b);


const getTripDates = (dates) => {
  const tripStartDate = dates[0].time.begin.format(`DD MMM`);
  const tripEndDate = dates[dates.length - 1].time.end.format(`DD MMM`);

  return `${tripStartDate} - ${tripEndDate}`;
};

const getTripRoute = (places) => {
  const cities = [...new Set(places.map((place) => place.destination))];

  return cities.length > 3 ?
    `${cities[0]} — ... — ${cities[cities.length - 1]}` :
    `${cities.join(` — `)}`;
};


const generateTripPoint = () => {

  return {
    tripType: generateTripType(),
    destination: generateDestination(),
    time: generateTime(),
    price: generatePrice(),
    photos: getRandomPhotos(),
    offers: getRandomServices(),
    isFavorite: Object(_const_js__WEBPACK_IMPORTED_MODULE_1__["getRandomBoolean"])(),
    descriptions: getRandomDescriptions(),
  };
};





/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};



/***/ }),

/***/ "./src/view/info-trip-template.js":
/*!****************************************!*\
  !*** ./src/view/info-trip-template.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoTrip; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _mocks_mocksData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/mocksData.js */ "./src/mocks/mocksData.js");



const createTripInfoTemplate = (points) => {
  const period = Object(_mocks_mocksData_js__WEBPACK_IMPORTED_MODULE_1__["getTripDates"])(points);
  const title = Object(_mocks_mocksData_js__WEBPACK_IMPORTED_MODULE_1__["getTripRoute"])(points);
  const total = Object(_mocks_mocksData_js__WEBPACK_IMPORTED_MODULE_1__["getSumCost"])(points);

  return `<section class="trip-main__trip-info  trip-info">
             <div class="trip-info__main">
               <h1 class="trip-info__title">${title}</h1>
               <p class="trip-info__dates">${period}</p>
             </div>
              <p class="trip-info__cost">
               Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
              </p>
           </section>`;
};

class InfoTrip {
  constructor(points) {
    this._data = points;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/nav-template.js":
/*!**********************************!*\
  !*** ./src/view/nav-template.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavTrip; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createNavTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
            <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
            <a class="trip-tabs__btn" href="#">Stats</a>
          </nav>`;
};

class NavTrip {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createNavTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-EditForm-template.js":
/*!********************************************!*\
  !*** ./src/view/trip-EditForm-template.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditTrip; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const createCitiesList = () => {
  return _const_js__WEBPACK_IMPORTED_MODULE_1__["CITY_DATA"].map((city) => `<option value="${city}"></option>`).join(``);
};

const createPhotoList = (photos) => {
  return `${photos.map((photo) =>`<img class="event__photo" src="${photo}" alt="Event photo">`).join(``)}`;
};

const createOffers = (offers) => {
  return offers.map((offer) => {

    return `<div class="event__offer-selector">
               <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}" type="checkbox" name="event-offer-luggage" ${offer.isChecked ? `checked` : `` }>
               <label class="event__offer-label" for="event-offer-${offer.title}">
                 <span class="event__offer-title">${offer.title}</span>
                    &plus;&euro;&nbsp;
                 <span class="event__offer-price">${offer.cost}</span>
                </label>
            </div>`;
  }).join(``);
};

const createEditFormTemplate = (point) => {
  const {tripType, destination, offers, descriptions, time, price, photos} = point;

  return `<li class="trip-events__item"> 
   <form class="event event--edit" action="#" method="post">
    <header class="event__header">

      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${tripType.toLowerCase()}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            
            <div class="event__type-item">
              <input id="event-type-${tripType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${tripType.toLowerCase()}">
              <label class="event__type-label  event__type-label--${tripType.toLowerCase()}" for="event-type-${tripType.toLowerCase()}-1">${tripType}</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${tripType}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${_const_js__WEBPACK_IMPORTED_MODULE_1__["LABEL_OF_TYPES"][tripType]}${destination}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${createCitiesList()}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${time.begin.format(`DD/MM/YY HH:mm`)}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${time.end.format(`DD/MM/YY HH:mm`)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>
      
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
      <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
    </header>

    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${createOffers(offers)}
        </div>
      </section>
      
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${descriptions}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
          ${createPhotoList(photos)}
          </div>
        </div>
      </section>
    </section>
  </form>
  </li>`;
};

class EditTrip {
  constructor(point) {
    this._data = point;
    this._element = null;
  }

  getTemplate() {
    return createEditFormTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-List-Empty.js":
/*!*************************************!*\
  !*** ./src/view/trip-List-Empty.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripListEmpty; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createEmptyTripListTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class TripListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEmptyTripListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-filters.js":
/*!**********************************!*\
  !*** ./src/view/trip-filters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersTrip; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFiltersTemplate = () => {
  return `<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
};

class FiltersTrip {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createFiltersTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-point-template.js":
/*!*****************************************!*\
  !*** ./src/view/trip-point-template.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointTrip; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const createOffer = (offers) => {

  return offers.slice(0, 3).map((offer) => {

    return `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      ${offer.title ? `&plus;&euro;&nbsp;` : ``}
      <span class="event__offer-price">${offer.cost}</span>
    </li>`;
  }).join(`\n`);
};


const createPointTemplate = (point) => {
  const {tripType, destination, time, offers, price, isFavorite} = point;
  const offerTemplate = createOffer(offers);
  const isFavoriveClass = isFavorite ? `event__favorite-btn event__favorite-btn--active` : `event__favorite-btn`;

  return `<li class="trip-events__item">
            <div class="event">
                <time class="event__date" datetime=${time.day.format(`YYYY-MM-DD`)}>${time.day.format(`MMM DD`)}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${tripType.toLowerCase()}.png" alt="Event type icon">
              </div>

              <h3 class="event__title">${tripType}${_const_js__WEBPACK_IMPORTED_MODULE_1__["LABEL_OF_TYPES"][tripType]}${destination}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="${time.begin.format(`HH:mm`)}">${time.begin.format(`HH:mm`)}</time>
                  &mdash;
                  <time class="event__end-time" datetime="${time.end.format(`HH:mm`)}">${time.end.format(`HH:mm`)}</time>
                </p>
                <p class="event__duration">${time.difference}</p>
              </div>
              
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${price}</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
              ${offerTemplate}
             </ul>
             
             <button class="${isFavoriveClass}" type="button">
             <span class="visually-hidden">Add to favorite</span>
             <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
             </svg>
             </button>

             <button class="event__rollup-btn" type="button">
             <span class="visually-hidden">Open event</span>
             </button>
            </div>
         </li>`;
};

class PointTrip {
  constructor(point) {
    this._data = point;
    this._element = null;
  }

  getTemplate() {
    return createPointTemplate(this._data);
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-sort-template.js":
/*!****************************************!*\
  !*** ./src/view/trip-sort-template.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortTrip; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createTripSortTemplate = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`;
};


class SortTrip {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createTripSortTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map