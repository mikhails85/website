"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var local_storage_1 = require("../infrastructure/local.storage");
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
    AuthGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: local_storage_1.LocalStorageService, },
    ]; };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map