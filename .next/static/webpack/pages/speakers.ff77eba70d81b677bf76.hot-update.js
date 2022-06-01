self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./pages/SpeakersRenderProps.js":
/*!**************************************!*\
  !*** ./pages/SpeakersRenderProps.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var SpeakersRenderProps = function SpeakersRenderProps(_ref) {
  var children = _ref.children;
  var speakers = [{
    imageSrc: "speaker-1124",
    name: "Douglas Crockford"
  }, {
    imageSrc: "speaker-1530",
    name: "Tamara Baker"
  }, {
    imageSrc: "speaker-10803",
    name: "Eugene Chuvyrov"
  }];
  return children({
    speakers: speakers
  });
};

_c = SpeakersRenderProps;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersRenderProps);

var _c;

$RefreshReg$(_c, "SpeakersRenderProps");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersRenderProps */ "./pages/SpeakersRenderProps.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\pages\\speakers.js",
    _this = undefined;




var Speakers = function Speakers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: function children(_ref) {
      var speakers = _ref.speakers;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: speakers.map(function (_ref2) {
          var imageSrc = _ref2.imageSrc,
              name = _ref2.name;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "images/".concat(imageSrc.jpg),
            alt: name
          }, imageSrc, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3BlYWtlcnNSZW5kZXJQcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNSZW5kZXJQcm9wcyIsImNoaWxkcmVuIiwic3BlYWtlcnMiLCJpbWFnZVNyYyIsIm5hbWUiLCJTcGVha2VycyIsIm1hcCIsImpwZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVDLE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQUVDLFlBQVEsRUFBRSxjQUFaO0FBQTRCQyxRQUFJLEVBQUU7QUFBbEMsR0FEZSxFQUVmO0FBQUVELFlBQVEsRUFBRSxjQUFaO0FBQTRCQyxRQUFJLEVBQUU7QUFBbEMsR0FGZSxFQUdmO0FBQUVELFlBQVEsRUFBRSxlQUFaO0FBQTZCQyxRQUFJLEVBQUU7QUFBbkMsR0FIZSxDQUFqQjtBQUtBLFNBQU9ILFFBQVEsQ0FBQztBQUFFQyxZQUFRLEVBQUVBO0FBQVosR0FBRCxDQUFmO0FBQ0QsQ0FQRDs7S0FBTUYsbUI7QUFTTiwrREFBZUEsbUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7QUFFQSxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLDhEQUFDLHlEQUFEO0FBQUEsY0FDRyx3QkFBa0I7QUFBQSxVQUFmSCxRQUFlLFFBQWZBLFFBQWU7QUFDakIsMEJBQ0U7QUFBQSxrQkFDR0EsUUFBUSxDQUFDSSxHQUFULENBQWEsaUJBQXdCO0FBQUEsY0FBckJILFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLGNBQVhDLElBQVcsU0FBWEEsSUFBVztBQUNwQyw4QkFDRTtBQUFLLGVBQUcsbUJBQVlELFFBQVEsQ0FBQ0ksR0FBckIsQ0FBUjtBQUFvQyxlQUFHLEVBQUVIO0FBQXpDLGFBQW9ERCxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBR0QsU0FKQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNEO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBakI7O0tBQU1FLFE7QUFnQk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZmY3N2ViYTcwZDgxYjY3N2JmNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNwZWFrZXJzUmVuZGVyUHJvcHMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgc3BlYWtlcnMgPSBbXHJcbiAgICB7IGltYWdlU3JjOiBcInNwZWFrZXItMTEyNFwiLCBuYW1lOiBcIkRvdWdsYXMgQ3JvY2tmb3JkXCIgfSxcclxuICAgIHsgaW1hZ2VTcmM6IFwic3BlYWtlci0xNTMwXCIsIG5hbWU6IFwiVGFtYXJhIEJha2VyXCIgfSxcclxuICAgIHsgaW1hZ2VTcmM6IFwic3BlYWtlci0xMDgwM1wiLCBuYW1lOiBcIkV1Z2VuZSBDaHV2eXJvdlwiIH0sXHJcbiAgXTtcclxuICByZXR1cm4gY2hpbGRyZW4oeyBzcGVha2Vyczogc3BlYWtlcnMgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc1JlbmRlclByb3BzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGVha2Vyc1JlbmRlclByb3BzIGZyb20gXCIuL1NwZWFrZXJzUmVuZGVyUHJvcHNcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4gKFxyXG4gIDxTcGVha2Vyc1JlbmRlclByb3BzPlxyXG4gICAgeyh7IHNwZWFrZXJzIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3NwZWFrZXJzLm1hcCgoeyBpbWFnZVNyYywgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtpbWFnZVNyYy5qcGd9YH0gYWx0PXtuYW1lfSBrZXk9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gIDwvU3BlYWtlcnNSZW5kZXJQcm9wcz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9