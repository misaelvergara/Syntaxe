import * as tslib_1 from "tslib";
/*
  This service is responsible for holding all the core data for the component page.
  It holds a main array of data that gets searched by a method called filterItems.
  This method returns an array of results that has an identical structure to the
  main array.
*/
import { Injectable } from '@angular/core';
import ComponentData from '../component/component.data.raw';
var CoreDataService = /** @class */ (function () {
    function CoreDataService() {
        var _this = this;
        this.componentData = new ComponentData();
        this.resultArray = [];
        this.filter = {
            lengthOfDescpt: 150,
            setTitle: true,
            setContent: true,
            setCode: false,
            ask: function (term) {
                _this.resultArray = [];
                _this.filterData(_this.componentData.array, term);
            },
            askForComponent: function (ref) {
                _this.resultArray = [];
                _this.filterForComponent(_this.componentData.array, ref);
            },
            retrieve: function () { return _this.resultArray; },
        };
    }
    CoreDataService.prototype.filterData = function (searchable, term, ref) {
        if (ref === void 0) { ref = []; }
        /*
        searchable[0].name
        <array>[index] returns an object
        <array><index>.name
    
        this method takes a searchable array of objects and modifies a private
        instance array to hold the found results.
        the criteria for finding results consists of taking a term and verifying if
        the property values of an object that is contained inside the searchable
        arrays is identic to the said term
        */
        // length of the searchable array
        var length = searchable.length;
        var obj;
        var foundInContent = false;
        var foundInCode = false;
        var foundInTitle = false;
        /*
          Loops through the existing objects inside the searchable array
        */
        for (var i = 0; i < length; i++) {
            if (this.filter.setTitle) {
                // checks for term in the title property of the object
                foundInTitle = this.checkString(searchable[i].title || '', term);
            }
            if (this.filter.setContent) {
                // checks for term in the body property of the object
                if (searchable[i].hasContent) {
                    foundInContent = this.checkString(searchable[i].body || '', term);
                }
            }
            if (this.filter.setCode) {
                // checks for term in the code property of the object
                foundInCode = this.checkString(searchable[i].code || '', term);
            }
            //checks whether the term was found
            if (foundInContent || foundInTitle || foundInCode) {
                //fills the object with proper properties for the search page to handle       
                obj = {
                    title: searchable[i].title,
                    descpt: searchable[i].hasContent ?
                        searchable[i].body.slice(0, this.filter.lengthOfDescpt) + "..."
                        : '',
                    tree: ref.concat(searchable[i].title)
                };
                //populates the resultArray with proper results
                this.resultArray = this.resultArray.concat(obj);
            }
            /*
                checks if the searchable array has any iterable arrays
            */
            if (searchable[i].hasChildren) {
                /*
                    @ref: is an array passed as reference to the parent element of the
                    searchable array. This reference is but the title of the parant element - of which
                    has child elements - so that the objects of the searchable array will contain a tree
                    property referencing its inheritance.
        
                */
                this.filterData(searchable[i].children, term, ref.concat(searchable[i].title));
            }
        }
    };
    CoreDataService.prototype.filterForComponent = function (searchable, ref, curIteration) {
        if (ref === void 0) { ref = []; }
        if (curIteration === void 0) { curIteration = 0; }
        // length of the searchable array
        var length = searchable.length;
        var obj;
        var foundInTitle = false;
        var term;
        /*
          Loops through the existing objects inside the searchable array
        */
        for (var i = 0; i < length; i++) {
            /*The last key of the array passed through the 'ref' parameter
              is the object we are trying to access through the filterData method.
              Each key in the array, counting down from the last key, represents a
              parent object that contains the target object. That way, a[0] contains a[1]
              and a[1] contains a[2], and so on..*/
            term = ref[curIteration];
            foundInTitle = this.checkString(searchable[i].title || '', term);
            //checks if the term was found
            if (foundInTitle) {
                //checks if the last iteration of the reference array was reached
                if (curIteration == ref.length - 1) {
                    //fills the object with proper properties for the component page to handle
                    obj = {
                        title: searchable[i].title,
                        body: searchable[i].hasContent ? "" + searchable[i].body : 'Página inválida',
                        code: (typeof searchable[i].code === "undefined") ? 'Página inválida' : "" + searchable[i].body,
                        tree: ref
                    };
                    this.resultArray = this.resultArray.concat(obj);
                    console.log(obj);
                }
                else {
                    // else, iterates again, increasing the value of curIteration
                    ++curIteration;
                }
            }
            // checks if the searchable array has any iterable arrays
            if (searchable[i].hasChildren) {
                this.filterForComponent(searchable[i].children, ref, curIteration);
            }
        }
    };
    CoreDataService.prototype.checkString = function (p1, p2) {
        return p1.toLowerCase().indexOf(p2.toLowerCase()) > -1;
    };
    CoreDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CoreDataService);
    return CoreDataService;
}());
export { CoreDataService };
//# sourceMappingURL=core-data.service.js.map