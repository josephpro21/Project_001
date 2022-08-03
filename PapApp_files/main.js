"use strict";
(self["webpackChunkpapApp"] = self["webpackChunkpapApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AppComponent {
    constructor() {
        this.title = 'papApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 0, consts: [[1, "main"], [1, "inner"], ["action", "#", "id", "log", 1, "LoginForm"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], ["type", "text", "placeholder", "Username", "required", "", 1, "txt"], ["aria-hidden", "true", 1, "fa", "fa-key"], ["type", "Password", "placeholder", "Password", "required", "", 1, "txt"], ["type", "button", "value", "LOGIN", 1, "btn"], ["href", "#", 1, "forgot"], ["type", "button", "onclick", "show()", "value", "REGISTER", 1, "btn"], ["action", "reg.php", "method", "post", "id", "reg", 1, "RegForm"], ["type", "text", "placeholder", "First Name", "name", "fname", "id", "fname", "required", "", 1, "txt"], ["type", "text", "placeholder", "Last Name", "name", "lname", "id", "lname", "required", "", 1, "txt"], ["type", "Email", "placeholder", "Email", "name", "email", "id", "email", "required", "", 1, "txt"], ["type", "password", "placeholder", "Password", "required", "", 1, "txt"], ["type", "password", "placeholder", "Confirm Password", "name", "password", "id", "password", "required", "", 1, "txt"], ["type", "button", "value", "SUBMIT", 1, "btn"], ["type", "button", "onclick", "myfunc()", "value", "I have an account", 1, "btn2"], [1, "back"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3)(6, "input", 4)(7, "br")(8, "i", 5)(9, "input", 6)(10, "br")(11, "input", 7)(12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "forgot password!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br")(16, "br")(17, "br")(18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 10)(20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11)(23, "input", 12)(24, "input", 13)(25, "input", 14)(26, "input", 15)(27, "br")(28, "input", 16)(29, "br")(30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n    display: flex;\n    background-size: cover;\n    justify-content: center;\n}\n\n.LoginForm[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    color: teal;\n    display: block;\n    text-align: center;\n    margin: 40px;\n    padding: 20px;\n    width: 350px;\n    height: 70vh;\n    border-radius: 20px;\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    -ms-border-radius: 20px;\n    -o-border-radius: 20px;\n    box-shadow: 0 5px 10px;\n    animation-duration: 3s;\n    animation-name: side;\n    transition: 9s ease-in-out;\n    -webkit-transition: 9s ease-in-out;\n    -moz-transition: 9s ease-in-out;\n    -ms-transition: 9s ease-in-out;\n    -o-transition: 9s ease-in-out;\n}\n\ninput[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 10px;\n    border-color: teal;\n    border-width: 1px;\n    border-radius: 20px;\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    -ms-border-radius: 20px;\n    -o-border-radius: 20px;\n    outline: none;\n}\n\n.txt[_ngcontent-%COMP%]:hover {\n    width: 180px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    color: white;\n    background-color: teal;\n    font-weight: bold;\n    border: none;\n    width: 90px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    width: 94px;\n}\n\n.txt[_ngcontent-%COMP%] {\n    padding-left: 20px;\n}\n\n.LoginForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 128, 128, 0.459);\n}\n\n.LoginForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: teal;\n}\n\n.RegForm[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    color: teal;\n    display: none;\n    text-align: center;\n    animation-duration: 3s;\n    margin: 40px;\n    padding: 20px;\n    width: 350px;\n    height: 70vh;\n    border-radius: 20px;\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    -ms-border-radius: 20px;\n    -o-border-radius: 20px;\n    box-shadow: 0 5px 10px;\n    animation-duration: 3s;\n    animation-name: side;\n    transition: 5s;\n    -webkit-transition: 5s;\n    -moz-transition: 5s;\n    -ms-transition: 5s;\n    -o-transition: 5s;\n}\n\n@keyframes side {\n    from {\n        opacity: 5%;\n    }\n}\n\n.LoginForm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uTG9naW5Gb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogdGVhbDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA0MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNpZGU7XG4gICAgdHJhbnNpdGlvbjogOXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiA5cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IDlzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiA5cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiA5cyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udHh0OmhvdmVyIHtcbiAgICB3aWR0aDogMTgwcHg7XG59XG5cbi5idG4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogOTBweDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgd2lkdGg6IDk0cHg7XG59XG5cbi50eHQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLkxvZ2luRm9ybSBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAxMjgsIDEyOCwgMC40NTkpO1xufVxuXG4uTG9naW5Gb3JtIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdGVhbDtcbn1cblxuLlJlZ0Zvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB0ZWFsO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgbWFyZ2luOiA0MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNpZGU7XG4gICAgdHJhbnNpdGlvbjogNXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiA1cztcbiAgICAtbW96LXRyYW5zaXRpb246IDVzO1xuICAgIC1tcy10cmFuc2l0aW9uOiA1cztcbiAgICAtby10cmFuc2l0aW9uOiA1cztcbn1cblxuQGtleWZyYW1lcyBzaWRlIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogNSU7XG4gICAgfVxufVxuXG4uTG9naW5Gb3JtIGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1736), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map