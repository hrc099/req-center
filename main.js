(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_title_job_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-title/job-title.component */ "./src/app/job-title/job-title.component.ts");
/* harmony import */ var _discipline_discipline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discipline/discipline.component */ "./src/app/discipline/discipline.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/legal/legal.component.ts");
/* harmony import */ var _responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsibility/responsibility.component */ "./src/app/responsibility/responsibility.component.ts");
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stack/stack.component */ "./src/app/stack/stack.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'job-title', component: _job_title_job_title_component__WEBPACK_IMPORTED_MODULE_2__["JobTitleComponent"] },
    { path: 'discipline', component: _discipline_discipline_component__WEBPACK_IMPORTED_MODULE_3__["DisciplineComponent"] },
    { path: 'legal', component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__["LegalComponent"] },
    { path: 'responsibility', component: _responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_5__["ResponsibilityComponent"] },
    { path: 'stack', component: _stack_stack_component__WEBPACK_IMPORTED_MODULE_6__["StackComponent"] },
    { path: '', redirectTo: '/job-title', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"center-container columns is-vcentered is-centered\">\n  <div class=\"column is-centered\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'req-center';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _job_title_job_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-title/job-title.component */ "./src/app/job-title/job-title.component.ts");
/* harmony import */ var _discipline_discipline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discipline/discipline.component */ "./src/app/discipline/discipline.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/legal/legal.component.ts");
/* harmony import */ var _responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./responsibility/responsibility.component */ "./src/app/responsibility/responsibility.component.ts");
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stack/stack.component */ "./src/app/stack/stack.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _job_title_job_title_component__WEBPACK_IMPORTED_MODULE_5__["JobTitleComponent"],
                _discipline_discipline_component__WEBPACK_IMPORTED_MODULE_6__["DisciplineComponent"],
                _legal_legal_component__WEBPACK_IMPORTED_MODULE_7__["LegalComponent"],
                _responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_8__["ResponsibilityComponent"],
                _stack_stack_component__WEBPACK_IMPORTED_MODULE_9__["StackComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/discipline.ts":
/*!*******************************!*\
  !*** ./src/app/discipline.ts ***!
  \*******************************/
/*! exports provided: Discipline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discipline", function() { return Discipline; });
var Discipline = /** @class */ (function () {
    function Discipline() {
    }
    Discipline.prototype.getKingdom = function () {
        return this.kingdom;
    };
    Discipline.prototype.getPhylum = function () {
        return this.phylum;
    };
    Discipline.prototype.getDisciplineClass = function () {
        return this.disciplineClass;
    };
    Discipline.prototype.getOrder = function () {
        return this.order;
    };
    Discipline.prototype.getDiscipline = function () {
        return {
            kingdom: this.kingdom,
            phylum: this.phylum,
            disciplineClass: this.disciplineClass,
            order: this.order
        };
    };
    Discipline.prototype.setKingdom = function (kingdom) {
        this.kingdom = kingdom;
    };
    Discipline.prototype.setPhylum = function (phylum) {
        this.phylum = phylum;
    };
    Discipline.prototype.setDisciplineClass = function (disciplineClass) {
        this.disciplineClass = disciplineClass;
    };
    Discipline.prototype.setOrder = function (order) {
        this.order = order;
    };
    return Discipline;
}());



/***/ }),

