import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentPage } from './component.page';
import { TopBarModule } from '../dependency/topbar/top-bar.module';
var routes = [
    {
        path: '',
        component: ComponentPage
    },
    {
        path: ':array',
        component: ComponentPage
    }
];
var ComponentPageModule = /** @class */ (function () {
    function ComponentPageModule() {
    }
    ComponentPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TopBarModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ComponentPage]
        })
    ], ComponentPageModule);
    return ComponentPageModule;
}());
export { ComponentPageModule };
//# sourceMappingURL=component.module.js.map