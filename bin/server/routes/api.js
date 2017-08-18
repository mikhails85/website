"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../../model/user");
var ApiRoutes = (function () {
    function ApiRoutes() {
    }
    ApiRoutes.fakeUser = function () {
        var testUser = new user_1.User();
        testUser.Username = 'test';
        testUser.Password = 'test';
        testUser.FirstName = 'Test';
        testUser.LastName = 'User';
        return testUser;
    };
    ApiRoutes.create = function (router) {
        router.post("/api/authenticate", function (req, res, next) {
            console.log(req.body);
            var params = req.body;
            var testUser = ApiRoutes.fakeUser();
            console.log("Username: " + params.username);
            console.log("Username: " + testUser.Username);
            console.log("Password: " + params.password);
            console.log("Password: " + testUser.Password);
            if (params.username === testUser.Username && params.password === testUser.Password) {
                res.status(200).json({ token: 'fake-jwt-token' });
            }
            else {
                res.status(200).json({});
            }
        });
        router.get("/api/user", function (req, res, next) {
            if (req.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                var testUser = ApiRoutes.fakeUser();
                res.status(200).json(testUser);
            }
            else {
                res.status(401).json({});
            }
        });
    };
    return ApiRoutes;
}());
exports.ApiRoutes = ApiRoutes;