/***/ "./src/app/discipline/discipline.component.html":
/*!******************************************************!*\
  !*** ./src/app/discipline/discipline.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-card is-centered has-text-centered\">\n  <div class=\"question-card-header\">\n    <span class=\"icon-back\" (click)=back()></span>\n    <img class=\"card-header-logo\" src=\"../assets/logo.png\">\n  </div>\n  <h4 class=\"title is-4 has-text-weight-bold is-uppercase\">Discipline</h4>\n  <form (ngSubmit)=\"submitDiscipline()\" #disciplineForm=\"ngForm\" class=\"discipline-form\">\n    <div class=\"line\">\n      <label for=\"kingdomSelect\">Kingdom: </label>\n      <div class=\"select\">\n        <select name=\"kingdomSelect\" (change)=\"setKingdom($event)\">\n          <option disabled [selected]=!discipline.getKingdom() value>Choose</option>\n          <option value=\"Kingdom 1\">Kingdom 1</option>\n          <option value=\"Kingdom 2\">Kingdom 2</option>\n          <option value=\"Kingdom 3\">Kingdom 3</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <label for=\"phylumSelect\">Phylum: </label>\n      <div class=\"select\">\n        <select name=\"phylumSelect\" (change)=\"setPhylum($event)\">\n          <option disabled [selected]=!discipline.getPhylum() value>Choose</option>\n          <option value=\"option1\">Option 1</option>\n          <option value=\"option2\">Option 2</option>\n          <option value=\"option3\">Option 3</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <label for=\"classSelect\">Class: </label>\n      <div class=\"select\">\n        <select name=\"classSelect\" (change)=\"setDisciplineClass($event)\">\n          <option disabled [selected]=!discipline.getDisciplineClass() value>Choose</option>\n          <option value=\"Class 1\">Class 1</option>\n          <option value=\"Class 2\">Class 2</option>\n          <option value=\"Class 3\">Class 3</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <label for=\"orderSelect\">Order: </label>\n      <div class=\"select\">\n        <select name=\"orderSelect\" (change)=\"setOrder($event)\">\n          <option disabled [selected]=!discipline.getOrder() value>Choose</option>\n          <option value=\"opt_1\">Opt 1</option>\n          <option value=\"opt_2\">Opt 2</option>\n          <option value=\"opt_3\">Opt 3</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <input class=\"button is-primary is-rounded has-text-weight-bold\" type=\"submit\" value=\"Forward\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/discipline/discipline.component.sass":
/*!******************************************************!*\
  !*** ./src/app/discipline/discipline.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaHVzbmphay9EZXNrdG9wL3Byb2plY3RzL3JlcS1jZW50ZXIvc3JjL2FwcC9kaXNjaXBsaW5lL2Rpc2NpcGxpbmUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxjQUFhO0VBQ2IsWUFBVyxFQUFHIiwiZmlsZSI6InNyYy9hcHAvZGlzY2lwbGluZS9kaXNjaXBsaW5lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/discipline/discipline.component.ts":
/*!****************************************************!*\
  !*** ./src/app/discipline/discipline.component.ts ***!
  \****************************************************/
/*! exports provided: DisciplineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplineComponent", function() { return DisciplineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _discipline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../discipline */ "./src/app/discipline.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisciplineComponent = /** @class */ (function () {
    function DisciplineComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.discipline = new _discipline__WEBPACK_IMPORTED_MODULE_3__["Discipline"]();
        var savedDisciplineValues = this.jobService.discipline.getDiscipline();
        this.discipline.setKingdom(savedDisciplineValues.kingdom);
        this.discipline.setPhylum(savedDisciplineValues.phylum);
        this.discipline.setDisciplineClass(savedDisciplineValues.disciplineClass);
        this.discipline.setOrder(savedDisciplineValues.order);
    }
    DisciplineComponent.prototype.ngOnInit = function () {
    };
    DisciplineComponent.prototype.back = function () {
        this.router.navigateByUrl('/job-title');
    };
    DisciplineComponent.prototype.setKingdom = function (event) {
        var kingdom = event.target.value;
        this.discipline.setKingdom(kingdom);
        this.jobService.discipline.setKingdom(kingdom);
    };
    DisciplineComponent.prototype.setPhylum = function (event) {
        var phylum = event.target.value;
        this.discipline.setPhylum(phylum);
        this.jobService.discipline.setPhylum(phylum);
    };
    DisciplineComponent.prototype.setDisciplineClass = function (event) {
        var disciplineClass = event.target.value;
        this.discipline.setDisciplineClass(disciplineClass);
        this.jobService.discipline.setDisciplineClass(disciplineClass);
    };
    DisciplineComponent.prototype.setOrder = function (event) {
        var order = event.target.value;
        this.discipline.setOrder(order);
        this.jobService.discipline.setOrder(order);
    };
    DisciplineComponent.prototype.submitDiscipline = function () {
        this.router.navigateByUrl('/legal');
    };
    DisciplineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discipline',
            template: __webpack_require__(/*! ./discipline.component.html */ "./src/app/discipline/discipline.component.html"),
            styles: [__webpack_require__(/*! ./discipline.component.sass */ "./src/app/discipline/discipline.component.sass")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisciplineComponent);
    return DisciplineComponent;
}());



/***/ }),

