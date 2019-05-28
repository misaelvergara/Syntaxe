import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './bottom-bar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var BottomBarModule = /** @class */ (function () {
    function BottomBarModule() {
    }
    BottomBarModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                BottomBarComponent
            ],
            imports: [
                CommonModule,
                IonicModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: [
                BottomBarComponent
            ]
        })
    ], BottomBarModule);
    return BottomBarModule;
}());
export { BottomBarModule };
//# sourceMappingURL=bottom-bar.module.js.map