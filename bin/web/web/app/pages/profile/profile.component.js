"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ProfileComponent = (function () {
    function ProfileComponent(meta, title) {
        this.pageTitle = 'Profile';
        title.setTitle(this.pageTitle);
        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    ProfileComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-profile-page',
                    templateUrl: './profile.component.html',
                    styleUrls: ['./profile.component.css']
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Meta, },
        { type: platform_browser_1.Title, },
    ]; };
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map