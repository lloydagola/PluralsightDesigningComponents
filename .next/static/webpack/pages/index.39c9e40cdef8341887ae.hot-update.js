self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withAuth */ "./src/components/withAuth.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\Header.js",
    _s = $RefreshSig$();





function Header(_ref) {
  _s();

  var _this = this;

  var loggedInUser = _ref.loggedInUser,
      setLoggedInUser = _ref.setLoggedInUser;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext),
      theme = _useContext.theme;

  var LoggedIn = function LoggedIn(_ref2) {
    var loggedInUser = _ref2.loggedInUser,
        setLoggedInUser = _ref2.setLoggedInUser;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Logged in as ", loggedInUser]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-secondary",
        onClick: function onClick() {
          setLoggedInUser("");
        },
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this);
  };

  var NotLoggedIn = function NotLoggedIn(_ref3) {
    var loggedInUser = _ref3.loggedInUser,
        setLoggedInUser = _ref3.setLoggedInUser;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn-secondary",
      onClick: function onClick(e) {
        e.preventDefault();
        var username = window.prompt("Enter Login name:", "");
        setLoggedInUser(username);
      },
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "padT4 padB4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mobile-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "SVCC Home Page",
            src: "/images/SVCCLogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "light",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "header-title",
            children: "Silicon Valley Code Camp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: loggedInUser && loggedInUser.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoggedIn, {
            loggedInUser: loggedInUser,
            setLoggedInUser: setLoggedInUser
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotLoggedIn, {
            loggedInUser: loggedInUser,
            setLoggedInUser: setLoggedInUser
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Header, "LidUGjXGvl6nqLnPI8yC77ot4bM=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_3__.default)(Header));

var _c, _c2;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImxvZ2dlZEluVXNlciIsInNldExvZ2dlZEluVXNlciIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJ0aGVtZSIsIkxvZ2dlZEluIiwiTm90TG9nZ2VkSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsIndpbmRvdyIsInByb21wdCIsImxlbmd0aCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBbUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUFqQ0MsWUFBaUMsUUFBakNBLFlBQWlDO0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQSxvQkFDL0JDLGlEQUFVLENBQUNDLGdFQUFELENBRHFCO0FBQUEsTUFDekNDLEtBRHlDLGVBQ3pDQSxLQUR5Qzs7QUFHakQsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBdUM7QUFBQSxRQUFwQ0wsWUFBb0MsU0FBcENBLFlBQW9DO0FBQUEsUUFBdEJDLGVBQXNCLFNBQXRCQSxlQUFzQjtBQUN0RCx3QkFDRTtBQUFBLDhCQUNFO0FBQUEsb0NBQW9CRCxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxtQkFEWjtBQUVFLGVBQU8sRUFBRSxtQkFBTTtBQUNiQyx5QkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNELFNBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWFELEdBZEQ7O0FBZ0JBLE1BQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBQXVDO0FBQUEsUUFBcENOLFlBQW9DLFNBQXBDQSxZQUFvQztBQUFBLFFBQXRCQyxlQUFzQixTQUF0QkEsZUFBc0I7QUFDekQsd0JBQ0U7QUFDRSxlQUFTLEVBQUMsZUFEWjtBQUVFLGFBQU8sRUFBRSxpQkFBQ00sQ0FBRCxFQUFPO0FBQ2RBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsbUJBQWQsRUFBbUMsRUFBbkMsQ0FBakI7QUFDQVYsdUJBQWUsQ0FBQ1EsUUFBRCxDQUFmO0FBQ0QsT0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBWUQsR0FiRDs7QUFlQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsaUNBQ0U7QUFBSSxxQkFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBT0U7QUFBSyxtQkFBUyxFQUFFTCxLQUFLLEtBQUssT0FBVixHQUFvQixFQUFwQixHQUF5QixXQUF6QztBQUFBLG9CQUNHSixZQUFZLElBQUlBLFlBQVksQ0FBQ1ksTUFBYixHQUFzQixDQUF0QyxnQkFDQyw4REFBQyxRQUFEO0FBQ0Usd0JBQVksRUFBRVosWUFEaEI7QUFFRSwyQkFBZSxFQUFFQztBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGdCQU1DLDhEQUFDLFdBQUQ7QUFDRSx3QkFBWSxFQUFFRCxZQURoQjtBQUVFLDJCQUFlLEVBQUVDO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBN0RRRixNOztLQUFBQSxNO0FBK0RULCtEQUFlLE1BQUFjLGtEQUFRLENBQUNkLE1BQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzljOWU0MGNkZWY4MzQxODg3YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4vd2l0aEF1dGhcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IGxvZ2dlZEluVXNlciwgc2V0TG9nZ2VkSW5Vc2VyIH0pIHtcclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IExvZ2dlZEluID0gKHsgbG9nZ2VkSW5Vc2VyLCBzZXRMb2dnZWRJblVzZXIgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Mb2dnZWQgaW4gYXMge2xvZ2dlZEluVXNlcn08L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2dnZWRJblVzZXIoXCJcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgTm90TG9nZ2VkSW4gPSAoeyBsb2dnZWRJblVzZXIsIHNldExvZ2dlZEluVXNlciB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LnByb21wdChcIkVudGVyIExvZ2luIG5hbWU6XCIsIFwiXCIpO1xyXG4gICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyKHVzZXJuYW1lKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgTG9naW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZFQ0IHBhZEI0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vYmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTVkNDIEhvbWUgUGFnZVwiIHNyYz1cIi9pbWFnZXMvU1ZDQ0xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+U2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XHJcbiAgICAgICAgICAgIHtsb2dnZWRJblVzZXIgJiYgbG9nZ2VkSW5Vc2VyLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPExvZ2dlZEluXHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJblVzZXI9e2xvZ2dlZEluVXNlcn1cclxuICAgICAgICAgICAgICAgIHNldExvZ2dlZEluVXNlcj17c2V0TG9nZ2VkSW5Vc2VyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPE5vdExvZ2dlZEluXHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJblVzZXI9e2xvZ2dlZEluVXNlcn1cclxuICAgICAgICAgICAgICAgIHNldExvZ2dlZEluVXNlcj17c2V0TG9nZ2VkSW5Vc2VyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9