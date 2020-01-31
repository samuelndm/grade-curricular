(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-ajuda-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajuda/ajuda.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajuda/ajuda.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-ajuda></app-nav-ajuda>\r\n\r\n<div class=\"ajudaContainer\">\r\n    <h1>Email - samuelnmoura2@gmail.com</h1>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajuda/nav-ajuda/nav-ajuda.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajuda/nav-ajuda/nav-ajuda.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navContainer\">\r\n    <a (click)=\"onSelectVoltar()\" class=\"navLink\">\r\n        <p class=\"textLink\">Voltar</p>\r\n    </a>\r\n</div>");

/***/ }),

/***/ "./src/app/ajuda/ajuda-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ajuda/ajuda-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AjudaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaRoutingModule", function() { return AjudaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ajuda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajuda.component */ "./src/app/ajuda/ajuda.component.ts");




const routes = [{ path: '', component: _ajuda_component__WEBPACK_IMPORTED_MODULE_3__["AjudaComponent"] }];
let AjudaRoutingModule = class AjudaRoutingModule {
};
AjudaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AjudaRoutingModule);



/***/ }),

/***/ "./src/app/ajuda/ajuda.component.css":
/*!*******************************************!*\
  !*** ./src/app/ajuda/ajuda.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ajudaContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 86vh;\r\n    background-color: #E4E4E4;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWp1ZGEvYWp1ZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYWp1ZGEvYWp1ZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hanVkYUNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4NnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ajuda/ajuda.component.ts":
/*!******************************************!*\
  !*** ./src/app/ajuda/ajuda.component.ts ***!
  \******************************************/
/*! exports provided: AjudaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaComponent", function() { return AjudaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AjudaComponent = class AjudaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AjudaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajuda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ajuda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajuda/ajuda.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ajuda.component.css */ "./src/app/ajuda/ajuda.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AjudaComponent);



/***/ }),

/***/ "./src/app/ajuda/ajuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.module.ts ***!
  \***************************************/
/*! exports provided: AjudaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaModule", function() { return AjudaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ajuda_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajuda-routing.module */ "./src/app/ajuda/ajuda-routing.module.ts");
/* harmony import */ var _ajuda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajuda.component */ "./src/app/ajuda/ajuda.component.ts");
/* harmony import */ var _nav_ajuda_nav_ajuda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-ajuda/nav-ajuda.component */ "./src/app/ajuda/nav-ajuda/nav-ajuda.component.ts");






let AjudaModule = class AjudaModule {
};
AjudaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ajuda_component__WEBPACK_IMPORTED_MODULE_4__["AjudaComponent"], _nav_ajuda_nav_ajuda_component__WEBPACK_IMPORTED_MODULE_5__["NavAjudaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ajuda_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjudaRoutingModule"]
        ]
    })
], AjudaModule);



/***/ }),

/***/ "./src/app/ajuda/nav-ajuda/nav-ajuda.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ajuda/nav-ajuda/nav-ajuda.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n    height: 7vh;\r\n    width: 100vw;\r\n    background-color: rgb(52, 58, 64);\r\n}\r\n\r\n.navLink {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    width: 15%;\r\n    \r\n    cursor: pointer;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.navLink:hover {\r\n    background-color: rgb(52, 58, 64, 0.7);\r\n}\r\n\r\n.textLink {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 120%;\r\n    color: white;\r\n    text-shadow: 0.6px 0.6px 0.6px black;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWp1ZGEvbmF2LWFqdWRhL25hdi1hanVkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsdUJBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVOztJQUVWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL25hdi1hanVkYS9uYXYtYWp1ZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDU4LCA2NCk7XHJcbn1cclxuXHJcbi5uYXZMaW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2TGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDU4LCA2NCwgMC43KTtcclxufVxyXG5cclxuLnRleHRMaW5rIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuNnB4IDAuNnB4IDAuNnB4IGJsYWNrO1xyXG59XHJcblxyXG4qIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ajuda/nav-ajuda/nav-ajuda.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ajuda/nav-ajuda/nav-ajuda.component.ts ***!
  \********************************************************/
/*! exports provided: NavAjudaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAjudaComponent", function() { return NavAjudaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let NavAjudaComponent = class NavAjudaComponent {
    constructor(_location) {
        this._location = _location;
    }
    onSelectVoltar() {
        this._location.back();
    }
    ngOnInit() {
    }
};
NavAjudaComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
NavAjudaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-ajuda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-ajuda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajuda/nav-ajuda/nav-ajuda.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-ajuda.component.css */ "./src/app/ajuda/nav-ajuda/nav-ajuda.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], NavAjudaComponent);



/***/ })

}]);
//# sourceMappingURL=ajuda-ajuda-module-es2015.js.map