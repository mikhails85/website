"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./profile/index");
var index_3 = require("./login/index");
var auth_guard_1 = require("./../../security/auth.guard");
var routes = [
    { path: '', pathMatch: 'full', component: index_1.HomeComponent },
    { path: 'profile', component: index_2.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: index_3.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [router_1.RouterModule.forRoot(routes)],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = function () { return []; };
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutedComponents = [index_1.HomeComponent, index_2.ProfileComponent, index_3.LoginComponent];
//# sourceMappingURL=page.routing.js.map