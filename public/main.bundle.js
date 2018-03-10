webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-list/add-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form (ngSubmit)=\"onSubmit()\">\n    <div>\n      <label for=\"description\">Description:</label>\n      <input type=\"text\" [(ngModel)]=\"newList.description\" name=\"description\" required>\n    </div>\n\n    <div>\n      <label for=\"dueDate\">Due date:</label>\n      <input type=\"text\" [(ngModel)]=\"newList.dueDate\" name=\"dueDate\">\n    </div>\n\n    <button type=\"submit\">Submit</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddListComponent = /** @class */ (function () {
    function AddListComponent(listServ) {
        this.listServ = listServ;
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    AddListComponent.prototype.ngOnInit = function () {
        this.newList = {
            description: '',
            isChecked: false,
            dueDate: '',
            _id: ''
        };
    };
    AddListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.listServ.addList(this.newList).subscribe(function (response) {
            console.log(response);
            if (response.success) {
                _this.addList.emit(_this.newList);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AddListComponent.prototype, "addList", void 0);
    AddListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-list',
            template: __webpack_require__("./src/app/add-list/add-list.component.html"),
            styles: [__webpack_require__("./src/app/add-list/add-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]])
    ], AddListComponent);
    return AddListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{title}}!\n  </h1>\n\n  <app-view-list> </app-view-list>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Welcome to the TODO List Application';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_list_add_list_component__ = __webpack_require__("./src/app/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_list_view_list_component__ = __webpack_require__("./src/app/view-list/view-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_list_add_list_component__["a" /* AddListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__view_list_view_list_component__["a" /* ViewListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_list_service__["a" /* ListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    ListService.prototype.getAllLists = function () {
        var URI = this.serverApi + "/todoList/";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.lists; });
    };
    ListService.prototype.addList = function (list) {
        var URI = this.serverApi + "/todoList/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        var body = JSON.stringify({ description: list.description, isChecked: list.isChecked, dueDate: list.dueDate });
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.deleteList = function (listId) {
        var URI = this.serverApi + "/todoList/" + listId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/view-list/view-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-list/view-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> TODO List App </h2>\n\n  <!-- Table starts here -->\n  <table id=\"table\">\n      <thead>\n        <tr>\n          <th>Done</th>\n          <th>Description</th>\n          <th>Due date</th>\n          <th>Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let list of lists\">\n          <td><input type=\"checkbox\" value=\"{{list.isChecked}}\" /></td>\n          <td>{{list.description}}</td>\n          <td>{{list.dueDate}}</td>\n          <td><button type=\"button\" (click)=\"deleteList(list); $event.stopPropagation();\">Delete</button></td>\n        </tr>\n      </tbody>\n   </table>\n\n   <app-add-list (addList)='onAddList($event)'> </app-add-list>\n"

/***/ }),

/***/ "./src/app/view-list/view-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewListComponent = /** @class */ (function () {
    function ViewListComponent(listServ) {
        this.listServ = listServ;
        // lists property which is an array of List type
        this.lists = [];
        this.stubList = {
            description: 'Test',
            isChecked: false,
            dueDate: '00/00/0000',
            _id: '0'
        };
    }
    ViewListComponent.prototype.ngOnInit = function () {
        this.lists = [this.stubList];
        // Load all list on init
        this.loadLists();
    };
    ViewListComponent.prototype.loadLists = function () {
        var _this = this;
        // Get all lists from server and update the lists property
        this.listServ.getAllLists().subscribe(function (response) { return _this.lists = response.concat(_this.stubList); });
    };
    // deleteList. The deleted list is being filtered out using the .filter method
    ViewListComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listServ.deleteList(list._id).subscribe(function (response) { return _this.lists = _this.lists.filter(function (lists) { return lists !== list; }); });
    };
    ViewListComponent.prototype.onAddList = function (newList) {
        // this.lists = this.lists.concat(newList);
        this.loadLists();
    };
    ViewListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-view-list',
            template: __webpack_require__("./src/app/view-list/view-list.component.html"),
            styles: [__webpack_require__("./src/app/view-list/view-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]])
    ], ViewListComponent);
    return ViewListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map