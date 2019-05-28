import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewController } from '@ionic/core';
var PopupComponent = /** @class */ (function () {
    function PopupComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopupComponent.prototype.ngOnInit = function () { };
    PopupComponent.prototype.close = function () {
        this.viewCtrl._destroy();
    };
    PopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-popup',
            templateUrl: './popup.component.html',
            styleUrls: ['./popup.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ViewController])
    ], PopupComponent);
    return PopupComponent;
}());
export { PopupComponent };
//# sourceMappingURL=popup.component.js.map