"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_server_1 = require("./server/http-server");
var App = (function () {
    function App() {
        this.server = new http_server_1.HttpServer();
    }
    App.prototype.Run = function () {
        this.server.start(8800);
    };
    return App;
}());
var app = new App();
app.Run();
