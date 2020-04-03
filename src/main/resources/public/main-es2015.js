(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-pass/forget-pass.component */ "./src/app/forget-pass/forget-pass.component.ts");








const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'forget-pass', component: _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPassComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'angular-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forget-pass/forget-pass.component */ "./src/app/forget-pass/forget-pass.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
        _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPassComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                    _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPassComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/forget-pass/forget-pass.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.component.ts ***!
  \******************************************************/
/*! exports provided: ForgetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassComponent", function() { return ForgetPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class ForgetPassComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ForgetPassComponent.ɵfac = function ForgetPassComponent_Factory(t) { return new (t || ForgetPassComponent)(); };
ForgetPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPassComponent, selectors: [["app-forget-pass"]], decls: 61, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], [1, "header"], [1, "header-text"], ["href", "http://wunderlist.com/privacy-policy", 1, "header-link"], [1, "logo"], [1, "login-form"], ["action", "../php/Process/xulyPHPMailer.php", "method", "POST", 1, "loginTab", "signin"], [1, "header-form"], ["type", "hidden", "name", "_csrf", "value", "jjcswO4z-vQzRoeyr77_cuhRzjdOymfFPX9M"], [1, "loginTab-input-address"], [1, "loginTab-input-icon"], ["width", "21px", "height", "18px", "viewBox", "0 0 21 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-248.000000, -339.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(231.000000, 238.000000)"], ["transform", "translate(0.000000, 20.000000)"], ["transform", "translate(0.000000, 60.000000)"], ["d", "M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"], [1, "loginTab-input-fieldInput"], ["type", "email", "name", "email", "value", "", "required", "", "autofocus", "", "pattern", "^[^\\s@\uFF20=]+[@|\uFF20][^\\.\\s@\uFF20]+(\\.[^\\.\\s@\uFF20]+)+$", "placeholder", "Enter a valid Email"], [1, "body-form-text"], [1, "button-login"], ["type", "submit", "value", "Get a verification code", "name", "forgetPass"], [1, "social-link"], [1, "social-link-face-google"], ["href", "https://a.wunderlist.com/api/v1/oauth/facebook?web=www", 1, "button", "big"], [1, "social-link-face-google-icon"], ["viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z", "fill", "#FFFFFF"], ["href", "https://a.wunderlist.com/api/v1/oauth/google?web=www", 1, "button-google"], ["fill-rule", "evenodd", "fill", "#FFFFFF", "clip-rule", "evenodd"], ["d", "M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"], ["d", "M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"], ["d", "M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"], [1, "social-link-microsoft"], ["href", "", 1, "button-microsoft"], ["stroke", "none", "stroke-width", "1", "fill", "#ffffff", "fill-rule", "evenodd"], ["d", "M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z", "fill", "#F1511B"], ["d", "M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z", "fill", "#80CC28"], ["d", "M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z", "fill", "#00ADEF"], ["d", "M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z", "fill", "#FBBC09"]], template: function ForgetPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "We will send a verification code to your Email's address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "g", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["body[_ngcontent-%COMP%]{\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #423e3e;\n}\n.header[_ngcontent-%COMP%]{\n  background: #edf2fc;\n  min-height: 30px;\n  border-bottom: 1px solid rgba(36,123,198,0.15);\n  font-size: 14px;\n  display: flex;\n  padding: 10px;\n  font-family: \"Lato\",\"Helvetica Neue\",\"Helvetica\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #423e3e;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.header-link[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #2b88d9;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n.header-text[_ngcontent-%COMP%]{\n  font-weight: 400;\n  color: #666;\n  font-size: 13px;\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n}\n.logo[_ngcontent-%COMP%]{\n  margin: 40px auto 0px auto;\n  background-image: url(\"/assets/app.png\");\n  box-sizing: border-box;\n  background-position: -109px 0;\n  width: 79px;\n  background-size: 425px;\n  height: 79px;\n  transform: scale(1.05);\n\n}\n\n.login-form[_ngcontent-%COMP%]{\n  max-width: 370px;\n  min-width: 320px;\n  margin: 30px auto 20px auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.loginTab[_ngcontent-%COMP%]{\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50,50,50,0.08);\n  border-radius: 4px;\n  font-size: 16px;\n}\n.loginTab-input-address[_ngcontent-%COMP%], .loginTab-input-password[_ngcontent-%COMP%]{\n  display: flex;\n  height: 60px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  box-sizing: border-box;\n}\n.loginTab-input-icon[_ngcontent-%COMP%]{\n  width: 21px;\n  height: 18px;\n  display: inline-block;\n  margin: 20px 11px 0px 16px;\n  box-sizing: border-box;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border: 0 none;\n  font-size: 16px;\n  line-height: 15px;\n  padding: 20px 8px;\n  margin-right: 2px;\n  color: #666;\n  outline: none;\n  cursor: text;\n  font: 400 16.3333px Arial;\n  background-color: white;\n  width: inherit;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  font-size: 16px;\n}\n.button-login[_ngcontent-%COMP%]{\n  border-bottom: none;\n  padding: 0 15px;\n  height: 60px;\n  margin: 0;\n}\n.button-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  padding: 11px 10px;\n  border-radius: 3px;\n  margin: 18px auto;\n  font-weight: bold;\n  border: 0 none;\n  background-color: #2b88d9;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.1s transform ease-in-out;\n  outline: none;\n}\n.forgot-password[_ngcontent-%COMP%]{\n  padding-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n\n.social-link[_ngcontent-%COMP%]{\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  box-sizing: border-box;\n}\n.social-link-face-google[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-face-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #3b5998;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n.header-form[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 20px;\n  border-bottom: 1px solid #eee;\n}\n.body-form-text[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n.social-link-face-google[_ngcontent-%COMP%]   .button-google[_ngcontent-%COMP%]{\n  background-color: #dd4b39;\n}\n.social-link-face-google-icon[_ngcontent-%COMP%]{\n  width: 26px;\n  height: 26px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  cursor: pointer;\n}\n.social-link-microsoft[_ngcontent-%COMP%]{\n  margin-right: -10px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-microsoft[_ngcontent-%COMP%]   .button-microsoft[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n\n\n.sign-up-link[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  text-align: center;\n}\n.sign-up-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzL2ZvcmdldC1wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpT0FBaU87RUFDak8sVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlPQUFpTztBQUNuTztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0EsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQSxxQkFBcUIiLCJmaWxlIjoiZm9yZ2V0LXBhc3MvZm9yZ2V0LXBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIk9wZW4gU2Fuc1wiLFwiTWljcm9zb2Z0IFlhaGVpXCIsXCLlvq7ova/pm4Xpu5FcIixTVFhpaGVpLFwi5Y2O5paH57uG6buRXCIsXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIixPc2FrYSwn77yt77yzIO+8sOOCtOOCt+ODg+OCrycsJ01TIFBHb3RoaWMnLCfjg6HjgqTjg6rjgqonLE1laXJ5byxcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkFyaWFsXCIsU2Fucy1TZXJpZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDIzZTNlO1xufVxuLmhlYWRlcntcbiAgYmFja2dyb3VuZDogI2VkZjJmYztcbiAgbWluLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsMTIzLDE5OCwwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiSGVsdmV0aWNhXCIsc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGNvbG9yOiAjNDIzZTNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyLWxpbmt7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJiODhkOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmhlYWRlci10ZXh0e1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJPcGVuIFNhbnNcIixcIk1pY3Jvc29mdCBZYWhlaVwiLFwi5b6u6L2v6ZuF6buRXCIsU1RYaWhlaSxcIuWNjuaWh+e7hum7kVwiLFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsT3Nha2EsJ++8re+8syDvvLDjgrTjgrfjg4Pjgq8nLCdNUyBQR290aGljJywn44Oh44Kk44Oq44KqJyxNZWlyeW8sXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJBcmlhbFwiLFNhbnMtU2VyaWY7XG59XG4ubG9nb3tcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMHB4IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXBwLnBuZ1wiKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwOXB4IDA7XG4gIHdpZHRoOiA3OXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQyNXB4O1xuICBoZWlnaHQ6IDc5cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cbn1cbi8qIGZvcm0gbG9naW4gKi9cbi5sb2dpbi1mb3Jte1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNTAsNTAsNTAsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxvZ2luVGFiLWlucHV0LWFkZHJlc3MsLmxvZ2luVGFiLWlucHV0LXBhc3N3b3Jke1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubG9naW5UYWItaW5wdXQtaWNvbntcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIwcHggMTFweCAwcHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IHtcbiAgd2lkdGg6IDk0JTtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IGlucHV0e1xuICBib3JkZXI6IDAgbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZzogMjBweCA4cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250OiA0MDAgMTYuMzMzM3B4IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4ubG9naW5UYWItaW5wdXQtZmllbGRJbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idXR0b24tbG9naW57XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDA7XG59XG4uYnV0dG9uLWxvZ2luIGlucHV0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTFweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMThweCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjg4ZDk7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcmdvdC1wYXNzd29yZHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3Jnb3QtcGFzc3dvcmQgYXtcbiAgY29sb3I6ICMxYjdlZGY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBlbmQgZm9ybSBsb2dpbiAqL1xuLyogbGluayBzb2NpYWwgKi9cbi5zb2NpYWwtbGlua3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zb2NpYWwtbGluay1mYWNlLWdvb2dsZXtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUgYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLmhlYWRlci1mb3Jte1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmJvZHktZm9ybS10ZXh0e1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlIC5idXR0b24tZ29vZ2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlLWljb257XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMzAlO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdCAuYnV0dG9uLW1pY3Jvc29mdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLyogZW5kIGxpbmsgc29jaWFsICovXG4vKiBsaW5rIMSRxINuZyBrw70gKi9cbi5zaWduLXVwLWxpbmt7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi11cC1saW5rIGEge1xuICBjb2xvcjogIzFiN2VkZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogZW5kIGxpbmsgZMSDbmcga8O9ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forget-pass',
                templateUrl: './forget-pass.component.html',
                styleUrls: ['./forget-pass.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class LoginComponent {
    constructor(formBuilder, loginService) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
    }
    onSubmit() {
        console.log(this.formLogin.value);
        // @ts-ignore
        this.loginService.getUser().then(data => this.data = this.formLogin.value).catch(error => { console.error(error); });
    }
    ngOnInit() {
        this.formLogin = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 77, vars: 1, consts: [["lang", "en", 0, "xmlns", "th", "http://www.w3.org/1999/xhtml", "logo", ""], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], ["id", "loginSuccess", 0, "th", "text", "${success}", 2, "display", "none"], ["id", "notExist", 0, "th", "text", "${notExist}", 2, "display", "none"], [1, "header"], [1, "header-text"], ["href", "http://wunderlist.com/privacy-policy", 1, "header-link"], [1, "logo"], [1, "login-form"], ["action", "/login", "method", "POST", 1, "loginTab", "signin", 3, "formGroup", "ngSubmit"], [1, "loginTab-input-address"], [1, "loginTab-input-icon"], ["width", "21px", "height", "18px", "viewBox", "0 0 21 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-248.000000, -339.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(231.000000, 238.000000)"], ["transform", "translate(0.000000, 20.000000)"], ["transform", "translate(0.000000, 60.000000)"], ["d", "M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"], [1, "loginTab-input-fieldInput"], ["type", "email", "name", "username", "formControlName", "email", "value", "", "required", "", "autofocus", "", "placeholder", "Email Address"], [1, "loginTab-input-password"], ["width", "21px", "height", "25px", "viewBox", "0 0 21 25", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-247.000000, -396.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(0.000000, 119.000000)"], ["d", "M36,12.9375 C36,12.144 35.3452308,11.5 34.5384615,11.5 L18.4615385,11.5 C17.6547692,11.5 17,12.144 17,12.9375 L17,21.5625 C17,22.356 17.6547692,23 18.4615385,23 L34.5384615,23 C35.3452308,23 36,22.356 36,21.5625 L36,12.9375 L36,12.9375 Z M19.9230769,11.5 L19.9230769,6.46875 C19.9230769,2.8965625 22.8680769,0 26.5,0 C30.1319231,0 33.0769231,2.8965625 33.0769231,6.46875 L33.0769231,11.5 L19.9230769,11.5 Z M22.8461538,8.625 L22.8461538,6.46875 C22.8461538,4.4835625 24.4816154,2.875 26.5,2.875 C28.5183846,2.875 30.1538462,4.4835625 30.1538462,6.46875 L30.1538462,8.625"], ["type", "password", "name", "password", "formControlName", "password", "required", "", "placeholder", "Password"], [1, "button-login"], ["type", "submit", "value", "Login", "name", "login"], [1, "forgot-password"], ["routerLink", "/forget-pass"], [1, "social-link"], [1, "social-link-face-google"], ["href", "https://a.wunderlist.com/api/v1/oauth/facebook?web=www", 1, "button", "big"], [1, "social-link-face-google-icon"], ["viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z", "fill", "#FFFFFF"], ["href", "https://a.wunderlist.com/api/v1/oauth/google?web=www", 1, "button-google"], ["fill-rule", "evenodd", "fill", "#FFFFFF", "clip-rule", "evenodd"], ["d", "M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"], ["d", "M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"], ["d", "M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"], [1, "social-link-microsoft"], ["href", "", 1, "button-microsoft"], ["stroke", "none", "stroke-width", "1", "fill", "#ffffff", "fill-rule", "evenodd"], ["d", "M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z", "fill", "#F1511B"], ["d", "M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z", "fill", "#80CC28"], ["d", "M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z", "fill", "#00ADEF"], ["d", "M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z", "fill", "#FBBC09"], [1, "sign-up-link"], ["routerLink", "/sign-up", 1, "signup-link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Forgot Password ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Do you have account&nbsp? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLogin);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #423e3e;\n}\n.header[_ngcontent-%COMP%]{\n  background: #edf2fc;\n  min-height: 30px;\n  border-bottom: 1px solid rgba(36,123,198,0.15);\n  font-size: 14px;\n  display: flex;\n  padding: 10px;\n  font-family: \"Lato\",\"Helvetica Neue\",\"Helvetica\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #423e3e;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.header-link[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #2b88d9;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n.header-text[_ngcontent-%COMP%]{\n  font-weight: 400;\n  color: #666;\n  font-size: 13px;\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n}\n.logo[_ngcontent-%COMP%]{\n  margin: 40px auto 0px auto;\n  background-image: url(\"/assets/app.png\");\n  box-sizing: border-box;\n  background-position: -109px 0;\n  width: 79px;\n  background-size: 425px;\n  height: 79px;\n  transform: scale(1.05);\n\n}\n\n.login-form[_ngcontent-%COMP%]{\n  max-width: 370px;\n  min-width: 320px;\n  margin: 30px auto 20px auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.loginTab[_ngcontent-%COMP%]{\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50,50,50,0.08);\n  border-radius: 4px;\n  font-size: 16px;\n}\n.loginTab-input-address[_ngcontent-%COMP%], .loginTab-input-password[_ngcontent-%COMP%]{\n  display: flex;\n  height: 60px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  box-sizing: border-box;\n}\n.loginTab-input-icon[_ngcontent-%COMP%]{\n  width: 21px;\n  height: 18px;\n  display: inline-block;\n  margin: 20px 11px 0px 16px;\n  box-sizing: border-box;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border: 0 none;\n  font-size: 16px;\n  line-height: 15px;\n  padding: 20px 8px;\n  margin-right: 2px;\n  color: #666;\n  outline: none;\n  cursor: text;\n  font: 400 16.3333px Arial;\n  background-color: white;\n  width: inherit;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  font-size: 16px;\n}\n.button-login[_ngcontent-%COMP%]{\n  border-bottom: none;\n  padding: 0 15px;\n  height: 60px;\n  margin: 0;\n}\n.button-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  padding: 11px 10px;\n  border-radius: 3px;\n  margin: 18px auto;\n  font-weight: bold;\n  border: 0 none;\n  background-color: #2b88d9;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.1s transform ease-in-out;\n  outline: none;\n}\n.forgot-password[_ngcontent-%COMP%]{\n  padding-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n\n.social-link[_ngcontent-%COMP%]{\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  box-sizing: border-box;\n}\n.social-link-face-google[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-face-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #3b5998;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n.header-form[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 20px;\n  border-bottom: 1px solid #eee;\n}\n.body-form-text[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n.social-link-face-google[_ngcontent-%COMP%]   .button-google[_ngcontent-%COMP%]{\n  background-color: #dd4b39;\n}\n.social-link-face-google-icon[_ngcontent-%COMP%]{\n  width: 26px;\n  height: 26px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  cursor: pointer;\n}\n.social-link-microsoft[_ngcontent-%COMP%]{\n  margin-right: -10px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-microsoft[_ngcontent-%COMP%]   .button-microsoft[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n\n\n.sign-up-link[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  text-align: center;\n}\n.sign-up-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpT0FBaU87RUFDak8sVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlPQUFpTztBQUNuTztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0EsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQSxxQkFBcUIiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIk9wZW4gU2Fuc1wiLFwiTWljcm9zb2Z0IFlhaGVpXCIsXCLlvq7ova/pm4Xpu5FcIixTVFhpaGVpLFwi5Y2O5paH57uG6buRXCIsXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIixPc2FrYSwn77yt77yzIO+8sOOCtOOCt+ODg+OCrycsJ01TIFBHb3RoaWMnLCfjg6HjgqTjg6rjgqonLE1laXJ5byxcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkFyaWFsXCIsU2Fucy1TZXJpZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDIzZTNlO1xufVxuLmhlYWRlcntcbiAgYmFja2dyb3VuZDogI2VkZjJmYztcbiAgbWluLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsMTIzLDE5OCwwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiSGVsdmV0aWNhXCIsc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGNvbG9yOiAjNDIzZTNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyLWxpbmt7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJiODhkOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmhlYWRlci10ZXh0e1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJPcGVuIFNhbnNcIixcIk1pY3Jvc29mdCBZYWhlaVwiLFwi5b6u6L2v6ZuF6buRXCIsU1RYaWhlaSxcIuWNjuaWh+e7hum7kVwiLFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsT3Nha2EsJ++8re+8syDvvLDjgrTjgrfjg4Pjgq8nLCdNUyBQR290aGljJywn44Oh44Kk44Oq44KqJyxNZWlyeW8sXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJBcmlhbFwiLFNhbnMtU2VyaWY7XG59XG4ubG9nb3tcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMHB4IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXBwLnBuZ1wiKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwOXB4IDA7XG4gIHdpZHRoOiA3OXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQyNXB4O1xuICBoZWlnaHQ6IDc5cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cbn1cbi8qIGZvcm0gbG9naW4gKi9cbi5sb2dpbi1mb3Jte1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNTAsNTAsNTAsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxvZ2luVGFiLWlucHV0LWFkZHJlc3MsLmxvZ2luVGFiLWlucHV0LXBhc3N3b3Jke1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubG9naW5UYWItaW5wdXQtaWNvbntcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIwcHggMTFweCAwcHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IHtcbiAgd2lkdGg6IDk0JTtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IGlucHV0e1xuICBib3JkZXI6IDAgbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZzogMjBweCA4cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250OiA0MDAgMTYuMzMzM3B4IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4ubG9naW5UYWItaW5wdXQtZmllbGRJbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idXR0b24tbG9naW57XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDA7XG59XG4uYnV0dG9uLWxvZ2luIGlucHV0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTFweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMThweCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjg4ZDk7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcmdvdC1wYXNzd29yZHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3Jnb3QtcGFzc3dvcmQgYXtcbiAgY29sb3I6ICMxYjdlZGY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBlbmQgZm9ybSBsb2dpbiAqL1xuLyogbGluayBzb2NpYWwgKi9cbi5zb2NpYWwtbGlua3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zb2NpYWwtbGluay1mYWNlLWdvb2dsZXtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUgYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLmhlYWRlci1mb3Jte1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmJvZHktZm9ybS10ZXh0e1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlIC5idXR0b24tZ29vZ2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlLWljb257XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMzAlO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdCAuYnV0dG9uLW1pY3Jvc29mdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLyogZW5kIGxpbmsgc29jaWFsICovXG4vKiBsaW5rIMSRxINuZyBrw70gKi9cbi5zaWduLXVwLWxpbmt7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi11cC1saW5rIGEge1xuICBjb2xvcjogIzFiN2VkZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogZW5kIGxpbmsgZMSDbmcga8O9ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const httpParamsOptions = {
    headers: new Headers({ 'ContentType': 'application.json' })
};
class LoginService {
    constructor(http) {
        this.http = http;
    }
    getUser() {
        return this.http.post("http://localhost:8080/login", httpParamsOptions)
            .toPromise()
            .then(resJson => resJson['email']).then(resJson => resJson['password']).catch(error => console.log(error));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SignUpComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 90, vars: 0, consts: [["lang", "en"], [0, "xmlns", "th", "http://www.thymeleaf.org"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], ["id", "exist", 0, "th", "text", "${exist}", 2, "display", "none"], [1, "header"], [1, "header-text"], ["href", "http://wunderlist.com/privacy-policy", 1, "header-link"], [1, "logo"], [1, "login-form"], ["action", "/register", "method", "POST", 1, "loginTab", "signup"], ["type", "hidden", "name", "_csrf", "value", "jjcswO4z-vQzRoeyr77_cuhRzjdOymfFPX9M"], [1, "loginTab-input-address"], [1, "loginTab-input-icon"], ["width", "21px", "height", "18px", "viewBox", "0 0 21 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-248.000000, -339.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(231.000000, 238.000000)"], ["transform", "translate(0.000000, 20.000000)"], ["transform", "translate(0.000000, 60.000000)"], ["d", "M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"], [1, "loginTab-input-fieldInput", "user"], ["type", "email", "name", "username", "value", "", "required", "", "autofocus", "", "placeholder", "Email Address"], [1, "loginTab-input-password"], ["width", "21px", "height", "25px", "viewBox", "0 0 21 25", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-247.000000, -396.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(0.000000, 119.000000)"], ["d", "M36,12.9375 C36,12.144 35.3452308,11.5 34.5384615,11.5 L18.4615385,11.5 C17.6547692,11.5 17,12.144 17,12.9375 L17,21.5625 C17,22.356 17.6547692,23 18.4615385,23 L34.5384615,23 C35.3452308,23 36,22.356 36,21.5625 L36,12.9375 L36,12.9375 Z M19.9230769,11.5 L19.9230769,6.46875 C19.9230769,2.8965625 22.8680769,0 26.5,0 C30.1319231,0 33.0769231,2.8965625 33.0769231,6.46875 L33.0769231,11.5 L19.9230769,11.5 Z M22.8461538,8.625 L22.8461538,6.46875 C22.8461538,4.4835625 24.4816154,2.875 26.5,2.875 C28.5183846,2.875 30.1538462,4.4835625 30.1538462,6.46875 L30.1538462,8.625"], [1, "loginTab-input-fieldInput", "pass"], ["type", "password", "name", "password", "required", "", "placeholder", "Password"], [1, "loginTab-input-fieldInput", "repass"], ["type", "password", "name", "repass", "required", "", "placeholder", "Re-Password"], [1, "button-login", "signUpBtn"], ["type", "submit", "value", "Sign Up"], [1, "forgot-password"], ["routerLink", "/forget-pass"], [1, "social-link"], [1, "social-link-face-google"], ["href", "https://a.wunderlist.com/api/v1/oauth/facebook?web=www", 1, "button", "big"], [1, "social-link-face-google-icon"], ["viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z", "fill", "#FFFFFF"], ["href", "https://a.wunderlist.com/api/v1/oauth/google?web=www", 1, "button-google"], ["fill-rule", "evenodd", "fill", "#FFFFFF", "clip-rule", "evenodd"], ["d", "M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"], ["d", "M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"], ["d", "M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"], [1, "social-link-microsoft"], ["href", "", 1, "button-microsoft"], ["stroke", "none", "stroke-width", "1", "fill", "#ffffff", "fill-rule", "evenodd"], ["d", "M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z", "fill", "#F1511B"], ["d", "M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z", "fill", "#80CC28"], ["d", "M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z", "fill", "#00ADEF"], ["d", "M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z", "fill", "#FBBC09"], [1, "sign-up-link"], ["routerLink", "/index", 1, "signup-link"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Forgot PassWord\u00A0? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Already have Account&nbsp? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #423e3e;\n}\n.header[_ngcontent-%COMP%]{\n  background: #edf2fc;\n  min-height: 30px;\n  border-bottom: 1px solid rgba(36,123,198,0.15);\n  font-size: 14px;\n  display: flex;\n  padding: 10px;\n  font-family: \"Lato\",\"Helvetica Neue\",\"Helvetica\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #423e3e;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.header-link[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #2b88d9;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n.header-text[_ngcontent-%COMP%]{\n  font-weight: 400;\n  color: #666;\n  font-size: 13px;\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n}\n.logo[_ngcontent-%COMP%]{\n  margin: 40px auto 0px auto;\n  background-image: url(\"/assets/app.png\");\n  box-sizing: border-box;\n  background-position: -109px 0;\n  width: 79px;\n  background-size: 425px;\n  height: 79px;\n  transform: scale(1.05);\n\n}\n\n.login-form[_ngcontent-%COMP%]{\n  max-width: 370px;\n  min-width: 320px;\n  margin: 30px auto 20px auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.loginTab[_ngcontent-%COMP%]{\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50,50,50,0.08);\n  border-radius: 4px;\n  font-size: 16px;\n}\n.loginTab-input-address[_ngcontent-%COMP%], .loginTab-input-password[_ngcontent-%COMP%]{\n  display: flex;\n  height: 60px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  box-sizing: border-box;\n}\n.loginTab-input-icon[_ngcontent-%COMP%]{\n  width: 21px;\n  height: 18px;\n  display: inline-block;\n  margin: 20px 11px 0px 16px;\n  box-sizing: border-box;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border: 0 none;\n  font-size: 16px;\n  line-height: 15px;\n  padding: 20px 8px;\n  margin-right: 2px;\n  color: #666;\n  outline: none;\n  cursor: text;\n  font: 400 16.3333px Arial;\n  background-color: white;\n  width: inherit;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  font-size: 16px;\n}\n.button-login[_ngcontent-%COMP%]{\n  border-bottom: none;\n  padding: 0 15px;\n  height: 60px;\n  margin: 0;\n}\n.button-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  padding: 11px 10px;\n  border-radius: 3px;\n  margin: 18px auto;\n  font-weight: bold;\n  border: 0 none;\n  background-color: #2b88d9;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.1s transform ease-in-out;\n  outline: none;\n}\n.forgot-password[_ngcontent-%COMP%]{\n  padding-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n\n.social-link[_ngcontent-%COMP%]{\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  box-sizing: border-box;\n}\n.social-link-face-google[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-face-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #3b5998;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n.header-form[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 20px;\n  border-bottom: 1px solid #eee;\n}\n.body-form-text[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n.social-link-face-google[_ngcontent-%COMP%]   .button-google[_ngcontent-%COMP%]{\n  background-color: #dd4b39;\n}\n.social-link-face-google-icon[_ngcontent-%COMP%]{\n  width: 26px;\n  height: 26px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  cursor: pointer;\n}\n.social-link-microsoft[_ngcontent-%COMP%]{\n  margin-right: -10px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-microsoft[_ngcontent-%COMP%]   .button-microsoft[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n\n\n.sign-up-link[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  text-align: center;\n}\n.sign-up-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaU9BQWlPO0VBQ2pPLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixpT0FBaU87QUFDbk87QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFGQTtFQUNFLGVBQWU7QUFDakI7QUFGQTtFQUNFLGVBQWU7QUFDakI7QUFGQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0Esb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0EscUJBQXFCIiwiZmlsZSI6InNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiT3BlbiBTYW5zXCIsXCJNaWNyb3NvZnQgWWFoZWlcIixcIuW+rui9r+mbhem7kVwiLFNUWGloZWksXCLljY7mlofnu4bpu5FcIixcIkhpcmFnaW5vIEtha3UgR290aGljIFByb1wiLE9zYWthLCfvvK3vvLMg77yw44K044K344OD44KvJywnTVMgUEdvdGhpYycsJ+ODoeOCpOODquOCqicsTWVpcnlvLFwiR2VuZXZhIENZXCIsXCJMdWNpZGEgR3JhbmRlXCIsXCJBcmlhbCBVbmljb2RlIE1TXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiQXJpYWxcIixTYW5zLVNlcmlmO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0MjNlM2U7XG59XG4uaGVhZGVye1xuICBiYWNrZ3JvdW5kOiAjZWRmMmZjO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNiwxMjMsMTk4LDAuMTUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgY29sb3I6ICM0MjNlM2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXItbGlua3tcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmI4OGQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaGVhZGVyLXRleHR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIk9wZW4gU2Fuc1wiLFwiTWljcm9zb2Z0IFlhaGVpXCIsXCLlvq7ova/pm4Xpu5FcIixTVFhpaGVpLFwi5Y2O5paH57uG6buRXCIsXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIixPc2FrYSwn77yt77yzIO+8sOOCtOOCt+ODg+OCrycsJ01TIFBHb3RoaWMnLCfjg6HjgqTjg6rjgqonLE1laXJ5byxcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkFyaWFsXCIsU2Fucy1TZXJpZjtcbn1cbi5sb2dve1xuICBtYXJnaW46IDQwcHggYXV0byAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcHAucG5nXCIpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTA5cHggMDtcbiAgd2lkdGg6IDc5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNDI1cHg7XG4gIGhlaWdodDogNzlweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblxufVxuLyogZm9ybSBsb2dpbiAqL1xuLmxvZ2luLWZvcm17XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHggYXV0bztcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxvZ2luVGFie1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg1MCw1MCw1MCwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubG9naW5UYWItaW5wdXQtYWRkcmVzcywubG9naW5UYWItaW5wdXQtcGFzc3dvcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYi1pbnB1dC1pY29ue1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCAxMXB4IDBweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxvZ2luVGFiLWlucHV0LWZpZWxkSW5wdXQge1xuICB3aWR0aDogOTQlO1xufVxuLmxvZ2luVGFiLWlucHV0LWZpZWxkSW5wdXQgaW5wdXR7XG4gIGJvcmRlcjogMCBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIGZvbnQ6IDQwMCAxNi4zMzMzcHggQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IGlucHV0OjpwbGFjZWhvbGRlcntcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJ1dHRvbi1sb2dpbntcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5idXR0b24tbG9naW4gaW5wdXR7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAxOHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDAgbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiODhkOTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9yZ290LXBhc3N3b3Jke1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcmdvdC1wYXNzd29yZCBhe1xuICBjb2xvcjogIzFiN2VkZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi8qIGVuZCBmb3JtIGxvZ2luICovXG4vKiBsaW5rIHNvY2lhbCAqL1xuLnNvY2lhbC1saW5re1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xle1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDMwJTtcbn1cbi5zb2NpYWwtbGluay1mYWNlLWdvb2dsZSBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTIwLDEyMCwxMjAsMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG59XG4uaGVhZGVyLWZvcm17XG4gIGNvbG9yOiAjMjAyMTI0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4uYm9keS1mb3JtLXRleHR7XG4gIGNvbG9yOiAjMjAyMTI0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUgLmJ1dHRvbi1nb29nbGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUtaWNvbntcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29jaWFsLWxpbmstbWljcm9zb2Z0e1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG59XG4uc29jaWFsLWxpbmstbWljcm9zb2Z0IC5idXR0b24tbWljcm9zb2Z0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTIwLDEyMCwxMjAsMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG59XG4vKiBlbmQgbGluayBzb2NpYWwgKi9cbi8qIGxpbmsgxJHEg25nIGvDvSAqL1xuLnNpZ24tdXAtbGlua3tcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWduLXVwLWxpbmsgYSB7XG4gIGNvbG9yOiAjMWI3ZWRmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBlbmQgbGluayBkxINuZyBrw70gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hung/Downloads/demo/src/main/resources/frontend/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map