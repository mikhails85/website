webpackJsonp([1],{

/***/ "../../../../../src/web async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src/web async recursive";

/***/ }),

/***/ "../../../../../src/web/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/web/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header top section -->\n<section class=\"banner\" role=\"banner\">\n  <header id=\"header\">\n    <div class=\"header-content clearfix\"> <a class=\"logo\" href=\"/\"><img src=\"assets/images/logo.png\" alt=\"\"></a>\n      <nav class=\"navigation\" role=\"navigation\">\n        <ul class=\"primary-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/\">Home</a></li>\n\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/profile\">Profile</a></li>\n        </ul>\n      </nav>\n      <a href=\"#\" class=\"nav-toggle\">Menu<span></span></a> </div>\n  </header>\n</section>\n<!-- header top section --> \n<router-outlet></router-outlet>\n<!-- footer section -->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"col-md-6 left\">\n      <h4>Let's work together</h4>\n      <p> Call: 612.269.8419 OR Email : <a href=\"mailto:hello@agency.com\"> hello@agency.com </a></p>\n    </div>\n    <div class=\"col-md-6 right\">\n      <p>© 2015 All rights reserved. All Rights Reserved<br>\n        Made with <i class=\"fa fa-heart pulse\"></i> by <a href=\"http://www.designstub.com/\">Designstub</a></p>\n    </div>\n  </div>\n</footer>\n<!-- footer section --> "

/***/ }),

/***/ "../../../../../src/web/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/web/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/web/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/web/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/web/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_page_routing__ = __webpack_require__("../../../../../src/web/app/pages/page.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__security_index__ = __webpack_require__("../../../../../src/web/security/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infrastructure_local_storage__ = __webpack_require__("../../../../../src/web/infrastructure/local.storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_page_routing__["a" /* RoutedComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'web' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__pages_page_routing__["b" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__security_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_6__security_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_6__security_index__["c" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__infrastructure_local_storage__["a" /* LocalStorageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/web/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- header content section -->\n<section id=\"hero\" class=\"section \">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-6 hero\">\n        <div class=\"hero-content\">\n          <h1>{{pageTitle}}</h1>\n        </div>\n        <!-- hero --> \n      </div>\n      <div class=\"col-md-5 col-sm-6 hero\">\n        <div class=\"hero-content\">\n          <p>FREE Bootstrap v3.3.5 frame work base minimal portfolio template for presonal use and creative agency.</p>\n        </div>\n        <!-- hero --> \n      </div>\n    </div>\n  </div>\n</section>\n<!-- header content section --> \n<!-- portfolio grid section -->\n<section id=\"portfolio\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <hr class=\"section\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 portfolio-item\"> <a href=\"work-details.html\" class=\"portfolio-link\">\n        <div class=\"caption\">\n          <div class=\"caption-content\">\n            <h3>The Shape of Design</h3>\n            <h4>Branding/Graphic</h4>\n          </div>\n        </div>\n        <img src=\"assets/images/portfolio/work-1.jpg\" class=\"img-responsive\" alt=\"\"> </a> </div>\n      <div class=\"col-sm-6 portfolio-item\"> <a href=\"work-details.html\" class=\"portfolio-link\">\n        <div class=\"caption\">\n          <div class=\"caption-content\">\n            <h3>czarna kawka</h3>\n            <h4>Branding</h4>\n          </div>\n        </div>\n        <img src=\"assets/images/portfolio/work-2.jpg\" class=\"img-responsive\" alt=\"\"> </a> </div>\n      <div class=\"col-sm-6 portfolio-item\"> <a href=\"work-details.html\" class=\"portfolio-link\">\n        <div class=\"caption\">\n          <div class=\"caption-content\">\n            <h3>czarna kawka</h3>\n            <h4>Branding</h4>\n          </div>\n        </div>\n        <img src=\"assets/images/portfolio/work-3.jpg\" class=\"img-responsive\" alt=\"\"> </a> </div>\n      <div class=\"col-sm-6 portfolio-item\"> <a href=\"work-details.html\" class=\"portfolio-link\">\n        <div class=\"caption\">\n          <div class=\"caption-content\">\n            <h3>czarna kawka</h3>\n            <h4>Branding</h4>\n          </div>\n        </div>\n        <img src=\"assets/images/portfolio/work-4.jpg\" class=\"img-responsive\" alt=\"\"> </a> </div>\n      <div class=\"col-sm-6 portfolio-item\"> <a href=\"work-details.html\" class=\"portfolio-link\">\n        <div class=\"caption\">\n          <div class=\"caption-content\">\n            <h3>czarna kawka</h3>\n            <h4>Branding</h4>\n          </div>\n        </div>\n        <img src=\"assets/images/portfolio/work-5.jpg\" class=\"img-responsive\" alt=\"\"> </a> </div>\n      <div class=\"col-sm-6 portfolio-item\"> <a href=\"work-details.html\" class=\"portfolio-link\">\n        <div class=\"caption\">\n          <div class=\"caption-content\">\n            <h3>czarna kawka</h3>\n            <h4>Branding</h4>\n          </div>\n        </div>\n        <img src=\"assets/images/portfolio/work-6.jpg\" class=\"img-responsive\" alt=\"\"> </a> </div>\n    </div>\n  </div>\n</section>\n<!-- portfolio grid section --> \n<!-- service section -->\n<section id=\"service\" class=\"service section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-6\">\n        <h4>We're expert to create beautiful design & smart technology</h4>\n        <p>Nullam at enim mauris. Donec et nunc ipsum. Suspendi tempus fringilla ipsu Cras metus euismod velit gravida at nunc ipsum.</p>\n      </div>\n      <div class=\"col-md-7 col-sm-6\">\n        <div class=\"col-md-4 col-sm-6 service text-center\"> <span class=\"icon icon-browser\"></span>\n          <div class=\"service-content\">\n            <h5>Web & Mobile</h5>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6 service text-center\"> <span class=\"icon icon-trophy\"></span>\n          <div class=\"service-content\">\n            <h5>Branding</h5>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6 service text-center\"> <span class=\"icon icon-megaphone\"></span>\n          <div class=\"service-content\">\n            <h5>Digital Marketing</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- service section --> \n\n\n"

/***/ }),

