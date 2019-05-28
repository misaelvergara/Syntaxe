import * as tslib_1 from "tslib";
/*
  This component sends queries to the QuerySenderService. These queries are then
  prepared to be emitted for the search page to listen to.
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { QuerySenderService } from '../query-sender.service';
import { Router } from '@angular/router';
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(queryService, router) {
        this.queryService = queryService;
        this.router = router;
        this.searchControl = new FormControl();
    }
    BottomBarComponent.prototype.userIsTyping = function () {
        this.queryService.userTypes(true);
    };
    BottomBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges.pipe(debounceTime(875)).subscribe(function (param) {
            /*
            executes newQuery from the QuerySenderService
            takes a parameter which is used to update
            the queryString variable inside the service
            Once the variable is updated, the service emits an event
            for the searchPage to subscribe to
          */
            _this.queryService.newQuery(param);
        });
    };
    BottomBarComponent.prototype.goToSearchPage = function () {
        this.router.navigate(['/search']);
    };
    BottomBarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bottombar',
            templateUrl: './bottom-bar.component.html',
            styleUrls: ['./bottom-bar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuerySenderService,
            Router])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
export { BottomBarComponent };
//# sourceMappingURL=bottom-bar.component.js.map