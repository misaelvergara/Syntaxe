import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TopBarComponent.prototype, "showsAppName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TopBarComponent.prototype, "insertableTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TopBarComponent.prototype, "showsBackButton", void 0);
    TopBarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-topbar',
            templateUrl: './top-bar.component.html',
            styleUrls: ['./top-bar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());
export { TopBarComponent };
//# sourceMappingURL=top-bar.component.js.map