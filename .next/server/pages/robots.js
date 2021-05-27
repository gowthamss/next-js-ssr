(function() {
var exports = {};
exports.id = "pages/robots";
exports.ids = ["pages/robots"];
exports.modules = {

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\If I'm going to create anything on desktop those will go here + desktop files\\Andrei Neagoie Courses\\JuniorToSeniorWebDeveloper\\next-ssr\\pages\\robots.js";
 // import fetch from "isomorphic-fetch";

const Robots = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "Robots"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: props.data.map(robot => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `robots/${robot.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: robot.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, undefined)
    }, robot.id, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Robots);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/robots.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNzci8uL3BhZ2VzL3JvYm90cy5qcyIsIndlYnBhY2s6Ly9uZXh0LXNzci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0LXNzci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0LXNzci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1zc3IvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHQtc3NyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1zc3IvaWdub3JlZHxGOlxcSWYgSSdtIGdvaW5nIHRvIGNyZWF0ZSBhbnl0aGluZyBvbiBkZXNrdG9wIHRob3NlIHdpbGwgZ28gaGVyZSArIGRlc2t0b3AgZmlsZXNcXEFuZHJlaSBOZWFnb2llIENvdXJzZXNcXEp1bmlvclRvU2VuaW9yV2ViRGV2ZWxvcGVyXFxuZXh0LXNzclxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlJvYm90cyIsInByb3BzIiwiZGF0YSIsIm1hcCIsInJvYm90IiwiaWQiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELGlCQUNYO0FBQUEsMEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUtJO0FBQUEsY0FDS0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZ0JDLEtBQUQsaUJBQ1o7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxVQUFTQSxLQUFLLENBQUNDLEVBQUcsRUFBL0I7QUFBQSwrQkFDSTtBQUFBLG9CQUFJRCxLQUFLLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFTRixLQUFLLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFrQk8sZUFBZUUsa0JBQWYsR0FBb0M7QUFDdkMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBRCxDQUE1QjtBQUNBLFFBQU1QLElBQUksR0FBRyxNQUFNTSxRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFDQSxTQUFPO0FBQ0hULFNBQUssRUFBRTtBQUFFQztBQUFGO0FBREosR0FBUDtBQUdIO0FBRUQsK0RBQWVGLE1BQWYsRTs7Ozs7Ozs7Ozs7QUM3QkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3JvYm90cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5jb25zdCBSb2JvdHMgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlJvYm90czwvaDE+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Ib21lPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgocm9ib3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JvYm90LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcm9ib3RzLyR7cm9ib3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntyb2JvdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9