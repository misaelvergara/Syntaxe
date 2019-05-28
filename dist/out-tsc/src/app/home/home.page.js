import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    /*  @param dependency injection
        @explain: creates an instance of the tellBar service
        services are singletons, which means that there is a single
        instance of the service running accross the app. Therefore,
        instanciating inside a component will not create an instance
        of the service, but will actually access the current single
        instance.
    */
    function HomePage() {
    }
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map