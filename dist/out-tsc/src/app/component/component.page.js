import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import Data from './componentdata';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreDataService } from '../dependency/core-data.service';
var ComponentPage = /** @class */ (function () {
    function ComponentPage(route, router, coreData) {
        this.route = route;
        this.router = router;
        this.coreData = coreData;
        /* instantiates the Data class */
        this.expandsCode = false;
        this.data = new Data();
        /* angular template settings
          @explanation: strings that are interpolated in the template */
        this.contentTitle = this.data.JavaScript['Tipos de Dados']['Dados Complexos'].object.title;
        this.headerCode = this.data.JavaScript['Tipos de Dados']['Dados Complexos'].object.code;
        this.contentBody = this.data.JavaScript['Tipos de Dados']['Dados Complexos'].object.body;
        this.customActionSheetOptions = {
            header: 'Linguagem atual',
            subHeader: 'Selecione outra linguagem para este conteúdo'
        };
    }
    ComponentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            try {
                var myArray = params.getAll('array');
                var formattedArray = myArray[0].replace(/'/gi, "\"");
                formattedArray = JSON.parse(formattedArray);
                console.log(formattedArray);
                _this.coreData.filter.askForComponent(formattedArray);
            }
            catch (e) { }
        });
    };
    ComponentPage = tslib_1.__decorate([
        Component({
            selector: 'app-component',
            templateUrl: './component.page.html',
            styleUrls: ['./component.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            CoreDataService])
    ], ComponentPage);
    return ComponentPage;
}());
export { ComponentPage };
//# sourceMappingURL=component.page.js.map