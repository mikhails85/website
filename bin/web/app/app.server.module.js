"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var http_1 = require("@angular/common/http");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var universal_interceptor_1 = require("../infrastructure/universal.interceptor");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    AppServerModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_server_1.ServerModule,
                app_module_1.AppModule
            ],
            providers: [{
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: universal_interceptor_1.UniversalInterceptor,
                    /* Multi is important or you will delete all the other interceptors */
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