/***/ "./src/app/job-title/job-title.component.html":
/*!****************************************************!*\
  !*** ./src/app/job-title/job-title.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-card is-centered has-text-centered\">\n  <figure class=\"image is-128x128\">\n    <img src=\"assets/logo.png\">\n  </figure>\n  <h4 class=\"title is-4 has-text-weight-bold is-uppercase\">Please enter your title</h4>\n  <form (ngSubmit)=\"submitJobTitle()\" #jobForm=\"ngForm\">\n    <div class=\"line\">\n      <input class=\"input is-rounded centered-input\" type=\"text\" placeholder=\"Enter Title\" [(ngModel)]=\"title\">\n    </div>\n    <div class=\"line\">\n      <input class=\"button is-primary is-rounded has-text-weight-bold\" type=\"submit\" value=\"Forward\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/job-title/job-title.component.sass":
/*!****************************************************!*\
  !*** ./src/app/job-title/job-title.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%; }\n\n.question-card {\n  padding: 0px 64px 64px; }\n\n.question-card h4.title {\n    margin-bottom: 20px; }\n\n.question-card form {\n    width: 100%; }\n\n.question-card form .line:last-child {\n      margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaHVzbmphay9EZXNrdG9wL3Byb2plY3RzL3JlcS1jZW50ZXIvc3JjL2FwcC9qb2ItdGl0bGUvam9iLXRpdGxlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsY0FBYTtFQUNiLFlBQVcsRUFBRzs7QUFFaEI7RUFDRSx1QkFBc0IsRUFTSzs7QUFWN0I7SUFJSSxvQkFBbUIsRUFBRzs7QUFKMUI7SUFPSSxZQUFXLEVBR1k7O0FBVjNCO01BVU0saUJBQWdCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9qb2ItdGl0bGUvam9iLXRpdGxlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnF1ZXN0aW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggNjRweCA2NHB4O1xuXG4gIGg0LnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubGluZTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/job-title/job-title.component.ts":
/*!**************************************************!*\
  !*** ./src/app/job-title/job-title.component.ts ***!
  \**************************************************/
/*! exports provided: JobTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTitleComponent", function() { return JobTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobTitleComponent = /** @class */ (function () {
    function JobTitleComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.title = this.jobService.getJobTitle();
    }
    JobTitleComponent.prototype.ngOnInit = function () {
    };
    JobTitleComponent.prototype.submitJobTitle = function () {
        this.jobService.setJobTitle(this.title);
        this.router.navigateByUrl('/discipline');
    };
    JobTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-title',
            template: __webpack_require__(/*! ./job-title.component.html */ "./src/app/job-title/job-title.component.html"),
            styles: [__webpack_require__(/*! ./job-title.component.sass */ "./src/app/job-title/job-title.component.sass")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobTitleComponent);
    return JobTitleComponent;
}());



/***/ }),

/***/ "./src/app/job.service.ts":
/*!********************************!*\
  !*** ./src/app/job.service.ts ***!
  \********************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _discipline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discipline */ "./src/app/discipline.ts");
/* harmony import */ var _legal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legal */ "./src/app/legal.ts");
/* harmony import */ var _responsibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsibility */ "./src/app/responsibility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobService = /** @class */ (function () {
    function JobService() {
        this.discipline = new _discipline__WEBPACK_IMPORTED_MODULE_1__["Discipline"]();
        this.legal = new _legal__WEBPACK_IMPORTED_MODULE_2__["Legal"]();
        this.responsibility = new _responsibility__WEBPACK_IMPORTED_MODULE_3__["Responsibility"]();
        this.stack = [];
    }
    JobService.prototype.getJobTitle = function () {
        return this.jobTitle;
    };
    JobService.prototype.setJobTitle = function (jobTitle) {
        this.jobTitle = jobTitle;
    };
    JobService.prototype.getStack = function () {
        return this.stack;
    };
    JobService.prototype.addToStack = function (skill) {
        this.stack.push(skill);
    };
    JobService.prototype.removeFromStack = function (index) {
        this.stack.splice(index, 1);
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/legal.ts":
/*!**************************!*\
  !*** ./src/app/legal.ts ***!
  \**************************/
/*! exports provided: Legal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legal", function() { return Legal; });
var Legal = /** @class */ (function () {
    function Legal() {
    }
    Legal.prototype.getLocation = function () {
        return this.location;
    };
    Legal.prototype.getIsManagerRole = function () {
        return this.isManagerRole;
    };
    Legal.prototype.getHasRepetitiveMotions = function () {
        return this.hasRepetitiveMotions;
    };
    Legal.prototype.getIsNoisyEnvironment = function () {
        return this.isNoisyEnvironment;
    };
    Legal.prototype.getHasHeavyLifting = function () {
        return this.hasHeavyLifting;
    };
    Legal.prototype.getLegal = function () {
        return {
            location: this.location,
            isManagerRole: this.isManagerRole,
            hasRepetitiveMotions: this.hasRepetitiveMotions,
            isNoisyEnvironment: this.isNoisyEnvironment,
            hasHeavyLifting: this.hasHeavyLifting
        };
    };
    Legal.prototype.setLocation = function (location) {
        this.location = location;
    };
    Legal.prototype.setIsManagerRole = function (isManagerRole) {
        this.isManagerRole = isManagerRole;
    };
    Legal.prototype.setHasRepetitiveMotions = function (hasRepetitiveMotions) {
        this.hasRepetitiveMotions = hasRepetitiveMotions;
    };
    Legal.prototype.setIsNoisyEnvironment = function (isNoisyEnvironment) {
        this.isNoisyEnvironment = isNoisyEnvironment;
    };
    Legal.prototype.setHasHeavyLifting = function (hasHeavyLifting) {
        this.hasHeavyLifting = hasHeavyLifting;
    };
    return Legal;
}());



/***/ }),

