"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var html_1 = require("./routes/html");
var api_1 = require("./routes/api");
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("./../web/aot/app/app.server.module.ngfactory");
var fs_1 = require("fs");
var path_1 = require("path");
var HttpServer = (function () {
    function HttpServer() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    HttpServer.prototype.api = function () { };
    HttpServer.prototype.config = function () {
        core_1.enableProdMode();
        var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'web', 'index.html')).toString();
        this.app.engine('html', function (_, options, callback) {
            var opts = { document: template, url: options.req.url };
            platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
                .then(function (html) { return callback(null, html); });
        });
        this.app.set('view engine', 'html');
        this.app.set('views', 'bin/web');
        this.app.get('*.*', express.static(path_1.join(__dirname, '..', 'web')));
    };
    HttpServer.prototype.routes = function () {
        var router;
        router = express.Router();
        api_1.ApiRoutes.create(router);
        html_1.HtmlRoutes.create(router);
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(router);
    };
    HttpServer.prototype.start = function (port) {
        this.app.listen(port, function () { console.log('Example app listening on port ' + port + '!'); });
    };
    HttpServer.prototype.stop = function () {
        this.app.close();
    };
    return HttpServer;
}());
exports.HttpServer = HttpServer;
