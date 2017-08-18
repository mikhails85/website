"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("./../../../security/authentication.service");
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
    LoginComponent.decorators = [
        { type: core_1.Component, args: [{
                    templateUrl: 'login.component.html',
                    styleUrls: ['./login.component.css']
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: authentication_service_1.AuthenticationService, },
    ]; };
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map