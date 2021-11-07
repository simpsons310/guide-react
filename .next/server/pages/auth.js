"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst user = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"G:\\\\Document\\\\Study\\\\React\\\\react-guide\\\\components\\\\User.js\",\n            lineNumber: 4,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"G:\\\\Document\\\\Study\\\\React\\\\react-guide\\\\components\\\\User.js\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: props.name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"G:\\\\Document\\\\Study\\\\React\\\\react-guide\\\\components\\\\User.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    \"Age: \",\n                    props.age\n                ]\n            })\n        ]\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsSUFBSSxJQUFJQyxLQUFLLHlFQUNkQyxDQUFHOzs7Ozs7OztpRkFDQ0MsQ0FBRTs7Ozs7OzswQkFBRUYsS0FBSyxDQUFDRyxJQUFJOztrRkFDZEMsQ0FBQzs7Ozs7Ozs7b0JBQUMsQ0FBSztvQkFBQ0osS0FBSyxDQUFDSyxHQUFHOzs7Ozs7QUFJMUIsaUVBQWVOLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWd1aWRlLy4vY29tcG9uZW50cy9Vc2VyLmpzP2Q2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPntwcm9wcy5uYW1lfTwvaDE+XG4gICAgICAgIDxwPkFnZToge3Byb3BzLmFnZX08L3A+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZXIiLCJwcm9wcyIsImRpdiIsImgxIiwibmFtZSIsInAiLCJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/User */ \"./components/User.js\");\n\n\n\nconst authIndexPage = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"G:\\\\Document\\\\Study\\\\React\\\\react-guide\\\\pages\\\\auth\\\\index.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"G:\\\\Document\\\\Study\\\\React\\\\react-guide\\\\pages\\\\auth\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: \"The Auth Main Page\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                name: \"Max\",\n                age: 28,\n                __source: {\n                    fileName: \"G:\\\\Document\\\\Study\\\\React\\\\react-guide\\\\pages\\\\auth\\\\index.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                },\n                __self: undefined\n            })\n        ]\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authIndexPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFFZTtBQUV4QyxLQUFLLENBQUNFLGFBQWEsNkVBQ2RDLENBQUc7Ozs7Ozs7O2lGQUNDQyxDQUFFOzs7Ozs7OzBCQUFDLENBQWtCOztpRkFDckJILHdEQUFJO2dCQUFDSSxJQUFJLEVBQUMsQ0FBSztnQkFBQ0MsR0FBRyxFQUFFLEVBQUU7Ozs7Ozs7Ozs7O0FBSWhDLGlFQUFlSixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ndWlkZS8uL3BhZ2VzL2F1dGgvaW5kZXguanM/MzQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXInO1xuXG5jb25zdCBhdXRoSW5kZXhQYWdlID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5UaGUgQXV0aCBNYWluIFBhZ2U8L2gxPlxuICAgICAgICA8VXNlciBuYW1lPVwiTWF4XCIgYWdlPXsyOH0gLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhJbmRleFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlciIsImF1dGhJbmRleFBhZ2UiLCJkaXYiLCJoMSIsIm5hbWUiLCJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/index.js"));
module.exports = __webpack_exports__;

})();