/***/ "./src/app/legal/legal.component.html":
/*!********************************************!*\
  !*** ./src/app/legal/legal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-card is-centered has-text-centered\">\n    <div class=\"question-card-header\">\n      <span class=\"icon-back\" (click)=back()></span>\n      <img class=\"card-header-logo\" src=\"../assets/logo.png\">\n    </div>\n    <h4 class=\"title is-4 has-text-weight-bold is-uppercase\">Legal</h4>\n    <form (ngSubmit)=\"submitLegal()\" #legalForm=\"ngForm\" class=\"legal-form\">\n        <div class=\"line\">\n          <label for=\"locationSelect\">Location: </label>\n          <div class=\"select\">\n              <select name=\"locationSelect\" (change)=\"setLocation($event)\" [value]=legal.getLocation()>\n                <option disabled [selected]=!legal.getLocation() value>Choose</option>\n                <option value=\"Zagreb\">Zagreb</option>\n                <option value=\"New York\">New York</option>\n                <option value=\"Tokyo\">Tokyo</option>\n              </select>\n            </div>\n        </div>\n        <div class=\"line\">\n          <label for=\"managerRoleCheckbox\" class=\"checkbox-label\">Manager Role: </label>\n          <input type=\"checkbox\" name=\"managerRoleCheckbox\" (change)=\"setIsManagerRole($event)\" [checked]=\"legal.getIsManagerRole()\" class=\"custom-checkbox\">\n          <span class=\"custom-checkmark\"></span>\n        </div>\n        <div class=\"line\">\n          <label for=\"repetitiveMotionsCheckbox\" class=\"checkbox-label\">Repetitive Motions: </label>\n          <input type=\"checkbox\" name=\"repetitiveMotionsCheckbox\" (change)=\"setHasRepetitiveMotions($event)\" [checked]=\"legal.getHasRepetitiveMotions()\" class=\"custom-checkbox\">\n          <span class=\"custom-checkmark\"></span>\n        </div>\n        <div class=\"line\">\n          <label for=\"noisyEnvironmentCheckbox\" class=\"checkbox-label\">Noisy Environment: </label>\n          <input type=\"checkbox\" name=\"noisyEnvironmentCheckbox\" (change)=\"setIsNoisyEnvironment($event)\" [checked]=\"legal.getIsNoisyEnvironment()\" class=\"custom-checkbox\">\n          <span class=\"custom-checkmark\"></span>\n        </div>\n        <div class=\"line\">\n          <label for=\"heavyLiftingCheckbox\" class=\"checkbox-label\">Heavy Lifting: </label>\n          <input type=\"checkbox\" name=\"heavyLiftingCheckbox\" (change)=\"setHasHeavyLifting($event)\" [checked]=\"legal.getHasHeavyLifting()\" class=\"custom-checkbox\">\n          <span class=\"custom-checkmark\"></span>\n        </div>\n        <div class=\"line\">\n          <input class=\"button is-primary is-rounded has-text-weight-bold\" type=\"submit\" value=\"Forward\">\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/legal/legal.component.sass":
/*!********************************************!*\
  !*** ./src/app/legal/legal.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%; }\n\n.legal-form .line {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaHVzbmphay9EZXNrdG9wL3Byb2plY3RzL3JlcS1jZW50ZXIvc3JjL2FwcC9sZWdhbC9sZWdhbC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGNBQWE7RUFDYixZQUFXLEVBQUc7O0FBRWhCO0VBRUksbUJBQWtCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9sZWdhbC9sZWdhbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sZWdhbC1mb3JtIHtcbiAgLmxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/legal/legal.component.ts":
/*!******************************************!*\
  !*** ./src/app/legal/legal.component.ts ***!
  \******************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _legal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../legal */ "./src/app/legal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LegalComponent = /** @class */ (function () {
    function LegalComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.legal = new _legal__WEBPACK_IMPORTED_MODULE_3__["Legal"]();
    }
    LegalComponent.prototype.ngOnInit = function () {
        var savedLegalValues = this.jobService.legal.getLegal();
        this.legal.setLocation(savedLegalValues.location);
        this.legal.setIsManagerRole(savedLegalValues.isManagerRole);
        this.legal.setHasRepetitiveMotions(savedLegalValues.hasRepetitiveMotions);
        this.legal.setIsNoisyEnvironment(savedLegalValues.isNoisyEnvironment);
        this.legal.setHasHeavyLifting(savedLegalValues.hasHeavyLifting);
    };
    LegalComponent.prototype.back = function () {
        this.router.navigateByUrl('/discipline');
    };
    LegalComponent.prototype.setLocation = function (event) {
        var location = event.target.value;
        this.legal.setLocation(location);
        this.jobService.legal.setLocation(location);
    };
    LegalComponent.prototype.setIsManagerRole = function (event) {
        var isManagerRole = event.currentTarget.checked;
        this.legal.setIsManagerRole(isManagerRole);
        this.jobService.legal.setIsManagerRole(isManagerRole);
    };
    LegalComponent.prototype.setHasRepetitiveMotions = function (event) {
        var hasRepetitiveMotions = event.currentTarget.checked;
        this.legal.setHasRepetitiveMotions(hasRepetitiveMotions);
        this.jobService.legal.setHasRepetitiveMotions(hasRepetitiveMotions);
    };
    LegalComponent.prototype.setIsNoisyEnvironment = function (event) {
        var isNoisyEnvironment = event.currentTarget.checked;
        this.legal.setIsNoisyEnvironment(isNoisyEnvironment);
        this.jobService.legal.setIsNoisyEnvironment(isNoisyEnvironment);
    };
    LegalComponent.prototype.setHasHeavyLifting = function (event) {
        var hasHeavyLifting = event.currentTarget.checked;
        this.legal.setHasHeavyLifting(hasHeavyLifting);
        this.jobService.legal.setHasHeavyLifting(hasHeavyLifting);
    };
    LegalComponent.prototype.submitLegal = function () {
        this.router.navigateByUrl('/responsibility');
    };
    LegalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__(/*! ./legal.component.html */ "./src/app/legal/legal.component.html"),
            styles: [__webpack_require__(/*! ./legal.component.sass */ "./src/app/legal/legal.component.sass")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LegalComponent);
    return LegalComponent;
}());



