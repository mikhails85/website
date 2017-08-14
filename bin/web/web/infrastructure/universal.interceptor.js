"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UniversalInterceptor = (function () {
    function UniversalInterceptor(serverUrl) {
        this.serverUrl = serverUrl;
    }
    UniversalInterceptor.prototype.intercept = function (req, next) {
        var serverReq = !this.serverUrl ? req : req.clone({
            url: "" + this.serverUrl + req.url
        });
        return next.handle(serverReq);
    };
    UniversalInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UniversalInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: ['serverUrl',] },] },
    ]; };
    return UniversalInterceptor;
}());
exports.UniversalInterceptor = UniversalInterceptor;
//# sourceMappingURL=universal.interceptor.js.map