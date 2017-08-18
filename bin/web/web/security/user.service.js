"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var authentication_service_1 = require("./authentication.service");
var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getUser = function () {
        return this.http.get('/api/user', {
            headers: new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authenticationService.token)
        });
    };
    UserService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: authentication_service_1.AuthenticationService, },
    ]; };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map