/***/ "../../../../../src/web/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(meta, title) {
        this.pageTitle = 'Home';
        title.setTitle(this.pageTitle);
        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/web/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/web/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/web/app/pages/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/web/app/pages/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/web/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n      <div class=\"col-md-6 col-md-offset-3\">       \n        <h2>Login</h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n          </div>\n          <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n            />\n          </div>\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/web/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_authentication_service__ = __webpack_require__("../../../../../src/web/security/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            template: __webpack_require__("../../../../../src/web/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/web/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__security_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/page.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index__ = __webpack_require__("../../../../../src/web/app/pages/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_index__ = __webpack_require__("../../../../../src/web/app/pages/profile/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_index__ = __webpack_require__("../../../../../src/web/app/pages/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security_auth_guard__ = __webpack_require__("../../../../../src/web/security/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_index__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_index__["a" /* LoginComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutedComponents = [__WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__profile_index__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_4__login_index__["a" /* LoginComponent */]];
//# sourceMappingURL=page.routing.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/profile/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component__ = __webpack_require__("../../../../../src/web/app/pages/profile/profile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/web/app/pages/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/web/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header content section -->\n<section id=\"works-info\" class=\"section \">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-6 hero\">\n        <div class=\"hero-content\">\n          <h4>{{pageTitle}}</h4>\n          <p>Nullam at enim mauris. Donec et nunc ipsum. Suspendi tempus fringilla ipsu Cras metus euismod velit gravida at nunc ipsum.</p>\n        </div>\n        <!-- hero --> \n      </div>\n      <div class=\"col-md-5 col-sm-6 hero text-center\">\n        <div class=\"hero-content\"> <a href=\"https://www.designstub.com\" class=\"btn\">Visit Site <i class=\"fa fa-long-arrow-right\"></i> </a> </div>\n        <!-- hero --> \n      </div>\n    </div>\n  </div>\n</section>\n<!-- header content section --> \n<!-- portfolio grid section -->\n<section id=\"work-detail\">\n  <div class=\"container\">\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-12 work-detail \">\n        <div class=\"work-detail\"> <img src=\"assets/images/portfolio/work-1.jpg\" class=\"img-responsive\" alt=\"\"> <img src=\"assets/images/portfolio/work-3.jpg\" class=\"img-responsive\" alt=\"\"> <img src=\"assets/images/portfolio/work-5.jpg\" class=\"img-responsive\" alt=\"\">\n          <p class=\"extra-padding\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sagittis molestie est vel facilisis. Nunc vulputate est ut erat aliquam, sed elementum justo bibendum. Quisque non mattis mauris, eget venenatis quam.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- portfolio grid section --> \n<!-- service section -->\n<section id=\"backto\" class=\"work-detail section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2 text-center section\"> <a href=\"/\"><i class=\"fa fa-th fa-2x\"></i></a>\n        <p>Back to projects</p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- service section --> "

/***/ }),

/***/ "../../../../../src/web/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(meta, title) {
        this.pageTitle = 'Profile';
        title.setTitle(this.pageTitle);
        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-profile-page',
            template: __webpack_require__("../../../../../src/web/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/web/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/web/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/web/infrastructure/local.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LocalStorageService = (function () {
    function LocalStorageService(platformId) {
        this.platformId = platformId;
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* isPlatformBrowser */])(this.platformId)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };
    LocalStorageService.prototype.getItem = function (key) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* isPlatformBrowser */])(this.platformId)) {
            var str = localStorage.getItem(key);
            if (str) {
                return JSON.parse(str);
            }
        }
        return null;
    };
    LocalStorageService.prototype.removeItem = function (key) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* isPlatformBrowser */])(this.platformId)) {
            localStorage.removeItem(key);
        }
    };
    LocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object])
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=local.storage.js.map

/***/ }),

/***/ "../../../../../src/web/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/web/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/web/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/web/security/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_local_storage__ = __webpack_require__("../../../../../src/web/infrastructure/local.storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.localStorageService.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_local_storage__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_local_storage__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/web/security/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_local_storage__ = __webpack_require__("../../../../../src/web/infrastructure/local.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        // set token if saved in local storage
        var currentUser = this.localStorageService.getItem('currentUser');
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }), {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json')
        })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response && response.token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                _this.localStorageService.setItem('currentUser', { username: username, token: _this.token });
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = '';
        this.localStorageService.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_local_storage__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_local_storage__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/web/security/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/web/security/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/web/security/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/web/security/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/web/security/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/web/security/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getUser = function () {
        return this.http.get('/api/user', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Authorization', 'Bearer ' + this.authenticationService.token)
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/web/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map