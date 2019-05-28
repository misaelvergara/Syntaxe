import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { IonicModule } from '@ionic/angular';
var TopBarModule = /** @class */ (function () {
    function TopBarModule() {
    }
    TopBarModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                TopBarComponent
            ],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [
                TopBarComponent
            ]
        })
    ], TopBarModule);
    return TopBarModule;
}());
export { TopBarModule };
//# sourceMappingURL=top-bar.module.js.map