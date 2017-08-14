"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var LocalStorageService = (function () {
    function LocalStorageService(platformId) {
        this.platformId = platformId;
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        if (common_1.isPlatformBrowser(this.platformId)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };
    LocalStorageService.prototype.getItem = function (key) {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var str = localStorage.getItem(key);
            if (str) {
                return JSON.parse(str);
            }
        }
        return null;
    };
    LocalStorageService.prototype.removeItem = function (key) {
        if (common_1.isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(key);
        }
    };
    LocalStorageService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LocalStorageService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=local.storage.js.map