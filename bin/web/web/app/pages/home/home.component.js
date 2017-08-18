"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = (function () {
    function HomeComponent(meta, title) {
        this.pageTitle = 'Home';
        title.setTitle(this.pageTitle);
        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    HomeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-home-page',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.css']
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Meta, },
        { type: platform_browser_1.Title, },
    ]; };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map