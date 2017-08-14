"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var page_routing_1 = require("./pages/page.routing");
var index_1 = require("./../security/index");
var local_storage_1 = require("./../infrastructure/local.storage");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        page_routing_1.RoutedComponents
                    ],
                    imports: [
                        platform_browser_1.BrowserModule.withServerTransition({ appId: 'web' }),
                        forms_1.FormsModule,
                        http_1.HttpClientModule,
                        page_routing_1.AppRoutingModule,
                    ],
                    providers: [
                        index_1.AuthGuard,
                        index_1.AuthenticationService,
                        index_1.UserService,
                        local_storage_1.LocalStorageService
                    ],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map