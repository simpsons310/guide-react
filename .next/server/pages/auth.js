"use strict";
(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/User.js



const user = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3370f060a02ab520",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "jsx-3370f060a02ab520",
                /*#__PURE__*/ children: props.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "jsx-3370f060a02ab520",
                children: [
                    "Age: ",
                    props.age
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "3370f060a02ab520",
                children: "div.jsx-3370f060a02ab520 {border:1px solid #eee;\nbox-shadow:0 2px 3px #ccc;\npadding:30px;\ntext-align:center}"
            })
        ]
    })
;
/* harmony default export */ const User = (user);

;// CONCATENATED MODULE: ./pages/auth/index.js



const authIndexPage = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "The Auth Main Page of ",
                    props.appName
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(User, {
                name: "Max",
                age: 28
            })
        ]
    })
;
authIndexPage.getInitialProps = (context)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                appName: 'Super App (Auth)'
            });
        }, 1000);
    });
    return promise;
};
/* harmony default export */ const auth = (authIndexPage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(551));
module.exports = __webpack_exports__;

})();