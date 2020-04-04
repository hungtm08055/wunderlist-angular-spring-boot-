function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forget-pass/forget-pass.component */
    "./src/app/forget-pass/forget-pass.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'index',
      pathMatch: 'full'
    }, {
      path: 'index',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'sign-up',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'forget-pass',
      component: _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPassComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-contextmenu */
    "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
    /* harmony import */


    var _home_home_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.directive */
    "./src/app/home/home.directive.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forget-pass/forget-pass.component */
    "./src/app/forget-pass/forget-pass.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_home_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _models_list_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./models/list.model */
    "./src/app/models/list.model.ts");
    /* harmony import */


    var _models_task_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./models/task.model */
    "./src/app/models/task.model.ts");
    /* harmony import */


    var _models_subtask_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./models/subtask.model */
    "./src/app/models/subtask.model.ts");
    /* harmony import */


    var _models_comment_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./models/comment.model */
    "./src/app/models/comment.model.ts");
    /* harmony import */


    var _models_file_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./models/file.model */
    "./src/app/models/file.model.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"], _home_home_service__WEBPACK_IMPORTED_MODULE_13__["HomeService"], _models_user_model__WEBPACK_IMPORTED_MODULE_14__["User"], _models_list_model__WEBPACK_IMPORTED_MODULE_15__["List"], _models_task_model__WEBPACK_IMPORTED_MODULE_16__["Task"], _models_subtask_model__WEBPACK_IMPORTED_MODULE_17__["Subtask"], _models_comment_model__WEBPACK_IMPORTED_MODULE_18__["Comment"], _models_file_model__WEBPACK_IMPORTED_MODULE_19__["FileModel"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_3__["ContextMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"], _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPassComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_home_directive__WEBPACK_IMPORTED_MODULE_4__["HomeDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_3__["ContextMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"], _forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPassComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_home_directive__WEBPACK_IMPORTED_MODULE_4__["HomeDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_3__["ContextMenuModule"]],
          providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"], _home_home_service__WEBPACK_IMPORTED_MODULE_13__["HomeService"], _models_user_model__WEBPACK_IMPORTED_MODULE_14__["User"], _models_list_model__WEBPACK_IMPORTED_MODULE_15__["List"], _models_task_model__WEBPACK_IMPORTED_MODULE_16__["Task"], _models_subtask_model__WEBPACK_IMPORTED_MODULE_17__["Subtask"], _models_comment_model__WEBPACK_IMPORTED_MODULE_18__["Comment"], _models_file_model__WEBPACK_IMPORTED_MODULE_19__["FileModel"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/forget-pass/forget-pass.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/forget-pass/forget-pass.component.ts ***!
    \******************************************************/

  /*! exports provided: ForgetPassComponent */

  /***/
  function srcAppForgetPassForgetPassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPassComponent", function () {
      return ForgetPassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ForgetPassComponent =
    /*#__PURE__*/
    function () {
      function ForgetPassComponent() {
        _classCallCheck(this, ForgetPassComponent);
      }

      _createClass(ForgetPassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgetPassComponent;
    }();

    ForgetPassComponent.ɵfac = function ForgetPassComponent_Factory(t) {
      return new (t || ForgetPassComponent)();
    };

    ForgetPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgetPassComponent,
      selectors: [["app-forget-pass"]],
      decls: 61,
      vars: 0,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], [1, "header"], [1, "header-text"], ["href", "http://wunderlist.com/privacy-policy", 1, "header-link"], [1, "logo"], [1, "login-form"], ["action", "../php/Process/xulyPHPMailer.php", "method", "POST", 1, "loginTab", "signin"], [1, "header-form"], ["type", "hidden", "name", "_csrf", "value", "jjcswO4z-vQzRoeyr77_cuhRzjdOymfFPX9M"], [1, "loginTab-input-address"], [1, "loginTab-input-icon"], ["width", "21px", "height", "18px", "viewBox", "0 0 21 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-248.000000, -339.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(231.000000, 238.000000)"], ["transform", "translate(0.000000, 20.000000)"], ["transform", "translate(0.000000, 60.000000)"], ["d", "M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"], [1, "loginTab-input-fieldInput"], ["type", "email", "name", "email", "value", "", "required", "", "autofocus", "", "pattern", "^[^\\s@\uFF20=]+[@|\uFF20][^\\.\\s@\uFF20]+(\\.[^\\.\\s@\uFF20]+)+$", "placeholder", "Enter a valid Email"], [1, "body-form-text"], [1, "button-login"], ["type", "submit", "value", "Get a verification code", "name", "forgetPass"], [1, "social-link"], [1, "social-link-face-google"], ["href", "https://a.wunderlist.com/api/v1/oauth/facebook?web=www", 1, "button", "big"], [1, "social-link-face-google-icon"], ["viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z", "fill", "#FFFFFF"], ["href", "https://a.wunderlist.com/api/v1/oauth/google?web=www", 1, "button-google"], ["fill-rule", "evenodd", "fill", "#FFFFFF", "clip-rule", "evenodd"], ["d", "M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"], ["d", "M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"], ["d", "M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"], [1, "social-link-microsoft"], ["href", "", 1, "button-microsoft"], ["stroke", "none", "stroke-width", "1", "fill", "#ffffff", "fill-rule", "evenodd"], ["d", "M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z", "fill", "#F1511B"], ["d", "M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z", "fill", "#80CC28"], ["d", "M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z", "fill", "#00ADEF"], ["d", "M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z", "fill", "#FBBC09"]],
      template: function ForgetPassComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["body[_ngcontent-%COMP%]{\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #423e3e;\n}\n.header[_ngcontent-%COMP%]{\n  background: #edf2fc;\n  min-height: 30px;\n  border-bottom: 1px solid rgba(36,123,198,0.15);\n  font-size: 14px;\n  display: flex;\n  padding: 10px;\n  font-family: \"Lato\",\"Helvetica Neue\",\"Helvetica\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #423e3e;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.header-link[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #2b88d9;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n.header-text[_ngcontent-%COMP%]{\n  font-weight: 400;\n  color: #666;\n  font-size: 13px;\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n}\n.logo[_ngcontent-%COMP%]{\n  margin: 40px auto 0px auto;\n  background-image: url(\"/assets/app.png\");\n  box-sizing: border-box;\n  background-position: -109px 0;\n  width: 79px;\n  background-size: 425px;\n  height: 79px;\n  transform: scale(1.05);\n\n}\n\n.login-form[_ngcontent-%COMP%]{\n  max-width: 370px;\n  min-width: 320px;\n  margin: 30px auto 20px auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.loginTab[_ngcontent-%COMP%]{\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50,50,50,0.08);\n  border-radius: 4px;\n  font-size: 16px;\n}\n.loginTab-input-address[_ngcontent-%COMP%], .loginTab-input-password[_ngcontent-%COMP%]{\n  display: flex;\n  height: 60px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  box-sizing: border-box;\n}\n.loginTab-input-icon[_ngcontent-%COMP%]{\n  width: 21px;\n  height: 18px;\n  display: inline-block;\n  margin: 20px 11px 0px 16px;\n  box-sizing: border-box;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border: 0 none;\n  font-size: 16px;\n  line-height: 15px;\n  padding: 20px 8px;\n  margin-right: 2px;\n  color: #666;\n  outline: none;\n  cursor: text;\n  font: 400 16.3333px Arial;\n  background-color: white;\n  width: inherit;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  font-size: 16px;\n}\n.button-login[_ngcontent-%COMP%]{\n  border-bottom: none;\n  padding: 0 15px;\n  height: 60px;\n  margin: 0;\n}\n.button-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  padding: 11px 10px;\n  border-radius: 3px;\n  margin: 18px auto;\n  font-weight: bold;\n  border: 0 none;\n  background-color: #2b88d9;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.1s transform ease-in-out;\n  outline: none;\n}\n.forgot-password[_ngcontent-%COMP%]{\n  padding-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n\n.social-link[_ngcontent-%COMP%]{\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  box-sizing: border-box;\n}\n.social-link-face-google[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-face-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #3b5998;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n.header-form[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 20px;\n  border-bottom: 1px solid #eee;\n}\n.body-form-text[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n.social-link-face-google[_ngcontent-%COMP%]   .button-google[_ngcontent-%COMP%]{\n  background-color: #dd4b39;\n}\n.social-link-face-google-icon[_ngcontent-%COMP%]{\n  width: 26px;\n  height: 26px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  cursor: pointer;\n}\n.social-link-microsoft[_ngcontent-%COMP%]{\n  margin-right: -10px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-microsoft[_ngcontent-%COMP%]   .button-microsoft[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n\n\n.sign-up-link[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  text-align: center;\n}\n.sign-up-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzL2ZvcmdldC1wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpT0FBaU87RUFDak8sVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlPQUFpTztBQUNuTztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0EsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQSxxQkFBcUIiLCJmaWxlIjoiZm9yZ2V0LXBhc3MvZm9yZ2V0LXBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIk9wZW4gU2Fuc1wiLFwiTWljcm9zb2Z0IFlhaGVpXCIsXCLlvq7ova/pm4Xpu5FcIixTVFhpaGVpLFwi5Y2O5paH57uG6buRXCIsXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIixPc2FrYSwn77yt77yzIO+8sOOCtOOCt+ODg+OCrycsJ01TIFBHb3RoaWMnLCfjg6HjgqTjg6rjgqonLE1laXJ5byxcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkFyaWFsXCIsU2Fucy1TZXJpZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDIzZTNlO1xufVxuLmhlYWRlcntcbiAgYmFja2dyb3VuZDogI2VkZjJmYztcbiAgbWluLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsMTIzLDE5OCwwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiSGVsdmV0aWNhXCIsc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGNvbG9yOiAjNDIzZTNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyLWxpbmt7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJiODhkOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmhlYWRlci10ZXh0e1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJPcGVuIFNhbnNcIixcIk1pY3Jvc29mdCBZYWhlaVwiLFwi5b6u6L2v6ZuF6buRXCIsU1RYaWhlaSxcIuWNjuaWh+e7hum7kVwiLFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsT3Nha2EsJ++8re+8syDvvLDjgrTjgrfjg4Pjgq8nLCdNUyBQR290aGljJywn44Oh44Kk44Oq44KqJyxNZWlyeW8sXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJBcmlhbFwiLFNhbnMtU2VyaWY7XG59XG4ubG9nb3tcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMHB4IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXBwLnBuZ1wiKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwOXB4IDA7XG4gIHdpZHRoOiA3OXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQyNXB4O1xuICBoZWlnaHQ6IDc5cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cbn1cbi8qIGZvcm0gbG9naW4gKi9cbi5sb2dpbi1mb3Jte1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNTAsNTAsNTAsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxvZ2luVGFiLWlucHV0LWFkZHJlc3MsLmxvZ2luVGFiLWlucHV0LXBhc3N3b3Jke1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubG9naW5UYWItaW5wdXQtaWNvbntcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIwcHggMTFweCAwcHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IHtcbiAgd2lkdGg6IDk0JTtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IGlucHV0e1xuICBib3JkZXI6IDAgbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZzogMjBweCA4cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250OiA0MDAgMTYuMzMzM3B4IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4ubG9naW5UYWItaW5wdXQtZmllbGRJbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idXR0b24tbG9naW57XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDA7XG59XG4uYnV0dG9uLWxvZ2luIGlucHV0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTFweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMThweCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjg4ZDk7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcmdvdC1wYXNzd29yZHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3Jnb3QtcGFzc3dvcmQgYXtcbiAgY29sb3I6ICMxYjdlZGY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBlbmQgZm9ybSBsb2dpbiAqL1xuLyogbGluayBzb2NpYWwgKi9cbi5zb2NpYWwtbGlua3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zb2NpYWwtbGluay1mYWNlLWdvb2dsZXtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUgYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLmhlYWRlci1mb3Jte1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmJvZHktZm9ybS10ZXh0e1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlIC5idXR0b24tZ29vZ2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlLWljb257XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMzAlO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdCAuYnV0dG9uLW1pY3Jvc29mdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLyogZW5kIGxpbmsgc29jaWFsICovXG4vKiBsaW5rIMSRxINuZyBrw70gKi9cbi5zaWduLXVwLWxpbmt7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi11cC1saW5rIGEge1xuICBjb2xvcjogIzFiN2VkZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogZW5kIGxpbmsgZMSDbmcga8O9ICovXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forget-pass',
          templateUrl: './forget-pass.component.html',
          styleUrls: ['./forget-pass.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/list.model */
    "./src/app/models/list.model.ts");
    /* harmony import */


    var _models_task_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/task.model */
    "./src/app/models/task.model.ts");
    /* harmony import */


    var _models_subtask_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/subtask.model */
    "./src/app/models/subtask.model.ts");
    /* harmony import */


    var _models_comment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/comment.model */
    "./src/app/models/comment.model.ts");
    /* harmony import */


    var _models_file_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/file.model */
    "./src/app/models/file.model.ts");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home.directive */
    "./src/app/home/home.directive.ts");

    function HomeComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 341);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 342);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_50_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.toggleDeleteTaskConfirm();
        })("clickOutside", function HomeComponent_div_50_Template_div_clickOutside_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.clickOutside();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 343);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 344);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete To-do");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r0.clientX + "px")("top", ctx_r0.clientY + "px");
      }
    }

    function HomeComponent_div_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 345);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 346);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_70_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.toggleDeleteListConfirm();
        })("clickOutside", function HomeComponent_div_70_Template_div_clickOutside_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.clickOutside();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 347);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 348);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r1.clientX + "px")("top", ctx_r1.clientY + "px");
      }
    }

    function HomeComponent_div_71_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 349);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 350);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 351);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 352);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_71_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.editList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 353);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 354);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 355);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 356);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_71_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.list.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 357);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 358);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 359);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "List Members");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 360);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "List options");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 361);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 362);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 363);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 364);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 365);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 366);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 367);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 368);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 239);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 369);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 370);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "tr\u1EA7n m\u1EA1nh h\xF9ng ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 371);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 372);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "owner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 373);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "tranmanhhung102@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 374);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 375);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 376);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 377);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 378);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Do Not Disturb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 379);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 380);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 381);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 382);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 383);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_71_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.toggleEditList("", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 384);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 385);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.list.title);
      }
    }

    function HomeComponent_div_72_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 386);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 387);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 388);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 389);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_72_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.addNewList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 353);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 354);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create New List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 355);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 390);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_72_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.list.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 358);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 359);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "List Members");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 360);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "List options");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 361);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 362);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 363);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 364);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 365);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 366);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 367);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 368);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 239);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 369);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 370);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "tr\u1EA7n m\u1EA1nh h\xF9ng ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 371);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 372);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "owner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 373);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "tranmanhhung102@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 374);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 375);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 376);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 377);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 378);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Do Not Disturb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 379);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 380);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 381);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 382);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 383);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_72_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.toggleAddList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 391);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 392);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 393);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.list.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user_id);
      }
    }

    function HomeComponent_div_151_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 394);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_151_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.clickToHideRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 395);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeComponent_div_151_Template_div_dblclick_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var lists_r27 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.toggleEditList(lists_r27.id, lists_r27.title);
        })("contextmenu", function HomeComponent_div_151_Template_div_contextmenu_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var lists_r27 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.toggleDeleteList(lists_r27.id, lists_r27.title, $event);
        })("click", function HomeComponent_div_151_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var lists_r27 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.clickListToShowTask(lists_r27.id, lists_r27.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 396);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 397);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 398);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 399);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 400);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 401);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id_list", lists_r27.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lists_r27.title, " ");
      }
    }

    function HomeComponent_div_159_div_3__svg_svg_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 461);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_3__svg_svg_3_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var tasks_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.markAsCompleted(tasks_r39.id, tasks_r39.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 462);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_159_div_3__svg_svg_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 463);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_3__svg_svg_5_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var tasks_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.markAsUncompleted(tasks_r39.id, tasks_r39.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "path", 464);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "'.'");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "'.' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 465);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_159_div_3__svg_svg_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 466);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_3__svg_svg_10_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var tasks_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.markAsStar(tasks_r39.id, tasks_r39.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 467);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_159_div_3__svg_svg_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 468);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_3__svg_svg_12_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var tasks_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r53.markAsUnStar(tasks_r39.id, tasks_r39.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ".' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 469);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_159_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 448);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 449);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 450);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_159_div_3__svg_svg_3_Template, 3, 0, "svg", 451);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 452);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_159_div_3__svg_svg_5_Template, 6, 0, "svg", 453);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 454);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 455);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_div_3_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r56.task.title = $event;
        })("keyup.enter", function HomeComponent_div_159_div_3_Template_input_keyup_enter_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.editTask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 456);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 457);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_159_div_3__svg_svg_10_Template, 5, 0, "svg", 458);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 459);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_159_div_3__svg_svg_12_Template, 5, 0, "svg", 460);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r39 = ctx.$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r39.status == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r39.status == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.task.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r39.star == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r39.star == 1);
      }
    }

    function HomeComponent_div_159_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 470);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 471);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 472);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 473);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 474);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 475);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 476);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_div_5_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var tasks_r59 = ctx.$implicit;
          return tasks_r59.duedate = $event;
        })("keyup.enter", function HomeComponent_div_159_div_5_Template_input_keyup_enter_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var tasks_r59 = ctx.$implicit;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r62.editTaskDueDate(tasks_r59.duedate, tasks_r59.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", tasks_r59.duedate);
      }
    }

    function HomeComponent_div_159_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 477);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 478);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 479);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 480);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 481);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 475);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 482);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_div_6_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var tasks_r63 = ctx.$implicit;
          return tasks_r63.reminder = $event;
        })("keyup.enter", function HomeComponent_div_159_div_6_Template_input_keyup_enter_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var tasks_r63 = ctx.$implicit;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r66.editTaskReminder(tasks_r63.reminder, tasks_r63.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", tasks_r63.reminder);
      }
    }

    function HomeComponent_div_159_div_7__svg_svg_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 492);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_7__svg_svg_3_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r72.markAsChecked(subtasks_r67.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 462);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_159_div_7__svg_svg_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 493);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_7__svg_svg_4_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r75.markAsUnChecked(subtasks_r67.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 464);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 465);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_159_div_7_input_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 494);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_div_7_input_6_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return subtasks_r67.title = $event;
        })("keyup.enter", function HomeComponent_div_159_div_7_input_6_Template_input_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r81.editSubTask(subtasks_r67.id, subtasks_r67.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", subtasks_r67.title);
      }
    }

    function HomeComponent_div_159_div_7_input_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 495);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_div_7_input_7_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return subtasks_r67.title = $event;
        })("keyup.enter", function HomeComponent_div_159_div_7_input_7_Template_input_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r87.editSubTask(subtasks_r67.id, subtasks_r67.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subtasks_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", subtasks_r67.title);
      }
    }

    function HomeComponent_div_159_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 483);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 484);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 485);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_159_div_7__svg_svg_3_Template, 3, 0, "svg", 486);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_159_div_7__svg_svg_4_Template, 4, 0, "svg", 487);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 488);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_159_div_7_input_6_Template, 1, 1, "input", 489);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_159_div_7_input_7_Template, 1, 1, "input", 490);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 491);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_7_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var subtasks_r67 = ctx.$implicit;

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r90.toggleDeleteSubTaskButton(subtasks_r67.id, subtasks_r67.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subtasks_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subtasks_r67.status == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subtasks_r67.status == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subtasks_r67.status == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subtasks_r67.status == 1);
      }
    }

    function HomeComponent_div_159_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 496);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 497);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 498);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 499);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 500);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 501);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 502);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 503);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 504);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 505);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 506);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 507);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_38_Template_div_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var files_r92 = ctx.$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r93.toggleDeleteFileButton(files_r92.id, files_r92.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var files_r92 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/upload/", files_r92.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "assets/upload/", files_r92.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](files_r92.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, files_r92.createdate, "dd/MM/yyyy"));
      }
    }

    function HomeComponent_div_159_div_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 508);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 509);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 510);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 511);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 512);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 513);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 514);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 515);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_div_39_Template_div_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

          var comments_r95 = ctx.$implicit;

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r96.toggleDeleteCommentButton(comments_r95.id, comments_r95.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comments_r95 = ctx.$implicit;

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r38.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comments_r95.createdate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comments_r95.title, " ");
      }
    }

    function HomeComponent_div_159_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 402);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 403);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 404);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_159_div_3_Template, 13, 5, "div", 405);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 406);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_159_div_5_Template, 8, 1, "div", 407);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_159_div_6_Template, 8, 1, "div", 408);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_159_div_7_Template, 10, 4, "div", 409);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 410);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 411);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 412);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 413);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.inputAddSubTask = $event;
        })("keyup.enter", function HomeComponent_div_159_Template_input_keyup_enter_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.addSubTask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 414);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 415);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 416);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 417);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 418);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 419);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 420);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_div_159_Template_input_change_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.onFileSelected($event.target.files);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 421);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 422);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 423);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 424);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 425);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 426);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 427);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 428);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "polygon", 429);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "polygon", 430);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "polygon", 431);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polygon", 432);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "polygon", 433);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_div_159_div_38_Template, 16, 7, "div", 434);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomeComponent_div_159_div_39_Template, 13, 3, "div", 435);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 436);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 437);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 438);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 439);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 440);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_159_Template_input_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r102.inputAddComment = $event;
        })("keyup.enter", function HomeComponent_div_159_Template_input_keyup_enter_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.addComment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 201);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 441);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 442);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_Template_div_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.toggleShowRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 443);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 444);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 445);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 446);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 447);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_159_Template_div_click_56_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.toggleDeleteTaskConfirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.taskDetailArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.taskDetailArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.taskDetailArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.subTaskArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.inputAddSubTask);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.fileArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.commentArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.inputAddComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 9, ctx_r5.task_createDate, "EEE , dd/MM/yyyy"), " ");
      }
    }

    function HomeComponent_div_318__svg_svg_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 461);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_318__svg_svg_5_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

          var tasks_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.markAsCompleted(tasks_r106.id, tasks_r106.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 462);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_318__svg_svg_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 528);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "path", 464);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "'.'");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "'.' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 465);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_318_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 529);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, tasks_r106.duedate, "dd/MM/yyyy"), " ");
      }
    }

    function HomeComponent_div_318_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 530);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, tasks_r106.duedate, "dd/MM/yyyy"), " ");
      }
    }

    function HomeComponent_div_318_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 531);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Its Time!!! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 532);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 533);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_318__svg_svg_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 466);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_318__svg_svg_17_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var tasks_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r119.markAsStar(tasks_r106.id, tasks_r106.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 467);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_318__svg_svg_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 468);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_318__svg_svg_19_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var tasks_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r122.markAsUnStar(tasks_r106.id, tasks_r106.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ".' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 469);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_318_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 516);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_318_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var tasks_r106 = ctx.$implicit;

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.showTaskCreateDate(tasks_r106.createdate);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 517);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function HomeComponent_div_318_Template_div_contextmenu_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var tasks_r106 = ctx.$implicit;

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r127.toggleDeleteTaskButton(tasks_r106.id, tasks_r106.title, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 518);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 519);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 450);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_318__svg_svg_5_Template, 3, 0, "svg", 451);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 452);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_318__svg_svg_7_Template, 6, 0, "svg", 520);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 521);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeComponent_div_318_Template_div_dblclick_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r128.toggleShowRight();
        })("click", function HomeComponent_div_318_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var tasks_r106 = ctx.$implicit;

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r129.showTaskDetail(tasks_r106.id, tasks_r106.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 522);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 523);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_318_div_12_Template, 3, 4, "div", 524);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_318_div_13_Template, 3, 4, "div", 525);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_318_div_14_Template, 4, 0, "div", 526);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 527);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 457);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_318__svg_svg_17_Template, 5, 0, "svg", 458);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 459);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_318__svg_svg_19_Template, 5, 0, "svg", 460);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r106 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id_task", tasks_r106.id)("status", tasks_r106.status)("star", tasks_r106.star);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.status == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.status == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tasks_r106.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.duedate >= ctx_r6.currentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.duedate < ctx_r6.currentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.reminder == ctx_r6.currentTime && tasks_r106.duedate == ctx_r6.currentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.star == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r106.star == 1);
      }
    }

    function HomeComponent_div_325__svg_svg_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 538);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 462);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_325__svg_svg_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 463);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_325__svg_svg_7_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

          var tasks_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r138.markAsUncompleted(tasks_r130.id, tasks_r130.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "path", 464);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "'.'");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "'.' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 465);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_325_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 529);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, tasks_r130.duedate, "dd/MM/yyyy"), " ");
      }
    }

    function HomeComponent_div_325_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 530);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, tasks_r130.duedate, "dd/MM/yyyy"), " ");
      }
    }

    function HomeComponent_div_325_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 531);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Its Time!!! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 532);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 533);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_325__svg_svg_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 466);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_325__svg_svg_20_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var tasks_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r143.markAsStar(tasks_r130.id, tasks_r130.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 467);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_325__svg_svg_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 468);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_325__svg_svg_22_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

          var tasks_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r146.markAsUnStar(tasks_r130.id, tasks_r130.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ".' ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 469);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_325_Template(rf, ctx) {
      if (rf & 1) {
        var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 534);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 517);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function HomeComponent_div_325_Template_div_contextmenu_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150);

          var tasks_r130 = ctx.$implicit;

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r149.toggleDeleteTaskButton(tasks_r130.id, tasks_r130.title, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 518);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 519);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 450);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_325__svg_svg_5_Template, 3, 0, "svg", 535);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 452);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_325__svg_svg_7_Template, 6, 0, "svg", 453);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 521);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeComponent_div_325_Template_div_dblclick_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150);

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r151.toggleShowRight();
        })("click", function HomeComponent_div_325_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150);

          var tasks_r130 = ctx.$implicit;

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r152.showTaskDetail(tasks_r130.id, tasks_r130.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 536);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 537);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 523);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_325_div_15_Template, 3, 4, "div", 524);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_div_325_div_16_Template, 3, 4, "div", 525);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_325_div_17_Template, 4, 0, "div", 526);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 527);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 457);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_325__svg_svg_20_Template, 5, 0, "svg", 458);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 459);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_325__svg_svg_22_Template, 5, 0, "svg", 460);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tasks_r130 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id_task", tasks_r130.id)("status", tasks_r130.status)("star", tasks_r130.star);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.status == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.status == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tasks_r130.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 13, tasks_r130.createdate, "EEE, dd/MM/yyyy"), " by ", ctx_r7.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.duedate >= ctx_r7.currentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.duedate < ctx_r7.currentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.reminder == ctx_r7.currentTime && tasks_r130.duedate == ctx_r7.currentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.star == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tasks_r130.star == 1);
      }
    }

    function HomeComponent_div_538_Template(rf, ctx) {
      if (rf & 1) {
        var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 539);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 540);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 541);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 542);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 543);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 544);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 545);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 546);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 547);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \" will be deleted forever. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 548);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You will not be able to undo this action.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 549);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 550);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 551);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 552);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 554);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_538_Template_input_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154);

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r153.deleteList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 555);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_538_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154);

          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r155.toggleDeleteListConfirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.title_list);
      }
    }

    function HomeComponent_div_539_Template(rf, ctx) {
      if (rf & 1) {
        var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 556);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 540);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 541);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 542);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 543);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 544);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 545);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 546);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u201C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 547);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u201D will be deleted forever. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 548);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You will not be able to undo this action.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 549);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 550);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 554);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_539_Template_input_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157);

          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r156.deleteTask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 555);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_539_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157);

          var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r158.toggleDeleteTaskConfirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.title_task);
      }
    }

    function HomeComponent_div_540_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 557);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 540);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 541);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 542);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 543);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 544);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 545);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 546);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 547);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \" will be deleted forever. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 548);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You will not be able to undo this action.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 549);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 550);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 558);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_540_Template_input_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r159.deleteSubTask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 555);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_540_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r161.toggleDeleteSubTaskButton("", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.title_subTask);
      }
    }

    function HomeComponent_div_541_Template(rf, ctx) {
      if (rf & 1) {
        var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 559);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 540);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 541);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 542);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 543);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 544);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 545);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 546);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 547);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \" will be deleted forever. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 548);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You will not be able to undo this action.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 549);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 550);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 560);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_541_Template_input_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r162.deleteComment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 555);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_541_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r164.toggleDeleteCommentButton("", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.title_comment);
      }
    }

    function HomeComponent_div_542_Template(rf, ctx) {
      if (rf & 1) {
        var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 561);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 540);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 541);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 542);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 543);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 544);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 545);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 546);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "File \" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 547);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \" will be deleted forever. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 548);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You will not be able to undo this action.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 549);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 550);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 560);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_542_Template_input_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166);

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r165.deleteFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 553);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 555);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_542_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r167.toggleDeleteFileButton("", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.title_file);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "margin-right.px": a0
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(homeService, route, router) {
        _classCallCheck(this, HomeComponent);

        this.homeService = homeService;
        this.route = route;
        this.router = router;
        this.statusAbove = '0';
        this.statusBelow = '1';
        this.unStarred = '0';
        this.starred = '1';
        this.showEditList = true;
        this.showAddList = true;
        this.showDeleteListButton = true;
        this.showDeleteListConfirm = true;
        this.showDeleteTaskButton = true;
        this.showDeleteTaskConfirm = true;
        this.showDeleteSubTaskConFirm = true;
        this.showDeleteCommentConFirm = true;
        this.showDeleteFileConfirm = true;
        this.showRight = true;
        this.selectedFile = null;
        this.clientX = 0;
        this.clientY = 0;
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.currentTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'HH:mm', 'en');
        this.listArray = [];
        this.taskArrayAbove = [];
        this.taskArrayBelow = [];
        this.taskDetailArray = [];
        this.subTaskArray = [];
        this.commentArray = [];
        this.fileArray = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // session user login
          this.username = sessionStorage.getItem('username');
          this.user_id = sessionStorage.getItem('user_id'); // declare list

          this.list = new _models_list_model__WEBPACK_IMPORTED_MODULE_3__["List"](); // auto load list

          this.showList(); // declare task

          this.task = new _models_task_model__WEBPACK_IMPORTED_MODULE_4__["Task"](); // declare subTask

          this.subTask = new _models_subtask_model__WEBPACK_IMPORTED_MODULE_5__["Subtask"](); // declare comment

          this.comment = new _models_comment_model__WEBPACK_IMPORTED_MODULE_6__["Comment"](); // declare file

          this.file = new _models_file_model__WEBPACK_IMPORTED_MODULE_7__["FileModel"]();
        } // style

      }, {
        key: "clickOutside",
        value: function clickOutside() {
          this.showDeleteListButton = true;
          this.showDeleteTaskButton = true;
        }
      }, {
        key: "toggleAddList",
        value: function toggleAddList() {
          this.showAddList = !this.showAddList;
          this.showEditList = true;
        }
      }, {
        key: "toggleEditList",
        value: function toggleEditList(id_list, title_list) {
          this.showEditList = !this.showEditList;
          this.showAddList = true;
          this.list.title = title_list; // list value

          this.id_list = id_list; // id_list
        }
      }, {
        key: "toggleDeleteList",
        value: function toggleDeleteList(id_list, title_list, event) {
          this.showDeleteListButton = !this.showDeleteListButton;
          this.showAddList = this.showEditList = true;
          event.preventDefault();
          this.id_list = id_list;
          this.title_list = title_list;
          this.event = event;
          this.clientX = event.clientX;
          this.clientY = event.clientY;
        }
      }, {
        key: "toggleDeleteListConfirm",
        value: function toggleDeleteListConfirm() {
          this.showDeleteListConfirm = !this.showDeleteListConfirm;
          this.showDeleteListButton = true;
        }
      }, {
        key: "toggleDeleteTaskButton",
        value: function toggleDeleteTaskButton(id_task, title_task, event) {
          event.preventDefault();
          this.event = event;
          this.clientX = event.clientX;
          this.clientY = event.clientY;
          this.showDeleteTaskButton = !this.showDeleteTaskButton;
          this.id_task = id_task;
          this.title_task = title_task;
        }
      }, {
        key: "toggleDeleteTaskConfirm",
        value: function toggleDeleteTaskConfirm() {
          this.showDeleteTaskConfirm = !this.showDeleteTaskConfirm;
          this.showDeleteTaskButton = true;
        }
      }, {
        key: "clickListToShowTask",
        value: function clickListToShowTask(id_list, title_list) {
          var _this = this;

          this.title_list = title_list;
          this.id_list = id_list;
          this.task.title = '';
          this.showTaskUncompleted();
          this.showTaskCompleted();
          var secondsCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(30000);
          secondsCounter.subscribe(function (success) {
            _this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            _this.currentTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'HH:mm', 'en');

            _this.showTaskUncompleted();

            _this.showTaskCompleted();
          });
        }
      }, {
        key: "toggleShowRight",
        value: function toggleShowRight() {
          this.showRight = !this.showRight;

          if (this.showRight == true) {
            this.middleStyle = 0;
          } else {
            this.middleStyle = 367;
          }
        }
      }, {
        key: "clickToHideRight",
        value: function clickToHideRight() {
          this.showRight = true;
          this.middleStyle = 0;
        }
      }, {
        key: "toggleDeleteSubTaskButton",
        value: function toggleDeleteSubTaskButton(id_subTask, title_subTask) {
          this.id_subTask = id_subTask;
          this.title_subTask = title_subTask;
          this.showDeleteSubTaskConFirm = !this.showDeleteSubTaskConFirm;
        }
      }, {
        key: "toggleDeleteCommentButton",
        value: function toggleDeleteCommentButton(id_comment, title_comment) {
          this.id_comment = id_comment;
          this.title_comment = title_comment;
          this.showDeleteCommentConFirm = !this.showDeleteCommentConFirm;
        }
      }, {
        key: "toggleDeleteFileButton",
        value: function toggleDeleteFileButton(id_file, title_file) {
          this.id_file = id_file;
          this.title_file = title_file;
          this.showDeleteFileConfirm = !this.showDeleteFileConfirm;
        } // list function

      }, {
        key: "showList",
        value: function showList() {
          var _this2 = this;

          this.homeService.showListByUser(this.user_id).subscribe(function (data) {
            _this2.listArray = data;
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "addNewList",
        value: function addNewList() {
          var _this3 = this;

          if (this.list.title.trim() == '') {
            alert("List Name cannot be null");
          } else {
            this.showAddList = !this.showAddList;
            this.homeService.addList(this.list, this.user_id).subscribe(function (success) {
              _this3.showList();

              _this3.title_list = _this3.list.title;
              _this3.list.title = '';
            }, function (error) {
              alert("Server error");
            });
          }
        }
      }, {
        key: "editList",
        value: function editList() {
          var _this4 = this;

          if (this.list.title.trim() == '') {
            alert("List Name cannot be null");
          } else {
            this.showEditList = !this.showEditList;
            this.homeService.editListByID(this.list, this.id_list).subscribe(function (success) {
              _this4.showList();

              _this4.title_list = _this4.list.title;
              _this4.list.title = '';
            }, function (error) {
              alert("Server error");
            });
          }
        }
      }, {
        key: "deleteList",
        value: function deleteList() {
          var _this5 = this;

          this.homeService.deleteListByID(this.id_list).subscribe(function (success) {
            _this5.showList();

            _this5.showTaskUncompleted();

            _this5.showTaskCompleted();

            _this5.showDeleteListConfirm = true;
            _this5.title_list = '';
          }, function (error) {
            alert('Server error');
          });
        } // task function

      }, {
        key: "showTaskUncompleted",
        value: function showTaskUncompleted() {
          var _this6 = this;

          this.homeService.showTaskByList(this.id_list, this.statusAbove).subscribe(function (data) {
            _this6.taskArrayAbove = data;
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "showTaskCompleted",
        value: function showTaskCompleted() {
          var _this7 = this;

          this.homeService.showTaskByList(this.id_list, this.statusBelow).subscribe(function (data) {
            _this7.taskArrayBelow = data;
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "markAsCompleted",
        value: function markAsCompleted(id_task, title_task) {
          var _this8 = this;

          this.homeService.changeTaskStatus(this.task, this.statusBelow, id_task).subscribe(function (success) {
            _this8.showTaskUncompleted();

            _this8.showTaskCompleted();

            _this8.showTaskDetail(id_task, title_task);
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "markAsUncompleted",
        value: function markAsUncompleted(id_task, title_task) {
          var _this9 = this;

          this.homeService.changeTaskStatus(this.task, this.statusAbove, id_task).subscribe(function (success) {
            _this9.showTaskUncompleted();

            _this9.showTaskCompleted();

            _this9.showTaskDetail(id_task, title_task);
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "markAsStar",
        value: function markAsStar(id_task, title_task) {
          var _this10 = this;

          this.homeService.changeTaskStar(this.task, this.starred, id_task).subscribe(function (success) {
            _this10.showTaskUncompleted();

            _this10.showTaskCompleted();

            _this10.showTaskDetail(id_task, title_task);
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "markAsUnStar",
        value: function markAsUnStar(id_task, title_task) {
          var _this11 = this;

          this.homeService.changeTaskStar(this.task, this.unStarred, id_task).subscribe(function (success) {
            _this11.showTaskUncompleted();

            _this11.showTaskCompleted();

            _this11.showTaskDetail(id_task, title_task);
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "addTask",
        value: function addTask() {
          var _this12 = this;

          this.task.title = this.inputAddTask;

          if (this.inputAddTask.trim() == '') {
            alert("Task name cannot be null");
          } else {
            this.homeService.addTaskByList(this.task, this.id_list).subscribe(function (success) {
              _this12.inputAddTask = '';

              _this12.showTaskUncompleted();

              _this12.showTaskDetail(success.id, _this12.task.title);
            }, function (error) {
              alert("Server error");
            });
          }
        }
      }, {
        key: "editTask",
        value: function editTask() {
          var _this13 = this;

          if (this.task.title.trim() == '') {
            alert("Task name cannot be null");
          } else {
            this.homeService.editTaskByID(this.task, this.id_task).subscribe(function (success) {
              _this13.showTaskDetail(_this13.id_task, _this13.task.title);

              _this13.showTaskUncompleted();

              _this13.showTaskCompleted();
            }, function (error) {
              alert("Server error");
            });
          }
        }
      }, {
        key: "deleteTask",
        value: function deleteTask() {
          var _this14 = this;

          this.homeService.deleteTaskByID(this.id_task).subscribe(function (success) {
            _this14.showTaskUncompleted();

            _this14.showTaskCompleted();

            _this14.showTaskDetail(_this14.id_task, _this14.title_task);

            _this14.showDeleteTaskConfirm = true;
            _this14.showRight = true;
            _this14.middleStyle = 0;
          }, function (error) {
            alert('Server error');
          });
        } // task right function

      }, {
        key: "showTaskDetail",
        value: function showTaskDetail(id_task, title_task) {
          var _this15 = this;

          this.task.title = title_task;
          this.title_task = this.task.title;
          this.id_task = id_task;
          this.homeService.showTaskDetail(id_task).subscribe(function (data) {
            _this15.taskDetailArray = data;

            _this15.showSubTask();

            _this15.showComment();

            _this15.showFile();

            console.log(_this15.taskDetailArray);
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "showTaskCreateDate",
        value: function showTaskCreateDate(createDate) {
          this.task_createDate = createDate;
        }
      }, {
        key: "editTaskDueDate",
        value: function editTaskDueDate(dueDate, title_task) {
          var _this16 = this;

          this.title_task = title_task;
          this.task.duedate = dueDate;
          this.homeService.updateDateByID(this.task, this.id_task).subscribe(function (success) {
            _this16.showTaskUncompleted();

            _this16.showTaskCompleted();

            _this16.showTaskDetail(_this16.id_task, _this16.title_task);
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "editTaskReminder",
        value: function editTaskReminder(reminder, title_task) {
          var _this17 = this;

          this.title_task = title_task;
          this.task.reminder = reminder;
          this.homeService.updateReminderByID(this.task, this.id_task).subscribe(function (success) {
            _this17.showTaskUncompleted();

            _this17.showTaskCompleted();

            _this17.showTaskDetail(_this17.id_task, _this17.title_task);
          }, function (error) {
            alert('Server error');
          });
        } // subTask function

      }, {
        key: "showSubTask",
        value: function showSubTask() {
          var _this18 = this;

          this.homeService.showSubTaskByTaskID(this.id_task).subscribe(function (data) {
            _this18.subTaskArray = data;
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "addSubTask",
        value: function addSubTask() {
          var _this19 = this;

          this.subTask.title = this.inputAddSubTask;

          if (this.inputAddSubTask.trim() == '') {
            alert("SubTask cannot be null");
          } else {
            this.homeService.addSubTaskByTask(this.subTask, this.id_task).subscribe(function (success) {
              _this19.inputAddSubTask = '';

              _this19.showTaskDetail(_this19.id_task, _this19.title_task);
            }, function (error) {
              alert('Server error');
            });
          }
        }
      }, {
        key: "editSubTask",
        value: function editSubTask(id_subTask, title_subTask) {
          var _this20 = this;

          this.subTask.title = title_subTask;
          this.homeService.editSubTaskByID(this.subTask, id_subTask).subscribe(function (success) {
            _this20.showSubTask();
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "markAsChecked",
        value: function markAsChecked(id_subTask) {
          var _this21 = this;

          this.homeService.changeSubTaskStatus(this.subTask, id_subTask, this.statusBelow).subscribe(function (success) {
            _this21.showSubTask();
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "markAsUnChecked",
        value: function markAsUnChecked(id_subTask) {
          var _this22 = this;

          this.homeService.changeSubTaskStatus(this.subTask, id_subTask, this.statusAbove).subscribe(function (success) {
            _this22.showSubTask();
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "deleteSubTask",
        value: function deleteSubTask() {
          var _this23 = this;

          this.homeService.deleteSubTaskByID(this.id_subTask).subscribe(function (success) {
            _this23.showDeleteSubTaskConFirm = true;

            _this23.showSubTask();
          }, function (error) {
            alert('Server error');
          });
        } // comment function

      }, {
        key: "showComment",
        value: function showComment() {
          var _this24 = this;

          this.homeService.showCommentByTaskID(this.id_task).subscribe(function (data) {
            _this24.commentArray = data;
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "addComment",
        value: function addComment() {
          var _this25 = this;

          this.comment.title = this.inputAddComment;

          if (this.inputAddComment.trim() == '') {
            alert('Comment cannot be null');
          } else {
            this.homeService.addCommentByTaskID(this.comment, this.id_task).subscribe(function (success) {
              _this25.inputAddComment = '';

              _this25.showComment();
            }, function (error) {
              alert('Server error');
            });
          }
        }
      }, {
        key: "deleteComment",
        value: function deleteComment() {
          var _this26 = this;

          this.homeService.deleteCommentByID(this.id_comment).subscribe(function (success) {
            _this26.showDeleteCommentConFirm = true;

            _this26.showComment();
          });
        } // file function

      }, {
        key: "onFileSelected",
        value: function onFileSelected(files) {
          this.selectedFile = files;
          this.addFile(files);
        }
      }, {
        key: "showFile",
        value: function showFile() {
          var _this27 = this;

          this.homeService.showFileByTaskID(this.id_task).subscribe(function (data) {
            _this27.fileArray = data;
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "addFile",
        value: function addFile(files) {
          var _this28 = this;

          var formData = new FormData();
          Array.from(files).forEach(function (f) {
            return formData.append('file', f);
          });
          this.file.title = this.selectedFile.name;
          this.homeService.addFileByTaskID(this.file, this.id_task, formData).subscribe(function (event) {
            console.log("success");

            _this28.showFile();
          }, function (error) {
            alert('Server error');
          });
        }
      }, {
        key: "deleteFile",
        value: function deleteFile() {
          var _this29 = this;

          this.homeService.deleteFileByID(this.id_file).subscribe(function (success) {
            _this29.showDeleteFileConfirm = true;

            _this29.showFile();
          }, function (error) {
            alert('Server error');
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 543,
      vars: 19,
      consts: [["lang", "en", 0, "xmlns", "th", "http://www.w3.org/1999/xhtml"], [0, "xmlns", "th", "http://www.thymeleaf.org"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], [1, "task-deleted-hover-contextmenu", "hidden"], [1, "TDmenu1", "TDmenu-border"], [1, "TDmenu-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "completed"], ["stroke", "none", "stroke-width", "1", "fill-rule", "evenodd"], ["id", "completed"], ["d", "M7.48412073,16.9975 C7.36412073,16.9975 7.24412073,16.9375 7.14412073,16.8575 C5.66412073,15.3575 4.00412073,14.0375 2.24412073,12.9175 C2.00412073,12.7775 1.92412073,12.4575 2.08412073,12.2375 C2.22412073,11.9975 2.54412073,11.9375 2.76412073,12.0775 C4.42412073,13.1175 5.98412073,14.3375 7.38412073,15.6975 C10.3441207,10.8175 13.3841207,6.9175 17.1441207,3.1375 C17.3441207,2.9575 17.6641207,2.9575 17.8641207,3.1375 C18.0441207,3.3375 18.0441207,3.6575 17.8641207,3.8575 C14.0041207,7.6975 10.9441207,11.6775 7.92412073,16.7575 C7.84412073,16.8775 7.70412073,16.9775 7.56412073,16.9975 L7.48412073,16.9975 Z", "id", "H"], [1, "TDmenu-text"], [1, "TDmenu2"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "email"], ["id", "email"], ["d", "M4.5,17 C3.12,17 2,15.88 2,14.5 L2,5.5 C2,4.12 3.12,3 4.5,3 L15.5,3 C16.88,3 18,4.12 18,5.5 L18,14.5 C18,15.88 16.88,17 15.5,17 L4.5,17 Z M4.5,4 C3.68,4 3,4.68 3,5.5 L3,14.5 C3,15.32 3.68,16 4.5,16 L15.5,16 C16.32,16 17,15.32 17,14.5 L17,5.5 C17,4.68 16.32,4 15.5,4 L4.5,4 Z M10,11.5 C9.88,11.5 9.74,11.46 9.64,11.36 L4.14,5.86 C3.96,5.66 3.96,5.34 4.14,5.14 C4.34,4.96 4.66,4.96 4.86,5.14 L10,10.3 L15.14,5.14 C15.34,4.96 15.66,4.96 15.86,5.14 C16.04,5.34 16.04,5.66 15.86,5.86 L10.36,11.36 C10.26,11.46 10.12,11.5 10,11.5 L10,11.5 Z", "id", "X"], [1, "TDmenu3", "TDmenu-border"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "print"], ["d", "M4.5,6 C3.12,6 2,7.12 2,8.5 L2,14.5 C2,14.78 2.22,15 2.5,15 L5,15 L5,17.5 C5,17.78 5.22,18 5.5,18 L14.5,18 C14.78,18 15,17.78 15,17.5 L15,15 L17.5,15 C17.78,15 18,14.78 18,14.5 L18,8.5 C18,7.12 16.88,6 15.5,6 L4.5,6 Z M17,14 L15,14 L15,12 L15.5,12 C15.78,12 16,11.78 16,11.5 C16,11.22 15.78,11 15.5,11 L4.5,11 C4.22,11 4,11.22 4,11.5 C4,11.78 4.22,12 4.5,12 L5,12 L5,14 L3,14 L3,8.5 C3,7.68 3.68,7 4.5,7 L15.5,7 C16.32,7 17,7.68 17,8.5 L17,14 Z M14,12 L14,17 L6,17 L6,12 L14,12 Z", "id", "Z"], ["d", "M5.5,5 C5.78,5 6,4.78 6,4.5 L6,3 L14,3 L14,4.5 C14,4.78 14.22,5 14.5,5 C14.78,5 15,4.78 15,4.5 L15,2.5 C15,2.22 14.78,2 14.5,2 L5.5,2 C5.22,2 5,2.22 5,2.5 L5,4.5 C5,4.78 5.22,5 5.5,5 L5.5,5 Z", "id", "Path"], [1, "TDmenu4"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill-rule", "evenodd", 0, "sketch", "type", "MSPage"], ["id", "copy", 0, "sketch", "type", "MSArtboardGroup"], ["d", "M12.7921708,6.5 L8.647,10.646 C8.451,10.842 8.451,11.158 8.647,11.353 C8.744,11.451 8.872,11.5 9,11.5 C9.128,11.5 9.256,11.451 9.354,11.353 L13.5,7.207 L13.5,10 C13.5,10.276 13.724,10.5 14,10.5 C14.276,10.5 14.5,10.276 14.5,10 L14.5,6.01573317 C14.5041978,5.88263558 14.4555311,5.7480518 14.354,5.646 C14.2519482,5.54446887 14.1173644,5.4958022 13.9841257,5.5 L10,5.5 C9.724,5.5 9.5,5.724 9.5,6 C9.5,6.276 9.724,6.5 10,6.5 L12.7921708,6.5 L12.7921708,6.5 Z M2.5,5.5 C2.224,5.5 2,5.276 2,5 L2,4.5 C2,3.121 3.121,2 4.5,2 L5,2 C5.276,2 5.5,2.224 5.5,2.5 C5.5,2.776 5.276,3 5,3 L4.5,3 C3.673,3 3,3.673 3,4.5 L3,5 C3,5.276 2.776,5.5 2.5,5.5 Z M5,18 L4.5,18 C3.121,18 2,16.879 2,15.5 L2,15 C2,14.724 2.224,14.5 2.5,14.5 C2.776,14.5 3,14.724 3,15 L3,15.5 C3,16.327 3.673,17 4.5,17 L5,17 C5.276,17 5.5,17.224 5.5,17.5 C5.5,17.776 5.276,18 5,18 Z M15.5,18 L15,18 C14.724,18 14.5,17.776 14.5,17.5 C14.5,17.224 14.724,17 15,17 L15.5,17 C16.327,17 17,16.327 17,15.5 L17,15 C17,14.724 17.224,14.5 17.5,14.5 C17.776,14.5 18,14.724 18,15 L18,15.5 C18,16.879 16.879,18 15.5,18 Z M17.5,5.5 C17.224,5.5 17,5.276 17,5 L17,4.5 C17,3.673 16.327,3 15.5,3 L15,3 C14.724,3 14.5,2.776 14.5,2.5 C14.5,2.224 14.724,2 15,2 L15.5,2 C16.879,2 18,3.121 18,4.5 L18,5 C18,5.276 17.776,5.5 17.5,5.5 Z M2.5,12.5 C2.224,12.5 2,12.276 2,12 L2,8 C2,7.724 2.224,7.5 2.5,7.5 C2.776,7.5 3,7.724 3,8 L3,12 C3,12.276 2.776,12.5 2.5,12.5 Z M17.5,12.5 C17.224,12.5 17,12.276 17,12 L17,8 C17,7.724 17.224,7.5 17.5,7.5 C17.776,7.5 18,7.724 18,8 L18,12 C18,12.276 17.776,12.5 17.5,12.5 Z M12,3 L8,3 C7.724,3 7.5,2.776 7.5,2.5 C7.5,2.224 7.724,2 8,2 L12,2 C12.276,2 12.5,2.224 12.5,2.5 C12.5,2.776 12.276,3 12,3 Z M12,18 L8,18 C7.724,18 7.5,17.776 7.5,17.5 C7.5,17.224 7.724,17 8,17 L12,17 C12.276,17 12.5,17.224 12.5,17.5 C12.5,17.776 12.276,18 12,18 Z", "id", "Copy", 0, "sketch", "type", "MSShapeGroup"], [1, "TDmenu5"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "trash"], ["id", "trash"], ["d", "M12,3.5 C12,2.4 11.1,1.5 10,1.5 C8.9,1.5 8,2.4 8,3.5 L5.5,3.5 C4.68,3.5 4,4.18 4,5 L4,7 C4,7.28 4.22,7.5 4.5,7.5 L15.5,7.5 C15.78,7.5 16,7.28 16,7 L16,5 C16,4.18 15.32,3.5 14.5,3.5 L12,3.5 Z M10,2.5 C10.56,2.5 11,2.94 11,3.5 L9,3.5 C9,2.94 9.44,2.5 10,2.5 L10,2.5 Z M15,6.5 L5,6.5 L5,5 C5,4.72 5.22,4.5 5.5,4.5 L14.5,4.5 C14.78,4.5 15,4.72 15,5 L15,6.5 Z M14.5,8.5 C14.22,8.5 14,8.72 14,9 L14,16 C14,16.28 13.78,16.5 13.5,16.5 L6.5,16.5 C6.22,16.5 6,16.28 6,16 L6,9 C6,8.72 5.78,8.5 5.5,8.5 C5.22,8.5 5,8.72 5,9 L5,16 C5,16.82 5.68,17.5 6.5,17.5 L13.5,17.5 C14.32,17.5 15,16.82 15,16 L15,9 C15,8.72 14.78,8.5 14.5,8.5 L14.5,8.5 Z M9,9 C9,8.72 8.78,8.5 8.5,8.5 C8.22,8.5 8,8.72 8,9 L8,15 C8,15.28 8.22,15.5 8.5,15.5 C8.78,15.5 9,15.28 9,15 L9,9 Z M12,9 C12,8.72 11.78,8.5 11.5,8.5 C11.22,8.5 11,8.72 11,9 L11,15 C11,15.28 11.22,15.5 11.5,15.5 C11.78,15.5 12,15.28 12,15 L12,9 Z", "id", "j"], ["class", "tasklist-menu", "id", "tasklist-menu", 3, "left", "top", 4, "ngIf"], [1, "hiddenclass"], [1, "left-contextmenu-inbox", "hidden"], [1, "LCI1"], [1, "LCI-icon"], [1, "LCI-text"], [1, "LCI2"], ["class", "left-contextmenu", 3, "left", "top", 4, "ngIf"], ["class", "editlist-layout-father", 4, "ngIf"], ["class", "createlist-layout-father", 4, "ngIf"], [1, "main"], ["id", "left-responsive"], [1, "left"], [1, "navsearch"], ["title", "Toggle Sidebar"], ["wclassth", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "list-toggle"], ["d", "M0.5,3.5l19,0", 2, "fill", "none", "stroke-wclassth", "1px", "stroke", "white"], ["d", "M0.5,9.53l19,0", 2, "fill", "none", "stroke-wclassth", "1px", "stroke", "white"], ["d", "M0.5,15.5l19,0", 2, "fill", "none", "stroke-wclassth", "1px", "stroke", "white"], ["action", "../php/Process/show_search_result.php", "method", "POST", "id", "search"], [1, "search-input", "hiddenclass"], ["type", "text", "name", "search"], ["title", "Search"], ["wclassth", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "search-icon", "hiddenclass"], ["stroke", "none", "stroke-wclassth", "1", "fill-rule", "evenodd"], ["d", "M8.5025,15 C4.9225,15 2.0025,12.08 2.0025,8.5 C2.0025,4.92 4.9225,2 8.5025,2 C12.0825,2 15.0025,4.92 15.0025,8.5 C15.0025,12.08 12.0825,15 8.5025,15 L8.5025,15 Z M8.5025,3 C5.4625,3 3.0025,5.46 3.0025,8.5 C3.0025,11.54 5.4625,14 8.5025,14 C11.5425,14 14.0025,11.54 14.0025,8.5 C14.0025,5.46 11.5425,3 8.5025,3 L8.5025,3 Z M17.5025,18 C17.3825,18 17.2425,17.96 17.1425,17.86 L13.6425,14.36 C13.4625,14.16 13.4625,13.84 13.6425,13.64 C13.8425,13.46 14.1625,13.46 14.3625,13.64 L17.8625,17.14 C18.0425,17.34 18.0425,17.66 17.8625,17.86 C17.7625,17.96 17.6225,18 17.5025,18 L17.5025,18 Z", 1, "z"], [1, "scroll-left"], [1, "usertool"], ["title", "", 1, "avatar"], ["src", "assets/text.png"], [1, "username", "hiddenclass", "clickfather"], [1, "option", "hiddenclass"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", 0, "xml", "space", "preserve", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], ["d", "M10.502,13c-0.132,0 -0.26,-0.053 -0.354,-0.146l-4.002,-4c-0.195,-0.195 -0.195,-0.512 0,-0.708c0.195,-0.195 0.512,-0.195 0.707,0l3.649,3.647l3.644,-3.647c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 0,0.708l-3.997,4c-0.094,0.093 -0.221,0.146 -0.354,0.146"], [1, "comment-notify"], ["title", "Activities", 1, "noti", "hiddenclass", "clickfather"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "bell"], ["id", "bell"], ["d", "M15.2,10.14 C14.74,9.6 14.46,8.92 14.4,8.2 L14.28,6.94 C14.14,5.08 12.76,3.54 11,3.12 L11,3 C11,2.44 10.56,2 10,2 C9.44,2 9,2.44 9,3 L9,3.12 C7.24,3.54 5.86,5.08 5.72,6.94 L5.6,8.2 C5.54,8.92 5.28,9.6 4.8,10.16 L4.04,11.06 C3.38,11.88 3,12.9 3,13.94 L3,14.5 C3,14.78 3.22,15 3.5,15 L16.5,15 C16.78,15 17,14.78 17,14.5 L17,13.94 C17,12.9 16.62,11.88 15.96,11.06 L15.2,10.14 Z M16,14 L4,14 L4,13.94 C4,13.14 4.28,12.34 4.82,11.7 L5.58,10.8 C6.18,10.08 6.52,9.2 6.6,8.28 L6.7,7.02 C6.84,5.34 8.3,4 10,4 C11.7,4 13.16,5.34 13.3,7.02 L13.4,8.28 C13.48,9.2 13.84,10.08 14.42,10.8 L15.18,11.7 C15.72,12.34 16,13.14 16,13.94 L16,14 Z M12.3,16.1 C12.08,15.94 11.76,15.98 11.58,16.2 C10.82,17.22 9.18,17.22 8.4,16.2 C8.24,15.98 7.92,15.94 7.7,16.1 C7.48,16.26 7.44,16.58 7.62,16.8 C8.18,17.56 9.06,18 10,18 C10.94,18 11.82,17.56 12.38,16.8 C12.56,16.58 12.52,16.26 12.3,16.1 L12.3,16.1 Z", "id", "m"], [1, "noti-hover", "hidden", "click1ptu"], [1, "noti-hover-text"], [1, "noti-hover-icon"], ["viewBox", "0 0 188 220", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-183.000000, -315.000000)", "fill", "#D5D5D5"], ["transform", "translate(55.000000, 305.000000)"], ["d", "M314.603832,179.039847 L314.603832,170.587855 C314.603832,162.473942 310.884955,154.698109 304.461441,149.626914 C293.304811,140.836842 285.867058,127.989813 283.83858,113.452386 L274.710428,50.2314836 C266.934595,45.1602882 258.144523,41.7794912 249.354451,39.4129334 C248.002132,38.736774 246.987893,37.7225349 246.987893,36.0321364 L246.987893,35.355977 C246.987893,21.4947096 235.493183,10 221.631916,10 C207.770648,10 196.275939,21.4947096 196.275939,35.355977 C196.275939,37.3844552 195.2617,38.736774 193.571301,39.0748537 C184.781229,41.4414115 176.329237,44.8222085 168.553404,49.8934039 L159.425252,113.452386 C157.396774,127.989813 149.959021,140.836842 138.802391,149.626914 C132.378877,154.698109 128.66,162.473942 128.66,170.587855 L128.66,179.039847 L314.603832,179.039847 Z M221.631916,43.8079694 C216.8988,43.8079694 213.179923,40.0890928 213.179923,35.355977 C213.179923,30.6228613 216.8988,26.9039847 221.631916,26.9039847 C226.365032,26.9039847 230.083908,30.6228613 230.083908,35.355977 C230.083908,40.0890928 226.365032,43.8079694 221.631916,43.8079694 Z M197.966337,195.943832 C196.952098,198.648469 196.275939,201.353107 196.275939,204.395824 C196.275939,218.257091 207.770648,229.751801 221.631916,229.751801 C235.493183,229.751801 246.987893,218.257091 246.987893,204.395824 C246.987893,201.353107 246.311733,198.648469 245.297494,195.943832 L197.966337,195.943832 Z"], [1, "noti-hover-text2"], [1, "noti-hover-text3"], ["title", "Conservations", 1, "mess", "hiddenclass", "clickfather"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "conversations", "rtl-flip"], ["id", "conversations"], ["d", "M3.46,18 C3.28,17.98 3.1,17.86 3.04,17.68 C2.96,17.5 3,17.3 3.12,17.16 C4.1,16.08 4.3,14.12 3.54,13.12 C3.18,12.64 2.72,12 2.42,11.26 C2.14,10.52 2,9.76 2,9 C2,5.14 5.58,2 10,2 C14.42,2 18,5.14 18,9 C18,12.82 14.46,15.96 10.08,16 L10,16 C8.7,16 7.42,15.72 6.28,15.2 C6.02,15.08 5.92,14.78 6.04,14.54 C6.14,14.28 6.44,14.18 6.7,14.28 C7.68,14.74 8.8,14.98 9.92,15 L10,15 C13.86,15 17,12.3 17,9 C17,5.68 13.86,3 10,3 C6.14,3 3,5.68 3,9 C3,9.64 3.12,10.28 3.36,10.88 C3.6,11.52 4,12.08 4.34,12.52 C5.2,13.64 5.22,15.52 4.48,16.96 C5.2,16.84 5.92,16.56 6.52,16.1 C6.74,15.94 7.06,15.98 7.22,16.2 C7.38,16.42 7.34,16.74 7.12,16.9 C6.16,17.62 5,18 3.82,18 L3.46,18 Z", "id", "I"], [1, "mess-hover", "hidden", "click1ptu"], [1, "mess-hover-text"], [1, "mess-hover-icon"], ["viewBox", "0 0 311 225", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-171.000000, -314.000000)", "fill-opacity", "0.426941803", "fill", "#A3A3A3"], ["d", "M294.605267,178.281513 C307.457215,195.55639 329.751489,207 355.18,207 C363.64,223.74 380.92,234.18 399.82,233.82 L400.18,233.82 C393.52,229.14 389.56,221.58 389.56,213.66 C389.38,206.1 392.8,198.9 398.56,194.04 C415.84,182.52 427,164.34 427,144 C427,109.08 394.78,81 355,81 C347.732898,81 340.718094,81.937109 334.105931,83.6818347 C335.192798,89.2714344 335.758877,95.0202169 335.758877,100.889173 C335.758877,131.893283 319.797048,159.687193 294.605267,178.281513 L294.605267,178.281513 Z M220,9.08 C162.54,9.08 116,49.64 116,100.08 C116,129.46 132.12,155.72 157.08,172.36 C165.4,179.38 170.34,189.78 170.08,200.7 C170.08,212.14 164.36,223.06 154.74,229.82 L155.26,229.82 C182.56,230.34 207.52,215.26 219.74,191.08 C277.46,191.08 324,150.26 324,100.08 C324,49.64 277.46,9.08 220,9.08 Z"], [1, "mess-hover-text2"], [1, "mess-hover-text3"], [1, "ds1"], [1, "ds1icon"], ["title", "Inbox", 1, "list-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "inbox"], ["d", "M10,15 C8.8,15 7.78,14.14 7.56,13 L2.5,13 C2.22,13 2,12.78 2,12.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,12.5 C18,12.78 17.78,13 17.5,13 L12.44,13 C12.22,14.14 11.2,15 10,15 L10,15 Z M3,12 L8,12 C8.28,12 8.5,12.22 8.5,12.5 C8.5,13.32 9.18,14 10,14 C10.82,14 11.5,13.32 11.5,12.5 C11.5,12.22 11.72,12 12,12 L17,12 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,12 Z M5.5,6 C5.22,6 5,5.78 5,5.5 C5,5.22 5.22,5 5.5,5 L14.5,5 C14.78,5 15,5.22 15,5.5 C15,5.78 14.78,6 14.5,6 L5.5,6 Z M5.5,8 C5.22,8 5,7.78 5,7.5 C5,7.22 5.22,7 5.5,7 L14.5,7 C14.78,7 15,7.22 15,7.5 C15,7.78 14.78,8 14.5,8 L5.5,8 Z M5.5,10 C5.22,10 5,9.78 5,9.5 C5,9.22 5.22,9 5.5,9 L14.5,9 C14.78,9 15,9.22 15,9.5 C15,9.78 14.78,10 14.5,10 L5.5,10 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,14.5 C2,14.22 2.22,14 2.5,14 C2.78,14 3,14.22 3,14.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,14.5 C17,14.22 17.22,14 17.5,14 C17.78,14 18,14.22 18,14.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z", "id", "A"], [1, "ds1text", "hiddenclass", "danhsachtext"], [1, "count", "hiddenclass"], [1, "ds"], [3, "load"], ["class", "newlist", 3, "click", 4, "ngFor", "ngForOf"], [1, "createlist", 3, "click"], [1, "plusicon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "plus-small"], ["d", "M10,10l0,6.5c-0.003,0.053 -0.008,0.103 -0.024,0.155c-0.038,0.116 -0.12,0.217 -0.226,0.278c-0.047,0.027 -0.094,0.042 -0.146,0.056c-0.052,0.008 -0.051,0.008 -0.104,0.011c-0.053,-0.003 -0.103,-0.008 -0.155,-0.024c-0.15,-0.05 -0.271,-0.171 -0.321,-0.321c-0.016,-0.052 -0.021,-0.102 -0.024,-0.155l0,-6.5l-6.5,0c-0.046,-0.002 -0.058,-0.001 -0.104,-0.011c-0.103,-0.022 -0.197,-0.076 -0.268,-0.154c-0.169,-0.188 -0.169,-0.482 0,-0.67c0.035,-0.038 0.077,-0.072 0.122,-0.098c0.078,-0.045 0.161,-0.062 0.25,-0.067l6.5,0l0,-6.5c0.005,-0.089 0.022,-0.172 0.067,-0.25c0.126,-0.219 0.406,-0.31 0.636,-0.207c0.048,0.022 0.093,0.05 0.132,0.085c0.078,0.071 0.132,0.165 0.154,0.268c0.01,0.046 0.009,0.058 0.011,0.104l0,6.5l6.5,0c0.046,0.002 0.058,0.001 0.104,0.011c0.103,0.022 0.197,0.076 0.268,0.154c0.169,0.188 0.169,0.482 0,0.67c-0.035,0.038 -0.077,0.072 -0.122,0.098c-0.078,0.045 -0.161,0.062 -0.25,0.067l-6.5,0Z"], [1, "plustext", "hiddenclass"], ["class", "right", 4, "ngIf"], [1, "middle", 3, "ngStyle"], [1, "titleANDicon"], ["id", "title-text"], [1, "actionBar"], [1, "share"], [1, "share-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-disabled", "true"], ["id", "share"], ["d", "M11.5025,12 C13.7825,12 15.5025,8.84 15.5025,6 C15.5025,3.8 13.7025,2 11.5025,2 C9.3025,2 7.5025,3.8 7.5025,6 C7.5025,8.5 9.0225,12 11.5025,12 L11.5025,12 Z M11.5025,3 C13.1625,3 14.5025,4.34 14.5025,6 C14.5025,8.26 13.1225,11 11.5025,11 C9.8425,11 8.5025,8.26 8.5025,6 C8.5025,4.34 9.8425,3 11.5025,3 L11.5025,3 Z M4.5025,10 L6.0025,10 C6.2825,10 6.5025,9.78 6.5025,9.5 C6.5025,9.22 6.2825,9 6.0025,9 L4.5025,9 L4.5025,7.5 C4.5025,7.22 4.2825,7 4.0025,7 C3.7225,7 3.5025,7.22 3.5025,7.5 L3.5025,9 L2.0025,9 C1.7225,9 1.5025,9.22 1.5025,9.5 C1.5025,9.78 1.7225,10 2.0025,10 L3.5025,10 L3.5025,11.5 C3.5025,11.78 3.7225,12 4.0025,12 C4.2825,12 4.5025,11.78 4.5025,11.5 L4.5025,10 Z M18.2625,14.88 C18.0625,14 17.4025,13.28 16.5225,13.04 L14.2225,12.36 C14.0825,12.32 13.9625,12.26 13.8625,12.14 C13.6625,11.96 13.3425,11.96 13.1625,12.16 C12.9625,12.34 12.9625,12.66 13.1625,12.86 C13.3825,13.08 13.6425,13.24 13.9425,13.32 L16.2425,14 C16.7625,14.14 17.1625,14.58 17.2825,15.1 L17.4425,15.8 C16.9025,16.16 15.2025,17 11.5025,17 C7.7825,17 6.1025,16.14 5.5625,15.8 L5.7225,15.04 C5.8425,14.5 6.2625,14.06 6.8025,13.92 L9.0425,13.32 C9.3425,13.24 9.6225,13.08 9.8625,12.86 C10.0425,12.66 10.0425,12.34 9.8625,12.14 C9.6625,11.96 9.3425,11.96 9.1425,12.14 C9.0425,12.24 8.9225,12.32 8.7825,12.36 L6.5425,12.96 C5.6425,13.2 4.9625,13.92 4.7425,14.82 L4.5225,15.9 C4.4825,16.06 4.5225,16.24 4.6425,16.36 C4.7225,16.42 6.3625,18 11.5025,18 C16.6425,18 18.2825,16.42 18.3625,16.36 C18.4825,16.24 18.5225,16.06 18.4825,15.9 L18.2625,14.88 Z", "id", "W"], [1, "share-text"], [1, "sort", "clickfather"], [1, "sort-hover", "hidden", "click1ptu"], [1, "sort-ds1"], [1, "sort-ds1-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-disabled", "false", 1, "sort-az"], ["id", "sort-az"], ["d", "M14.2,2.3 C14.12,2.12 13.94,2 13.76,2 L13.26,2 C13.06,2 12.88,2.12 12.8,2.3 L10.04,8.3 C9.94,8.54 10.04,8.84 10.3,8.96 C10.54,9.08 10.84,8.96 10.96,8.7 L11.74,7 L15.26,7 L16.04,8.7 C16.14,8.9 16.32,9 16.5,9 C16.58,9 16.64,8.98 16.7,8.96 C16.96,8.84 17.06,8.54 16.96,8.3 L14.2,2.3 Z M5.64,3.02 C5.56,3 5.48,3 5.4,3 C5.3,3.02 5.22,3.08 5.14,3.16 L3.14,5.14 C2.96,5.34 2.96,5.66 3.14,5.86 C3.34,6.04 3.66,6.04 3.86,5.86 L5,4.7 L5,8.5 C5,8.78 5.22,9 5.5,9 C5.78,9 6,8.78 6,8.5 L6,4.7 L7.14,5.86 C7.24,5.96 7.38,6 7.5,6 C7.62,6 7.76,5.96 7.86,5.86 C8.04,5.66 8.04,5.34 7.86,5.14 C5.68,2.98 5.8,3.08 5.64,3.02 L5.64,3.02 Z M14.8,6 L12.2,6 L13.5,3.16 L14.8,6 Z M6,15.3 L6,11.5 C6,11.22 5.78,11 5.5,11 C5.22,11 5,11.22 5,11.5 L5,15.3 L3.86,14.14 C3.66,13.96 3.34,13.96 3.14,14.14 C2.96,14.34 2.96,14.66 3.14,14.86 C5.28,17 5.2,16.96 5.4,17 C5.56,17.02 5.74,16.98 5.86,16.84 L7.86,14.86 C8.04,14.66 8.04,14.34 7.86,14.14 C7.66,13.96 7.34,13.96 7.14,14.14 L6,15.3 Z M15.94,11.26 C15.86,11.1 15.68,11 15.5,11 L11.5,11 C11.22,11 11,11.22 11,11.5 C11,11.78 11.22,12 11.5,12 L14.56,12 L11.08,17.22 C10.98,17.38 10.98,17.58 11.06,17.74 C11.14,17.9 11.32,18 11.5,18 L15.5,18 C15.78,18 16,17.78 16,17.5 C16,17.22 15.78,17 15.5,17 L12.44,17 L15.92,11.78 C16.02,11.62 16.02,11.42 15.94,11.26 L15.94,11.26 Z", "id", "sort"], [1, "sort-ds1-text"], [1, "sort-ds2"], [1, "sort-ds2-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "sort-date"], ["id", "sort-date"], ["d", "M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M9,13.12 C9.12,13.12 9.2,13.16 9.26,13.22 C9.3,13.28 9.34,13.34 9.34,13.44 L9.34,14 L5.86,14 L5.86,13.68 C5.86,13.62 5.88,13.56 5.9,13.5 C5.94,13.42 5.98,13.36 6.04,13.3 L7.52,11.82 C7.64,11.68 7.76,11.56 7.86,11.46 C7.94,11.34 8.02,11.22 8.1,11.12 C8.16,11 8.2,10.88 8.24,10.78 C8.28,10.66 8.28,10.54 8.28,10.4 C8.28,10.18 8.22,10.02 8.12,9.9 C8,9.78 7.84,9.72 7.62,9.72 C7.54,9.72 7.46,9.74 7.38,9.76 C7.3,9.8 7.22,9.82 7.16,9.88 C7.1,9.92 7.06,9.98 7,10.04 C6.96,10.1 6.94,10.16 6.92,10.24 C6.88,10.36 6.82,10.44 6.74,10.46 C6.68,10.5 6.58,10.52 6.44,10.5 L5.94,10.4 C5.98,10.16 6.04,9.94 6.16,9.76 C6.26,9.58 6.38,9.42 6.54,9.3 C6.68,9.18 6.86,9.1 7.06,9.04 C7.24,8.96 7.46,8.94 7.68,8.94 C7.92,8.94 8.14,8.98 8.32,9.04 C8.52,9.12 8.68,9.22 8.82,9.34 C8.96,9.46 9.08,9.62 9.14,9.8 C9.22,9.96 9.26,10.16 9.26,10.38 C9.26,10.56 9.24,10.74 9.18,10.88 C9.14,11.04 9.06,11.2 8.96,11.34 C8.88,11.48 8.78,11.62 8.66,11.74 L8.28,12.16 L7.2,13.24 C7.32,13.2 7.44,13.18 7.56,13.16 C7.68,13.14 7.78,13.12 7.88,13.12 L9,13.12 Z M10.48,9 L13.96,9 L13.96,9.4 C13.96,9.52 13.96,9.62 13.92,9.7 L13.86,9.88 L12.02,13.68 C11.98,13.78 11.92,13.84 11.84,13.9 C11.76,13.96 11.66,14 11.52,14 L10.84,14 L12.7,10.28 L12.84,10.04 C12.9,9.98 12.94,9.9 13,9.84 L10.7,9.84 C10.64,9.84 10.6,9.82 10.54,9.78 C10.5,9.74 10.48,9.68 10.48,9.62 L10.48,9 Z", "id", "c"], [1, "sort-ds2-text"], [1, "sort-ds3"], [1, "sort-ds3-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "sort-creation"], ["id", "sort-creation"], ["d", "M9.5,17 C5.36,17 2,13.64 2,9.5 C2,5.36 5.36,2 9.5,2 C13.64,2 17,5.36 17,9.5 C17,9.78 16.78,10 16.5,10 C16.22,10 16,9.78 16,9.5 C16,5.92 13.08,3 9.5,3 C5.92,3 3,5.92 3,9.5 C3,13.08 5.92,16 9.5,16 C9.78,16 10,16.22 10,16.5 C10,16.78 9.78,17 9.5,17 L9.5,17 Z M6.5,11 C6.22,11 6,10.78 6,10.5 C6,10.22 6.22,10 6.5,10 L10,10 L10,5.5 C10,5.22 10.22,5 10.5,5 C10.78,5 11,5.22 11,5.5 L11,10.5 C11,10.78 10.78,11 10.5,11 L6.5,11 Z M12.5,18 C11.68,18 11,17.32 11,16.5 L11,12.5 C11,11.68 11.68,11 12.5,11 L16.5,11 C17.32,11 18,11.68 18,12.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L12.5,18 Z M12.5,12 C12.22,12 12,12.22 12,12.5 L12,16.5 C12,16.78 12.22,17 12.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,12.5 C17,12.22 16.78,12 16.5,12 L12.5,12 Z M14.5,16 C14.22,16 14,15.78 14,15.5 L14,14.3 L13.72,14.44 C13.48,14.58 13.18,14.48 13.06,14.22 C12.92,13.98 13.02,13.68 13.28,13.56 L14.28,13.06 C14.44,12.98 14.62,12.98 14.76,13.08 C14.92,13.16 15,13.32 15,13.5 L15,15.5 C15,15.78 14.78,16 14.5,16 L14.5,16 Z", "id", "\u2260"], [1, "sort-ds3-text"], [1, "sort-ds4"], [1, "sort-ds4-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "assigned"], ["id", "Rectangle-3-+-A", "transform", "translate(1.000000, 2.000000)"], ["d", "M10,10 C12.28,10 14,6.84 14,4 C14,1.8 12.2,0 10,0 C7.8,0 6,1.8 6,4 C6,6.5 7.52,10 10,10 L10,10 Z M4.94,7.74 C4.98,7.66 5,7.58 5,7.5 C5,7.42 4.98,7.34 4.94,7.26 C4.92,7.22 4.9,7.18 4.86,7.14 L2.86,5.14 C2.66,4.96 2.34,4.96 2.14,5.14 C1.96,5.34 1.96,5.66 2.14,5.86 L3.3,7 L0.5,7 C0.22,7 0,7.22 0,7.5 C0,7.78 0.22,8 0.5,8 L3.3,8 L2.14,9.14 C1.96,9.34 1.96,9.66 2.14,9.86 C2.24,9.96 2.38,10 2.5,10 C2.62,10 2.76,9.96 2.86,9.86 L4.86,7.86 C4.9,7.82 4.92,7.78 4.94,7.74 L4.94,7.74 Z M16.76,12.88 C16.56,12 15.9,11.28 15.02,11.04 L12.72,10.36 C12.58,10.32 12.46,10.26 12.36,10.14 C12.16,9.96 11.84,9.96 11.66,10.16 C11.46,10.34 8.54,10.34 8.36,10.14 C8.16,9.96 7.84,9.96 7.64,10.14 C7.54,10.24 7.42,10.32 7.28,10.36 L5.04,10.96 C4.14,11.2 3.46,11.92 3.24,12.82 L3.02,13.9 C2.98,14.06 3.02,14.24 3.14,14.36 C3.22,14.42 4.86,16 10,16 C15.14,16 16.78,14.42 16.86,14.36 C16.98,14.24 17.02,14.06 16.98,13.9 L16.76,12.88 Z", "fill-opacity", "0.06"], ["d", "M10,10 C12.28,10 14,6.84 14,4 C14,1.8 12.2,0 10,0 C7.8,0 6,1.8 6,4 C6,6.5 7.52,10 10,10 L10,10 Z M10,1 C11.66,1 13,2.34 13,4 C13,6.26 11.62,9 10,9 C8.34,9 7,6.26 7,4 C7,2.34 8.34,1 10,1 L10,1 Z M4.94,7.74 C4.98,7.66 5,7.58 5,7.5 C5,7.42 4.98,7.34 4.94,7.26 C4.92,7.22 4.9,7.18 4.86,7.14 L2.86,5.14 C2.66,4.96 2.34,4.96 2.14,5.14 C1.96,5.34 1.96,5.66 2.14,5.86 L3.3,7 L0.5,7 C0.22,7 0,7.22 0,7.5 C0,7.78 0.22,8 0.5,8 L3.3,8 L2.14,9.14 C1.96,9.34 1.96,9.66 2.14,9.86 C2.24,9.96 2.38,10 2.5,10 C2.62,10 2.76,9.96 2.86,9.86 L4.86,7.86 C4.9,7.82 4.92,7.78 4.94,7.74 L4.94,7.74 Z M16.76,12.88 C16.56,12 15.9,11.28 15.02,11.04 L12.72,10.36 C12.58,10.32 12.46,10.26 12.36,10.14 C12.16,9.96 11.84,9.96 11.66,10.16 C11.46,10.34 11.46,10.66 11.66,10.86 C11.88,11.08 12.14,11.24 12.44,11.32 L14.74,12 C15.26,12.14 15.66,12.58 15.78,13.1 L15.94,13.8 C15.4,14.16 13.7,15 10,15 C6.3,15 4.6,14.14 4.06,13.8 L4.22,13.04 C4.34,12.5 4.76,12.06 5.3,11.92 L7.54,11.32 C7.84,11.24 8.12,11.08 8.36,10.86 C8.54,10.66 8.54,10.34 8.36,10.14 C8.16,9.96 7.84,9.96 7.64,10.14 C7.54,10.24 7.42,10.32 7.28,10.36 L5.04,10.96 C4.14,11.2 3.46,11.92 3.24,12.82 L3.02,13.9 C2.98,14.06 3.02,14.24 3.14,14.36 C3.22,14.42 4.86,16 10,16 C15.14,16 16.78,14.42 16.86,14.36 C16.98,14.24 17.02,14.06 16.98,13.9 L16.76,12.88 Z"], [1, "sort-ds4-text"], [1, "sort-ds5"], [1, "sort-ds5-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "starred"], ["id", "Web-svgs", "stroke", "none", "stroke-width", "1", "fill-rule", "evenodd"], ["id", "starred"], ["id", "Rectangle-3-+-A", "transform", "translate(1.000000, 0.000000)"], ["d", "M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z", "id", "C"], ["d", "M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z", "id", "D", "opacity", "0.06"], [1, "sort-ds5-text"], [1, "sort-icon"], [1, "sort-text"], [1, "more", "clickfather"], [1, "more-hover", "hidden", "click1ptu"], [1, "more-ds1"], [1, "more-ds1-icon"], ["id", "duplicate", 0, "sketch", "type", "MSArtboardGroup"], ["d", "M15.5,2 L7.5,2 C6.121,2 5,3.121 5,4.5 L5,6 L4.5,6 C3.121,6 2,7.121 2,8.5 C2,8.776 2.224,9 2.5,9 C2.776,9 3,8.776 3,8.5 C3,7.673 3.673,7 4.5,7 L5,7 L5,12.5 C5,13.879 6.121,15 7.5,15 L13,15 L13,15.5 C13,16.327 12.327,17 11.5,17 C11.224,17 11,17.224 11,17.5 C11,17.776 11.224,18 11.5,18 C12.879,18 14,16.879 14,15.5 L14,15 L15.5,15 C16.879,15 18,13.879 18,12.5 L18,4.5 C18,3.121 16.879,2 15.5,2 L15.5,2 Z M17,12.5 C17,13.327 16.327,14 15.5,14 L7.5,14 C6.673,14 6,13.327 6,12.5 L6,4.5 C6,3.673 6.673,3 7.5,3 L15.5,3 C16.327,3 17,3.673 17,4.5 L17,12.5 Z M2.5,14 C2.776,14 3,13.776 3,13.5 L3,11.5 C3,11.224 2.776,11 2.5,11 C2.224,11 2,11.224 2,11.5 L2,13.5 C2,13.776 2.224,14 2.5,14 Z M8.5,17 L6.5,17 C6.224,17 6,17.224 6,17.5 C6,17.776 6.224,18 6.5,18 L8.5,18 C8.776,18 9,17.776 9,17.5 C9,17.224 8.776,17 8.5,17 Z M4.5,17 C3.673,17 3,16.327 3,15.5 C3,15.224 2.776,15 2.5,15 C2.224,15 2,15.224 2,15.5 C2,16.879 3.121,18 4.5,18 C4.776,18 5,17.776 5,17.5 C5,17.224 4.776,17 4.5,17 Z M14.691,5.038 C14.63,5.013 14.565,5 14.5,5 L10.5,5 C10.224,5 10,5.224 10,5.5 C10,5.776 10.224,6 10.5,6 L13.293,6 L10.146,9.146 C9.951,9.342 9.951,9.658 10.146,9.853 C10.244,9.951 10.372,10 10.5,10 C10.628,10 10.756,9.951 10.853,9.853 L14,6.707 L14,9.5 C14,9.776 14.224,10 14.5,10 C14.776,10 15,9.776 15,9.5 L15,5.5 C15,5.435 14.987,5.37 14.962,5.309 C14.911,5.187 14.813,5.089 14.691,5.038", "id", "Fill-1", 0, "sketch", "type", "MSShapeGroup"], [1, "more-ds1-text"], [1, "more-ds2"], [1, "more-ds2-icon"], [1, "more-ds2-text"], [1, "more-ds3"], [1, "more-ds3-icon"], [1, "more-ds3-text"], [1, "more-ds4"], [1, "more-ds4-icon"], [1, "more-ds4-text"], [1, "more-ds5"], [1, "more-ds5-icon"], [1, "more-ds5-text"], [1, "more-ds6"], [1, "more-ds6-icon"], [1, "more-ds6-text"], [1, "more-ds7"], [1, "more-ds7-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "do-no-disturb"], ["id", "do-no-disturb"], ["d", "M15.474,10.7635 C16.694,9.9435 17.494,8.5635 17.494,7.0035 C17.494,4.5235 15.474,2.5035 12.994,2.5035 C11.434,2.5035 10.054,3.3035 9.234,4.5235 L7.354,2.6435 C7.234,2.5035 7.034,2.4635 6.854,2.5235 C6.674,2.5835 6.534,2.7235 6.514,2.9235 L5.514,9.4235 C5.494,9.5835 5.534,9.7435 5.654,9.8435 L10.154,14.3435 C10.254,14.4435 10.374,14.4835 10.494,14.4835 L10.574,14.4835 L17.074,13.4835 C17.274,13.4635 17.414,13.3235 17.474,13.1435 C17.534,12.9635 17.494,12.7635 17.354,12.6435 L15.474,10.7635 Z M12.994,3.5035 C14.914,3.5035 16.494,5.0835 16.494,7.0035 C16.494,8.3835 15.694,9.5835 14.514,10.1635 C14.474,10.1635 14.414,10.1835 14.374,10.2235 C13.954,10.4035 13.474,10.5035 12.994,10.5035 C11.054,10.5035 9.494,8.9435 9.494,7.0035 C9.494,6.5235 9.594,6.0435 9.774,5.6235 C9.814,5.5835 9.834,5.5235 9.834,5.4835 C10.414,4.3035 11.614,3.5035 12.994,3.5035 L12.994,3.5035 Z M15.954,12.6435 L10.674,13.4635 L6.534,9.3235 L7.354,4.0435 L8.774,5.4635 C8.594,5.9435 8.494,6.4635 8.494,7.0035 C8.494,9.4835 10.514,11.5035 12.994,11.5035 C13.534,11.5035 14.054,11.4035 14.534,11.2235 L15.954,12.6435 Z M11.134,8.8635 C11.234,8.9635 11.374,9.0035 11.494,9.0035 C11.614,9.0035 11.754,8.9635 11.854,8.8635 L12.994,7.7035 L14.134,8.8635 C14.234,8.9635 14.374,9.0035 14.494,9.0035 C14.614,9.0035 14.754,8.9635 14.854,8.8635 C15.034,8.6635 15.034,8.3435 14.854,8.1435 L13.694,7.0035 L14.854,5.8635 C15.034,5.6635 15.034,5.3435 14.854,5.1435 C14.654,4.9635 14.334,4.9635 14.134,5.1435 L12.994,6.3035 L11.854,5.1435 C11.654,4.9635 11.334,4.9635 11.134,5.1435 C10.954,5.3435 10.954,5.6635 11.134,5.8635 L12.294,7.0035 L11.134,8.1435 C10.954,8.3435 10.954,8.6635 11.134,8.8635 L11.134,8.8635 Z M6.994,16.3035 C6.714,16.5635 6.294,16.5635 6.014,16.3035 L3.694,13.9835 C3.434,13.7035 3.434,13.2835 3.694,13.0035 L5.354,11.3435 C5.554,11.1435 5.554,10.8435 5.354,10.6435 C5.154,10.4435 4.854,10.4435 4.654,10.6435 L2.994,12.3035 C2.334,12.9635 2.334,14.0235 2.994,14.6835 L5.314,17.0035 C5.654,17.3435 6.074,17.5035 6.514,17.5035 C6.934,17.5035 7.374,17.3435 7.694,17.0035 L9.354,15.3435 C9.554,15.1435 9.554,14.8435 9.354,14.6435 C9.154,14.4435 8.854,14.4435 8.654,14.6435 L6.994,16.3035 Z", "id", "\xAE"], [1, "more-ds7-text"], [1, "more-ds7-text-end"], [1, "more-ds8"], [1, "more-ds8-icon"], [1, "more-ds8-text"], [1, "more-icon"], ["id", "Layer 1"], ["d", "M3.5,11c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"], ["d", "M9.5,11c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"], ["d", "M15.5,11c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"], [1, "more-text"], [1, "task-scroll"], ["action", "/task/add", "method", "POST", "id", "form_Task"], [1, "addtask"], [1, "addplus"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve"], [1, "to-do-add"], ["type", "text", "id", "input-add-task", "name", "input-add-task", "value", "", "maxlength", "255", "data-key-placeholder", "placeholder_add_task_mobile", "data-key-aria-label", "placeholder_add_task_to_$", "data-placeholder", "Inbox", "data-aria-label", "Inbox", "placeholder", "Add a to-do...", "aria-label", "Add a to-do in \u201CInbox\u201D...", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "to-do-add-none"], ["type", "text", "value", "", 1, "id_list"], [1, "input-submit-none"], ["type", "submit"], [1, "task-result"], ["class", "task-list", 3, "click", 4, "ngFor", "ngForOf"], [1, "to-dos"], [1, "show"], [1, "to-dos-text"], [1, "task-deleted-hover"], [1, "task-deleted", "op"], ["class", "task-list", 4, "ngFor", "ngForOf"], [1, "account"], [1, "account-left"], [1, "account-left-ds1"], [1, "account-left-ds1-icon"], ["src", "assert/icon1.ico"], [1, "account-left-ds1-text"], [1, "account-left-ds2"], [1, "account-left-ds2-icon"], ["src", "assert/icon2.png"], [1, "account-left-ds2-text"], [1, "account-left-ds3"], [1, "account-left-ds3-icon"], ["src", "assert/icon3.png"], [1, "account-left-ds3-text"], [1, "account-left-ds4"], [1, "account-left-ds4-icon"], ["src", "assert/icon4.png"], [1, "account-left-ds4-text"], [1, "account-left-ds5"], [1, "account-left-ds5-icon"], ["src", "assert/icon5.png"], [1, "account-left-ds5-text"], [1, "account-left-ds6"], [1, "account-left-ds6-icon"], ["src", "assert/icon6.png"], [1, "account-left-ds6-text"], [1, "account-right"], [1, "account-right-iconUser"], ["src", "assert/text.png"], [1, "account-right-nameInput"], [1, "account-right-nameInput-text"], [1, "account-right-nameInput-input"], ["type", "text", "placeholder", "Name"], [1, "account-right-emailInput"], [1, "account-right-emailInput-text"], [1, "account-right-emailInput-input"], ["type", "text", "placeholder", "Email"], [1, "account-right-emailButton-input"], ["type", "button", "value", "Change Email"], [1, "account-right-link"], [1, "account-right-passInput"], [1, "account-right-passInput-text"], [1, "account-right-passInput-input"], ["type", "button", "value", "Change Password..."], [1, "account-right-backupInput"], [1, "account-right-backupInput-text"], [1, "account-right-backupButton1-input"], ["type", "button", "value", "Create Backup"], [1, "account-right-backupButton2-input"], ["type", "button", "value", "Import Backup Data"], [1, "account-right-backupText"], [1, "account-right-googleInput"], [1, "account-right-googleInput-text"], [1, "account-right-googleInput-input"], ["type", "button", "value", "Connect"], [1, "account-right-facebookInput"], [1, "account-right-facebookInput-text"], [1, "account-right-facebookInput-input"], [1, "account-right-facebookNote"], [1, "account-right-facebookNote-icon"], ["src", "assert/facebook-icon.png"], [1, "account-right-facebookNote-text"], [1, "account-rightCalender"], [1, "account-rightCalender-text"], [1, "account-rightCalender-input"], ["type", "text", "placeholder", "https://a.wunderlist.com/api/v1/ical/94442756-u9o9srv06r78pp93edtr2h0hj6.ics"], [1, "account-rightCalender-note1"], [1, "account-rightCalender-note2"], [1, "account-right-delButton"], ["type", "button", "value", "Delete Account"], [1, "account-right2"], [1, "account-right2-Language"], [1, "account-right-language-text"], [1, "account-right-language-select"], [1, "account-right2-date"], [1, "account-right2-date-text"], [1, "account-right2-date-select"], [1, "acoount-right2-radiobtn"], [1, "account-right2-radiobtn1"], [1, "account-right2-radiobtn1-btn"], ["type", "radio", "value", "12 hour"], [1, "account-right2-radiobtn1-text"], [1, "account-right2-radiobtn2"], [1, "account-right2-radiobtn2-btn"], [1, "account-right2-radiobtn2-text"], [1, "account-right2-StartofW"], [1, "account-right2-StartofW-text"], [1, "account-right2-StartofW-select"], [1, "account-right2-enableSound1"], [1, "account-right2-enableSound1-text"], [1, "account-right2-enableSound1-input"], ["type", "checkbox"], [1, "account-right2-enableSound2"], [1, "account-right2-enableSound2-text"], [1, "account-right2-enableSound2-input"], [1, "account-right2-Addtodos"], [1, "account-right2-Addtodos-text"], [1, "account-right2-Addtodos-select"], [1, "account-right2-confirm"], [1, "account-right2-confirm-text"], [1, "account-right2-confirm-input"], [1, "account-right2-starmove"], [1, "account-right2-starmove-text"], [1, "account-right2-starmove-input"], [1, "account-right2-smartduedate"], [1, "account-right2-smartduedate-text"], [1, "account-right2-smartduedate-input"], [1, "account-right2-removeduedate"], [1, "account-right2-removeduedate-text"], [1, "account-right2-removeduedate-input"], [1, "account-right2-autoreminder"], [1, "account-right2-autoreminder-text"], [1, "account-right2-autoreminder-input"], [1, "account-right2-print"], [1, "account-right2-print-text"], [1, "account-right2-print-input"], [1, "account-right2-show"], [1, "account-right2-show-text"], [1, "account-right2-show-input"], [1, "account-right2-contextmenu"], [1, "account-right2-contextmenu-text"], [1, "account-right2-contextmenu-input"], [1, "account-footer"], [1, "footer-button"], ["type", "button", "id", "mybtn", "value", "Done"], ["class", "delete-layout", 4, "ngIf"], ["class", "delete-layout1", 4, "ngIf"], ["class", "delete-layout2", 4, "ngIf"], ["class", "delete-layout3", 4, "ngIf"], ["class", "delete-layout4", 4, "ngIf"], ["id", "tasklist-menu", 1, "tasklist-menu"], [1, "TLmenu11", 3, "click", "clickOutside"], [1, "TLmenu-icon"], [1, "TLmenu-text"], [1, "left-contextmenu"], [1, "LC8", 3, "click", "clickOutside"], [1, "LC-icon"], [1, "LC-text"], [1, "editlist-layout-father"], [1, "createlist-layout-bg1"], [1, "createlist-layout1"], [3, "ngSubmit"], [1, "layout-header"], [1, "layout-header-headertext"], [1, "layout-header-input"], ["id", "edit-list", "type", "text", "placeholder", "List Name", "name", "list", "value", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "id_list", "value", "", 1, "none"], [1, "layout-header-optiontext"], ["id", "layout-header-optiontext2", 1, "layout-header-textt"], [1, "layout-header-optiontext2", "layout-header-textt"], [1, "layout-header-inputfake"], [1, "layout-header-inputfake-icon"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "share", "rtl-flip"], [1, "layout-header-inputfake-input"], ["type", "text", "placeholder", "Name or email address...", "name", "list_email"], [1, "layout-member"], [1, "layout-member-content"], [1, "layout-member-content-icon"], [1, "layout-member-content-text"], [1, "layout-member-content-textTop"], [1, "layout-member-content-textTop-icon"], [1, "layout-member-content-textTop-iconn"], [1, "layout-member-content-textBot"], [1, "layout-tabOption"], [1, "layout-tabOption-content"], [1, "layout-tabOption-checkbox"], ["disabled", "", "type", "checkbox"], [1, "layout-tabOption-text"], [1, "layout-footer"], [1, "layout-footer-option"], [1, "layout-footer-cols"], [1, "layout-footer-cols2"], [1, "btnFooter", "BTF2", 3, "click"], [1, "layout-footer-cols33"], ["id", "btn-edit-list", "type", "submit", "value", "Save", "name", "edit-list", 1, "btnFooter", "BTF1"], [1, "createlist-layout-father"], [1, "createlist-layout-bg"], [1, "createlist-layout"], ["id", "formList", 3, "ngSubmit"], ["id", "add-list", "type", "text", "placeholder", "List Name", "name", "list", 3, "ngModel", "ngModelChange"], [1, "layout-footer-cols3"], ["id", "btn-add-list", "type", "submit", "value", "Save", "name", "btnNewlist", 1, "btnFooter", "BTF1"], ["id", "user_id", 2, "display", "none"], [1, "newlist", 3, "click"], [1, "ds2", "danhsach", 3, "dblclick", "contextmenu", "click"], [1, "ds2-hover"], [1, "ds2icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "list", "rtl-flip"], ["id", "list"], ["d", "M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z", "id", "K"], [1, "ds2text", "hiddenclass", "danhsachtext"], [1, "right"], [1, "title"], ["id", "detailtext"], ["class", "status-father", 4, "ngFor", "ngForOf"], [1, "bodylist"], ["class", "op1", 4, "ngFor", "ngForOf"], ["class", "op2", 4, "ngFor", "ngForOf"], ["class", "plus-cln-father", 4, "ngFor", "ngForOf"], [1, "op3"], [1, "plus-icon"], [1, "plus-text"], ["id", "themop3", "name", "subtask", "placeholder", "Add a Subtask", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "op5"], [2, "display", "flex"], [1, "file-icon"], ["width", "20", "height", "20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", "enable-background", "new 0 0 20 20", 0, "xml", "space", "preserve", 1, "clip"], ["id", "XMLID_2_", "d", "M7,17c-1.335,0-2.591-0.521-3.536-1.465S2,13.336,2,12c0-1.335,0.52-2.591,1.464-3.536l5.312-5.312 c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L4.171,9.171C3.416,9.927,3,10.932,3,12s0.416,2.073,1.171,2.828 c1.511,1.512,4.146,1.512,5.657,0l6.441-6.441c0.473-0.472,0.732-1.1,0.732-1.768c0-0.668-0.26-1.296-0.732-1.768 c-0.945-0.945-2.592-0.943-3.535,0l-6.441,6.441c-0.39,0.39-0.39,1.024,0,1.414c0.378,0.377,1.036,0.377,1.414,0l4.562-4.562 c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707l-4.562,4.562c-0.755,0.756-2.073,0.756-2.828,0 c-0.78-0.779-0.78-2.049,0-2.828l6.441-6.441c1.32-1.321,3.627-1.323,4.949,0c0.661,0.661,1.025,1.54,1.025,2.475 s-0.364,1.814-1.025,2.475l-6.441,6.441C9.591,16.479,8.335,17,7,17z"], [1, "file-input"], ["type", "file", "name", "file", "id", "file", 3, "change"], ["id", "task_idOfFile", "name", "task_id", "type", "text", "value", "0", 2, "display", "none"], [1, "input-file-hidden"], ["type", "submit", "name", "submit"], [1, "file-option"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "speech"], ["id", "speech"], ["d", "M10,13 C11.92,13 13.5,11.42 13.5,9.5 L13.5,5.5 C13.5,3.58 11.92,2 10,2 C8.08,2 6.5,3.58 6.5,5.5 L6.5,9.5 C6.5,11.42 8.08,13 10,13 L10,13 Z M7.5,5.5 C7.5,4.12 8.62,3 10,3 C11.38,3 12.5,4.12 12.5,5.5 L12.5,9.5 C12.5,10.88 11.38,12 10,12 C8.62,12 7.5,10.88 7.5,9.5 L7.5,5.5 Z M15.5,8.5 C15.5,8.22 15.28,8 15,8 C14.72,8 14.5,8.22 14.5,8.5 L14.5,9.5 C14.5,11.98 12.48,14 10,14 C7.52,14 5.5,11.98 5.5,9.5 L5.5,8.5 C5.5,8.22 5.28,8 5,8 C4.72,8 4.5,8.22 4.5,8.5 L4.5,9.5 C4.5,12.36 6.7,14.72 9.5,14.98 L9.5,17 L6,17 C5.72,17 5.5,17.22 5.5,17.5 C5.5,17.78 5.72,18 6,18 L14,18 C14.28,18 14.5,17.78 14.5,17.5 C14.5,17.22 14.28,17 14,17 L10.5,17 L10.5,14.98 C13.3,14.72 15.5,12.36 15.5,9.5 L15.5,8.5 Z", "id", "O"], ["width", "20", "height", "20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", "enable-background", "new 0 0 20 20", 0, "xml", "space", "preserve", 1, "dropbox"], ["points", "6.515,2.227 1.535,5.478 4.979,8.236 10,5.135 "], ["points", "1.535,10.994 6.515,14.245 10,11.336 4.979,8.236 "], ["points", "10,11.336 13.485,14.245 18.465,10.994 15.021,8.236 "], ["points", "18.465,5.478 13.485,2.227 10,5.135 15.021,8.236 "], ["points", "10.01,11.962 6.515,14.862 5.02,13.886 5.02,14.981 10.01,17.973 15.001,14.981 15.001,13.886 13.505,14.862"], ["class", "file-list", 4, "ngFor", "ngForOf"], ["class", "comment-father", 4, "ngFor", "ngForOf"], [1, "right-bottom"], [1, "comment-add"], [1, "input-fake"], [1, "textarea"], ["type", "text", "id", "them2", "name", "addComment", "placeholder", "Add a comment...", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "detail-info"], [1, "close-icon", 3, "click"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "close-right"], ["id", "close-right"], ["d", "M4.5,18 C3.12,18 2,16.88 2,15.5 L2,4.5 C2,3.12 3.12,2 4.5,2 L15.5,2 C16.88,2 18,3.12 18,4.5 L18,15.5 C18,16.88 16.88,18 15.5,18 L4.5,18 Z M4.5,3 C3.68,3 3,3.68 3,4.5 L3,15.5 C3,16.32 3.68,17 4.5,17 L15.5,17 C16.32,17 17,16.32 17,15.5 L17,4.5 C17,3.68 16.32,3 15.5,3 L4.5,3 Z M7.5,15 C7.38,15 7.24,14.96 7.14,14.86 C6.96,14.66 6.96,14.34 7.14,14.14 L11.3,10 L7.14,5.86 C6.96,5.66 6.96,5.34 7.14,5.14 C7.34,4.96 7.66,4.96 7.86,5.14 L12.36,9.64 C12.54,9.84 12.54,10.16 12.36,10.36 L7.86,14.86 C7.76,14.96 7.62,15 7.5,15 L7.5,15 Z", "id", "i"], [1, "datetime"], [1, "trash-icon", 3, "click"], [1, "status-father"], [1, "tasklist-iconn"], ["title", "Mark as Completed"], ["class", "task-check", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;", 3, "click", 4, "ngIf"], ["title", "Mark as Not Completed"], ["class", "task-checked1", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;", 3, "click", 4, "ngIf"], ["id", "edit_task"], ["name", "task_input", 1, "task_input_text", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "submit", 1, "none"], ["title", "Mark as Starred"], ["class", "tasklist-staricon", "style", "display: block", "width", "18px", "height", "18px", "viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http:www.w3.org/2000/svg", 0, "xmlns", "xlink", "http:www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 3, "click", 4, "ngIf"], ["title", "Mark as Unstarred"], ["class", "tasklist-staricon-check", "style", "display: none", "width", "22px", "height", "44px", "viewBox", "0 0 22 44", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;", 3, "click", 4, "ngIf"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "task-check", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421", 3, "click"], ["d", "M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z", 2, "fill", "none", "stroke-width", "1px"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "task-checked1", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421", 3, "click"], ["d", "M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"], ["d", "M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"], ["width", "18px", "height", "18px", "viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http:www.w3.org/2000/svg", 0, "xmlns", "xlink", "http:www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "tasklist-staricon", 2, "display", "block", 3, "click"], ["d", "M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"], ["width", "22px", "height", "44px", "viewBox", "0 0 22 44", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "tasklist-staricon-check", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421", 3, "click"], ["d", "M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"], [1, "op1"], [1, "section-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "date"], ["id", "date"], ["d", "M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M8.5,12 C7.68,12 7,11.32 7,10.5 L7,9.5 C7,8.68 7.68,8 8.5,8 C9.32,8 10,8.68 10,9.5 L10,10.5 C10,11.32 9.32,12 8.5,12 L8.5,12 Z M5.5,11 C5.22,11 5,10.78 5,10.5 L5,9.5 C5,9.22 5.22,9 5.5,9 C5.78,9 6,9.22 6,9.5 L6,10.5 C6,10.78 5.78,11 5.5,11 L5.5,11 Z M8.5,9 C8.22,9 8,9.22 8,9.5 L8,10.5 C8,10.78 8.22,11 8.5,11 C8.78,11 9,10.78 9,10.5 L9,9.5 C9,9.22 8.78,9 8.5,9 L8.5,9 Z M11.5,11 C11.22,11 11,10.78 11,10.5 L11,9.5 C11,9.22 11.22,9 11.5,9 C11.78,9 12,9.22 12,9.5 L12,10.5 C12,10.78 11.78,11 11.5,11 L11.5,11 Z M14.5,11 C14.22,11 14,10.78 14,10.5 L14,9.5 C14,9.22 14.22,9 14.5,9 C14.78,9 15,9.22 15,9.5 L15,10.5 C15,10.78 14.78,11 14.5,11 L14.5,11 Z M5.5,15 C5.22,15 5,14.78 5,14.5 L5,13.5 C5,13.22 5.22,13 5.5,13 C5.78,13 6,13.22 6,13.5 L6,14.5 C6,14.78 5.78,15 5.5,15 L5.5,15 Z M8.5,15 C8.22,15 8,14.78 8,14.5 L8,13.5 C8,13.22 8.22,13 8.5,13 C8.78,13 9,13.22 9,13.5 L9,14.5 C9,14.78 8.78,15 8.5,15 L8.5,15 Z M11.5,15 C11.22,15 11,14.78 11,14.5 L11,13.5 C11,13.22 11.22,13 11.5,13 C11.78,13 12,13.22 12,13.5 L12,14.5 C12,14.78 11.78,15 11.5,15 L11.5,15 Z M14.5,15 C14.22,15 14,14.78 14,14.5 L14,13.5 C14,13.22 14.22,13 14.5,13 C14.78,13 15,13.22 15,13.5 L15,14.5 C15,14.78 14.78,15 14.5,15 L14.5,15 Z"], [1, "section-text"], ["type", "date", "name", "date", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "op2"], [1, "reminder-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "reminder"], ["id", "reminder"], ["d", "M3.26,6.6 C3.1,6.24 3,5.88 3,5.5 C3,4.12 4.12,3 5.5,3 C6.04,3 6.54,3.18 6.98,3.5 C7.2,3.66 7.52,3.62 7.68,3.4 C7.86,3.18 7.8,2.86 7.58,2.7 C6.98,2.24 6.24,2 5.5,2 C3.58,2 2,3.58 2,5.5 C2,6.02 2.12,6.54 2.38,7.04 C2.46,7.22 2.64,7.32 2.82,7.32 C2.9,7.32 2.98,7.3 3.04,7.28 C3.3,7.14 3.4,6.84 3.26,6.6 L3.26,6.6 Z M14.5,2 C13.76,2 13.04,2.24 12.42,2.7 C12.2,2.86 12.16,3.18 12.32,3.4 C12.48,3.62 12.8,3.66 13.02,3.5 C13.46,3.18 13.98,3 14.5,3 C15.88,3 17,4.12 17,5.5 C17,5.88 16.92,6.24 16.74,6.6 C16.62,6.84 16.72,7.14 16.96,7.28 C17.04,7.3 17.1,7.32 17.18,7.32 C17.36,7.32 17.54,7.22 17.64,7.04 C17.88,6.54 18,6.02 18,5.5 C18,3.58 16.44,2 14.5,2 L14.5,2 Z M17,11 C17,7.14 13.86,4 10,4 C6.14,4 3,7.14 3,11 C3,13 3.84,14.82 5.2,16.1 L4.14,17.14 C3.96,17.34 3.96,17.66 4.14,17.86 C4.24,17.96 4.38,18 4.5,18 C4.62,18 4.76,17.96 4.86,17.86 L5.98,16.72 C7.12,17.52 8.5,18 10,18 C11.5,18 12.88,17.52 14.02,16.72 L15.14,17.86 C15.24,17.96 15.38,18 15.5,18 C15.62,18 15.76,17.96 15.86,17.86 C16.04,17.66 16.04,17.34 15.86,17.14 L14.8,16.1 C16.16,14.82 17,13 17,11 L17,11 Z M4,11 C4,7.7 6.7,5 10,5 C13.3,5 16,7.7 16,11 C16,14.3 13.3,17 10,17 C6.7,17 4,14.3 4,11 L4,11 Z M10.5,7 C10.22,7 10,7.22 10,7.5 L10,11 L7.46,11 C7.2,11 6.96,11.22 6.96,11.5 C6.96,11.78 7.2,12 7.46,12 L10.5,12 C10.78,12 11,11.78 11,11.5 L11,7.5 C11,7.22 10.78,7 10.5,7 L10.5,7 Z", "id", "\u2026"], ["type", "time", "name", "time", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "plus-cln-father"], [1, "plus-cln"], [1, "plus-cln-icon"], ["class", "task-checkplus", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http:www.w3.org/2000/svg", 0, "xmlns", "xlink", "http:www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;", 3, "click", 4, "ngIf"], ["class", "task-checkedplus1", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http:www.w3.org/2000/svg", 0, "xmlns", "xlink", "http:www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421;", 3, "click", 4, "ngIf"], [1, "plus-cln-text"], ["class", "plus-cln-text-input", "name", "subtask_input", 3, "ngModel", "ngModelChange", "keyup.enter", 4, "ngIf"], ["class", "plus-cln-text-input", "name", "subtask_input", "style", "text-decoration: line-through;", 3, "ngModel", "ngModelChange", "keyup.enter", 4, "ngIf"], [1, "plus-cln-remove", 3, "click"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http:www.w3.org/2000/svg", 0, "xmlns", "xlink", "http:www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "task-checkplus", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421", 3, "click"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http:www.w3.org/2000/svg", 0, "xmlns", "xlink", "http:www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "task-checkedplus1", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421", 3, "click"], ["name", "subtask_input", 1, "plus-cln-text-input", 3, "ngModel", "ngModelChange", "keyup.enter"], ["name", "subtask_input", 1, "plus-cln-text-input", 2, "text-decoration", "line-through", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "file-list"], [1, "file-list-layout"], [1, "file-list-content"], [1, "file-list-content-icon"], ["width", "40", "height", "40", "alt", "", 3, "src"], [1, "file-list-content-text"], [3, "href"], [1, "file-list-content-text-imgname"], [1, "file-list-content-text-time"], ["src", "assets/text.png", "width", "15", "height", "15", "alt", "", 2, "border-radius", "50%"], [1, "file-list-content-text-timetext"], [1, "file-remove", 3, "click"], [1, "comment-father"], [1, "comment"], [1, "comment-icon"], [1, "comment-text"], [1, "comment-text-author"], [1, "comment-time"], [1, "comment-title-text"], [1, "comment-text-icon", 3, "click"], [1, "task-list", 3, "click"], [1, "tasklist-all", 3, "contextmenu"], ["id", "tasklist-body1", 1, "tasklist-body"], [1, "tasklist-icon"], ["class", "task-checked1", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;", 4, "ngIf"], [1, "tasklist-text", 3, "dblclick", "click"], [1, "task-list-text-child"], [1, "duedate"], ["class", "onduedate", 4, "ngIf"], ["class", "over_duedate", 4, "ngIf"], ["id", "timeout", 4, "ngIf"], [1, "tasklist-staricon-father"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "task-checked1", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], [1, "onduedate"], [1, "over_duedate"], ["id", "timeout"], ["controls", "", "autoplay", "", 1, "none"], ["src", "assets/notification.mp3", "type", "audio/mpeg"], [1, "task-list"], ["class", "task-check", "width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", "style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;", 4, "ngIf"], [1, "task-list-text-child", 2, "text-decoration", "line-through", "font-size", "15px"], [2, "font-size", "12px"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 1, "task-check", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], [1, "delete-layout"], [1, "delete-layout-background"], [1, "delete-layout-content"], [1, "delete-layout-content1"], [1, "delete-layout-content1-icon"], ["aria-hidden", "true", 1, "icon", "wunderlist-icon"], [1, "delete-layout-content1-text"], [1, "delete-layout-content1-text1"], [1, "delete-layout-content1-text11"], [1, "delete-layout-content1-text2"], [1, "delete-layout-content2"], [1, "delete-layout-content2-input"], [1, "delete-layout-content2-inputt-none"], ["type", "text", "value", "", "name", "id_list", 1, "list-id"], [1, "delete-layout-content2-inputt"], ["type", "submit", "value", "Delete To-do", 1, "button-delete", "BD2", 3, "click"], [1, "button-delete", "BD1", 3, "click"], [1, "delete-layout1"], [1, "delete-layout2"], ["type", "submit", "value", "Delete To-do", "name", "subtaskbtn", 1, "button-delete", "BD2", 3, "click"], [1, "delete-layout3"], ["type", "submit", "value", "Delete To-do", "name", "btncomment", 1, "button-delete", "BD2", 3, "click"], [1, "delete-layout4"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WunderList");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mark as Not Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email Selected To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Print Selected To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Copy To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Delete To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HomeComponent_div_50_Template, 9, 4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Email List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Print List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_div_70_Template, 9, 4, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, HomeComponent_div_71_Template, 49, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, HomeComponent_div_72_Template, 50, 2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "svg", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "form", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "g", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "g", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "No Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Get notified when other people you're collaborating with add files, create and assign to-dos in shared lists.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "g", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Conservations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "g", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "g", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "g", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "No Conservations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Start a conversation now by commenting on a to-do in a shared list.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "svg", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function HomeComponent_Template_div_load_150_listener() {
            return ctx.showList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, HomeComponent_div_151_Template, 10, 2, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_152_listener() {
            return ctx.toggleAddList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "svg", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Create List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, HomeComponent_div_159_Template, 61, 12, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "svg", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "g", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "svg", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "g", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Sort Alphabetically");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "svg", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "g", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Sort by Due Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "svg", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "g", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Sort by Creation Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "svg", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "g", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Sort by Assignee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "svg", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "g", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "g", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "g", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Sort by Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "svg", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "g", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Sort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "g", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "g", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Duplicate List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "g", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "g", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Copy Selected To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Email List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Email Selected To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "svg", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "PrintList");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "svg", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Print Selected To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "svg", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "g", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Do not Disturb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "OFF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "svg", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "g", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Delete Selected To-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "g", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "path", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "path", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "form", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "svg", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "path", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "input", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_312_listener($event) {
            return ctx.inputAddTask = $event;
          })("keyup.enter", function HomeComponent_Template_input_keyup_enter_312_listener() {
            return ctx.addTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "input", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "input", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](318, HomeComponent_div_318_Template, 20, 11, "div", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "show completed to-dos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](325, HomeComponent_div_325_Template, 23, 16, "div", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "img", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "img", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Shortcuts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "img", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "SmartLists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 233);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "img", 235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 238);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "img", 239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 241);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "input", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 245);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "input", 247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "input", 249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Add or manage your email addresses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 251);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 252);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "input", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 256);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Account Backup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "input", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "input", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Backup data includes all your Lists, Tasks, Subtasks, Notes, and Reminders. Please note it does not include those Lists that were shared with you, Files, Comments, Shared List recipients and previous application settings. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "input", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 267);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "input", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "img", 271);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 272);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Connecting your account to Google or Facebook will make signing in easier ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 273);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 274);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Calender Feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "input", 276);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 277);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Add this link to iCal, Google Calendar or Outlook to see all To-dos with a due date in your calendar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 278);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Learn more about Wunderlist's Calendar Feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 279);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "input", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 281);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 282);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 283);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 284);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "\u200F\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u200F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Catal\xE0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "\u010Ce\u0161tina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Cymraeg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Dansk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "\u65E5\u672C\u8A9E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Vietnamese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 285);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 286);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Date Format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 287);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "DD.MM.YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "MM/DD/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "DD/MM/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "YYYY/MM/DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "YYYY-MM-DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 288);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 289);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 290);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "input", 291);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 292);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "12 Hour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 293);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 294);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "input", 291);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 295);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "24 Hour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 296);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 297);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Start of the Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Saturday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Monday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Sunday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 299);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 300);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Enable sound for checking-off a to-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 301);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 303);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 304);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Enable sound for new notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 305);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 306);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 307);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Add To-dos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 308);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Top of List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Bottom of List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 309);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "div", 310);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Confirm before deleteing to-dos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 311);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 312);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 313);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Star moves to-do to top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 314);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 315);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "div", 316);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Enable smart due dates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 317);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "div", 318);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 319);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Remove smart due dates text in to-dos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 320);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](514, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div", 321);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 322);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Enable auto reminders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 323);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 324);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 325);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "Print completed to-dos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 326);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 327);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div", 328);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "Show Subtask progress on to-dos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "div", 329);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 330);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 331);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Enable context menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "div", 332);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 333);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "div", 334);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](537, "input", 335);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](538, HomeComponent_div_538_Template, 23, 1, "div", 336);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](539, HomeComponent_div_539_Template, 21, 1, "div", 337);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](540, HomeComponent_div_540_Template, 21, 1, "div", 338);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](541, HomeComponent_div_541_Template, 21, 1, "div", 339);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](542, HomeComponent_div_542_Template, 21, 1, "div", 340);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteTaskButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteListButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAddList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.middleStyle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title_list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputAddTask);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskArrayAbove);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskArrayBelow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteListConfirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteTaskConfirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteSubTaskConFirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteCommentConFirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDeleteFileConfirm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _home_directive__WEBPACK_IMPORTED_MODULE_11__["HomeDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  margin: 0 !important; padding: 0!important;\n  width: 100%\n;\n}\n.hidden[_ngcontent-%COMP%]{\n  display: none;\n}\n.a[_ngcontent-%COMP%]{\n  display: block;\n}\n.tasklist-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  width: 80%;\n  height: 80%;\n  position: absolute;\n  text-decoration: none;\n  color: #262626;\n}\n.main[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100vh;\n  background-image: url(https://static.wunderlist.com/7301e219acb02266587ce610bd91f33ed6d31607/images/backgrounds/1024/06.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar{\n  width: 6px !important;\n  height: 6px !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track{\n  background-color: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{\n  background-color: #b9b9b9;\n}\n@media only screen and (max-width: 1000px) {\n  #left-responsive[_ngcontent-%COMP%] {\n    width: 42px ;\n  }\n  .left[_ngcontent-%COMP%]{\n    width: 42px;\n  }\n  .search-input[_ngcontent-%COMP%]{\n    display: none  ;\n  }\n  .search-icon[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .username[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .option[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .comment-notify[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .noti[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .mess[_ngcontent-%COMP%]{\n    display: none  ;\n  }\n  .ds1text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .count[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .ds2text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .ds3text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .ds4text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .ds5text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .ds6text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .ds7text[_ngcontent-%COMP%]{\n    display: none ;\n  }\n  .plustext[_ngcontent-%COMP%]{\n    display: none ;\n  }\n}\n@media only screen and (max-width: 1000px){\n  \n}\n@media only screen and (max-width: 1000px){\n  .hiddenclass[_ngcontent-%COMP%]{\n    display:block ;\n  }\n}\n@media only screen and (max-width: 500px){\n  .right[_ngcontent-%COMP%]{\n    width: 500px !important ;\n  }\n  .left[_ngcontent-%COMP%]{\n    display: none;\n  }\n  .middle[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n\n.left[_ngcontent-%COMP%]{\n  width: 280px;\n  height: 100vh;\n  float: left;\n  background-color: #fafafa;\n  position: relative;\n}\n.left-toggle[_ngcontent-%COMP%]{\n  width: 42px;\n}\n.middle-toggle[_ngcontent-%COMP%]{\n  margin-left: 42px !important;\n}\n.navsearch[_ngcontent-%COMP%]{\n  display: flex;\n  background-color: #5b7a59;\n  height: 45px;\n  box-sizing: border-box;\n}\n.list-toggle[_ngcontent-%COMP%]{\n  padding: 13px 11px 12px 11px;\n  cursor: pointer;\n\n}\n.search-input[_ngcontent-%COMP%]{\n  left: 55px;\n  -webkit-app-region: no-drag;\n\n  width : 196px;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  margin: 10px;\n  background-color: transparent;\n  border-color: transparent;\n  color: #fff;\n  font-size: 18px;\n  outline: none;\n}\n.search-icon[_ngcontent-%COMP%]{\n  padding: 13px 11px 12px 11px;\n  fill: #fff;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  right: 0px;\n}\n.scroll-left[_ngcontent-%COMP%]{\n  height: 86%;\n  overflow: auto;\n}\n.usertool[_ngcontent-%COMP%]{\n  padding-bottom: 5px;\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n  box-sizing: border-box;\n  position: relative;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  margin-top : 10px;\n  padding: 0px 5px;\n  width: 32px;\n\n  border-radius: 50%;\n}\n.username[_ngcontent-%COMP%]{\n  cursor: pointer;\n  color: black;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 15px;\n  margin-top: 20px;\n  position: relative;\n  width: 224px;\n}\n\n.username-hover[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: none;\n  z-index: 10;\n  top: 0;\n  width: 224px;\n  position: absolute;\n  margin-top: 40px;\n  margin-left: -40px;\n  left: 0;\n  overflow: hidden;\n  font-size: 13px;\n}\n.ul-style[_ngcontent-%COMP%]{\n  padding-left: 0px;\n  margin-top: 0px;\n  font-size: 13px;\n  border: 1px solid #9fa2a6;\n}\n.ul-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  height: 20px;\n  list-style: none;\n  pointer-events: none;\n  padding-top: 0px;\n  padding-left: 8px;\n}\n.ul1[_ngcontent-%COMP%], .ul10[_ngcontent-%COMP%]{\n  color: #aaa;\n  padding-top: 12px;\n  cursor: auto;\n}\n.ul2[_ngcontent-%COMP%], .ul5[_ngcontent-%COMP%], .ul9[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #ebebeb;\n}\n.ul3[_ngcontent-%COMP%], .ul6[_ngcontent-%COMP%]{\n  padding-top: 12px;\n}\n.ul2[_ngcontent-%COMP%]:hover, .ul3[_ngcontent-%COMP%]:hover, .ul4[_ngcontent-%COMP%]:hover, .ul5[_ngcontent-%COMP%]:hover, .ul6[_ngcontent-%COMP%]:hover, .ul7[_ngcontent-%COMP%]:hover, .ul8[_ngcontent-%COMP%]:hover, .ul9[_ngcontent-%COMP%]:hover, .ul11[_ngcontent-%COMP%]:hover{\n  background-color: #328ad6;\n  color: #fafafa;\n}\n.ul11[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\n  color: #fafafa;\n}\n.ul1[_ngcontent-%COMP%], .ul2[_ngcontent-%COMP%], .ul3[_ngcontent-%COMP%], .ul4[_ngcontent-%COMP%], .ul5[_ngcontent-%COMP%], .ul6[_ngcontent-%COMP%], .ul7[_ngcontent-%COMP%], .ul8[_ngcontent-%COMP%], .ul9[_ngcontent-%COMP%], .ul10[_ngcontent-%COMP%], .ul11[_ngcontent-%COMP%]{\n  padding-top: 12px;\n  padding-left: 0px;\n  line-height: 10px;\n}\n.ul11[_ngcontent-%COMP%]{\n  padding-bottom: 5px;\n}\n.ul11[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: black;\n\n}\n\n.option[_ngcontent-%COMP%]{\n  margin-top: 20px;\n  margin-right: 95px;\n  fill: grey;\n}\n.comment-notify[_ngcontent-%COMP%]{\n  display: flex;\n  position: absolute;\n  right: 0px;\n  margin-top: 20px;\n  fill: black;\n\n}\n.comment-notify[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n  padding-right: 10px;\n  cursor: pointer;\n}\n\n.noti-hover[_ngcontent-%COMP%]{\n  position: fixed;\n  width: 300px;\n  height: 196px;\n  z-index: 10;\n  margin-left: -120px;\n  background-color: #fff;\n  padding-left: 0px;\n  font-size: 14px;\n  display: none;\n  overflow: auto;\n  overflow-x: hidden;\n}\n.noti-hover-text[_ngcontent-%COMP%]{\n  text-align: center;\n  font-size: 1.17em;\n  font-weight: bold;\n  color: #262626;\n  margin-top: 10px;\n  margin-bottom: 9px;\n  border-bottom: 1px solid rgba(0,0,0,0.06);\n  padding-bottom: 10px;\n}\n.noti-hover-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n  height: 100px;\n  padding-left: 110px;\n}\n.noti-hover-text2[_ngcontent-%COMP%]{\n  text-align: center;\n  color: rgb(91, 91, 91);\n  font-size: 14px;\n  margin: 0px 0px 10px;\n  font-weight: bold;\n}\n.noti-hover-text3[_ngcontent-%COMP%]{\n  font-size: 11px;\n  color: rgb(163, 163, 163);\n  text-align: center;\n}\n.mess-hover[_ngcontent-%COMP%]{\n  position: fixed;\n  display: none;\n  width: 300px;\n  height: 196px;\n  z-index: 10;\n  margin-left: -140px;\n  background-color: #fff;\n  padding-left: 0px;\n  font-size: 14px;\n  overflow: auto;\n}\n\n.mess-hover-text[_ngcontent-%COMP%]{\n  text-align: center;\n  font-size: 1.17em;\n  font-weight: bold;\n  color: #262626;\n  margin-top: 10px;\n  margin-bottom: 9px;\n  border-bottom: 1px solid rgba(0,0,0,0.06);\n  padding-bottom: 10px;\n}\n.mess-hover-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n  height: 100px;\n  padding-left: 90px;\n}\n.mess-hover-text2[_ngcontent-%COMP%]{\n  text-align: center;\n  color: rgb(91, 91, 91);\n  font-size: 14px;\n  margin: 0px 0px 10px;\n  font-weight: bold;\n}\n.mess-hover-text3[_ngcontent-%COMP%]{\n  font-size: 11px;\n  color: rgb(163, 163, 163);\n  text-align: center;\n}\n\n.ds1[_ngcontent-%COMP%]{\n  display: flex;\n  height: 38px;\n  background-color: #fafafa;\n  position: relative;\n}\n.ds1icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #2b8dec;\n}\n.ds1text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.count[_ngcontent-%COMP%]{\n  right: 0px;\n  padding: 10px;\n  position: absolute;\n  font-size: 12px;\n}\n.ds2[_ngcontent-%COMP%]{\n  padding: 0px 8xp 0x 8px;\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n}\n.ds2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: #262626;\n  display: flex;\n}\n.ds2[_ngcontent-%COMP%]:hover   .ds2-hover[_ngcontent-%COMP%]{\n  background: #e0eefa;\n}\n.ds2-hover[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 38px;\n  display: flex;\n  cursor: pointer;\n}\n.ds2icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #b9b9b9;\n}\n.ds2text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.ds3[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n\n  background-color: #fafafa;\n}\n.ds3icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #b9b9b9;\n}\n.ds3text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.ds4[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n\n  background-color: #fafafa;\n}\n.ds4icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #b9b9b9;\n}\n.ds4text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.ds5[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n\n  background-color: #fafafa;\n}\n.ds5icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #b9b9b9;\n}\n.ds5text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.ds6[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n\n  background-color: #fafafa;\n}\n.ds6icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #b9b9b9;\n}\n.ds6text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.ds7[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n\n  background-color: #fafafa;\n}\n.ds7icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  cursor: pointer;\n  fill: #b9b9b9;\n}\n.ds7text[_ngcontent-%COMP%]{\n  padding: 10px;\n  color: black;\n  font-size: 15px;\n  font-weight: 400px;\n  cursor: pointer;\n}\n.createlist[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background-color: #fafafa;\n  cursor: pointer;\n  border-top: 1px solid #ebebeb;\n}\n.plusicon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 3px;\n  fill: #328ad6;\n}\n.plustext[_ngcontent-%COMP%]{\n  color: #328ad6;\n  font-size: 15px;\n  padding: 10px;\n  font-weight: 500;\n}\n\n.right[_ngcontent-%COMP%]{\n  width: 367px;\n  height: 100vh;\n  float: right;\n  background-color: #fafafa;\n  position: relative;\n}\n.title[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 1px solid #ebebeb;\n  position: relative;\n}\n.detail-check[_ngcontent-%COMP%]{\n  stroke: rgba(0,0,0,0.35);\n  cursor: pointer;\n  margin: auto 5px auto 10px;\n  padding-right: 3px;\n  stroke-linecap: round;\n}\n#detailtext[_ngcontent-%COMP%]{\n  padding: 0px 50px 14px;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 3px;\n  width: 100%;\n  display: flex;\n}\n.task_input_text[_ngcontent-%COMP%]{\n  margin-top: 15px;\n  margin-bottom: -15px;\n  border: none;\n  outline : none;\n  background: #fff;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n}\n.staricon[_ngcontent-%COMP%]{\n  fill: rgba(0,0,0,0.3);\n  position: absolute;\n  right: 0px;\n  width: 22px;\n  height: 49px;\n  padding-right: 10px;\n  top: -4px;\n  cursor: pointer;\n}\n.bodylist[_ngcontent-%COMP%]{\n  width: 100%;\n  position: relative;\n  height: 514px;\n  overflow: auto;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ebebeb;\n  overflow-x: hidden;\n}\n.op1[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n}\n.section-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 0px;\n  fill: #b9b9b9;\n}\n.section-text[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-size: 16px;\n  line-height: 20px;\n  color: #9fa2a6;\n  border-bottom: 1px solid #ebebeb;\n  width: 327px;\n\n}\n.section-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  background: transparent;\n  border: none;\n}\n.op2[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n}\n.reminder-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 0px;\n  fill: #b9b9b9;\n}\n.reminder-text[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-size: 16px;\n  line-height: 20px;\n  color: #9fa2a6;\n  border-bottom: 1px solid #ebebeb;\n  width: 327px;\n\n}\n.reminder-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n.op3[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n}\n.plus-cln[_ngcontent-%COMP%]{\n  display: flex;\n}\n.plus-cln-css[_ngcontent-%COMP%]{\n  text-decoration: line-through;\n}\n.Subtask-inputBtn[_ngcontent-%COMP%]{\n  display: none;\n}\n.abc[_ngcontent-%COMP%] {\n  display: none;\n}\n.abc1[_ngcontent-%COMP%] {\n  display: block;\n}\n.plus-cln-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-right: 8px;\n  padding-left: 20px;\n  height: 20px;\n  cursor: pointer;\n  display: flex;\n}\n.task-checkplus[_ngcontent-%COMP%]{\n  stroke: #67ae2b;\n  padding-right: 8px;\n  height: 20px;\n  cursor: pointer;\n}\n.task-checkedplus1[_ngcontent-%COMP%]{\n  fill: rgba(0,0,0,0.35);\n  padding-right: 8px;\n  height: 20px;\n  cursor: pointer;\n}\n.plus-cln-text[_ngcontent-%COMP%]{\n  font-size: 15px;\n  line-height: 20px;\n  padding: 10px;\n}\n.plus-cln-text-input[_ngcontent-%COMP%]{\n  border: none;\n  outline : none;\n  background: #fafafa;\n}\n.plus-cln-text-input-none[_ngcontent-%COMP%]{\n  display: none;\n}\n.plus-cln-remove[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-size: 15px;\n  right: 15px;\n  position: absolute;\n  display: none;\n  cursor: pointer;\n}\n.plus-cln[_ngcontent-%COMP%]:hover   .plus-cln-remove[_ngcontent-%COMP%]{\n  display: block;\n}\n.plus-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 0px;\n  fill: #b9b9b9;\n}\n.plus-text[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-size: 16px;\n  line-height: 20px;\n  color: #9fa2a6;\n  border-bottom: 1px solid #ebebeb;\n  width: 327px;\n}\n.plus-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  background-color: transparent;\n  border-color: transparent;\n  color: #262626;\n  font-size: 18px;\n  outline: none;\n}\n.plus-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.plus-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.plus-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.plus-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.op4[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n  position: relative;\n}\n.note-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 0px;\n  fill: #b9b9b9;\n}\n.note-text[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-size: 16px;\n  line-height: 20px;\n  color: #9fa2a6;\n  border-bottom: 1px solid #ebebeb;\n  width: 327px;\n}\n.note-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  background-color: transparent;\n  border-color: transparent;\n  color: #262626;\n  font-size: 18px;\n  outline: none;\n}\n.note-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.note-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.note-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.note-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #9fa2a6 ;\n  font-size: 14px;\n}\n.fullscreen-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  position: absolute;\n  right: 0px;\n  fill: #9fa2a6;\n  cursor: pointer;\n}\n.op5[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  background-color: #fafafa;\n  position: relative;\n}\n.file-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 0px;\n  fill: #b9b9b9;\n}\n.file-input[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-size: 16px;\n  line-height: 20px;\n  color: #9fa2a6;\n  border-bottom: 1px solid #ebebeb;\n  width: 20%;\n}\n.input-file-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  position: absolute;\n  right: 60px;\n\n}\n.file-option[_ngcontent-%COMP%]{\n  padding: 10px;\n  position: absolute;\n  right: 0px;\n  fill: #9fa2a6;\n}\n.file-list[_ngcontent-%COMP%]{\n  width: 85%;\n  margin: auto;\n  border-bottom: 1px solid #ebebeb;\n}\n.file-list-layout[_ngcontent-%COMP%], .file-list-layout-fake[_ngcontent-%COMP%]{\n  margin: 8px 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: inherit;\n\n}\n.file-list-content[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 40px;\n  display: flex;\n  border: 1px solid rgba(0,0,0,0.1);\n  border-radius: 3px;\n  margin: auto;\n  border-bottom: 1px solid #ebebeb;\n}\n.file-list-content-icon[_ngcontent-%COMP%]{\n  width: 40px;\n  height: 40px;\n}\n.file-list-content-text[_ngcontent-%COMP%]{\n  margin: 0 10px;\n  width: 80%;\n  height: 40px;\n}\n.file-list-content-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.file-list-content-text-imgname[_ngcontent-%COMP%]{\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: bold;\n  color: #262626;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 5px;\n}\n.file-list-content-text-time[_ngcontent-%COMP%]{\n  padding-top: 2px;\n  display: flex;\n  position: relative;\n}\n.file-remove[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 3px;\n  top: -7px;\n  display: none;\n  cursor: pointer;\n}\n.file-list-content[_ngcontent-%COMP%]:hover   .file-remove[_ngcontent-%COMP%]{\n  display: block;\n}\n.file-list-content-text-timetext[_ngcontent-%COMP%]{\n  display: inline-block;\n  vertical-align: top;\n  font-size: 11px;\n  margin: 0 6px;\n  color: #737272;\n  white-space: nowrap;\n  padding-top: 2px;\n}\n.comment[_ngcontent-%COMP%], .comment-fake[_ngcontent-%COMP%]{\n  display: flex;\n  padding : 0px 8px 0px 8px;\n  position: relative;\n}\n.comment-icon[_ngcontent-%COMP%]{\n  width: 32px;\n  height: 32px;\n}\n.comment-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  margin-top : 10px;\n  padding: 0px 5px;\n  width: 32px;\n  border-radius: 50%;\n}\n.comment-text[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n.comment-text-author[_ngcontent-%COMP%]{\n  font-weight: bold;\n  display: flex;\n  margin-right: 8px;\n  margin-left: 12px;\n  padding-top: 10px;\n  white-space: nowrap;\n  color: #262626;\n  font-size: 14px;\n  line-height: 15px;\n}\n.comment-title-text[_ngcontent-%COMP%]{\n  color: #262626;\n  font-size: 14px;\n  margin-right: 8px;\n  margin-left: 12px;\n}\n.comment-title-text-none[_ngcontent-%COMP%]{\n  display:none;\n}\n.comment-time[_ngcontent-%COMP%]{\n  color: #737272;\n  font-weight: normal;\n}\n.comment[_ngcontent-%COMP%]:hover   .comment-text-icon[_ngcontent-%COMP%]{\n  display: block;\n}\n.comment-text-icon[_ngcontent-%COMP%]{\n  padding-top: 15px;\n  right: 15px;\n  position: absolute;\n  cursor: pointer;\n  display: none;\n}\n.comment-add[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  height: 44px;\n  background-color: #fafafa;\n  position: relative;\n  padding: 0px 10px 0 10px;\n\n}\n.right-bottom[_ngcontent-%COMP%]{\n  bottom: 0;\n  position: absolute;\n}\n.input-fake[_ngcontent-%COMP%]{\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  padding-top: 5px;\n  border-radius: 5px;\n  height: 32px;\n}\n.textarea[_ngcontent-%COMP%]{\n  resize: none;\n  background-color: transparent;\n}\n.textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  margin: 6px;\n  width: 50vh;\n  outline: none;\n  border: none;\n}\n.input-submit-none[_ngcontent-%COMP%]{\n  display: none;\n}\n.textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #262626;\n  font-size: 16px;\n}\n.textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #262626;\n  font-size: 16px;\n}\n.textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #262626;\n  font-size: 16px;\n}\n.textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #262626;\n  font-size: 16px;\n}\n.input-fake[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\n  padding: 7px;\n  width: 333px;\n  height: 20px;\n  font-size: 15px;\n  background-color: transparent;\n  border-color: transparent;\n}\n.detail-info[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  position: relative;\n  background-color: #fafafa;\n}\n.close-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  padding-left: 5px;\n  fill: #262626;\n  cursor: pointer;\n}\n.datetime[_ngcontent-%COMP%]{\n  left: 128px;\n  padding: 10px;\n  font-size: 11px;\n  text-align: center;\n  color: #a3a3a2;\n  width: 69%;\n}\n.trash-icon[_ngcontent-%COMP%]{\n  padding: 10px;\n  right: 0px;\n  fill: #262626;\n  cursor: pointer;\n}\n\n.middle[_ngcontent-%COMP%]{\n  margin-left: 280px;\n  background-color: transparent;\n  position: relative;\n  height: 100vh;\n}\n.titleANDicon[_ngcontent-%COMP%]{\n  height: 45px;\n  background-color: #668964;\n  display: flex;\n  position: relative;\n}\n#title-text[_ngcontent-%COMP%]{\n  width: 563px;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px 14px;\n}\n.actionBar[_ngcontent-%COMP%]{\n  \n  width: 156px;\n  height: 100%;\n  display: flex;\n  position: absolute;\n  right: 0;\n}\n.share[_ngcontent-%COMP%]{\n  width: 52px;\n  height: 44px;\n}\n.share-icon[_ngcontent-%COMP%]{\n  cursor: pointer;\n  text-align: center;\n  font-size: 0px;\n  fill: #fff;\n  opacity: 0.5;\n  padding: 6px;\n  padding-bottom: 0px;\n}\n.share-text[_ngcontent-%COMP%]{\n  font-size: 10px;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n}\n.sort[_ngcontent-%COMP%]{\n  width: 52px;\n  height: 44px;\n  position: relative;\n}\n.sort-icon[_ngcontent-%COMP%]{\n  cursor: pointer;\n  text-align: center;\n  font-size: 0px;\n  fill: #fff;\n  opacity: 0.5;\n  padding: 6px;\n  padding-bottom: 0px;\n}\n.sort-text[_ngcontent-%COMP%]{\n  font-size: 10px;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n}\n\n.sort-hover[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n  width: 250px;\n  height: 180px;\n  z-index: 10;\n  margin-top: 45px;\n  margin-left: -146px;\n  background-color: #668964;\n  padding-left: 0px;\n  font-size: 14px;\n}\n\n.sort-ds1[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.sort-ds1-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.sort-ds1-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.sort-ds2[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.sort-ds2-icon[_ngcontent-%COMP%]{\n  fill: #b2b2b2;\n  padding-right: 7px;\n}\n.sort-ds2-text[_ngcontent-%COMP%]{\n  color : #b2b2b2;\n}\n.sort-ds3[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.sort-ds3-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.sort-ds3-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.sort-ds4[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.sort-ds4-icon[_ngcontent-%COMP%]{\n  fill: #b2b2b2;\n  padding-right: 7px;\n}\n.sort-ds4-text[_ngcontent-%COMP%]{\n  color: #b2b2b2;\n}\n.sort-ds5[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.sort-ds5-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.sort-ds5-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n\n.more[_ngcontent-%COMP%]{\n  width: 52px;\n  height: 44px;\n  position: relative;\n}\n.more-icon[_ngcontent-%COMP%]{\n  cursor: pointer;\n  text-align: center;\n  font-size: 0px;\n  fill: #fff;\n  padding: 6px;\n  padding-bottom: 0px;\n}\n.more-text[_ngcontent-%COMP%]{\n  font-size: 10px;\n  color: #fff;\n  text-align: center;\n}\n\n.more-hover[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n  width: 250px;\n  height: 290px;\n  z-index: 10;\n  margin-top: 45px;\n  margin-left: -198px;\n  background-color: #668964;\n  padding-left: 0px;\n  font-size: 14px;\n}\n\n.more-ds1[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds1-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds1-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.more-ds2[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds2-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds2-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.more-ds3[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds3-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds3-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.more-ds4[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds4-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds4-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.more-ds5[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds5-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds5-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.more-ds6[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds6-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds6-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n.more-ds7[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n  position: relative;\n}\n.more-ds7-icon[_ngcontent-%COMP%]{\n  fill: #b2b2b2;\n  padding-right: 7px;\n}\n.more-ds7-text-end[_ngcontent-%COMP%]{\n  color : #b2b2b2;\n  right: 0;\n  padding-right: 7px;\n  position: absolute;\n}\n.more-ds7-text[_ngcontent-%COMP%]{\n  color: #b2b2b2;\n}\n.more-ds8[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 7px;\n}\n.more-ds8-icon[_ngcontent-%COMP%]{\n  fill: #fff;\n  padding-right: 7px;\n}\n.more-ds8-text[_ngcontent-%COMP%]{\n  color: #fff;\n}\n\n.task-scroll[_ngcontent-%COMP%]{\n  margin-right: 7px;\n  margin-left: 7px;\n  margin-top: 14px;\n  margin-bottom: 14px;\n  height: 90vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.tasklist-body22[_ngcontent-%COMP%]{\n  display: flex;\n  background: #fff;\n  opacity: .6;\n  text-decoration: line-through;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 14px;\n  color: #262626;\n  z-index: 10;\n  margin-top: 8px;\n  border-radius: 5px;\n}\n.tasklist-body222[_ngcontent-%COMP%]{\n  display: flex;\n  background: #fff;\n  display: flex;\n  height: 46px;\n  background: #fff;\n  position: relative;\n  margin: 4px;\n}\n.addtask[_ngcontent-%COMP%]{\n  display: flex;\n  margin: auto;\n  margin-bottom: 14px;\n  height: 47px;\n  background: rgba(102,137,100,0.75);\n  border-radius: 3px;\n  font-size: 14px;\n}\n.addplus[_ngcontent-%COMP%]{\n  fill: #fff;\n  cursor: pointer;\n  padding: 13px 12px 13px 12px;\n}\n.to-do-add[_ngcontent-%COMP%]{\n  padding: 13px 60px 14px 0;\n}\n.to-do-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  font-size: 16px;\n  color: #fff;\n  background-color: transparent;\n  border-color: transparent;\n  width: 500px;\n  outline: none;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #fff;\n  opacity: 0.5;\n}\n[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #fff;\n  opacity: 0.5;\n}\n[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #fff;\n  opacity: 0.5;\n}\n[_ngcontent-%COMP%]::placeholder{\n  color: #fff;\n  opacity: 0.5;\n}\n.task-list[_ngcontent-%COMP%]{\n  margin: auto;\n  margin-top: 5px;\n  background-color: transparent;\n}\n.task-list-Completed[_ngcontent-%COMP%]{\n  margin: auto;\n  margin-top: 5px;\n  background-color: transparent;\n}\n.task-list-Completed[_ngcontent-%COMP%]   .task-check-title[_ngcontent-%COMP%]{\n  display: none;\n}\n.tasklist-body[_ngcontent-%COMP%]{\n  display: flex;\n  height: 46px;\n  background: #fff;\n  position: relative;\n  margin: 4px;\n  border-radius: 5px;\n}\n#tasklist-body[_ngcontent-%COMP%]:first-child{\n  display: none;\n}\n.list-highlight-color[_ngcontent-%COMP%]{\n  background-color: #e0eefa;\n}\n.tasklist-icon[_ngcontent-%COMP%]{\n  padding: 13px;\n  padding-right: 8px;\n  height: 20px;\n  cursor: pointer;\n}\n.tasklist-iconn[_ngcontent-%COMP%]{\n  padding-left:13px;\n  padding-right: 8px;\n  padding-top: 15px;\n  height: 20px;\n  cursor: pointer;\n}\n.task-check[_ngcontent-%COMP%], .task-check-title[_ngcontent-%COMP%]{\n  stroke: rgba(0,0,0,0.35);\n  padding-right: 8px;\n  height: 20px;\n  cursor: pointer;\n  \n}\n.task-checked1[_ngcontent-%COMP%], .task-checked1-title[_ngcontent-%COMP%]{\n  fill: rgba(0,0,0,0.35);\n  padding-right: 8px;\n  height: 20px;\n  cursor: pointer;\n  \n}\n.tasklist-text[_ngcontent-%COMP%]{\n  font-size: 15px;\n  padding: 13px;\n  padding-left: 0px;\n  width: 85%;\n}\n.tasklist-staricon[_ngcontent-%COMP%], .tasklist-staricon-title[_ngcontent-%COMP%]{\n  fill: rgba(0,0,0,0.3);\n  padding: 13px;\n  right: 0px;\n  position: absolute;\n  cursor: pointer;\n}\n.tasklist-staricon-check[_ngcontent-%COMP%], .tasklist-staricon-check-title[_ngcontent-%COMP%]{\n  fill: #d74e48;\n  padding-right: 13px;\n  right: 0px;\n  position: absolute;\n  cursor: pointer;\n  \n}\n\n.tasklist-menu[_ngcontent-%COMP%]{\n  width: 215.83px;\n  height: 34px;\n  background-color: #fff;\n  z-index: 2;\n  position: fixed;\n  font-size: 14px;\n  font-weight: 500px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.3);\n  border-radius: 3px;\n\n}\n.TLmenu1[_ngcontent-%COMP%], .TLmenu2[_ngcontent-%COMP%], .TLmenu3[_ngcontent-%COMP%], .TLmenu4[_ngcontent-%COMP%], .TLmenu5[_ngcontent-%COMP%], .TLmenu6[_ngcontent-%COMP%], .TLmenu7[_ngcontent-%COMP%], .TLmenu8[_ngcontent-%COMP%], .TLmenu9[_ngcontent-%COMP%], .TLmenu10[_ngcontent-%COMP%], .TLmenu11[_ngcontent-%COMP%]{\n  display: flex;\n  font-size: 14px;\n  cursor: pointer;\n}\n.TLmenu1[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:hover   .TLmenu2[_ngcontent-%COMP%]:hover, .TLmenu3[_ngcontent-%COMP%]:hover, .TLmenu4[_ngcontent-%COMP%]:hover, .TLmenu5[_ngcontent-%COMP%]:hover, .TLmenu6[_ngcontent-%COMP%]:hover, .TLmenu7[_ngcontent-%COMP%]:hover, .TLmenu8[_ngcontent-%COMP%]:hover, .TLmenu9[_ngcontent-%COMP%]:hover, .TLmenu10[_ngcontent-%COMP%]:hover, .TLmenu11[_ngcontent-%COMP%]:hover{\n  background-color: #ecd8d8;\n}\n.TLmenu-icon[_ngcontent-%COMP%]{\n  padding: 4px;\n  fill: #737272;\n}\n.tlmenu7-icon[_ngcontent-%COMP%]{\n  stroke: #737272;\n  padding-top: 8px;\n}\n.TLmenu-text[_ngcontent-%COMP%]{\n  color: #262626;\n  padding: 4px;\n  padding-top: 8px;\n  font-size: 14px;\n}\n.iconnn[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #e0e0df;\n}\n.TLmenu-icon-right[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  right: 0;\n  padding: 4px;\n  position: absolute;\n}\n.Tlmenu-text-hover[_ngcontent-%COMP%]{\n  padding: 8px;\n  margin-left: 185px;\n  margin-top: -20px;\n  width: 200px;\n  height: 224px;\n  background-color: #fff;\n  position: absolute;\n  font-size: 14px;\n  display: none;\n}\n.text-move-todo[_ngcontent-%COMP%]{\n  padding: 8px;\n}\n.text-move-todo[_ngcontent-%COMP%]:hover{\n  background-color: #ecd8d8;\n}\n.TLmenu7[_ngcontent-%COMP%]:hover   .Tlmenu-text-hover[_ngcontent-%COMP%]{\n  display: block;\n}\n\n.to-dos[_ngcontent-%COMP%]{\n\n  margin-top: 20px !important;\n  margin-bottom: 10px;\n\n  height: 22px;\n  background-color: transparent;\n  position: relative;\n}\n.show[_ngcontent-%COMP%]{\n  background: rgba(102,137,100,0.75);\n  box-sizing: border-box;\n  border-radius: 3px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 3px 10px;\n  cursor: pointer;\n  word-wrap: break-word;\n  font-size: 11px;\n  display: inline-flex;\n}\n.to-dos-text[_ngcontent-%COMP%]{\n  font-size: 11px;\n  color: #fff;\n  font-weight: 400;\n  line-height: 16px;\n  cursor: pointer;\n}\n.op[_ngcontent-%COMP%]{\n  opacity: 0.6;\n}\n.task-deleted-hover[_ngcontent-%COMP%]{\n  display: block;\n  z-index: 1;\n}\n.task-deleted-hover[_ngcontent-%COMP%]   .task-check[_ngcontent-%COMP%]{\n  display: none;\n}\n.task-deleted-hover[_ngcontent-%COMP%]   .task-check-title[_ngcontent-%COMP%]{\n  display: none;\n}\n.task-deleted-hover[_ngcontent-%COMP%]   .task-checked1[_ngcontent-%COMP%]{\n  display: block;\n}\n.task-deleted-hover[_ngcontent-%COMP%]   .task-checked1-title[_ngcontent-%COMP%]{\n  display: block;\n}\n.task-deleted-icon[_ngcontent-%COMP%]{\n  padding: 8px;\n  padding-top: 12px;\n  cursor: pointer;\n}\n.task-deleted-hover[_ngcontent-%COMP%]{\n  padding-top: 10px;\n}\n.task-deleted-text1[_ngcontent-%COMP%]{\n  padding: 13px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n  \n  font-size: 15px;\n  width: 77%;\n  \n  left: 49px;\n  color: #262626;\n}\n.task-deleted-text2[_ngcontent-%COMP%], .task-deleted-text22[_ngcontent-%COMP%]{\n  font-size: 10px;\n}\n.task-deleted-text22[_ngcontent-%COMP%]{\n  display: none;\n}\n.task-deleted-text[_ngcontent-%COMP%]{\n  display: inline-block;\n  text-decoration: line-through;\n}\n.task-deleted-staricon[_ngcontent-%COMP%]{\n  width: 18px;\n  height: 18px;\n  fill: rgba(0,0,0,0.3);\n  cursor: pointer;\n  opacity: .6;\n  padding: 14px;\n  position: absolute;\n  right: 0;\n}\n\n.task-deleted-hover-contextmenu[_ngcontent-%COMP%]{\n  background: #fff;\n  padding: 6px 0;\n  color: #262626;\n  font-size: 14px;\n  width: 200px;\n  height: 186px;\n  \n  position: absolute;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.3);\n}\n.TDmenu1[_ngcontent-%COMP%], .TDmenu2[_ngcontent-%COMP%], .TDmenu3[_ngcontent-%COMP%], .TDmenu4[_ngcontent-%COMP%], .TDmenu5[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.TDmenu1[_ngcontent-%COMP%]:hover, .TDmenu2[_ngcontent-%COMP%]:hover, .TDmenu3[_ngcontent-%COMP%]:hover, .TDmenu4[_ngcontent-%COMP%]:hover, .TDmenu5[_ngcontent-%COMP%]:hover{\n  background: #ebebeb;\n}\n.TDmenu-icon[_ngcontent-%COMP%]{\n  fill: #737272;\n  width: 20px;\n  height: 20px;\n  padding: 4px;\n}\n.TDmenu-text[_ngcontent-%COMP%]{\n  padding: 8px;\n  font-weight: 500px;\n}\n.TDmenu-border[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #e0e0df;\n  padding-bottom: 8px;\n  padding-top: 8px;\n}\n\n\n\n.account[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 700px;\n  height: 500px;\n  background: rgba(0,0,0,0.4);\n  margin: auto;\n  background-color: black;\n  border-radius: 3px;\n  font-size: 14px;\n  margin-top:80px;\n  max-height: 100%;\n  border: 1px solid;\n  box-shadow: 0 1px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);\n  border: none;\n  border-radius: 3px;\n  display: flex;\n  display: none;\n\n\n}\n\n.account-left[_ngcontent-%COMP%]{\n  width: 131.8px;\n  height: 453px;\n  background-color: #fff;\n  float: left;\n  border-bottom: 1px solid #e0e0df;\n  border-right: 1px solid #e0e0df;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n}\n.account-left-ds1[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.account-left-ds1-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n}\n.account-left-ds1-text[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px;\n  padding-left: 0px;\n}\n.account-left-ds2[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.account-left-ds2-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n}\n.account-left-ds2-text[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px;\n  padding-left: 0px;\n}\n.account-left-ds3[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.account-left-ds3-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n}\n.account-left-ds3-text[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px;\n  padding-left: 0px;\n}\n.account-left-ds4[_ngcontent-%COMP%]{\n   display: flex;\n   cursor: pointer;\n }\n.account-left-ds4-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n}\n.account-left-ds4-text[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px;\n  padding-left: 0px;\n}\n.account-left-ds5[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.account-left-ds5-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n}\n.account-left-ds5-text[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px;\n  padding-left: 0px;\n}\n.account-left-ds6[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.account-left-ds6-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n}\n.account-left-ds6-text[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px;\n  padding-left: 0px;\n}\n\n\n.account-right[_ngcontent-%COMP%]{\n  width: 548.2px;\n  height: 453px;\n  background-color: #fafafa;\n  overflow: auto;\n  padding: 0px 14px;\n  font-size: 14px;\n  border-bottom: 1px solid #e0e0df;\n  display: none;\n  position: absolute;\n  right: 0px;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n}\n.account-right-iconUser[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right-iconUser[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 120px;\n  height: 120px;\n  cursor: pointer;\n  padding: 40px 210px;\n  border-radius: 50%;\n}\n.account-right-nameInput[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 14px 130px;\n}\n.account-right-nameInput-text[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  padding-right: 10px;\n  font-size: 13px;\n  margin-bottom: 14px;\n}\n.account-right-nameInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 358.77px;\n  height: 18px;\n  border-radius: 3px;\n  transition: all 0.15s ease-in-out;\n  font-size: 15px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  padding: 6px;\n}\n.account-right-nameInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #262626;\n}\n.account-right-nameInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #262626;\n}\n.account-right-nameInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #262626;\n}\n.account-right-nameInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #262626;\n}\n.account-right-emailInput[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 0px 130px 14px 132px;\n}\n.account-right-emailInput-text[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  padding-right: 10px;\n  font-size: 13px;\n}\n.account-right-emailInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 205.28px;\n  height: 18px;\n  border-radius: 3px;\n  transition: all 0.15s ease-in-out;\n  font-size: 15px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  padding: 6px;\n}\n.account-right-emailInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #262626;\n}\n.account-right-emailInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #262626;\n}\n.account-right-emailInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #262626;\n}\n.account-right-emailInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #262626;\n}\n.account-right-emailButton-input[_ngcontent-%COMP%]{\n  padding: 0px 0px 0px 16px;\n  border-radius: 3px;\n  background-color: #fafafa;\n}\n.account-right-emailButton-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 137px;\n  height: 29px;\n  color: #737272;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  background-color: #fafafa;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n}\n.account-right-link[_ngcontent-%COMP%]{\n  color: #328ad6;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 18px;\n  padding: 0px 170px 14px 180px;\n}\n.account-right-passInput[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 0px 130px 14px 110px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right-passInput-text[_ngcontent-%COMP%]{\n  padding-top: 5px;\n  padding-right: 10px;\n  font-size: 13px;\n}\n.account-right-passInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 217.27px;\n  height: 29px;\n  color: #737272;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  background-color: #fafafa;\n  font-weight: bold;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  border: none;\n  border-radius: 3px;\n}\n.account-right-backupInput[_ngcontent-%COMP%]{\n  display: flex;\n  margin-top: 14px;\n  padding-left: 67px;\n}\n.account-right-backupInput-text[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  font-size: 13px;\n}\n.account-right-backupButton1-input[_ngcontent-%COMP%]{\n  border-radius: 3px;\n  background-color: #fafafa;\n  padding-left : 16px;\n}\n.account-right-backupButton1-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 177.86px;\n  height: 29px;\n  color: #737272;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  background-color: #fafafa;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n}\n.account-right-backupButton2-input[_ngcontent-%COMP%]{\n  padding-left: 15px;\n  border-radius: 3px;\n  background-color: #fafafa;\n}\n.account-right-backupButton2-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 166.91px;\n  height: 29px;\n  color: #737272;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  background-color: #fafafa;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n}\n.account-right-backupText[_ngcontent-%COMP%]{\n  width: 370px;\n  height: 45px;\n  font-weight: 500;\n  font-size: 10.8px;\n  text-align: left;\n  margin-right: 0;\n  padding-left: 180px;\n  color: #262626;\n  border-bottom: 1px solid #e0e0df;\n  padding-bottom: 14px;\n  padding-top: 14px;\n}\n.account-right-googleInput[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 10px 130px 14px 125px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right-googleInput-text[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  padding-right: 15px;\n  font-size: 13px;\n}\n.account-right-googleInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 205.28px;\n  height: 29px;\n  color: #737272;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  background-color: #fafafa;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n}\n.account-right-facebookInput[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 10px 130px 14px 112px;\n}\n.account-right-facebookInput-text[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  padding-right: 14px;\n  font-size: 13px;\n}\n.account-right-facebookInput-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 205.28px;\n  height: 29px;\n  color: #737272;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  background-color: #fafafa;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n}\n.account-right-facebookNote[_ngcontent-%COMP%]{\n  display: flex;\n  margin-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 180px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right-facebookNote-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n}\n.account-right-facebookNote-text[_ngcontent-%COMP%]{\n  padding: 0px 7px;\n  font-size: 10.8px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #262626;\n}\n.account-rightCalender[_ngcontent-%COMP%]{\n  display: flex;\n  margin-top: 14px;\n  padding-left: 90px;\n}\n.account-rightCalender-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 10px;\n  padding-right: 15px;\n}\n.account-rightCalender-input[_ngcontent-%COMP%]{\n  font-size: 13px;\n  width: 67%;\n  height: 30px;\n  color: #262626;\n}\n.account-rightCalender-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 18px;\n  padding: 6px;\n  background: #fafafa;\n  transition: all 0.15s ease-in-out;\n  border-radius: 3px;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  border: none;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  padding: 6px;\n}\n.account-rightCalender-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #262626;\n  opacity: 1;\n}\n.account-rightCalender-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #262626;\n  opacity: 1;\n}\n.account-rightCalender-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #262626;\n  opacity: 1;\n}\n.account-rightCalender-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #262626;\n  opacity: 1;\n}\n.account-rightCalender-note1[_ngcontent-%COMP%]{\n  margin-top: 14px;\n  padding-left: 190px;\n  padding-right: 25px;\n  font-size: 10.8px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #262626;\n}\n.account-rightCalender-note2[_ngcontent-%COMP%]{\n  color: #328ad6;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 10.8px;\n  padding-left: 190px;\n  padding-bottom: 28px;\n  padding-top: 5px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right-delButton[_ngcontent-%COMP%]{\n  margin-top: 14px;\n  padding-left: 190px;\n  padding-bottom: 14px;\n}\n.account-right-delButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  background-color: #d74e48;\n  color: #fff;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 3px;\n}\n\n\n.account-right2[_ngcontent-%COMP%]{\n  width: 548.2px;\n  height: 453px;\n  background-color: #fafafa;\n  overflow: auto;\n  padding: 0px 14px;\n  font-size: 14px;\n  border-bottom: 1px solid #e0e0df;\n  \n  position: absolute;\n  right: 0;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n}\n.account-right2-Language[_ngcontent-%COMP%]{\n  display: flex;\n  margin-top: 14px;\n  margin-bottom: 14px;\n  padding-left: 270px;\n}\n.account-right-language-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  text-align: right;\n  color: #262626;\n  font-weight: 500;\n  padding-top: 24px;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right-language-select[_ngcontent-%COMP%]{\n  padding-top: 14px;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right-language-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  width: 139px;\n  height: 33px;\n  border-radius: 3px;\n  color: #262626;\n  font-size: 13px;\n  line-height: 17px;\n  padding: 8px 26px 8px 8px;\n}\n.account-right2-date[_ngcontent-%COMP%]{\n  display: flex;\n  margin-bottom: 14px;\n  padding-left: 255px;\n}\n.account-right2-date-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  text-align: right;\n  color: #262626;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right2-date-select[_ngcontent-%COMP%]{\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right2-date-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  width: 139px;\n  height: 33px;\n  border-radius: 3px;\n  color: #262626;\n  font-size: 13px;\n  line-height: 17px;\n  padding: 8px 26px 8px 8px;\n}\n.acoount-right2-radiobtn[_ngcontent-%COMP%]{\n  display: flex;\n  margin-bottom: 14px;\n  padding-left: 345px;\n  padding-bottom: 14px;\n}\n.account-right2-radiobtn1[_ngcontent-%COMP%]{\n  display: flex;\n}\n.account-right2-radiobtn1-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border-radius: 11px;\n  background: #fff;\n  width: 16px;\n  height: 16px;\n}\n.account-right2-radiobtn1-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-radiobtn2[_ngcontent-%COMP%]{\n  display: flex;\n}\n.account-right2-radiobtn2-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border-radius: 11px;\n  background: #fff;\n  width: 16px;\n  height: 16px;\n}\n.account-right2-radiobtn2-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-StartofW[_ngcontent-%COMP%]{\n  display: flex;\n  margin-bottom: 14px;\n  padding-left: 230px;\n  border-bottom: 1px solid #e0e0df;\n  padding-bottom: 14px;\n}\n.account-right2-StartofW-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  text-align: right;\n  color: #262626;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right2-StartofW-select[_ngcontent-%COMP%]{\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right2-StartofW-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  width: 87px;\n  height: 33px;\n  border-radius: 3px;\n  color: #262626;\n  font-size: 13px;\n  line-height: 17px;\n  padding: 8px 0px 6px 8px;\n}\n.account-right2-enableSound1[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 125px;\n}\n.account-right2-enableSound1-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-enableSound1-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-enableSound1-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-enableSound2[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 143px;\n  padding-top: 5px;\n  border-bottom: 1px solid #e0e0df;\n  padding-bottom: 14px;\n}\n.account-right2-enableSound2-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-enableSound2-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-enableSound2-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-Addtodos[_ngcontent-%COMP%]{\n  display: flex;\n  margin-bottom: 14px;\n  padding-left: 265px;\n  padding-top: 14px;\n}\n.account-right2-Addtodos-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  text-align: right;\n  color: #262626;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right2-Addtodos-select[_ngcontent-%COMP%]{\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.account-right2-Addtodos-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  width: 114px;\n  height: 33px;\n  border-radius: 3px;\n  color: #262626;\n  font-size: 13px;\n  line-height: 17px;\n  padding: 8px 0px 6px 8px;\n}\n.account-right2-confirm[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 160px;\n  padding-bottom: 14px;\n}\n.account-right2-confirm-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-confirm-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-confirm-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-starmove[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 207px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right2-starmove-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-starmove-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-starmove-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-smartduedate[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 205px;\n  padding-bottom: 14px;\n  padding-top: 14px;\n}\n.account-right2-smartduedate-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-smartduedate-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-smartduedate-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-removeduedate[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 120px;\n  padding-bottom: 14px;\n}\n.account-right2-removeduedate-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-removeduedate-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-removeduedate-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-autoreminder[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 213px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right2-autoreminder-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-autoreminder-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-autoreminder-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-print[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 213px;\n  padding-bottom: 14px;\n  padding-top: 14px;\n  border-bottom: 1px solid #e0e0df;\n}\n.account-right2-print-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-print-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-print-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-show[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 148px;\n  padding-bottom: 14px;\n  padding-top: 14px;\n}\n.account-right2-show-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-show-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-show-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n.account-right2-contextmenu[_ngcontent-%COMP%]{\n  display: flex;\n  padding-left: 221px;\n  padding-bottom: 14px;\n}\n.account-right2-contextmenu-text[_ngcontent-%COMP%]{\n  font-size: 13px;\n  padding-top: 3px;\n}\n.account-right2-contextmenu-input[_ngcontent-%COMP%]{\n  padding-left: 8px;\n}\n.account-right2-contextmenu-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 16px;\n  height: 16px;\n  top: -2px;\n  left: 2px;\n  font-size: 20px;\n  color: #737272;\n  background-color: #fff;\n}\n\n.account-footer[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 54px;\n  background-color: #fafafa;\n  bottom: 0;\n  z-index: -1;\n  position: absolute;\n}\n.footer-button[_ngcontent-%COMP%]{\n  margin: 14px;\n  float: right;\n  padding-top: 3px;\n}\n.footer-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  background-color: #328ad6;\n  color: #fff;\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  width: 125px;\n  height: 29px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n\n.editlist-layout-father[_ngcontent-%COMP%], .createlist-layout-father[_ngcontent-%COMP%]{\n\n}\n.createlist-layout-bg[_ngcontent-%COMP%], .createlist-layout-bg1[_ngcontent-%COMP%]{\n  background: rgba(0,0,0,0.4);\n  width: 100%;\n  height: 100%;\n  z-index: 1099;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n.createlist-layout[_ngcontent-%COMP%], .createlist-layout1[_ngcontent-%COMP%]{\n  padding-top: 120px;\n  margin: auto;\n  width: 392px;\n  height: 298px;\n  color: #262626;\n  font-size: 14px;\n  border-radius: 3px;\n  z-index: 1099;\n}\n.layout-header[_ngcontent-%COMP%]{\n  padding: 14px 14px 0;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 4px 4px 0 0;\n  background: #fff;\n}\n.layout-header-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  padding: 9px 10px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background: #fff;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  font-size: 15px;\n}\n.layout-header-headertext[_ngcontent-%COMP%]{\n  text-align: center;\n  color: #262626;\n  font-size: 1.17em;\n  font-weight: bold;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\";\n  padding-bottom: 8px;\n}\n.layout-header-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #262626;\n}\n.layout-header-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #262626;\n}\n.layout-header-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #262626;\n}\n.layout-header-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #262626;\n}\n.layout-header-optiontext[_ngcontent-%COMP%]{\n  display: flex;\n  color: #262626;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 10px;\n  color: #262626;\n  cursor: pointer;\n  border-bottom: 1px solid #d6d6d6;\n}\n.layout-header-textt[_ngcontent-%COMP%]{\n  padding: 18px 4px 4px 4px;\n}\n#layout-header-optiontext2[_ngcontent-%COMP%]{\n  color: #737272;\n  border-bottom: 1px solid #e0e0df;\n\n}\n.layout-header-optiontext2[_ngcontent-%COMP%]{\n  color: #737272;\n  border-bottom: 1px solid #e0e0df;\n}\n.layout-header-inputfake[_ngcontent-%COMP%]{\n  padding: 9px 10px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  font-weight: 500;\n  font-size: 15px;\n  color: #262626;\n  border: none;\n  background: #fff;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  border-radius: 3px;\n  display: flex;\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: none;\n}\n.layout-header-inputfake-icon[_ngcontent-%COMP%]{\n  top: 7px;\n  left: 10px;\n  fill: #737272;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n}\n.layout-header-inputfake-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  margin-left: 28px;\n  border: none !important;\n  background: none !important;\n  border-radius: 0 !important;\n  padding: 0;\n  line-height: 20px;\n  box-shadow: none !important;\n  width: 100%;\n  box-sizing: border-box;\n  font-weight: 500;\n  font-size: 15px;\n  color: #262626;\n  outline: none;\n}\n.layout-header-inputfake-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: #262626;\n}\n.layout-header-inputfake-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: #262626;\n}\n.layout-header-inputfake-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: #262626;\n}\n.layout-header-inputfake-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  color: #262626;\n}\n\n.layout-member[_ngcontent-%COMP%]{\n  padding: 0 14px;\n  border-radius: 0;\n  color: #262626;\n  font-size: 14px;\n  background: #fafafa;\n  border-bottom: 1px solid #e0e0df;\n  display: none;\n}\n.layout-member-content[_ngcontent-%COMP%]{\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #262626;\n  font-size: 14px;\n  display: flex;\n}\n.layout-member-content-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  pointer-events: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.layout-member-content-icon[_ngcontent-%COMP%]{\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.layout-member-content-text[_ngcontent-%COMP%]{\n  padding-left: 10px;\n  padding-right: 10px;\n  pointer-events: none;\n  display: inline-block;\n  height: 17px;\n  padding-top: 5px;\n}\n.layout-member-content-textTop[_ngcontent-%COMP%]{\n  display: flex;\n  font-weight: bold;\n  line-height: 16px;\n  cursor: default;\n  color: #262626;\n  font-size: 14px;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\";\n\n}\n.layout-member-content-textTop-icon[_ngcontent-%COMP%]{\n  margin: 0 5px;\n  font-weight: bold;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  border-color: #328ad6;\n}\n.layout-member-content-textTop-iconn[_ngcontent-%COMP%]{\n  color: #1f7bcc;\n  padding: 4px 7px;\n  font-size: 8px;\n  line-height: 8px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.layout-member-content-textBot[_ngcontent-%COMP%]{\n  font-size: 12px;\n  color: #737272;\n  line-height: 16px;\n  cursor: default;font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\";\n  padding-top: 4px;\n}\n\n\n.layout-tabOption[_ngcontent-%COMP%]{\n  color: #262626;\n  font-size: 14px;\n  font-weight: 500;\n  background: #fafafa;\n  border-bottom: 1px solid #e0e0df;\n  display: none;\n}\n.layout-tabOption-content[_ngcontent-%COMP%]{\n  border-radius: 0;\n  padding: 14px;\n  overflow: auto;\n  opacity: 0.5;\n  font-size: 12px;\n  font-weight: bold;\n  display: flex;\n}\n.layout-tabOption-checkbox[_ngcontent-%COMP%]{\n  background: #fff;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  border: none;\n  box-sizing: border-box;\n  color: rgb(84, 84, 84);\n  height: 16px;\n  width: 16px;border-radius: 3px;\n  margin-right: 5px;\n}\n.layout-tabOption-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  color: rgb(84, 84, 84);\n  cursor: default;\n  display: none;\n\n}\n.layout-tabOption-text[_ngcontent-%COMP%]{\n  font-size: 11px;\n  padding-top: 2px;\n  font-weight: bold;\n  pointer-events: none;\n  color: #262626;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\";\n\n}\n\n\n.layout-footer[_ngcontent-%COMP%]{\n  padding: 12px;\n  color: #262626;\n  font-size: 14px;\n  font-weight: 500;font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\";\n  background: #fff;\n}\n.layout-footer-option[_ngcontent-%COMP%]{\n  margin-left: -6px !important;\n  margin-right: -6px !important;\n  padding: 6px;\n\n}\n.layout-footer-cols[_ngcontent-%COMP%]{\n  display: flex;\n}\n.layout-footer-cols2[_ngcontent-%COMP%]{\n  width: 102px;\n  padding: 0 6px ;\n  box-sizing: border-box;\n  vertical-align: middle;\n  margin-left: 170px;\n}\n.layout-footer-cols3[_ngcontent-%COMP%]{\n  width: 114px;\n  padding: 0 6px ;\n  box-sizing: border-box;\n  vertical-align: middle;\n\n}\n.layout-footer-cols2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  color: #737272;\n  background: #fafafa;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n}\n.layout-footer-cols3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  box-shadow: inset 0 0 0 1px #328ad6;\n  background-color: #328ad6;\n  color: #fff;\n}\n.btnFooter[_ngcontent-%COMP%]{\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n.layout-footer-cols33[_ngcontent-%COMP%]{\n  width: 114px;\n  padding: 0 6px ;\n  box-sizing: border-box;\n  vertical-align: middle;\n}\n.layout-footer-cols33[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  box-shadow: inset 0 0 0 1px #328ad6;\n  background-color: #328ad6;\n  color: #fff;\n}\n\n\n\n.left-contextmenu[_ngcontent-%COMP%]{\n  position: fixed;\n  width: 200px;\n  height: 40px;\n  background: #fff;\n  padding: 6px 0;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.3);\n  border-radius: 3px;\n  z-index: 2;\n}\n.LC1[_ngcontent-%COMP%], .LC2[_ngcontent-%COMP%], .LC3[_ngcontent-%COMP%], .LC4[_ngcontent-%COMP%], .LC5[_ngcontent-%COMP%], .LC6[_ngcontent-%COMP%], .LC7[_ngcontent-%COMP%], .LC8[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.LC1[_ngcontent-%COMP%]:hover, .LC2[_ngcontent-%COMP%]:hover, .LC3[_ngcontent-%COMP%]:hover, .LC4[_ngcontent-%COMP%]:hover, .LC5[_ngcontent-%COMP%]:hover, .LC6[_ngcontent-%COMP%]:hover, .LC7[_ngcontent-%COMP%]:hover, .LC8[_ngcontent-%COMP%]:hover{\n  background-color: #ecd8d8;\n}\n.LC-icon[_ngcontent-%COMP%]{\n  fill: #737272;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  padding: 8px;\n}\n.LC-text[_ngcontent-%COMP%]{\n  padding: 8px;\n}\n.LC1[_ngcontent-%COMP%], .LC4[_ngcontent-%COMP%], .LC6[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #e0e0df;\n}\n\n\n.left-contextmenu-inbox[_ngcontent-%COMP%]{\n  width: 200px;\n  height: 68px;\n  background: #fff;\n  position: fixed;\n  padding: 6px 0;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.3);\n  border-radius: 3px;\n  z-index: 2;\n}\n.LCI1[_ngcontent-%COMP%], .LCI2[_ngcontent-%COMP%]{\n  display: flex;\n  cursor: pointer;\n}\n.LCI1[_ngcontent-%COMP%]:hover, .LCI2[_ngcontent-%COMP%]:hover{\n  background-color: #ecd8d8;\n}\n.LCI-icon[_ngcontent-%COMP%]{\n  fill: #737272;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  padding: 8px;\n}\n.LCI-text[_ngcontent-%COMP%]{\n  padding: 8px;\n}\n\n\n.delete-layout[_ngcontent-%COMP%], .delete-layout1[_ngcontent-%COMP%], .delete-layout2[_ngcontent-%COMP%], .delete-layout3[_ngcontent-%COMP%], .delete-layout4[_ngcontent-%COMP%]{\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n}\n.delete-layout5[_ngcontent-%COMP%]{\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n}\n.delete-layout-background[_ngcontent-%COMP%]{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1099;\n  overflow: hidden;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  box-sizing: border-box;\n  background: rgba(0,0,0,0.4);\n}\n.delete-layout-content[_ngcontent-%COMP%]{\n  background: #fafafa;\n  box-shadow: 0 1px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);\n  border-radius: 3px;\n  width: 392px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  position: relative;\n  margin-top: 120px;\n  z-index: 1099;\n\n}\n.delete-layout-content1[_ngcontent-%COMP%]{\n  padding: 24px;\n  overflow: auto;\n  margin: 0;\n  color: #262626;\n  font-size: 14px;\n  font-family: \"Lato\",\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Helvetica\",\"Arial\";\n  border-bottom: 1px solid #e0e0df;\n}\n.delete-layout-content1-icon[_ngcontent-%COMP%]{\n  background-image: url(\"/assets/app.png\");\n  cursor: pointer;\n  background-position: -93px 0;\n  width: 64px;\n  height: 64px;\n  display: inline-block;\n  vertical-align: top;\n}\n.delete-layout-content1-text[_ngcontent-%COMP%]{\n  box-sizing: border-box;\n  width: 275px;\n  padding-left: 20px;\n  display: inline-block;\n  vertical-align: top;\n  color: #262626;\n  font-size: 14px;\n  font-weight: bold;\n}\n.delete-layout-content1-text2[_ngcontent-%COMP%]{\n  font-size: 11px;\n  line-height: 16px;\n}\n.delete-layout-content2[_ngcontent-%COMP%]{\n  padding: 12px;\n}\n.delete-layout-content2-input[_ngcontent-%COMP%]{\n  margin-left: -6px !important;\n  margin-right: -6px !important;\n  font-size: 0;\n}\n.delete-layout-content2-inputt[_ngcontent-%COMP%]{\n  width: 40%;\n  padding: 0 6px !important;\n  box-sizing: border-box;\n  vertical-align: middle;\n  font-size: 13px;\n  display: inline-block;\n  float: right;\n}\n.delete-layout-content2-inputt-none[_ngcontent-%COMP%]\n{\n  display: none;\n}\n.button-delete[_ngcontent-%COMP%]{\n  box-sizing: border-box;\n  float: none;\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  color: #737272;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 8px 12px;\n  box-shadow: inset 0 0 0 1px #d6d6d6;\n  border: none;\n  border-radius: 3px;\n}\n.BD1[_ngcontent-%COMP%]{\n  background: #fafafa;\n}\n.BD2[_ngcontent-%COMP%]{\n  background: #328ad6;\n  color: #fff;\n}\n\n.duedate[_ngcontent-%COMP%]{\n  font-size: 12px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  right: 45px;\n  top: 17px;\n}\n.onduedate[_ngcontent-%COMP%]\n{\n  color: #328ad6;\n}\n.over_duedate[_ngcontent-%COMP%]\n{\n  color:#b3312d;\n}\n.reminder1[_ngcontent-%COMP%]{\n  font-size: 13px;\n  min-height: 40px;\n  width: 100%;\n  padding: 5px 5px 5px 10px;\n  border-bottom: 1px solid rgb(230, 230, 230);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n}\n.reminder_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  border-radius: 50%;\n}\n.reminder_message[_ngcontent-%COMP%]{\n  padding: 0px 4px;\n  color: #1e1e1e;\n  display: inline-block;\n\n}\n.reminder_message2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: rgb(63, 63, 63);\n  font-weight: bold;\n  cursor: pointer;\n}\n.reminder_message3[_ngcontent-%COMP%]{\n  display: flex;\n}\n.id-list-none[_ngcontent-%COMP%], .to-do-add-none[_ngcontent-%COMP%], .tasklist-all-fake[_ngcontent-%COMP%], .ds2-fake[_ngcontent-%COMP%], .task-list-Completed-fake[_ngcontent-%COMP%], .star-none[_ngcontent-%COMP%], .plus-cln-father-fake[_ngcontent-%COMP%], .comment-father-fake[_ngcontent-%COMP%], .file-list-fake[_ngcontent-%COMP%]{\n  display: none;\n\n}\n.delete-layout-content1-text1[_ngcontent-%COMP%]{\n  display: -webkit-box;\n}\n\n\n\n.block[_ngcontent-%COMP%]{\n  display: block;\n}\n.none[_ngcontent-%COMP%]{\n  display: none;\n}\n.z-1[_ngcontent-%COMP%]{\n  z-index: -1;\n}\n.status-father[_ngcontent-%COMP%]{\n  display: flex;\n}\n.line-through[_ngcontent-%COMP%]{\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVE7QUFDUix3QkFBd0I7QUFFeEIsSUFBSTtBQUNKO0VBQ0Usb0JBQW9CLEVBQUUsb0JBQW9CO0VBQzFDO0FBQ0Y7QUFDQTtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0SEFBNEg7RUFDNUgsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixrSEFBa0g7QUFDcEg7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFOzs7S0FHRztBQUNMO0FBQ0E7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QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7O0dBRUciLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmJvZHl7Ki9cbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cblxuLyp9Ki9cbmJvZHksIGh0bWwge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlXG47XG59XG4uaGlkZGVue1xuICBkaXNwbGF5OiBub25lO1xufVxuLmF7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhc2tsaXN0LXRleHQgYXtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzI2MjYyNjtcbn1cblxuLm1haW57XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud3VuZGVybGlzdC5jb20vNzMwMWUyMTlhY2IwMjI2NjU4N2NlNjEwYmQ5MWYzM2VkNmQzMTYwNy9pbWFnZXMvYmFja2dyb3VuZHMvMTAyNC8wNi5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gIHdpZHRoOiA2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2cHggIWltcG9ydGFudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICNsZWZ0LXJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA0MnB4IDtcbiAgfVxuICAubGVmdHtcbiAgICB3aWR0aDogNDJweDtcbiAgfVxuICAuc2VhcmNoLWlucHV0e1xuICAgIGRpc3BsYXk6IG5vbmUgIDtcbiAgfVxuICAuc2VhcmNoLWljb257XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLnVzZXJuYW1le1xuICAgIGRpc3BsYXk6IG5vbmUgO1xuICB9XG4gIC5vcHRpb257XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmNvbW1lbnQtbm90aWZ5e1xuICAgIGRpc3BsYXk6IG5vbmUgO1xuICB9XG4gIC5ub3Rpe1xuICAgIGRpc3BsYXk6IG5vbmUgO1xuICB9XG4gIC5tZXNze1xuICAgIGRpc3BsYXk6IG5vbmUgIDtcbiAgfVxuICAuZHMxdGV4dHtcbiAgICBkaXNwbGF5OiBub25lIDtcbiAgfVxuICAuY291bnR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmRzMnRleHR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmRzM3RleHR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmRzNHRleHR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmRzNXRleHR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmRzNnRleHR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLmRzN3RleHR7XG4gICAgZGlzcGxheTogbm9uZSA7XG4gIH1cbiAgLnBsdXN0ZXh0e1xuICAgIGRpc3BsYXk6IG5vbmUgO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gIC8qIC5taWRkbGV7XG4gICAgICBtYXJnaW4tbGVmdDogNDJweCA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDM2OHB4O1xuICB9ICovXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gIC5oaWRkZW5jbGFzc3tcbiAgICBkaXNwbGF5OmJsb2NrIDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gIC5yaWdodHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudCA7XG4gIH1cbiAgLmxlZnR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubWlkZGxle1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi8qIGxlZnQgKi9cbi5sZWZ0e1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGVmdC10b2dnbGV7XG4gIHdpZHRoOiA0MnB4O1xufVxuLm1pZGRsZS10b2dnbGV7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4ubmF2c2VhcmNoe1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI3YTU5O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubGlzdC10b2dnbGV7XG4gIHBhZGRpbmc6IDEzcHggMTFweCAxMnB4IDExcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuLnNlYXJjaC1pbnB1dHtcbiAgbGVmdDogNTVweDtcbiAgLXdlYmtpdC1hcHAtcmVnaW9uOiBuby1kcmFnO1xuXG4gIHdpZHRoIDogMTk2cHg7XG59XG4uc2VhcmNoLWlucHV0IGlucHV0e1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaC1pY29ue1xuICBwYWRkaW5nOiAxM3B4IDExcHggMTJweCAxMXB4O1xuICBmaWxsOiAjZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiAwcHg7XG59XG4uc2Nyb2xsLWxlZnR7XG4gIGhlaWdodDogODYlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi51c2VydG9vbHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXIgaW1ne1xuICBtYXJnaW4tdG9wIDogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgd2lkdGg6IDMycHg7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXJuYW1le1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMjRweDtcbn1cbi8qIHVzZXJuYW1lIGhvdmVyICovXG4udXNlcm5hbWUtaG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi51bC1zdHlsZXtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWZhMmE2O1xufVxuLnVsLXN0eWxlIGxpe1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi51bDEsLnVsMTB7XG4gIGNvbG9yOiAjYWFhO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLnVsMiwudWw1LC51bDl7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xufVxuLnVsMywudWw2e1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbi51bDI6aG92ZXIsLnVsMzpob3ZlciwudWw0OmhvdmVyLC51bDU6aG92ZXIsLnVsNjpob3ZlciwudWw3OmhvdmVyLC51bDg6aG92ZXIsLnVsOTpob3ZlciwudWwxMTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyOGFkNjtcbiAgY29sb3I6ICNmYWZhZmE7XG59XG4udWwxMTpob3ZlciBhe1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cbi51bDEsLnVsMiwudWwzLC51bDQsLnVsNSwudWw2LC51bDcsLnVsOCwudWw5LC51bDEwLC51bDExe1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuLnVsMTF7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4udWwxMSBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcblxufVxuLyogdXNlcm5hbWUgaG92ZXIgZW5kICovXG4ub3B0aW9ue1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDk1cHg7XG4gIGZpbGw6IGdyZXk7XG59XG4uY29tbWVudC1ub3RpZnl7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmlsbDogYmxhY2s7XG5cbn1cbi5jb21tZW50LW5vdGlmeSBzdmd7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIGNvbW1lbnQtbm90aWZ5IGhvdmVyICovXG4ubm90aS1ob3ZlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTk2cHg7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tbGVmdDogLTEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm5vdGktaG92ZXItdGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMTdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5ub3RpLWhvdmVyLWljb24gc3Zne1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xufVxuLm5vdGktaG92ZXItdGV4dDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYig5MSwgOTEsIDkxKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubm90aS1ob3Zlci10ZXh0M3tcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWVzcy1ob3ZlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTk2cHg7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tbGVmdDogLTE0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi8qIC5tZXNzOmhvdmVyIC5tZXNzLWhvdmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSAqL1xuLm1lc3MtaG92ZXItdGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMTdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tZXNzLWhvdmVyLWljb24gc3Zne1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG59XG4ubWVzcy1ob3Zlci10ZXh0MntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDkxLCA5MSwgOTEpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tZXNzLWhvdmVyLXRleHQze1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIC5jb21tZW50LW5vdGlmeSBob3ZlciBlbmQgKi9cbi5kczF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRzMWljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWxsOiAjMmI4ZGVjO1xufVxuLmRzMXRleHR7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb3VudHtcbiAgcmlnaHQ6IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZHMye1xuICBwYWRkaW5nOiAwcHggOHhwIDB4IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uZHMyIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZHMyOmhvdmVyIC5kczItaG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNlMGVlZmE7XG59XG4uZHMyLWhvdmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHMyaWNvbntcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbGw6ICNiOWI5Yjk7XG59XG4uZHMydGV4dHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRzM3tcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5kczNpY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbDogI2I5YjliOTtcbn1cbi5kczN0ZXh0e1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHM0e1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmRzNGljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWxsOiAjYjliOWI5O1xufVxuLmRzNHRleHR7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kczV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uZHM1aWNvbntcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbGw6ICNiOWI5Yjk7XG59XG4uZHM1dGV4dHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRzNntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5kczZpY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbDogI2I5YjliOTtcbn1cbi5kczZ0ZXh0e1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHM3e1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmRzN2ljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWxsOiAjYjliOWI5O1xufVxuLmRzN3RleHR7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jcmVhdGVsaXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmViZWI7XG59XG4ucGx1c2ljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgZmlsbDogIzMyOGFkNjtcbn1cbi5wbHVzdGV4dHtcbiAgY29sb3I6ICMzMjhhZDY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi8qIHJpZ2h0ICovXG4ucmlnaHR7XG4gIHdpZHRoOiAzNjdweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGl0bGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRldGFpbC1jaGVja3tcbiAgc3Ryb2tlOiByZ2JhKDAsMCwwLDAuMzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogYXV0byA1cHggYXV0byAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbn1cbiNkZXRhaWx0ZXh0e1xuICBwYWRkaW5nOiAwcHggNTBweCAxNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFza19pbnB1dF90ZXh0e1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lIDogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3Rhcmljb257XG4gIGZpbGw6IHJnYmEoMCwwLDAsMC4zKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IC00cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib2R5bGlzdHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MTRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm9wMXtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uc2VjdGlvbi1pY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgZmlsbDogI2I5YjliOTtcbn1cbi5zZWN0aW9uLXRleHR7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOWZhMmE2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgd2lkdGg6IDMyN3B4O1xuXG59XG4uc2VjdGlvbi10ZXh0IGlucHV0e1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm9wMntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4ucmVtaW5kZXItaWNvbntcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGZpbGw6ICNiOWI5Yjk7XG59XG4ucmVtaW5kZXItdGV4dHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM5ZmEyYTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuICB3aWR0aDogMzI3cHg7XG5cbn1cbi5yZW1pbmRlci10ZXh0IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5vcDN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLnBsdXMtY2xue1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGx1cy1jbG4tY3Nze1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5TdWJ0YXNrLWlucHV0QnRue1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFiYyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWJjMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBsdXMtY2xuLWljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YXNrLWNoZWNrcGx1c3tcbiAgc3Ryb2tlOiAjNjdhZTJiO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2stY2hlY2tlZHBsdXMxe1xuICBmaWxsOiByZ2JhKDAsMCwwLDAuMzUpO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsdXMtY2xuLXRleHR7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGx1cy1jbG4tdGV4dC1pbnB1dHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lIDogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi5wbHVzLWNsbi10ZXh0LWlucHV0LW5vbmV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucGx1cy1jbG4tcmVtb3Zle1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbHVzLWNsbjpob3ZlciAucGx1cy1jbG4tcmVtb3Zle1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wbHVzLWljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBmaWxsOiAjYjliOWI5O1xufVxuLnBsdXMtdGV4dHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM5ZmEyYTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuICB3aWR0aDogMzI3cHg7XG59XG4ucGx1cy10ZXh0IGlucHV0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wbHVzLXRleHQgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzlmYTJhNiA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vcDR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubm90ZS1pY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgZmlsbDogI2I5YjliOTtcbn1cbi5ub3RlLXRleHR7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOWZhMmE2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgd2lkdGg6IDMyN3B4O1xufVxuLm5vdGUtdGV4dCBpbnB1dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubm90ZS10ZXh0IGlucHV0OjpwbGFjZWhvbGRlcntcbiAgY29sb3I6ICM5ZmEyYTYgO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZnVsbHNjcmVlbi1pY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGZpbGw6ICM5ZmEyYTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcDV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmlsZS1pY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgZmlsbDogI2I5YjliOTtcbn1cbi5maWxlLWlucHV0e1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzlmYTJhNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gIHdpZHRoOiAyMCU7XG59XG4uaW5wdXQtZmlsZS1oaWRkZW4gaW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG5cbn1cbi5maWxlLW9wdGlvbntcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBmaWxsOiAjOWZhMmE2O1xufVxuLmZpbGUtbGlzdHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbn1cbi5maWxlLWxpc3QtbGF5b3V0LC5maWxlLWxpc3QtbGF5b3V0LWZha2V7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogaW5oZXJpdDtcblxufVxuLmZpbGUtbGlzdC1jb250ZW50e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbn1cbi5maWxlLWxpc3QtY29udGVudC1pY29ue1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmZpbGUtbGlzdC1jb250ZW50LXRleHR7XG4gIG1hcmdpbjogMCAxMHB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uZmlsZS1saXN0LWNvbnRlbnQtdGV4dCBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZmlsZS1saXN0LWNvbnRlbnQtdGV4dC1pbWduYW1le1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmZpbGUtbGlzdC1jb250ZW50LXRleHQtdGltZXtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZpbGUtcmVtb3Zle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDogLTdweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZpbGUtbGlzdC1jb250ZW50OmhvdmVyIC5maWxlLXJlbW92ZXtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmlsZS1saXN0LWNvbnRlbnQtdGV4dC10aW1ldGV4dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMCA2cHg7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNvbW1lbnQsLmNvbW1lbnQtZmFrZXtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZyA6IDBweCA4cHggMHB4IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbW1lbnQtaWNvbntcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cbi5jb21tZW50LWljb24gaW1ne1xuICBtYXJnaW4tdG9wIDogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgd2lkdGg6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb21tZW50LXRleHR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb21tZW50LXRleHQtYXV0aG9ye1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG4uY29tbWVudC10aXRsZS10ZXh0e1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uY29tbWVudC10aXRsZS10ZXh0LW5vbmV7XG4gIGRpc3BsYXk6bm9uZTtcbn1cbi5jb21tZW50LXRpbWV7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY29tbWVudDpob3ZlciAuY29tbWVudC10ZXh0LWljb257XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbW1lbnQtdGV4dC1pY29ue1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbW1lbnQtYWRke1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDAgMTBweDtcblxufVxuLnJpZ2h0LWJvdHRvbXtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaW5wdXQtZmFrZXtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNmQ2ZDY7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRleHRhcmVhIGlucHV0e1xuICBtYXJnaW46IDZweDtcbiAgd2lkdGg6IDUwdmg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pbnB1dC1zdWJtaXQtbm9uZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50ZXh0YXJlYSBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaW5wdXQtZmFrZSB0ZXh0YXJlYXtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogMzMzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5kZXRhaWwtaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5jbG9zZS1pY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZmlsbDogIzI2MjYyNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGV0aW1le1xuICBsZWZ0OiAxMjhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYTNhM2EyO1xuICB3aWR0aDogNjklO1xufVxuLnRyYXNoLWljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGZpbGw6ICMyNjI2MjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIG1pZGRsZSAqL1xuLm1pZGRsZXtcbiAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnRpdGxlQU5EaWNvbntcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY4OTY0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jdGl0bGUtdGV4dHtcbiAgd2lkdGg6IDU2M3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG59XG4uYWN0aW9uQmFye1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbiAgd2lkdGg6IDE1NnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG4uc2hhcmV7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4uc2hhcmUtaWNvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMHB4O1xuICBmaWxsOiAjZmZmO1xuICBvcGFjaXR5OiAwLjU7XG4gIHBhZGRpbmc6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5zaGFyZS10ZXh0e1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zb3J0e1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc29ydC1pY29ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwcHg7XG4gIGZpbGw6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcGFkZGluZzogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnNvcnQtdGV4dHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG59XG4vKiBzb3J0IGhvdmVyICovXG4uc29ydC1ob3ZlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBtYXJnaW4tbGVmdDogLTE0NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY4OTY0O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLyogLnNvcnQ6aG92ZXIgLnNvcnQtaG92ZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59ICovXG4uc29ydC1kczF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5zb3J0LWRzMS1pY29ue1xuICBmaWxsOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG4uc29ydC1kczEtdGV4dHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc29ydC1kczJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5zb3J0LWRzMi1pY29ue1xuICBmaWxsOiAjYjJiMmIyO1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG4uc29ydC1kczItdGV4dHtcbiAgY29sb3IgOiAjYjJiMmIyO1xufVxuLnNvcnQtZHMze1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3cHg7XG59XG4uc29ydC1kczMtaWNvbntcbiAgZmlsbDogI2ZmZjtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLnNvcnQtZHMzLXRleHR7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNvcnQtZHM0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3cHg7XG59XG4uc29ydC1kczQtaWNvbntcbiAgZmlsbDogI2IyYjJiMjtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLnNvcnQtZHM0LXRleHR7XG4gIGNvbG9yOiAjYjJiMmIyO1xufVxuLnNvcnQtZHM1e1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3cHg7XG59XG4uc29ydC1kczUtaWNvbntcbiAgZmlsbDogI2ZmZjtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLnNvcnQtZHM1LXRleHR7XG4gIGNvbG9yOiAjZmZmO1xufVxuLyogc29ydCBob3ZlciBlbmQgKi9cbi5tb3Jle1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9yZS1pY29ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwcHg7XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmc6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5tb3JlLXRleHR7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIG1vcmUgaG92ZXIgKi9cbi5tb3JlLWhvdmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyOTBweDtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTk4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njg5NjQ7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4vKiAubW9yZTpob3ZlciAubW9yZS1ob3ZlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbn0gKi9cbi5tb3JlLWRzMXtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHMxLWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzMS10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3JlLWRzMntcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHMyLWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzMi10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3JlLWRzM3tcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHMzLWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzMy10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3JlLWRzNHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHM0LWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzNC10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3JlLWRzNXtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHM1LWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzNS10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3JlLWRzNntcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHM2LWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzNi10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3JlLWRzN3tcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9yZS1kczctaWNvbntcbiAgZmlsbDogI2IyYjJiMjtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLm1vcmUtZHM3LXRleHQtZW5ke1xuICBjb2xvciA6ICNiMmIyYjI7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tb3JlLWRzNy10ZXh0e1xuICBjb2xvcjogI2IyYjJiMjtcbn1cbi5tb3JlLWRzOHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogN3B4O1xufVxuLm1vcmUtZHM4LWljb257XG4gIGZpbGw6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5tb3JlLWRzOC10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbn1cbi8qIG1vcmUgaG92ZXIgZW5kICovXG4udGFzay1zY3JvbGx7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi50YXNrbGlzdC1ib2R5MjJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG9wYWNpdHk6IC42O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRhc2tsaXN0LWJvZHkyMjJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDRweDtcbn1cbi5hZGR0YXNre1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGhlaWdodDogNDdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDIsMTM3LDEwMCwwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYWRkcGx1c3tcbiAgZmlsbDogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxM3B4IDEycHggMTNweCAxMnB4O1xufVxuLnRvLWRvLWFkZHtcbiAgcGFkZGluZzogMTNweCA2MHB4IDE0cHggMDtcbn1cbi50by1kby1hZGQgaW5wdXR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNTAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG46OnBsYWNlaG9sZGVye1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC41O1xufVxuLnRhc2stbGlzdHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRhc2stbGlzdC1Db21wbGV0ZWR7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi50YXNrLWxpc3QtQ29tcGxldGVkIC50YXNrLWNoZWNrLXRpdGxle1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRhc2tsaXN0LWJvZHl7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3Rhc2tsaXN0LWJvZHk6Zmlyc3QtY2hpbGR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGlzdC1oaWdobGlnaHQtY29sb3J7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGVlZmE7XG59XG4udGFza2xpc3QtaWNvbntcbiAgcGFkZGluZzogMTNweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YXNrbGlzdC1pY29ubntcbiAgcGFkZGluZy1sZWZ0OjEzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2stY2hlY2ssLnRhc2stY2hlY2stdGl0bGV7XG4gIHN0cm9rZTogcmdiYSgwLDAsMCwwLjM1KTtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cbi50YXNrLWNoZWNrZWQxLC50YXNrLWNoZWNrZWQxLXRpdGxle1xuICBmaWxsOiByZ2JhKDAsMCwwLDAuMzUpO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbn1cbi50YXNrbGlzdC10ZXh0e1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB3aWR0aDogODUlO1xufVxuLnRhc2tsaXN0LXN0YXJpY29uLC50YXNrbGlzdC1zdGFyaWNvbi10aXRsZXtcbiAgZmlsbDogcmdiYSgwLDAsMCwwLjMpO1xuICBwYWRkaW5nOiAxM3B4O1xuICByaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YXNrbGlzdC1zdGFyaWNvbi1jaGVjaywudGFza2xpc3Qtc3Rhcmljb24tY2hlY2stdGl0bGV7XG4gIGZpbGw6ICNkNzRlNDg7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbn1cbi8qIHBo4bqnbiBjaHXhu5l0IHBo4bqjaSB2w6BvIHRoYW5oIHRhc2tsaXN0LWJvZHkgKi9cbi50YXNrbGlzdC1tZW51e1xuICB3aWR0aDogMjE1LjgzcHg7XG4gIGhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG59XG4uVExtZW51MSwgLlRMbWVudTIsIC5UTG1lbnUzLCAuVExtZW51NCwgLlRMbWVudTUsIC5UTG1lbnU2LCAuVExtZW51NywgLlRMbWVudTgsIC5UTG1lbnU5LCAuVExtZW51MTAsIC5UTG1lbnUxMXtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uVExtZW51MTpob3Zlciw6aG92ZXIgLlRMbWVudTI6aG92ZXIsIC5UTG1lbnUzOmhvdmVyLCAuVExtZW51NDpob3ZlciwgLlRMbWVudTU6aG92ZXIsIC5UTG1lbnU2OmhvdmVyLCAuVExtZW51Nzpob3ZlciwgLlRMbWVudTg6aG92ZXIsIC5UTG1lbnU5OmhvdmVyLCAuVExtZW51MTA6aG92ZXIsIC5UTG1lbnUxMTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZDhkODtcbn1cbi5UTG1lbnUtaWNvbntcbiAgcGFkZGluZzogNHB4O1xuICBmaWxsOiAjNzM3MjcyO1xufVxuLnRsbWVudTctaWNvbntcbiAgc3Ryb2tlOiAjNzM3MjcyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLlRMbWVudS10ZXh0e1xuICBjb2xvcjogIzI2MjYyNjtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaWNvbm5ue1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5UTG1lbnUtaWNvbi1yaWdodHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLlRsbWVudS10ZXh0LWhvdmVye1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxODVweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGV4dC1tb3ZlLXRvZG97XG4gIHBhZGRpbmc6IDhweDtcbn1cbi50ZXh0LW1vdmUtdG9kbzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZDhkODtcbn1cbi5UTG1lbnU3OmhvdmVyIC5UbG1lbnUtdGV4dC1ob3ZlcntcbiAgZGlzcGxheTogYmxvY2s7XG59XG4vKiBr4bq/dCB0aMO6YyBwaOG6p24gY2h14buZdCBwaOG6o2kgdGFza2xpc3QtYm9keSAqL1xuLnRvLWRvc3tcblxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgaGVpZ2h0OiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNob3d7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAyLDEzNywxMDAsMC43NSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnRvLWRvcy10ZXh0e1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9we1xuICBvcGFjaXR5OiAwLjY7XG59XG4udGFzay1kZWxldGVkLWhvdmVye1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTtcbn1cbi50YXNrLWRlbGV0ZWQtaG92ZXIgLnRhc2stY2hlY2t7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGFzay1kZWxldGVkLWhvdmVyIC50YXNrLWNoZWNrLXRpdGxle1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRhc2stZGVsZXRlZC1ob3ZlciAudGFzay1jaGVja2VkMXtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGFzay1kZWxldGVkLWhvdmVyIC50YXNrLWNoZWNrZWQxLXRpdGxle1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50YXNrLWRlbGV0ZWQtaWNvbntcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2stZGVsZXRlZC1ob3ZlcntcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udGFzay1kZWxldGVkLXRleHQxe1xuICBwYWRkaW5nOiAxM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgLyp0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsqL1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiA3NyU7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgbGVmdDogNDlweDtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG4udGFzay1kZWxldGVkLXRleHQyLCAudGFzay1kZWxldGVkLXRleHQyMntcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnRhc2stZGVsZXRlZC10ZXh0MjJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGFzay1kZWxldGVkLXRleHR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4udGFzay1kZWxldGVkLXN0YXJpY29ue1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiByZ2JhKDAsMCwwLDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogLjY7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG4vKiBjaHXhu5l0IHBo4bqjaSBwaOG6p24gLnRhc2stZGVsZXRlZC1ob3ZlciAqL1xuLnRhc2stZGVsZXRlZC1ob3Zlci1jb250ZXh0bWVudXtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxODZweDtcbiAgLyogei1pbmRleDogMjsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLlREbWVudTEsLlREbWVudTIsLlREbWVudTMsLlREbWVudTQsLlREbWVudTV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5URG1lbnUxOmhvdmVyLC5URG1lbnUyOmhvdmVyLC5URG1lbnUzOmhvdmVyLC5URG1lbnU0OmhvdmVyLC5URG1lbnU1OmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xufVxuLlREbWVudS1pY29ue1xuICBmaWxsOiAjNzM3MjcyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG4uVERtZW51LXRleHR7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xufVxuLlREbWVudS1ib3JkZXJ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGRmO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLyoga+G6v3QgdGjDumMgcGjhuqduIGNodeG7mXQgcGjhuqNpIHBo4bqnbiAudGFzay1kZWxldGVkLWhvdmVyICovXG4vKiAudG8tZG9zOmhvdmVyIC50YXNrLWRlbGV0ZWQtaG92ZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59ICovXG4vKiBhY2NvdW50ICovXG4uYWNjb3VudHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDo4MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogMCAxcHggMjVweCByZ2JhKDAsMCwwLDAuMiksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogbm9uZTtcblxuXG59XG4vKiBhY2NvdW50IGxlZnQgKi9cbi5hY2NvdW50LWxlZnR7XG4gIHdpZHRoOiAxMzEuOHB4O1xuICBoZWlnaHQ6IDQ1M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZGY7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkhlbHZldGljYVwiLFwiQXJpYWxcIixzYW5zLXNlcmlmO1xufVxuLmFjY291bnQtbGVmdC1kczF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY2NvdW50LWxlZnQtZHMxLWljb24gaW1ne1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uYWNjb3VudC1sZWZ0LWRzMS10ZXh0e1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5hY2NvdW50LWxlZnQtZHMye1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWNjb3VudC1sZWZ0LWRzMi1pY29uIGltZ3tcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmFjY291bnQtbGVmdC1kczItdGV4dHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uYWNjb3VudC1sZWZ0LWRzM3tcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjY291bnQtbGVmdC1kczMtaWNvbiBpbWd7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5hY2NvdW50LWxlZnQtZHMzLXRleHR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufS5hY2NvdW50LWxlZnQtZHM0e1xuICAgZGlzcGxheTogZmxleDtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4uYWNjb3VudC1sZWZ0LWRzNC1pY29uIGltZ3tcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmFjY291bnQtbGVmdC1kczQtdGV4dHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uYWNjb3VudC1sZWZ0LWRzNXtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjY291bnQtbGVmdC1kczUtaWNvbiBpbWd7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5hY2NvdW50LWxlZnQtZHM1LXRleHR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmFjY291bnQtbGVmdC1kczZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY2NvdW50LWxlZnQtZHM2LWljb24gaW1ne1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uYWNjb3VudC1sZWZ0LWRzNi10ZXh0e1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi8qIGFjY291bnQgbGVmdCBlbmQgKi9cbi8qIGFjY291bnQgcmlnaHQgICovXG4uYWNjb3VudC1yaWdodHtcbiAgd2lkdGg6IDU0OC4ycHg7XG4gIGhlaWdodDogNDUzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwcHggMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbn1cbi5hY2NvdW50LXJpZ2h0LWljb25Vc2Vye1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5hY2NvdW50LXJpZ2h0LWljb25Vc2VyIGltZ3tcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMjEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hY2NvdW50LXJpZ2h0LW5hbWVJbnB1dHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTRweCAxMzBweDtcbn1cbi5hY2NvdW50LXJpZ2h0LW5hbWVJbnB1dC10ZXh0e1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLmFjY291bnQtcmlnaHQtbmFtZUlucHV0LWlucHV0IGlucHV0e1xuICB3aWR0aDogMzU4Ljc3cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcbiAgcGFkZGluZzogNnB4O1xufVxuLmFjY291bnQtcmlnaHQtbmFtZUlucHV0LWlucHV0IGlucHV0OjpwbGFjZWhvbGRlcntcbiAgY29sb3I6ICMyNjI2MjY7XG59XG4uYWNjb3VudC1yaWdodC1lbWFpbElucHV0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggMTMwcHggMTRweCAxMzJweDtcbn1cbi5hY2NvdW50LXJpZ2h0LWVtYWlsSW5wdXQtdGV4dHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5hY2NvdW50LXJpZ2h0LWVtYWlsSW5wdXQtaW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAyMDUuMjhweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDZkNmQ2O1xuICBwYWRkaW5nOiA2cHg7XG59XG4uYWNjb3VudC1yaWdodC1lbWFpbElucHV0LWlucHV0IGlucHV0OjpwbGFjZWhvbGRlcntcbiAgY29sb3I6ICMyNjI2MjY7XG59XG4uYWNjb3VudC1yaWdodC1lbWFpbEJ1dHRvbi1pbnB1dHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmFjY291bnQtcmlnaHQtZW1haWxCdXR0b24taW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAxMzdweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmFjY291bnQtcmlnaHQtbGlua3tcbiAgY29sb3I6ICMzMjhhZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmc6IDBweCAxNzBweCAxNHB4IDE4MHB4O1xufVxuLmFjY291bnQtcmlnaHQtcGFzc0lucHV0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggMTMwcHggMTRweCAxMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG59XG4uYWNjb3VudC1yaWdodC1wYXNzSW5wdXQtdGV4dHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFjY291bnQtcmlnaHQtcGFzc0lucHV0LWlucHV0IGlucHV0e1xuICB3aWR0aDogMjE3LjI3cHg7XG4gIGhlaWdodDogMjlweDtcbiAgY29sb3I6ICM3MzcyNzI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDZkNmQ2O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5hY2NvdW50LXJpZ2h0LWJhY2t1cElucHV0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDY3cHg7XG59XG4uYWNjb3VudC1yaWdodC1iYWNrdXBJbnB1dC10ZXh0e1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFjY291bnQtcmlnaHQtYmFja3VwQnV0dG9uMS1pbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nLWxlZnQgOiAxNnB4O1xufVxuLmFjY291bnQtcmlnaHQtYmFja3VwQnV0dG9uMS1pbnB1dCBpbnB1dHtcbiAgd2lkdGg6IDE3Ny44NnB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDZkNmQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodC1iYWNrdXBCdXR0b24yLWlucHV0e1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5hY2NvdW50LXJpZ2h0LWJhY2t1cEJ1dHRvbjItaW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAxNjYuOTFweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmFjY291bnQtcmlnaHQtYmFja3VwVGV4dHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTAuOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMTgwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLmFjY291bnQtcmlnaHQtZ29vZ2xlSW5wdXR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTMwcHggMTRweCAxMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG59XG4uYWNjb3VudC1yaWdodC1nb29nbGVJbnB1dC10ZXh0e1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFjY291bnQtcmlnaHQtZ29vZ2xlSW5wdXQtaW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAyMDUuMjhweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmFjY291bnQtcmlnaHQtZmFjZWJvb2tJbnB1dHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAxMzBweCAxNHB4IDExMnB4O1xufVxuLmFjY291bnQtcmlnaHQtZmFjZWJvb2tJbnB1dC10ZXh0e1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFjY291bnQtcmlnaHQtZmFjZWJvb2tJbnB1dC1pbnB1dCBpbnB1dHtcbiAgd2lkdGg6IDIwNS4yOHB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDZkNmQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodC1mYWNlYm9va05vdGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5hY2NvdW50LXJpZ2h0LWZhY2Vib29rTm90ZS1pY29uIGltZ3tcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5hY2NvdW50LXJpZ2h0LWZhY2Vib29rTm90ZS10ZXh0e1xuICBwYWRkaW5nOiAwcHggN3B4O1xuICBmb250LXNpemU6IDEwLjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xufVxuLmFjY291bnQtcmlnaHRDYWxlbmRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xufVxuLmFjY291bnQtcmlnaHRDYWxlbmRlci10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmFjY291bnQtcmlnaHRDYWxlbmRlci1pbnB1dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogNjclO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xufVxuLmFjY291bnQtcmlnaHRDYWxlbmRlci1pbnB1dCBpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMThweDtcbiAgcGFkZGluZzogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNmQ2ZDY7XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5hY2NvdW50LXJpZ2h0Q2FsZW5kZXItaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzI2MjYyNjtcbiAgb3BhY2l0eTogMTtcbn1cbi5hY2NvdW50LXJpZ2h0Q2FsZW5kZXItbm90ZTF7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTAuOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG4uYWNjb3VudC1yaWdodENhbGVuZGVyLW5vdGUye1xuICBjb2xvcjogIzMyOGFkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMC44cHg7XG4gIHBhZGRpbmctbGVmdDogMTkwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5hY2NvdW50LXJpZ2h0LWRlbEJ1dHRvbntcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxOTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uYWNjb3VudC1yaWdodC1kZWxCdXR0b24gaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzRlNDg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4vKiBhY2NvdW50IHJpZ2h0IGVuZCAqL1xuLyogYWNjb3VudCByaWdodCAyICovXG4uYWNjb3VudC1yaWdodDJ7XG4gIHdpZHRoOiA1NDguMnB4O1xuICBoZWlnaHQ6IDQ1M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkhlbHZldGljYVwiLFwiQXJpYWxcIixzYW5zLXNlcmlmO1xufVxuLmFjY291bnQtcmlnaHQyLUxhbmd1YWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI3MHB4O1xufVxuLmFjY291bnQtcmlnaHQtbGFuZ3VhZ2UtdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLmFjY291bnQtcmlnaHQtbGFuZ3VhZ2Utc2VsZWN0e1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5hY2NvdW50LXJpZ2h0LWxhbmd1YWdlLXNlbGVjdCBzZWxlY3R7XG4gIHdpZHRoOiAxMzlweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBwYWRkaW5nOiA4cHggMjZweCA4cHggOHB4O1xufVxuLmFjY291bnQtcmlnaHQyLWRhdGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMjU1cHg7XG59XG4uYWNjb3VudC1yaWdodDItZGF0ZS10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG4uYWNjb3VudC1yaWdodDItZGF0ZS1zZWxlY3R7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG4uYWNjb3VudC1yaWdodDItZGF0ZS1zZWxlY3Qgc2VsZWN0e1xuICB3aWR0aDogMTM5cHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcGFkZGluZzogOHB4IDI2cHggOHB4IDhweDtcbn1cbi5hY29vdW50LXJpZ2h0Mi1yYWRpb2J0bntcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAzNDVweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uYWNjb3VudC1yaWdodDItcmFkaW9idG4xe1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFjY291bnQtcmlnaHQyLXJhZGlvYnRuMS1idG4gaW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uYWNjb3VudC1yaWdodDItcmFkaW9idG4xLXRleHR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1yYWRpb2J0bjJ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWNjb3VudC1yaWdodDItcmFkaW9idG4yLWJ0biBpbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1yYWRpb2J0bjItdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmFjY291bnQtcmlnaHQyLVN0YXJ0b2ZXe1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uYWNjb3VudC1yaWdodDItU3RhcnRvZlctdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLmFjY291bnQtcmlnaHQyLVN0YXJ0b2ZXLXNlbGVjdHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1TdGFydG9mVy1zZWxlY3Qgc2VsZWN0e1xuICB3aWR0aDogODdweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBwYWRkaW5nOiA4cHggMHB4IDZweCA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItZW5hYmxlU291bmQxe1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDEyNXB4O1xufVxuLmFjY291bnQtcmlnaHQyLWVuYWJsZVNvdW5kMS10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodDItZW5hYmxlU291bmQxLWlucHV0e1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1lbmFibGVTb3VuZDEtaW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmFjY291bnQtcmlnaHQyLWVuYWJsZVNvdW5kMntcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxNDNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmFjY291bnQtcmlnaHQyLWVuYWJsZVNvdW5kMi10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodDItZW5hYmxlU291bmQyLWlucHV0e1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1lbmFibGVTb3VuZDItaW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmFjY291bnQtcmlnaHQyLUFkZHRvZG9ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI2NXB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1BZGR0b2Rvcy10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG4uYWNjb3VudC1yaWdodDItQWRkdG9kb3Mtc2VsZWN0e1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuLmFjY291bnQtcmlnaHQyLUFkZHRvZG9zLXNlbGVjdCBzZWxlY3R7XG4gIHdpZHRoOiAxMTRweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBwYWRkaW5nOiA4cHggMHB4IDZweCA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItY29uZmlybXtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uYWNjb3VudC1yaWdodDItY29uZmlybS10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodDItY29uZmlybS1pbnB1dHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItY29uZmlybS1pbnB1dCBpbnB1dHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MzcyNzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYWNjb3VudC1yaWdodDItc3Rhcm1vdmV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMjA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1zdGFybW92ZS10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodDItc3Rhcm1vdmUtaW5wdXR7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmFjY291bnQtcmlnaHQyLXN0YXJtb3ZlLWlucHV0IGlucHV0e1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1zbWFydGR1ZWRhdGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMjA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1zbWFydGR1ZWRhdGUtdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmFjY291bnQtcmlnaHQyLXNtYXJ0ZHVlZGF0ZS1pbnB1dHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItc21hcnRkdWVkYXRlLWlucHV0IGlucHV0e1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1yZW1vdmVkdWVkYXRle1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1yZW1vdmVkdWVkYXRlLXRleHR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1yZW1vdmVkdWVkYXRlLWlucHV0e1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1yZW1vdmVkdWVkYXRlLWlucHV0IGlucHV0e1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1hdXRvcmVtaW5kZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMjEzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1hdXRvcmVtaW5kZXItdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmFjY291bnQtcmlnaHQyLWF1dG9yZW1pbmRlci1pbnB1dHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItYXV0b3JlbWluZGVyLWlucHV0IGlucHV0e1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1wcmludHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAyMTNweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1wcmludC10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodDItcHJpbnQtaW5wdXR7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmFjY291bnQtcmlnaHQyLXByaW50LWlucHV0IGlucHV0e1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1zaG93e1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE0OHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59XG4uYWNjb3VudC1yaWdodDItc2hvdy10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uYWNjb3VudC1yaWdodDItc2hvdy1pbnB1dHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItc2hvdy1pbnB1dCBpbnB1dHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MzcyNzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYWNjb3VudC1yaWdodDItY29udGV4dG1lbnV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMjIxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmFjY291bnQtcmlnaHQyLWNvbnRleHRtZW51LXRleHR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cbi5hY2NvdW50LXJpZ2h0Mi1jb250ZXh0bWVudS1pbnB1dHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYWNjb3VudC1yaWdodDItY29udGV4dG1lbnUtaW5wdXQgaW5wdXR7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLyogYWNjb3VudCByaWdodCAyIGVuZCAqL1xuLmFjY291bnQtZm9vdGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZm9vdGVyLWJ1dHRvbntcbiAgbWFyZ2luOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uZm9vdGVyLWJ1dHRvbiBpbnB1dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyOGFkNjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBhY2NvdW50IGVuZCAqL1xuLyogbGF5b3V0IHBo4bulIGPhu6dhIC5jcmVhdGVsaXN0ICovXG4uZWRpdGxpc3QtbGF5b3V0LWZhdGhlciwgLmNyZWF0ZWxpc3QtbGF5b3V0LWZhdGhlcntcblxufVxuLmNyZWF0ZWxpc3QtbGF5b3V0LWJnLCAuY3JlYXRlbGlzdC1sYXlvdXQtYmcxe1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwOTk7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uY3JlYXRlbGlzdC1sYXlvdXQgLC5jcmVhdGVsaXN0LWxheW91dDF7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzkycHg7XG4gIGhlaWdodDogMjk4cHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTA5OTtcbn1cblxuLmxheW91dC1oZWFkZXJ7XG4gIHBhZGRpbmc6IDE0cHggMTRweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubGF5b3V0LWhlYWRlci1pbnB1dCBpbnB1dHtcbiAgcGFkZGluZzogOXB4IDEwcHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNmQ2ZDY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5sYXlvdXQtaGVhZGVyLWhlYWRlcnRleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiR2VuZXZhIENZXCIsXCJMdWNpZGEgR3JhbmRlXCIsXCJBcmlhbCBVbmljb2RlIE1TXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmxheW91dC1oZWFkZXItaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzI2MjYyNjtcbn1cbi5sYXlvdXQtaGVhZGVyLW9wdGlvbnRleHR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcbn1cbi5sYXlvdXQtaGVhZGVyLXRleHR0e1xuICBwYWRkaW5nOiAxOHB4IDRweCA0cHggNHB4O1xufVxuI2xheW91dC1oZWFkZXItb3B0aW9udGV4dDJ7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcblxufVxuXG4ubGF5b3V0LWhlYWRlci1vcHRpb250ZXh0MntcbiAgY29sb3I6ICM3MzcyNzI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGRmO1xufVxuLmxheW91dC1oZWFkZXItaW5wdXRmYWtle1xuICBwYWRkaW5nOiA5cHggMTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGF5b3V0LWhlYWRlci1pbnB1dGZha2UtaWNvbntcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGZpbGw6ICM3MzcyNzI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5sYXlvdXQtaGVhZGVyLWlucHV0ZmFrZS1pbnB1dCBpbnB1dHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubGF5b3V0LWhlYWRlci1pbnB1dGZha2UtaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzI2MjYyNjtcbn1cbi8qIHRhYiBsaXN0IG1lbWJlciAqL1xuLmxheW91dC1tZW1iZXJ7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGF5b3V0LW1lbWJlci1jb250ZW50e1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxheW91dC1tZW1iZXItY29udGVudC1pY29uIGltZ3tcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5sYXlvdXQtbWVtYmVyLWNvbnRlbnQtaWNvbntcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbi5sYXlvdXQtbWVtYmVyLWNvbnRlbnQtdGV4dHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE3cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubGF5b3V0LW1lbWJlci1jb250ZW50LXRleHRUb3B7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCI7XG5cbn1cbi5sYXlvdXQtbWVtYmVyLWNvbnRlbnQtdGV4dFRvcC1pY29ue1xuICBtYXJnaW46IDAgNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1jb2xvcjogIzMyOGFkNjtcbn1cbi5sYXlvdXQtbWVtYmVyLWNvbnRlbnQtdGV4dFRvcC1pY29ubntcbiAgY29sb3I6ICMxZjdiY2M7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsaW5lLWhlaWdodDogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sYXlvdXQtbWVtYmVyLWNvbnRlbnQtdGV4dEJvdHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzczNzI3MjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogZGVmYXVsdDtmb250LWZhbWlseTogXCJMYXRvXCIsXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCI7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4vKiBlbmQgdGFibGlzdCBtZW1iZXIgKi9cbi8qIHRhYiBvcHRpb24gKi9cbi5sYXlvdXQtdGFiT3B0aW9ue1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sYXlvdXQtdGFiT3B0aW9uLWNvbnRlbnR7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGF5b3V0LXRhYk9wdGlvbi1jaGVja2JveHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNmQ2ZDY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHJnYig4NCwgODQsIDg0KTtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxheW91dC10YWJPcHRpb24tY2hlY2tib3ggaW5wdXR7XG4gIGNvbG9yOiByZ2IoODQsIDg0LCA4NCk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZGlzcGxheTogbm9uZTtcblxufVxuLmxheW91dC10YWJPcHRpb24tdGV4dHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCI7XG5cbn1cbi8qIGVuZCB0YWIgb3B0aW9uICovXG4vKiBsYXlvdXQtZm9vdGVyICovXG4ubGF5b3V0LWZvb3RlcntcbiAgcGFkZGluZzogMTJweDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtmb250LWZhbWlseTogXCJMYXRvXCIsXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubGF5b3V0LWZvb3Rlci1vcHRpb257XG4gIG1hcmdpbi1sZWZ0OiAtNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHg7XG5cbn1cbi5sYXlvdXQtZm9vdGVyLWNvbHN7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGF5b3V0LWZvb3Rlci1jb2xzMntcbiAgd2lkdGg6IDEwMnB4O1xuICBwYWRkaW5nOiAwIDZweCA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAxNzBweDtcbn1cbi5sYXlvdXQtZm9vdGVyLWNvbHMze1xuICB3aWR0aDogMTE0cHg7XG4gIHBhZGRpbmc6IDAgNnB4IDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxufVxuLmxheW91dC1mb290ZXItY29sczIgYnV0dG9ue1xuICBjb2xvcjogIzczNzI3MjtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNmQ2ZDY7XG59XG4ubGF5b3V0LWZvb3Rlci1jb2xzMyBpbnB1dHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMzMjhhZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjhhZDY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bkZvb3RlcntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmxheW91dC1mb290ZXItY29sczMze1xuICB3aWR0aDogMTE0cHg7XG4gIHBhZGRpbmc6IDAgNnB4IDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5sYXlvdXQtZm9vdGVyLWNvbHMzMyBpbnB1dHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMzMjhhZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjhhZDY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLyogZW5kIGxheW91dC1mb290ZXIgKi9cbi8qIGVuZCBsYXlvdXQgcGjhu6UgY+G7p2EgLmNyZWF0ZWxpc3QgKi9cbi8qIGNvbnRleHQgbWVudSBjaG8gbWVudSB0csOhaSAqL1xuLmxlZnQtY29udGV4dG1lbnV7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHotaW5kZXg6IDI7XG59XG4uTEMxLC5MQzIsLkxDMywuTEM0LC5MQzUsLkxDNiwuTEM3LC5MQzh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5MQzE6aG92ZXIsLkxDMjpob3ZlciwuTEMzOmhvdmVyLC5MQzQ6aG92ZXIsLkxDNTpob3ZlciwuTEM2OmhvdmVyLC5MQzc6aG92ZXIsLkxDODpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZDhkODtcbn1cbi5MQy1pY29ue1xuICBmaWxsOiAjNzM3MjcyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5MQy10ZXh0e1xuICBwYWRkaW5nOiA4cHg7XG59XG4uTEMxLC5MQzQsLkxDNntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZGY7XG59XG4vKiBlbmQgY29udGV4dCBtZW51IGxlZnQgKi9cbi8qIGNvbnRleHRtZW51IGNobyBsZWZ0IGluYm94ICovXG4ubGVmdC1jb250ZXh0bWVudS1pbmJveHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDY4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMjtcbn1cbi5MQ0kxLC5MQ0kye1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uTENJMTpob3ZlciwuTENJMjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZDhkODtcbn1cbi5MQ0ktaWNvbntcbiAgZmlsbDogIzczNzI3MjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uTENJLXRleHR7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi8qIGVuZCBjb250ZXh0bWVudSBjaG8gbGVmdCBpbmJveCAqL1xuLyogZGVsZXRlIGxheW91dCAqL1xuLmRlbGV0ZS1sYXlvdXQsIC5kZWxldGUtbGF5b3V0MSwgLmRlbGV0ZS1sYXlvdXQyLCAuZGVsZXRlLWxheW91dDMsIC5kZWxldGUtbGF5b3V0NHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uZGVsZXRlLWxheW91dDV7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5kZWxldGUtbGF5b3V0LWJhY2tncm91bmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTA5OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcbn1cbi5kZWxldGUtbGF5b3V0LWNvbnRlbnR7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDI1cHggcmdiYSgwLDAsMCwwLjIpLCAwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMzkycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICB6LWluZGV4OiAxMDk5O1xuXG59XG4uZGVsZXRlLWxheW91dC1jb250ZW50MXtcbiAgcGFkZGluZzogMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiR2VuZXZhIENZXCIsXCJMdWNpZGEgR3JhbmRlXCIsXCJBcmlhbCBVbmljb2RlIE1TXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBkZjtcbn1cbi5kZWxldGUtbGF5b3V0LWNvbnRlbnQxLWljb257XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXBwLnBuZ1wiKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTNweCAwO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uZGVsZXRlLWxheW91dC1jb250ZW50MS10ZXh0e1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjc1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZWxldGUtbGF5b3V0LWNvbnRlbnQxLXRleHQye1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmRlbGV0ZS1sYXlvdXQtY29udGVudDJ7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uZGVsZXRlLWxheW91dC1jb250ZW50Mi1pbnB1dHtcbiAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5kZWxldGUtbGF5b3V0LWNvbnRlbnQyLWlucHV0dHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZzogMCA2cHggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5kZWxldGUtbGF5b3V0LWNvbnRlbnQyLWlucHV0dC1ub25lXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnV0dG9uLWRlbGV0ZXtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxvYXQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNzM3MjcyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDZkNmQ2O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5CRDF7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG4uQkQye1xuICBiYWNrZ3JvdW5kOiAjMzI4YWQ2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi8qIGVuZCBkZWxldGUgbGF5b3V0ICovXG4uZHVlZGF0ZXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDVweDtcbiAgdG9wOiAxN3B4O1xufVxuLm9uZHVlZGF0ZVxue1xuICBjb2xvcjogIzMyOGFkNjtcbn1cbi5vdmVyX2R1ZWRhdGVcbntcbiAgY29sb3I6I2IzMzEyZDtcbn1cbi5yZW1pbmRlcjF7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJlbWluZGVyX2ljb24gaW1ne1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmVtaW5kZXJfbWVzc2FnZXtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgY29sb3I6ICMxZTFlMWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuLnJlbWluZGVyX21lc3NhZ2UyIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYig2MywgNjMsIDYzKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZW1pbmRlcl9tZXNzYWdlM3tcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pZC1saXN0LW5vbmUsLnRvLWRvLWFkZC1ub25lLC50YXNrbGlzdC1hbGwtZmFrZSwuZHMyLWZha2UsLnRhc2stbGlzdC1Db21wbGV0ZWQtZmFrZSwuc3Rhci1ub25lLC5wbHVzLWNsbi1mYXRoZXItZmFrZSwuY29tbWVudC1mYXRoZXItZmFrZSwuZmlsZS1saXN0LWZha2V7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbn1cbi5kZWxldGUtbGF5b3V0LWNvbnRlbnQxLXRleHQxe1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbn1cbi8qLmRzMjpmaXJzdC1jaGlsZHsqL1xuLyogIGRpc3BsYXk6IG5vbmU7Ki9cbi8qfSovXG4uYmxvY2t7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5vbmV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uei0xe1xuICB6LWluZGV4OiAtMTtcbn1cbi5zdGF0dXMtZmF0aGVye1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxpbmUtdGhyb3VnaHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi8qIC5yZW1pbmRlcjE6Zmlyc3QtY2hpbGR7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSAqL1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.directive.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.directive.ts ***!
    \****************************************/

  /*! exports provided: HomeDirective */

  /***/
  function srcAppHomeHomeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDirective", function () {
      return HomeDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeDirective =
    /*#__PURE__*/
    function () {
      function HomeDirective(elementRef) {
        _classCallCheck(this, HomeDirective);

        this.elementRef = elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HomeDirective, [{
        key: "onClick",
        value: function onClick(target) {
          var clickedInside = this.elementRef.nativeElement.contains(target);

          if (!clickedInside) {
            this.clickOutside.emit();
          }
        }
      }]);

      return HomeDirective;
    }();

    HomeDirective.ɵfac = function HomeDirective_Factory(t) {
      return new (t || HomeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    HomeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HomeDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function HomeDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[clickOutside]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event.target']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.service.ts":
  /*!**************************************!*\
    !*** ./src/app/home/home.service.ts ***!
    \**************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppHomeHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HomeService =
    /*#__PURE__*/
    function () {
      function HomeService(http) {
        _classCallCheck(this, HomeService);

        this.http = http;
      } // list api


      _createClass(HomeService, [{
        key: "showListByUser",
        value: function showListByUser(user_id) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('user_id', user_id);
          return this.http.get('http://localhost:8080/list/getListByUserID', {
            params: params
          });
        }
      }, {
        key: "addList",
        value: function addList(list, user_id) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('user_id', user_id);
          return this.http.post('http://localhost:8080/list/add', list, {
            params: params
          });
        }
      }, {
        key: "editListByID",
        value: function editListByID(list, id_list) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_list);
          return this.http.put('http://localhost:8080/list/update', list, {
            params: params
          });
        }
      }, {
        key: "deleteListByID",
        value: function deleteListByID(id_list) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_list);
          return this.http["delete"]('http://localhost:8080/list/delete', {
            params: params
          });
        } // task api

      }, {
        key: "showTaskByList",
        value: function showTaskByList(id_list, status) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('list_id', id_list);
          params = params.append('status', status);
          return this.http.get('http://localhost:8080/task/getTaskByListID', {
            params: params
          });
        }
      }, {
        key: "showTaskDetail",
        value: function showTaskDetail(id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_task);
          return this.http.get('http://localhost:8080/task/showTaskDetail', {
            params: params
          });
        }
      }, {
        key: "changeTaskStatus",
        value: function changeTaskStatus(task, status, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('status', status);
          params = params.append('id', id_task);
          return this.http.put('http://localhost:8080/task/changeTaskStatus', task, {
            params: params
          });
        }
      }, {
        key: "changeTaskStar",
        value: function changeTaskStar(task, star, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('star', star);
          params = params.append('id', id_task);
          return this.http.put('http://localhost:8080/task/changeTaskStar', task, {
            params: params
          });
        }
      }, {
        key: "addTaskByList",
        value: function addTaskByList(task, list_id) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('list_id', list_id);
          return this.http.post('http://localhost:8080/task/add', task, {
            params: params
          });
        }
      }, {
        key: "editTaskByID",
        value: function editTaskByID(task, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_task);
          return this.http.put('http://localhost:8080/task/update', task, {
            params: params
          });
        }
      }, {
        key: "deleteTaskByID",
        value: function deleteTaskByID(id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_task);
          return this.http["delete"]('http://localhost:8080/task/delete', {
            params: params
          });
        }
      }, {
        key: "updateDateByID",
        value: function updateDateByID(task, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_task);
          return this.http.put('http://localhost:8080/task/updateDuedate', task, {
            params: params
          });
        }
      }, {
        key: "updateReminderByID",
        value: function updateReminderByID(task, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_task);
          return this.http.put('http://localhost:8080/task/updateReminder', task, {
            params: params
          });
        } // subTask api

      }, {
        key: "showSubTaskByTaskID",
        value: function showSubTaskByTaskID(id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id_task', id_task);
          return this.http.get('http://localhost:8080/subtask/getSubTaskByTaskID', {
            params: params
          });
        }
      }, {
        key: "addSubTaskByTask",
        value: function addSubTaskByTask(subtask, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('task_id', id_task);
          return this.http.post('http://localhost:8080/subtask/add', subtask, {
            params: params
          });
        }
      }, {
        key: "editSubTaskByID",
        value: function editSubTaskByID(subTask, id_subTask) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_subTask);
          return this.http.put('http://localhost:8080/subTask/update', subTask, {
            params: params
          });
        }
      }, {
        key: "changeSubTaskStatus",
        value: function changeSubTaskStatus(subtask, id_subTask, status) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('status', status);
          params = params.append('id', id_subTask);
          return this.http.put('http://localhost:8080/subTask/changeTaskStatus', subtask, {
            params: params
          });
        }
      }, {
        key: "deleteSubTaskByID",
        value: function deleteSubTaskByID(id_subTask) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_subTask);
          return this.http["delete"]('http://localhost:8080/subTask/delete', {
            params: params
          });
        } // comment api

      }, {
        key: "showCommentByTaskID",
        value: function showCommentByTaskID(id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id_task', id_task);
          return this.http.get('http://localhost:8080/comment/showComment', {
            params: params
          });
        }
      }, {
        key: "addCommentByTaskID",
        value: function addCommentByTaskID(comment, id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id_task', id_task);
          return this.http.post('http://localhost:8080/comment/add', comment, {
            params: params
          });
        }
      }, {
        key: "deleteCommentByID",
        value: function deleteCommentByID(id_comment) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_comment);
          return this.http["delete"]('http://localhost:8080/comment/delete', {
            params: params
          });
        } // file api

      }, {
        key: "showFileByTaskID",
        value: function showFileByTaskID(id_task) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('task_id', id_task);
          return this.http.get('http://localhost:8080/file/showFilebyTaskID', {
            params: params
          });
        }
      }, {
        key: "addFileByTaskID",
        value: function addFileByTaskID(file, id_task, formData) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('task_id', id_task);
          return this.http.post('http://localhost:8080/uploadOneFile', formData, {
            params: params
          });
        }
      }, {
        key: "deleteFileByID",
        value: function deleteFileByID(id_file) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', id_file);
          return this.http["delete"]('http://localhost:8080/file/delete', {
            params: params
          });
        }
      }]);

      return HomeService;
    }();

    HomeService.ɵfac = function HomeService_Factory(t) {
      return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeService,
      factory: HomeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loginService, route, router) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.route = route;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this30 = this;

          this.loginService.getUser(this.user).subscribe(function (success) {
            if (success == null) {
              alert("Invalid Username or Password");
              _this30.user.username = '';
              _this30.user.password = '';
            } else {
              alert("Login Success");

              _this30.goToHomePage();

              sessionStorage.setItem("user_id", success.id);
              sessionStorage.setItem("username", _this30.user.username);
            }
          }, function (error) {
            alert('Server not found');
          });
        }
      }, {
        key: "goToHomePage",
        value: function goToHomePage() {
          this.router.navigate(['/home']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 76,
      vars: 2,
      consts: [["lang", "en", 0, "xmlns", "th", "http://www.w3.org/1999/xhtml", "logo", ""], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], ["id", "loginSuccess", 0, "th", "text", "${success}", 2, "display", "none"], [1, "header"], [1, "header-text"], ["href", "http://wunderlist.com/privacy-policy", 1, "header-link"], [1, "logo"], [1, "login-form"], [1, "loginTab", "signin", 3, "ngSubmit"], [1, "loginTab-input-address"], [1, "loginTab-input-icon"], ["width", "21px", "height", "18px", "viewBox", "0 0 21 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-248.000000, -339.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(231.000000, 238.000000)"], ["transform", "translate(0.000000, 20.000000)"], ["transform", "translate(0.000000, 60.000000)"], ["d", "M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"], [1, "loginTab-input-fieldInput"], ["type", "email", "name", "username", "value", "", "required", "", "autofocus", "", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], [1, "loginTab-input-password"], ["width", "21px", "height", "25px", "viewBox", "0 0 21 25", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-247.000000, -396.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(0.000000, 119.000000)"], ["d", "M36,12.9375 C36,12.144 35.3452308,11.5 34.5384615,11.5 L18.4615385,11.5 C17.6547692,11.5 17,12.144 17,12.9375 L17,21.5625 C17,22.356 17.6547692,23 18.4615385,23 L34.5384615,23 C35.3452308,23 36,22.356 36,21.5625 L36,12.9375 L36,12.9375 Z M19.9230769,11.5 L19.9230769,6.46875 C19.9230769,2.8965625 22.8680769,0 26.5,0 C30.1319231,0 33.0769231,2.8965625 33.0769231,6.46875 L33.0769231,11.5 L19.9230769,11.5 Z M22.8461538,8.625 L22.8461538,6.46875 C22.8461538,4.4835625 24.4816154,2.875 26.5,2.875 C28.5183846,2.875 30.1538462,4.4835625 30.1538462,6.46875 L30.1538462,8.625"], ["type", "password", "name", "password", "required", "", "placeholder", "Password", 3, "ngModel", "ngModelChange"], [1, "button-login"], ["type", "submit", "value", "Login", "name", "login"], [1, "forgot-password"], ["routerLink", "/forget-pass"], [1, "social-link"], [1, "social-link-face-google"], ["href", "https://a.wunderlist.com/api/v1/oauth/facebook?web=www", 1, "button", "big"], [1, "social-link-face-google-icon"], ["viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z", "fill", "#FFFFFF"], ["href", "https://a.wunderlist.com/api/v1/oauth/google?web=www", 1, "button-google"], ["fill-rule", "evenodd", "fill", "#FFFFFF", "clip-rule", "evenodd"], ["d", "M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"], ["d", "M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"], ["d", "M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"], [1, "social-link-microsoft"], ["href", "", 1, "button-microsoft"], ["stroke", "none", "stroke-width", "1", "fill", "#ffffff", "fill-rule", "evenodd"], ["d", "M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z", "fill", "#F1511B"], ["d", "M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z", "fill", "#80CC28"], ["d", "M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z", "fill", "#00ADEF"], ["d", "M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z", "fill", "#FBBC09"], [1, "sign-up-link"], ["routerLink", "/sign-up", 1, "signup-link"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Learn more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Forgot Password ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Do you have account ? \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%]{\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #423e3e;\n}\n.header[_ngcontent-%COMP%]{\n  background: #edf2fc;\n  min-height: 30px;\n  border-bottom: 1px solid rgba(36,123,198,0.15);\n  font-size: 14px;\n  display: flex;\n  padding: 10px;\n  font-family: \"Lato\",\"Helvetica Neue\",\"Helvetica\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #423e3e;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.header-link[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #2b88d9;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n.header-text[_ngcontent-%COMP%]{\n  font-weight: 400;\n  color: #666;\n  font-size: 13px;\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n}\n.logo[_ngcontent-%COMP%]{\n  margin: 40px auto 0px auto;\n  background-image: url(\"/assets/app.png\");\n  box-sizing: border-box;\n  background-position: -109px 0;\n  width: 79px;\n  background-size: 425px;\n  height: 79px;\n  transform: scale(1.05);\n\n}\n\n.login-form[_ngcontent-%COMP%]{\n  max-width: 370px;\n  min-width: 320px;\n  margin: 30px auto 20px auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.loginTab[_ngcontent-%COMP%]{\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50,50,50,0.08);\n  border-radius: 4px;\n  font-size: 16px;\n}\n.loginTab-input-address[_ngcontent-%COMP%], .loginTab-input-password[_ngcontent-%COMP%]{\n  display: flex;\n  height: 60px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  box-sizing: border-box;\n}\n.loginTab-input-icon[_ngcontent-%COMP%]{\n  width: 21px;\n  height: 18px;\n  display: inline-block;\n  margin: 20px 11px 0px 16px;\n  box-sizing: border-box;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border: 0 none;\n  font-size: 16px;\n  line-height: 15px;\n  padding: 20px 8px;\n  margin-right: 2px;\n  color: #666;\n  outline: none;\n  cursor: text;\n  font: 400 16.3333px Arial;\n  background-color: white;\n  width: inherit;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  font-size: 16px;\n}\n.button-login[_ngcontent-%COMP%]{\n  border-bottom: none;\n  padding: 0 15px;\n  height: 60px;\n  margin: 0;\n}\n.button-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  padding: 11px 10px;\n  border-radius: 3px;\n  margin: 18px auto;\n  font-weight: bold;\n  border: 0 none;\n  background-color: #2b88d9;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.1s transform ease-in-out;\n  outline: none;\n}\n.forgot-password[_ngcontent-%COMP%]{\n  padding-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n\n.social-link[_ngcontent-%COMP%]{\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  box-sizing: border-box;\n}\n.social-link-face-google[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-face-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #3b5998;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n.header-form[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 20px;\n  border-bottom: 1px solid #eee;\n}\n.body-form-text[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n.social-link-face-google[_ngcontent-%COMP%]   .button-google[_ngcontent-%COMP%]{\n  background-color: #dd4b39;\n}\n.social-link-face-google-icon[_ngcontent-%COMP%]{\n  width: 26px;\n  height: 26px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  cursor: pointer;\n}\n.social-link-microsoft[_ngcontent-%COMP%]{\n  margin-right: -10px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-microsoft[_ngcontent-%COMP%]   .button-microsoft[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n\n\n.sign-up-link[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  text-align: center;\n}\n.sign-up-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpT0FBaU87RUFDak8sVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlPQUFpTztBQUNuTztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUZBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0EsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQSxxQkFBcUIiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIk9wZW4gU2Fuc1wiLFwiTWljcm9zb2Z0IFlhaGVpXCIsXCLlvq7ova/pm4Xpu5FcIixTVFhpaGVpLFwi5Y2O5paH57uG6buRXCIsXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIixPc2FrYSwn77yt77yzIO+8sOOCtOOCt+ODg+OCrycsJ01TIFBHb3RoaWMnLCfjg6HjgqTjg6rjgqonLE1laXJ5byxcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkFyaWFsXCIsU2Fucy1TZXJpZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDIzZTNlO1xufVxuLmhlYWRlcntcbiAgYmFja2dyb3VuZDogI2VkZjJmYztcbiAgbWluLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsMTIzLDE5OCwwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiSGVsdmV0aWNhXCIsc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGNvbG9yOiAjNDIzZTNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyLWxpbmt7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJiODhkOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmhlYWRlci10ZXh0e1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJPcGVuIFNhbnNcIixcIk1pY3Jvc29mdCBZYWhlaVwiLFwi5b6u6L2v6ZuF6buRXCIsU1RYaWhlaSxcIuWNjuaWh+e7hum7kVwiLFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsT3Nha2EsJ++8re+8syDvvLDjgrTjgrfjg4Pjgq8nLCdNUyBQR290aGljJywn44Oh44Kk44Oq44KqJyxNZWlyeW8sXCJHZW5ldmEgQ1lcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkFyaWFsIFVuaWNvZGUgTVNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJBcmlhbFwiLFNhbnMtU2VyaWY7XG59XG4ubG9nb3tcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMHB4IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXBwLnBuZ1wiKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwOXB4IDA7XG4gIHdpZHRoOiA3OXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQyNXB4O1xuICBoZWlnaHQ6IDc5cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cbn1cbi8qIGZvcm0gbG9naW4gKi9cbi5sb2dpbi1mb3Jte1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNTAsNTAsNTAsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxvZ2luVGFiLWlucHV0LWFkZHJlc3MsLmxvZ2luVGFiLWlucHV0LXBhc3N3b3Jke1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubG9naW5UYWItaW5wdXQtaWNvbntcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIwcHggMTFweCAwcHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IHtcbiAgd2lkdGg6IDk0JTtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IGlucHV0e1xuICBib3JkZXI6IDAgbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZzogMjBweCA4cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250OiA0MDAgMTYuMzMzM3B4IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4ubG9naW5UYWItaW5wdXQtZmllbGRJbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idXR0b24tbG9naW57XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDA7XG59XG4uYnV0dG9uLWxvZ2luIGlucHV0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTFweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMThweCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjg4ZDk7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcmdvdC1wYXNzd29yZHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3Jnb3QtcGFzc3dvcmQgYXtcbiAgY29sb3I6ICMxYjdlZGY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBlbmQgZm9ybSBsb2dpbiAqL1xuLyogbGluayBzb2NpYWwgKi9cbi5zb2NpYWwtbGlua3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zb2NpYWwtbGluay1mYWNlLWdvb2dsZXtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUgYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLmhlYWRlci1mb3Jte1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmJvZHktZm9ybS10ZXh0e1xuICBjb2xvcjogIzIwMjEyNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlIC5idXR0b24tZ29vZ2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xlLWljb257XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMzAlO1xufVxuLnNvY2lhbC1saW5rLW1pY3Jvc29mdCAuYnV0dG9uLW1pY3Jvc29mdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDEyMCwxMjAsMTIwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuLyogZW5kIGxpbmsgc29jaWFsICovXG4vKiBsaW5rIMSRxINuZyBrw70gKi9cbi5zaWduLXVwLWxpbmt7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi11cC1saW5rIGEge1xuICBjb2xvcjogIzFiN2VkZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogZW5kIGxpbmsgZMSDbmcga8O9ICovXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login.service.ts ***!
    \****************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "getUser",
        value: function getUser(user) {
          return this.http.post('http://localhost:8080/login', user);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/comment.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/comment.model.ts ***!
    \*****************************************/

  /*! exports provided: Comment */

  /***/
  function srcAppModelsCommentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comment", function () {
      return Comment;
    });

    var Comment = function Comment() {
      _classCallCheck(this, Comment);
    };
    /***/

  },

  /***/
  "./src/app/models/file.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/file.model.ts ***!
    \**************************************/

  /*! exports provided: FileModel */

  /***/
  function srcAppModelsFileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileModel", function () {
      return FileModel;
    });

    var FileModel = function FileModel() {
      _classCallCheck(this, FileModel);
    };
    /***/

  },

  /***/
  "./src/app/models/list.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/list.model.ts ***!
    \**************************************/

  /*! exports provided: List */

  /***/
  function srcAppModelsListModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "List", function () {
      return List;
    });

    var List = function List() {
      _classCallCheck(this, List);
    };
    /***/

  },

  /***/
  "./src/app/models/subtask.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/subtask.model.ts ***!
    \*****************************************/

  /*! exports provided: Subtask */

  /***/
  function srcAppModelsSubtaskModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Subtask", function () {
      return Subtask;
    });

    var Subtask = function Subtask() {
      _classCallCheck(this, Subtask);
    };
    /***/

  },

  /***/
  "./src/app/models/task.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/task.model.ts ***!
    \**************************************/

  /*! exports provided: Task */

  /***/
  function srcAppModelsTaskModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });

    var Task = function Task() {
      _classCallCheck(this, Task);
    };
    /***/

  },

  /***/
  "./src/app/models/user.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/user.model.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sign-up.service */
    "./src/app/sign-up/sign-up.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(signUpService, route, router) {
        _classCallCheck(this, SignUpComponent);

        this.signUpService = signUpService;
        this.route = route;
        this.router = router;
        this.repass = '';
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this31 = this;

          if (this.repass != this.user.password) {
            alert("Password does not match");
            this.user.username = this.user.password = this.repass = '';
          } else {
            this.signUpService.createUser(this.user).subscribe(function (success) {
              alert("Sign-up success");

              _this31.goToLoginPage();
            }, function (error) {
              alert("Account already exists");
              _this31.user.username = _this31.user.password = _this31.repass = '';
            });
          }
        }
      }, {
        key: "goToLoginPage",
        value: function goToLoginPage() {
          this.router.navigate(['/index']);
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 88,
      vars: 3,
      consts: [["lang", "en"], [0, "xmlns", "th", "http://www.thymeleaf.org"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], [1, "header"], [1, "header-text"], ["href", "http://wunderlist.com/privacy-policy", 1, "header-link"], [1, "logo"], [1, "login-form"], ["action", "/register", "method", "POST", 1, "loginTab", "signup", 3, "ngSubmit"], [1, "loginTab-input-address"], [1, "loginTab-input-icon"], ["width", "21px", "height", "18px", "viewBox", "0 0 21 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-248.000000, -339.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(231.000000, 238.000000)"], ["transform", "translate(0.000000, 20.000000)"], ["transform", "translate(0.000000, 60.000000)"], ["d", "M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"], [1, "loginTab-input-fieldInput", "user"], ["type", "email", "name", "username", "value", "", "required", "", "autofocus", "", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], [1, "loginTab-input-password"], ["width", "21px", "height", "25px", "viewBox", "0 0 21 25", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-247.000000, -396.000000)", "stroke-linecap", "round", "stroke", "#2B88D9", "stroke-linejoin", "round"], ["transform", "translate(0.000000, 119.000000)"], ["d", "M36,12.9375 C36,12.144 35.3452308,11.5 34.5384615,11.5 L18.4615385,11.5 C17.6547692,11.5 17,12.144 17,12.9375 L17,21.5625 C17,22.356 17.6547692,23 18.4615385,23 L34.5384615,23 C35.3452308,23 36,22.356 36,21.5625 L36,12.9375 L36,12.9375 Z M19.9230769,11.5 L19.9230769,6.46875 C19.9230769,2.8965625 22.8680769,0 26.5,0 C30.1319231,0 33.0769231,2.8965625 33.0769231,6.46875 L33.0769231,11.5 L19.9230769,11.5 Z M22.8461538,8.625 L22.8461538,6.46875 C22.8461538,4.4835625 24.4816154,2.875 26.5,2.875 C28.5183846,2.875 30.1538462,4.4835625 30.1538462,6.46875 L30.1538462,8.625"], [1, "loginTab-input-fieldInput", "pass"], ["type", "password", "name", "password", "required", "", "placeholder", "Password", 3, "ngModel", "ngModelChange"], [1, "loginTab-input-fieldInput", "repass"], ["type", "password", "name", "repass", "required", "", "placeholder", "Re-Password", 3, "ngModel", "ngModelChange"], [1, "button-login", "signUpBtn"], ["type", "submit", "value", "Sign Up"], [1, "forgot-password"], ["routerLink", "/forget-pass"], [1, "social-link"], [1, "social-link-face-google"], ["href", "https://a.wunderlist.com/api/v1/oauth/facebook?web=www", 1, "button", "big"], [1, "social-link-face-google-icon"], ["viewBox", "0 0 18 18", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z", "fill", "#FFFFFF"], ["href", "https://a.wunderlist.com/api/v1/oauth/google?web=www", 1, "button-google"], ["fill-rule", "evenodd", "fill", "#FFFFFF", "clip-rule", "evenodd"], ["d", "M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"], ["d", "M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"], ["d", "M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"], [1, "social-link-microsoft"], ["href", "", 1, "button-microsoft"], ["stroke", "none", "stroke-width", "1", "fill", "#ffffff", "fill-rule", "evenodd"], ["d", "M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z", "fill", "#F1511B"], ["d", "M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z", "fill", "#80CC28"], ["d", "M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z", "fill", "#00ADEF"], ["d", "M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z", "fill", "#FBBC09"], [1, "sign-up-link"], ["routerLink", "/index", 1, "signup-link"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Learn more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.repass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Forgot PassWord\xA0? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "svg", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Already have Account&nbsp? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repass);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%]{\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #423e3e;\n}\n.header[_ngcontent-%COMP%]{\n  background: #edf2fc;\n  min-height: 30px;\n  border-bottom: 1px solid rgba(36,123,198,0.15);\n  font-size: 14px;\n  display: flex;\n  padding: 10px;\n  font-family: \"Lato\",\"Helvetica Neue\",\"Helvetica\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #423e3e;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.header-link[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #2b88d9;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n.header-text[_ngcontent-%COMP%]{\n  font-weight: 400;\n  color: #666;\n  font-size: 13px;\n  font-family: \"Lato\",\"Open Sans\",\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei,\"\u534E\u6587\u7EC6\u9ED1\",\"Hiragino Kaku Gothic Pro\",Osaka,'\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF','MS PGothic','\u30E1\u30A4\u30EA\u30AA',Meiryo,\"Geneva CY\",\"Lucida Grande\",\"Arial Unicode MS\",\"Helvetica Neue\",\"Arial\",Sans-Serif;\n}\n.logo[_ngcontent-%COMP%]{\n  margin: 40px auto 0px auto;\n  background-image: url(\"/assets/app.png\");\n  box-sizing: border-box;\n  background-position: -109px 0;\n  width: 79px;\n  background-size: 425px;\n  height: 79px;\n  transform: scale(1.05);\n\n}\n\n.login-form[_ngcontent-%COMP%]{\n  max-width: 370px;\n  min-width: 320px;\n  margin: 30px auto 20px auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.loginTab[_ngcontent-%COMP%]{\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50,50,50,0.08);\n  border-radius: 4px;\n  font-size: 16px;\n}\n.loginTab-input-address[_ngcontent-%COMP%], .loginTab-input-password[_ngcontent-%COMP%]{\n  display: flex;\n  height: 60px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  box-sizing: border-box;\n}\n.loginTab-input-icon[_ngcontent-%COMP%]{\n  width: 21px;\n  height: 18px;\n  display: inline-block;\n  margin: 20px 11px 0px 16px;\n  box-sizing: border-box;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  border: 0 none;\n  font-size: 16px;\n  line-height: 15px;\n  padding: 20px 8px;\n  margin-right: 2px;\n  color: #666;\n  outline: none;\n  cursor: text;\n  font: 400 16.3333px Arial;\n  background-color: white;\n  width: inherit;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  font-size: 16px;\n}\n.loginTab-input-fieldInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\n  font-size: 16px;\n}\n.button-login[_ngcontent-%COMP%]{\n  border-bottom: none;\n  padding: 0 15px;\n  height: 60px;\n  margin: 0;\n}\n.button-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  padding: 11px 10px;\n  border-radius: 3px;\n  margin: 18px auto;\n  font-weight: bold;\n  border: 0 none;\n  background-color: #2b88d9;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.1s transform ease-in-out;\n  outline: none;\n}\n.forgot-password[_ngcontent-%COMP%]{\n  padding-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n\n.social-link[_ngcontent-%COMP%]{\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  box-sizing: border-box;\n}\n.social-link-face-google[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-face-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #3b5998;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n.header-form[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 20px;\n  border-bottom: 1px solid #eee;\n}\n.body-form-text[_ngcontent-%COMP%]{\n  color: #202124;\n  text-align: center;\n  padding: 5px;\n  \n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n.social-link-face-google[_ngcontent-%COMP%]   .button-google[_ngcontent-%COMP%]{\n  background-color: #dd4b39;\n}\n.social-link-face-google-icon[_ngcontent-%COMP%]{\n  width: 26px;\n  height: 26px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  cursor: pointer;\n}\n.social-link-microsoft[_ngcontent-%COMP%]{\n  margin-right: -10px;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  width: 30%;\n}\n.social-link-microsoft[_ngcontent-%COMP%]   .button-microsoft[_ngcontent-%COMP%]{\n  background-color: #fff;\n  display: block;\n  padding: 10px;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 2px rgba(120,120,120,0.05);\n  border-radius: 3px;\n  text-decoration: none;\n  color: #444;\n  text-align: center;\n  font-weight: bold;\n  font-size: 0;\n  height: 24px;\n  \n}\n\n\n.sign-up-link[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  padding: 10px;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  text-align: center;\n}\n.sign-up-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b7edf;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaU9BQWlPO0VBQ2pPLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixpT0FBaU87QUFDbk87QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFGQTtFQUNFLGVBQWU7QUFDakI7QUFGQTtFQUNFLGVBQWU7QUFDakI7QUFGQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0Esb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0EscUJBQXFCIiwiZmlsZSI6InNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiT3BlbiBTYW5zXCIsXCJNaWNyb3NvZnQgWWFoZWlcIixcIuW+rui9r+mbhem7kVwiLFNUWGloZWksXCLljY7mlofnu4bpu5FcIixcIkhpcmFnaW5vIEtha3UgR290aGljIFByb1wiLE9zYWthLCfvvK3vvLMg77yw44K044K344OD44KvJywnTVMgUEdvdGhpYycsJ+ODoeOCpOODquOCqicsTWVpcnlvLFwiR2VuZXZhIENZXCIsXCJMdWNpZGEgR3JhbmRlXCIsXCJBcmlhbCBVbmljb2RlIE1TXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwiQXJpYWxcIixTYW5zLVNlcmlmO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0MjNlM2U7XG59XG4uaGVhZGVye1xuICBiYWNrZ3JvdW5kOiAjZWRmMmZjO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNiwxMjMsMTk4LDAuMTUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgY29sb3I6ICM0MjNlM2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXItbGlua3tcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmI4OGQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaGVhZGVyLXRleHR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIk9wZW4gU2Fuc1wiLFwiTWljcm9zb2Z0IFlhaGVpXCIsXCLlvq7ova/pm4Xpu5FcIixTVFhpaGVpLFwi5Y2O5paH57uG6buRXCIsXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIixPc2FrYSwn77yt77yzIO+8sOOCtOOCt+ODg+OCrycsJ01TIFBHb3RoaWMnLCfjg6HjgqTjg6rjgqonLE1laXJ5byxcIkdlbmV2YSBDWVwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiQXJpYWwgVW5pY29kZSBNU1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcIkFyaWFsXCIsU2Fucy1TZXJpZjtcbn1cbi5sb2dve1xuICBtYXJnaW46IDQwcHggYXV0byAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcHAucG5nXCIpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTA5cHggMDtcbiAgd2lkdGg6IDc5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNDI1cHg7XG4gIGhlaWdodDogNzlweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblxufVxuLyogZm9ybSBsb2dpbiAqL1xuLmxvZ2luLWZvcm17XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHggYXV0bztcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxvZ2luVGFie1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg1MCw1MCw1MCwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubG9naW5UYWItaW5wdXQtYWRkcmVzcywubG9naW5UYWItaW5wdXQtcGFzc3dvcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2dpblRhYi1pbnB1dC1pY29ue1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCAxMXB4IDBweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxvZ2luVGFiLWlucHV0LWZpZWxkSW5wdXQge1xuICB3aWR0aDogOTQlO1xufVxuLmxvZ2luVGFiLWlucHV0LWZpZWxkSW5wdXQgaW5wdXR7XG4gIGJvcmRlcjogMCBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIGZvbnQ6IDQwMCAxNi4zMzMzcHggQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5sb2dpblRhYi1pbnB1dC1maWVsZElucHV0IGlucHV0OjpwbGFjZWhvbGRlcntcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJ1dHRvbi1sb2dpbntcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5idXR0b24tbG9naW4gaW5wdXR7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAxOHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDAgbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiODhkOTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9yZ290LXBhc3N3b3Jke1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcmdvdC1wYXNzd29yZCBhe1xuICBjb2xvcjogIzFiN2VkZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi8qIGVuZCBmb3JtIGxvZ2luICovXG4vKiBsaW5rIHNvY2lhbCAqL1xuLnNvY2lhbC1saW5re1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNvY2lhbC1saW5rLWZhY2UtZ29vZ2xle1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDMwJTtcbn1cbi5zb2NpYWwtbGluay1mYWNlLWdvb2dsZSBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTIwLDEyMCwxMjAsMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG59XG4uaGVhZGVyLWZvcm17XG4gIGNvbG9yOiAjMjAyMTI0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4uYm9keS1mb3JtLXRleHR7XG4gIGNvbG9yOiAjMjAyMTI0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUgLmJ1dHRvbi1nb29nbGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG59XG4uc29jaWFsLWxpbmstZmFjZS1nb29nbGUtaWNvbntcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29jaWFsLWxpbmstbWljcm9zb2Z0e1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG59XG4uc29jaWFsLWxpbmstbWljcm9zb2Z0IC5idXR0b24tbWljcm9zb2Z0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTIwLDEyMCwxMjAsMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG59XG4vKiBlbmQgbGluayBzb2NpYWwgKi9cbi8qIGxpbmsgxJHEg25nIGvDvSAqL1xuLnNpZ24tdXAtbGlua3tcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWduLXVwLWxpbmsgYSB7XG4gIGNvbG9yOiAjMWI3ZWRmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBlbmQgbGluayBkxINuZyBrw70gKi9cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.css']
        }]
      }], function () {
        return [{
          type: _sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignUpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sign-up/sign-up.service.ts":
  /*!********************************************!*\
    !*** ./src/app/sign-up/sign-up.service.ts ***!
    \********************************************/

  /*! exports provided: SignUpService */

  /***/
  function srcAppSignUpSignUpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpService", function () {
      return SignUpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SignUpService =
    /*#__PURE__*/
    function () {
      function SignUpService(http) {
        _classCallCheck(this, SignUpService);

        this.http = http;
      }

      _createClass(SignUpService, [{
        key: "createUser",
        value: function createUser(user) {
          return this.http.post('http://localhost:8080/register', user);
        }
      }]);

      return SignUpService;
    }();

    SignUpService.ɵfac = function SignUpService_Factory(t) {
      return new (t || SignUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SignUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignUpService,
      factory: SignUpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/hung/Downloads/Angular-Spring-Wunderlist/src/main/resources/frontend/angular-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map