/***/ }),

/***/ "./src/app/responsibility.ts":
/*!***********************************!*\
  !*** ./src/app/responsibility.ts ***!
  \***********************************/
/*! exports provided: Responsibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Responsibility", function() { return Responsibility; });
var Responsibility = /** @class */ (function () {
    function Responsibility() {
    }
    Responsibility.prototype.getSeniority = function () {
        return this.seniority;
    };
    Responsibility.prototype.getCompanySize = function () {
        return this.companySize;
    };
    Responsibility.prototype.getTeamSize = function () {
        return this.teamSize;
    };
    Responsibility.prototype.getResponsibility = function () {
        return { seniority: this.seniority, companySize: this.companySize, teamSize: this.teamSize };
    };
    Responsibility.prototype.setSeniority = function (seniority) {
        this.seniority = seniority;
    };
    Responsibility.prototype.setCompanySize = function (companySize) {
        this.companySize = companySize;
    };
    Responsibility.prototype.setTeamSize = function (teamSize) {
        this.teamSize = teamSize;
    };
    Responsibility.prototype.setResponsibility = function (responsibility) {
        (this.seniority = responsibility.seniority, this.companySize = responsibility.companySize, this.teamSize = responsibility.teamSize);
    };
    return Responsibility;
}());



/***/ }),

