(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipe-equipe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/equipe.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/equipe.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-equipe></app-nav-equipe>\r\n\r\n<div class=\"equipeContainer\">\r\n\r\n    <div class=\"equipeDetalhes\">\r\n    <h1 class=\"tituloEquipe\">\r\n        Equipe\r\n    </h1>\r\n\r\n    <div class=\"equipe\">\r\n        <div class=\"avatarContainer\">\r\n            <img class=\"avatar\" src=\"../../assets/img/foto1.webp\">\r\n            <p class=\"nomeAvatar\">Samuel Novaes</p>\r\n            <p class=\"textAvatar\">Desenvolvedor Front-End</p>\r\n        </div>\r\n        <div class=\"avatarContainer\">\r\n            <img class=\"avatar\" src=\"../../assets/img/foto2.webp\">\r\n            <p class=\"nomeAvatar\">Samuel Novaes</p>\r\n            <p class=\"textAvatar\">Desenvolvedor Back-End</p>\r\n        </div>\r\n        <div class=\"avatarContainer\">\r\n            <img class=\"avatar\" src=\"../../assets/img/foto3.webp\">\r\n            <p class=\"nomeAvatar\">Samuel Novaes</p>\r\n            <p class=\"textAvatar\">Designer</p>\r\n        </div>\r\n        <div class=\"avatarContainer\">\r\n            <img class=\"avatar-stack\" src=\"../../assets/img/foto4.webp\">\r\n            \r\n            <p class=\"textAvatar\">Desenvolvedor FullStack</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/nav-equipe/nav-equipe.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/nav-equipe/nav-equipe.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navContainer\">\r\n    <a (click)=\"onSelectVoltar()\" class=\"navLink\">\r\n        <p class=\"textLink\">Voltar</p>\r\n    </a>\r\n</div>");

/***/ }),

/***/ "./src/app/equipe/equipe-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/equipe/equipe-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EquipeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeRoutingModule", function() { return EquipeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _equipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipe.component */ "./src/app/equipe/equipe.component.ts");




const routes = [{ path: '', component: _equipe_component__WEBPACK_IMPORTED_MODULE_3__["EquipeComponent"] }];
let EquipeRoutingModule = class EquipeRoutingModule {
};
EquipeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EquipeRoutingModule);



/***/ }),

/***/ "./src/app/equipe/equipe.component.css":
/*!*********************************************!*\
  !*** ./src/app/equipe/equipe.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".equipeContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 86vh;\r\n    width: 100vw;\r\n    background-color: #E4E4E4;\r\n}\r\n\r\n.equipeDetalhes {\r\n    height: 50vh;\r\n}\r\n\r\n.tituloEquipe {\r\n    width: 100vw;\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 60px;\r\n    text-align: center;\r\n    color: rgb(85, 85, 85);\r\n    text-shadow: 1px 1px 1px rgb(190, 190, 190);\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n.equipe {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    width: 100vw;\r\n}\r\n\r\n.avatarContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin: 5%;\r\n}\r\n\r\n.nomeAvatar {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.textAvatar {\r\n    text-align: center;\r\n}\r\n\r\n.avatar {\r\n    width: 130px;\r\n    height: 130px;\r\n    border-radius: 50%;\r\n    \r\n}\r\n\r\n.avatar-stack {\r\n    width: 200px;\r\n    height: 110px;\r\n    margin-bottom: 15%;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBlL2VxdWlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsMkNBQTJDO0lBQzNDLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZXF1aXBlL2VxdWlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVxdWlwZUNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDg2dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNEU0O1xyXG59XHJcblxyXG4uZXF1aXBlRGV0YWxoZXMge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4udGl0dWxvRXF1aXBlIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbi5lcXVpcGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLmF2YXRhckNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5ub21lQXZhdGFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGV4dEF2YXRhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG59XHJcblxyXG4uYXZhdGFyLXN0YWNrIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcbioge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/equipe/equipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/equipe/equipe.component.ts ***!
  \********************************************/
/*! exports provided: EquipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeComponent", function() { return EquipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EquipeComponent = class EquipeComponent {
    constructor() { }
    ngOnInit() {
    }
};
EquipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-equipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./equipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/equipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./equipe.component.css */ "./src/app/equipe/equipe.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EquipeComponent);



/***/ }),

/***/ "./src/app/equipe/equipe.module.ts":
/*!*****************************************!*\
  !*** ./src/app/equipe/equipe.module.ts ***!
  \*****************************************/
/*! exports provided: EquipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeModule", function() { return EquipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _equipe_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipe-routing.module */ "./src/app/equipe/equipe-routing.module.ts");
/* harmony import */ var _equipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipe.component */ "./src/app/equipe/equipe.component.ts");
/* harmony import */ var _nav_equipe_nav_equipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-equipe/nav-equipe.component */ "./src/app/equipe/nav-equipe/nav-equipe.component.ts");






let EquipeModule = class EquipeModule {
};
EquipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_equipe_component__WEBPACK_IMPORTED_MODULE_4__["EquipeComponent"], _nav_equipe_nav_equipe_component__WEBPACK_IMPORTED_MODULE_5__["NavEquipeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _equipe_routing_module__WEBPACK_IMPORTED_MODULE_3__["EquipeRoutingModule"]
        ]
    })
], EquipeModule);



/***/ }),

/***/ "./src/app/equipe/nav-equipe/nav-equipe.component.css":
/*!************************************************************!*\
  !*** ./src/app/equipe/nav-equipe/nav-equipe.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n    height: 7vh;\r\n    width: 100vw;\r\n    background-color: rgb(52, 58, 64);\r\n}\r\n\r\n.navLink {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    width: 15%;\r\n    \r\n    cursor: pointer;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.navLink:hover {\r\n    background-color: rgb(52, 58, 64, 0.7);\r\n}\r\n\r\n.textLink {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 120%;\r\n    color: white;\r\n    text-shadow: 0.6px 0.6px 0.6px black;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBlL25hdi1lcXVpcGUvbmF2LWVxdWlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsdUJBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVOztJQUVWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwZS9uYXYtZXF1aXBlL25hdi1lcXVpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDU4LCA2NCk7XHJcbn1cclxuXHJcbi5uYXZMaW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2TGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDU4LCA2NCwgMC43KTtcclxufVxyXG5cclxuLnRleHRMaW5rIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuNnB4IDAuNnB4IDAuNnB4IGJsYWNrO1xyXG59XHJcblxyXG4qIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/equipe/nav-equipe/nav-equipe.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/equipe/nav-equipe/nav-equipe.component.ts ***!
  \***********************************************************/
/*! exports provided: NavEquipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavEquipeComponent", function() { return NavEquipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let NavEquipeComponent = class NavEquipeComponent {
    constructor(_location) {
        this._location = _location;
    }
    onSelectVoltar() {
        this._location.back();
    }
    ngOnInit() {
    }
};
NavEquipeComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
NavEquipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-equipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-equipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/nav-equipe/nav-equipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-equipe.component.css */ "./src/app/equipe/nav-equipe/nav-equipe.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], NavEquipeComponent);



/***/ })

}]);
//# sourceMappingURL=equipe-equipe-module-es2015.js.map