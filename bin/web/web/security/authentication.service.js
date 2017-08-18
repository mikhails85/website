"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var local_storage_1 = require("../infrastructure/local.storage");
require("rxjs/add/operator/map");
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
            headers: new http_1.HttpHeaders().set('Content-Type', 'application/json')
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
    AuthenticationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: local_storage_1.LocalStorageService, },
    ]; };
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map