/***/ "./src/app/responsibility/responsibility.component.html":
/*!**************************************************************!*\
  !*** ./src/app/responsibility/responsibility.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-card is-centered has-text-centered\">\n  <div class=\"question-card-header\">\n    <span class=\"icon-back\" (click)=back()></span>\n    <img class=\"card-header-logo\" src=\"../assets/logo.png\">\n  </div>\n  <h4 class=\"title is-4 has-text-weight-bold is-uppercase\">Responsibility</h4>\n  <form (ngSubmit)=\"submitResponsibility()\" #responsibilityForm=\"ngForm\" class=\"responsibility-form\">\n    <div class=\"line\">\n      <label for=\"senioritySelect\">Seniority: </label>\n      <div class=\"select\">\n        <select name=\"senioritySelect\" (change)=\"setSeniority($event)\">\n          <option disabled [selected]=!responsibility.getSeniority() value>Choose</option>\n          <option value=\"Student\">Student</option>\n          <option value=\"Junior\">Junior</option>\n          <option value=\"Mid\">Mid</option>\n          <option value=\"Senior\">Senior</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <label for=\"teamSizeSelect\">Team Size: </label>\n      <div class=\"select\">\n        <select name=\"teamSizeSelect\" (change)=\"setTeamSize($event)\">\n          <option disabled [selected]=!responsibility.getTeamSize() value>Choose</option>\n          <option value=\"3\">3 people</option>\n          <option value=\"4\">4 people</option>\n          <option value=\"5\">5 people</option>\n          <option value=\"6\">6 people</option>\n          <option value=\"7\">7 people</option>\n          <option value=\"8\">8 people</option>\n          <option value=\"9\">9+ people</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <label for=\"companySizeSelect\">Company Size: </label>\n      <div class=\"select\">\n        <select name=\"companySizeSelect\" (change)=\"setCompanySize($event)\">\n          <option disabled [selected]=!responsibility.getCompanySize() value>Choose</option>\n          <option value=\"small\">1 - 20</option>\n          <option value=\"medium\">20 - 70</option>\n          <option value=\"large\">70+</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"line\">\n      <input class=\"button is-primary is-rounded has-text-weight-bold\" type=\"submit\" value=\"Forward\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/responsibility/responsibility.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/responsibility/responsibility.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaHVzbmphay9EZXNrdG9wL3Byb2plY3RzL3JlcS1jZW50ZXIvc3JjL2FwcC9yZXNwb25zaWJpbGl0eS9yZXNwb25zaWJpbGl0eS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGNBQWE7RUFDYixZQUFXLEVBQUciLCJmaWxlIjoic3JjL2FwcC9yZXNwb25zaWJpbGl0eS9yZXNwb25zaWJpbGl0eS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/responsibility/responsibility.component.ts":
/*!************************************************************!*\
  !*** ./src/app/responsibility/responsibility.component.ts ***!
  \************************************************************/
/*! exports provided: ResponsibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibilityComponent", function() { return ResponsibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _responsibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responsibility */ "./src/app/responsibility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponsibilityComponent = /** @class */ (function () {
    function ResponsibilityComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.responsibility = new _responsibility__WEBPACK_IMPORTED_MODULE_3__["Responsibility"]();
    }
    ResponsibilityComponent.prototype.ngOnInit = function () {
        var savedResponsibilityValues = this.jobService.responsibility.getResponsibility();
        this.responsibility.setSeniority(savedResponsibilityValues.seniority);
        this.responsibility.setTeamSize(savedResponsibilityValues.teamSize);
        this.responsibility.setCompanySize(savedResponsibilityValues.companySize);
    };
    ResponsibilityComponent.prototype.back = function () {
        this.router.navigateByUrl('legal');
    };
    ResponsibilityComponent.prototype.setSeniority = function (event) {
        var seniority = event.target.value;
        this.responsibility.setSeniority(seniority);
        this.jobService.responsibility.setSeniority(seniority);
    };
    ResponsibilityComponent.prototype.setTeamSize = function (event) {
        var teamSize = event.target.value;
        this.responsibility.setTeamSize(teamSize);
        this.jobService.responsibility.setTeamSize(teamSize);
    };
    ResponsibilityComponent.prototype.setCompanySize = function (event) {
        var companySize = event.target.value;
        this.responsibility.setCompanySize(companySize);
        this.jobService.responsibility.setCompanySize(companySize);
    };
    ResponsibilityComponent.prototype.submitResponsibility = function () {
        this.router.navigateByUrl('/stack');
    };
    ResponsibilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responsibility',
            template: __webpack_require__(/*! ./responsibility.component.html */ "./src/app/responsibility/responsibility.component.html"),
            styles: [__webpack_require__(/*! ./responsibility.component.sass */ "./src/app/responsibility/responsibility.component.sass")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResponsibilityComponent);
    return ResponsibilityComponent;
}());



