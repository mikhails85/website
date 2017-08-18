"use strict";
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
    AppServerModule.decorators = [
        { type: core_1.NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AppServerModule.ctorParameters = function () { return []; };
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map