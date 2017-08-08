"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlRoutes = (function () {
    function HtmlRoutes() {
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    HtmlRoutes.create = function (router) {
        router.get("*", function (req, res, next) {
            res.render('index', { req: req });
        });
    };
    return HtmlRoutes;
}());
exports.HtmlRoutes = HtmlRoutes;