/***/ }),

/***/ "./src/app/stack/stack.component.html":
/*!********************************************!*\
  !*** ./src/app/stack/stack.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-card is-centered has-text-centered\">\n  <div class=\"question-card-header\">\n    <span class=\"icon-back\" (click)=back()></span>\n    <img class=\"card-header-logo\" src=\"../assets/logo.png\">\n  </div>\n  <h4 class=\"title is-4 has-text-weight-bold is-uppercase\">Stack</h4>\n  <form #stackForm=\"ngForm\" class=\"stack-form\">\n    <div class=\"skill-input-container\">\n      <input type=\"text\" class=\"input\" #skillInput placeholder=\"Type to add new skills\" (keydown.enter)=\"addToStack(skillInput.value);skillInput.value=''\" autofocus>\n      <button class=\"button is-small is-outlined is-rounded\" (click)=\"addToStack(skillInput.value)\" [hidden]=\"!skillInput.value\">Add</button>\n    </div>\n    <div class=\"skill-stack-tags\" #tags>\n      <span class=\"tag is-rounded custom-tag\" *ngFor=\"let skill of stack; let i = index\">\n        {{ skill }}\n        <button class=\"delete is-small\" (click)=\"removeFromStack(i)\"></button>\n      </span>\n    </div>\n    <div class=\"line\">\n      <input class=\"button is-primary is-rounded has-text-weight-bold\" type=\"submit\" value=\"Forward\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/stack/stack.component.sass":
/*!********************************************!*\
  !*** ./src/app/stack/stack.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%; }\n\n.stack-form input[type=text] {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  padding-left: 0; }\n\n.stack-form input[type=text]:focus {\n    border: none;\n    outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaHVzbmphay9EZXNrdG9wL3Byb2plY3RzL3JlcS1jZW50ZXIvc3JjL2FwcC9zdGFjay9zdGFjay5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGNBQWE7RUFDYixZQUFXLEVBQUc7O0FBRWhCO0VBRUksYUFBWTtFQUNaLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFJSzs7QUFUeEI7SUFRTSxhQUFZO0lBQ1osY0FBYSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvc3RhY2svc3RhY2suY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uc3RhY2stZm9ybSB7XG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lOyB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/stack/stack.component.ts":
/*!******************************************!*\
  !*** ./src/app/stack/stack.component.ts ***!
  \******************************************/
/*! exports provided: StackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StackComponent = /** @class */ (function () {
    function StackComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.stack = [];
    }
    StackComponent.prototype.ngOnInit = function () {
        var savedStack = this.jobService.getStack();
        this.stack = savedStack.slice();
    };
    StackComponent.prototype.ngAfterViewInit = function () {
        this.tagsDiv.nativeElement.scrollTop = this.tagsDiv.nativeElement.scrollHeight;
    };
    StackComponent.prototype.back = function () {
        this.router.navigateByUrl('responsibility');
    };
    StackComponent.prototype.addToStack = function (skill) {
        if (skill) {
            this.stack.push(skill);
            this.jobService.addToStack(skill);
            this.tagsDiv.nativeElement.scrollTop = this.tagsDiv.nativeElement.scrollHeight;
        }
    };
    StackComponent.prototype.removeFromStack = function (i) {
        this.stack.splice(i, 1);
        this.jobService.removeFromStack(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tags'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StackComponent.prototype, "tagsDiv", void 0);
    StackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stack',
            template: __webpack_require__(/*! ./stack.component.html */ "./src/app/stack/stack.component.html"),
            styles: [__webpack_require__(/*! ./stack.component.sass */ "./src/app/stack/stack.component.sass")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StackComponent);
    return StackComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hhusnjak/Desktop/projects/req-center/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map