(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curso-curso-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/curso.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curso/curso.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/fluxog/fluxog.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curso/fluxog/fluxog.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<div class=\"fluxogContainer\">\r\n    <div *ngIf=\"curso\" class=\"row\" [style.width.px]=\"widthFluxograma\">\r\n\r\n        <div *ngFor=\"let periodo of gradeCurso\">\r\n\r\n            <p id=\"periodo-box\" class=\"border border-black rounded\">{{periodo.periodo}}° Semestre</p>\r\n            <div *ngFor=\"let materia of periodo.materias\">\r\n                <div>\r\n                    <a id=\"nome-box\" (mouseenter)=\"updateGradeColorOnOver(materia)\" (mouseleave)=\"resetGradeColor()\" [ngStyle]=\"{ \r\n                        'background-color': materia.cor.background, \r\n                        'color': materia.cor.texto,\r\n                        'border': materia.cor.border,\r\n                        'text-shadow': materia.cor.shadowColor\r\n                        }\">\r\n                        <div id=\"text-center\">\r\n                            {{materia.nome}}\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n<div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/minhagrade/minhagrade.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curso/minhagrade/minhagrade.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<div class=\"minhaGradeContainer\">\r\n    <div *ngIf=\"curso\" class=\"row\" [style.width.px]=\"widthMinhaGrade\">\r\n\r\n        <div *ngFor=\"let periodo of gradeCurso\">\r\n\r\n            <a id=\"periodo-box\" (click)=\"updatePeriodoColor(periodo.periodo)\"  class=\"border border-black rounded\">{{periodo.periodo}}° Semestre</a>\r\n            <div *ngFor=\"let materia of periodo.materias\">\r\n                <div>\r\n                    <a id=\"nome-box\" (click)=\"updateGradeColor(materia)\" [ngStyle]=\"{ \r\n                        'background-color': materia.cor.background, \r\n                        'color': materia.cor.texto,\r\n\r\n                        'text-shadow': materia.cor.shadowColor\r\n                        }\">\r\n                        <div id=\"text-center\">\r\n                            {{materia.nome}}\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n<div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/nav/nav.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curso/nav/nav.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"curso\" class=\"navContainer\">\r\n    <div class=\"navBarContainer\">\r\n\r\n        <nav class=\"navMenuContainer\">\r\n            <a (click)=\"onSelectVoltar()\" class=\"navMenuLink\">\r\n                <p  class=\"textMenuContainer\">Voltar</p>\r\n            </a>\r\n            <a (click)=\"onSelectFluxograma(idCurso)\" class=\"navMenuLink\">\r\n                <p class=\"textMenuContainer\">Fluxograma</p>\r\n            </a>\r\n            <a (click)=\"onSelectMinhaGrade(idCurso)\" class=\"lastNavMenuLink\">\r\n                <p class=\"textMenuContainer\">Minha Grade</p>\r\n            </a>\r\n            \r\n        </nav>\r\n\r\n        \r\n            <p class=\"nomeCurso\">\r\n                {{nomeCurso}} ({{tipoCurso}}) - {{turnoCurso}}\r\n            </p>\r\n\r\n    </div>\r\n    <a (click)=\"onSelectFaculdade(idFaculdade)\" class=\"navFaculdadeInfo\">\r\n        <img src=\"./assets/img/{{idLogoFaculdade}}.webp\" alt=\"Logo Faculdade\" class=\"logoFaculdade-nav\">\r\n\r\n        <div class=\"faculdade-nav\">\r\n\r\n            <p class=\"nomeFaculdade-nav\">{{nomeFaculdade}} </p>\r\n            <p class=\"campusFaculdade-nav\">Campus - {{campusFaculdade}}</p>\r\n        </div>\r\n    </a>\r\n</div>");

/***/ }),

/***/ "./src/app/curso/curso-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/curso/curso-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CursoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoRoutingModule", function() { return CursoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _curso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curso.component */ "./src/app/curso/curso.component.ts");
/* harmony import */ var _fluxog_fluxog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fluxog/fluxog.component */ "./src/app/curso/fluxog/fluxog.component.ts");
/* harmony import */ var _minhagrade_minhagrade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minhagrade/minhagrade.component */ "./src/app/curso/minhagrade/minhagrade.component.ts");






const routes = [
    { path: '', component: _curso_component__WEBPACK_IMPORTED_MODULE_3__["CursoComponent"] },
    { path: 'fluxograma/:id', component: _fluxog_fluxog_component__WEBPACK_IMPORTED_MODULE_4__["FluxogComponent"] },
    { path: 'minhagrade/:id', component: _minhagrade_minhagrade_component__WEBPACK_IMPORTED_MODULE_5__["MinhagradeComponent"] }
];
let CursoRoutingModule = class CursoRoutingModule {
};
CursoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CursoRoutingModule);



/***/ }),

/***/ "./src/app/curso/curso.component.css":
/*!*******************************************!*\
  !*** ./src/app/curso/curso.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvL2N1cnNvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/curso/curso.component.ts":
/*!******************************************!*\
  !*** ./src/app/curso/curso.component.ts ***!
  \******************************************/
/*! exports provided: CursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoComponent", function() { return CursoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CursoComponent = class CursoComponent {
    constructor() { }
    ngOnInit() {
    }
};
CursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-curso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/curso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./curso.component.css */ "./src/app/curso/curso.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CursoComponent);



/***/ }),

/***/ "./src/app/curso/curso.module.ts":
/*!***************************************!*\
  !*** ./src/app/curso/curso.module.ts ***!
  \***************************************/
/*! exports provided: CursoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoModule", function() { return CursoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _curso_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curso-routing.module */ "./src/app/curso/curso-routing.module.ts");
/* harmony import */ var _curso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curso.component */ "./src/app/curso/curso.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/curso/nav/nav.component.ts");
/* harmony import */ var _fluxog_fluxog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fluxog/fluxog.component */ "./src/app/curso/fluxog/fluxog.component.ts");
/* harmony import */ var _minhagrade_minhagrade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minhagrade/minhagrade.component */ "./src/app/curso/minhagrade/minhagrade.component.ts");









let CursoModule = class CursoModule {
};
CursoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _curso_component__WEBPACK_IMPORTED_MODULE_5__["CursoComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
            _fluxog_fluxog_component__WEBPACK_IMPORTED_MODULE_7__["FluxogComponent"],
            _minhagrade_minhagrade_component__WEBPACK_IMPORTED_MODULE_8__["MinhagradeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _curso_routing_module__WEBPACK_IMPORTED_MODULE_4__["CursoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], CursoModule);



/***/ }),

/***/ "./src/app/curso/fluxog/fluxog.component.css":
/*!***************************************************!*\
  !*** ./src/app/curso/fluxog/fluxog.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.fluxogContainer {\r\n    background-color: rgb(228, 228, 228);\r\n    overflow-y: auto;\r\n    height:83vh;\r\n    width: 100vw;\r\n    padding-left: 1vw;\r\n}\r\n\r\n.row {\r\n    margin: 1px;\r\n    margin-top: 3px;\r\n}\r\n\r\n#periodo-box {\r\n    display: block;\r\n    background-color: white;\r\n    width: 135px;\r\n    height: 25px;\r\n    padding-bottom: 10px;\r\n    margin: 8px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 11pt;\r\n    \r\n    \r\n    cursor: default;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n#nome-box {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    width: 135px;\r\n    height: 90px;\r\n    margin: 8px;\r\n    padding: 2%;\r\n    border-radius: 5px;\r\n    \r\n    \r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n\r\n}\r\n\r\n#text-center {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 77%;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vyc28vZmx1eG9nL2ZsdXhvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTs7O0lBR2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjs7O0lBR2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7O0FBRXpCOztBQUdBO0lBQ0kseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvL2ZsdXhvZy9mbHV4b2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmx1eG9nQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6ODN2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4jcGVyaW9kby1ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jbm9tZS1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuI3RleHQtY2VudGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA3NyU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/curso/fluxog/fluxog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/curso/fluxog/fluxog.component.ts ***!
  \**************************************************/
/*! exports provided: FluxogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxogComponent", function() { return FluxogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");




let FluxogComponent = class FluxogComponent {
    constructor(dataService, _router, _activatedRoute) {
        this.dataService = dataService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.widthMateria = 152;
        this.corPadrao = {
            "background": "white",
            "texto": "black",
            "shadowColor": "none",
            "border": "1px solid rgb(206, 206, 206)"
        };
        this.corSelecionado = {
            // "background": "rgb(14, 170, 0)",
            "background": "rgb(101, 110, 238)",
            "texto": "white",
            "shadowColor": "0.5px 0.2px black",
            "border": "1 solid rgb(0, 0, 0, 0)"
        };
        this.corPreRequisito = {
            "background": "rgb(200, 200, 200)",
            "texto": "black",
            "shadowColor": "none",
            "border": "1.49px solid rgb(255, 119, 119)"
        };
        this.corLibera = {
            "background": "rgb(200, 200, 200)",
            "texto": "black",
            "shadowColor": "none",
            // "border": "1.45px solid rgb(119, 173, 255)"
            "border": "1.49px solid rgb(122, 223, 82)"
        };
    }
    capitalizeCursosName() {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                let materiaNomeSplited = materia.nome.split(/(\s+)/).filter(e => e.trim().length > 0);
                let materiaNomeCapitalized = "";
                materiaNomeSplited.forEach(word => {
                    let wordLowerCase = word.toLowerCase();
                    if (!(word.length == 3 && word[0] == "(" && word.slice(-1) == ")")) {
                        if (word.length > 3) {
                            if (wordLowerCase.indexOf("iii") != -1)
                                materiaNomeCapitalized += " " + word.toUpperCase();
                            else
                                materiaNomeCapitalized += " " + wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1);
                        }
                        else if (wordLowerCase == materiaNomeSplited[0].toLowerCase())
                            materiaNomeCapitalized += " " + word.toUpperCase();
                        else if (wordLowerCase[0] == "i" || wordLowerCase[0] == "v")
                            materiaNomeCapitalized += " " + word.toUpperCase();
                        else {
                            materiaNomeCapitalized += " " + word.toLowerCase();
                        }
                    }
                });
                materia.nome = materiaNomeCapitalized;
            });
        });
    }
    addGradeColor() {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                materia.cor = this.corPadrao;
            });
        });
    }
    updateGradeColorOnOver(materiaSelecionada) {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                if (materia.codigo == materiaSelecionada.codigo) {
                    materia.cor = this.corSelecionado;
                }
                ;
                materia.preRequisito.forEach(codigoPreRequisito => {
                    if (codigoPreRequisito == materiaSelecionada.codigo) {
                        materia.cor = this.corLibera;
                    }
                });
                materiaSelecionada.preRequisito.forEach(codigoPreRequisito => {
                    if (materia.codigo == codigoPreRequisito) {
                        materia.cor = this.corPreRequisito;
                    }
                });
            });
        });
    }
    resetGradeColor() {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                materia.cor = this.corPadrao;
            });
        });
    }
    ngOnInit() {
        this.idCurso = this._activatedRoute.snapshot.paramMap.get('id');
        this.dataService.getCursoById(this.idCurso).subscribe(curso => {
            this.curso = curso;
            this.gradeCurso = this.curso.grade;
            this.widthFluxograma = this.curso.grade.length * this.widthMateria;
            this.addGradeColor();
            this.capitalizeCursosName();
        });
    }
};
FluxogComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FluxogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fluxog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fluxog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/fluxog/fluxog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fluxog.component.css */ "./src/app/curso/fluxog/fluxog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FluxogComponent);



/***/ }),

/***/ "./src/app/curso/minhagrade/minhagrade.component.css":
/*!***********************************************************!*\
  !*** ./src/app/curso/minhagrade/minhagrade.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.minhaGradeContainer {\r\n    background-color: rgb(228, 228, 228);\r\n    overflow-y: auto;\r\n    height:83vh;\r\n    width: 100vw;\r\n    padding-left: 1vw;\r\n}\r\n\r\n.row {\r\n    margin: 1px;\r\n    margin-top: 3px;\r\n}\r\n\r\n#periodo-box {\r\n    display: block;\r\n    background-color: white;\r\n    width: 135px;\r\n    height: 30px;\r\n    padding-bottom: 10px;\r\n    margin: 8px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 11pt;\r\n    \r\n    \r\n    cursor: pointer;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n#nome-box {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    width: 135px;\r\n    height: 90px;\r\n    margin: 8px;\r\n    padding: 2%;\r\n    border-radius: 5px;\r\n    \r\n    \r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n\r\n}\r\n\r\n#text-center {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 77%;\r\n    font-weight: 500;\r\n    /* font-size: 0.786vw; */\r\n    text-align: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vyc28vbWluaGFncmFkZS9taW5oYWdyYWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlOzs7SUFHZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCOzs7SUFHbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjs7QUFFekI7O0FBR0E7SUFDSSx5Q0FBeUM7SUFDekMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvL21pbmhhZ3JhZGUvbWluaGFncmFkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5taW5oYUdyYWRlQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6ODN2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4jcGVyaW9kby1ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jbm9tZS1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuI3RleHQtY2VudGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA3NyU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogZm9udC1zaXplOiAwLjc4NnZ3OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/curso/minhagrade/minhagrade.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/curso/minhagrade/minhagrade.component.ts ***!
  \**********************************************************/
/*! exports provided: MinhagradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhagradeComponent", function() { return MinhagradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");




let MinhagradeComponent = class MinhagradeComponent {
    constructor(dataService, _router, _activatedRoute) {
        this.dataService = dataService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.widthMateria = 152;
        this.corLiberado = {
            "background": "white",
            "texto": "black",
            "shadowColor": "none",
        };
        this.corSelecionado = {
            "background": "rgb(101, 110, 238)",
            "texto": "white",
            "shadowColor": "0.5px 0.2px black",
        };
        this.corBloqueado = {
            "background": "rgb(200, 200, 200)",
            "texto": "black",
            "shadowColor": "none",
        };
    }
    capitalizeCursosName() {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                let materiaNomeSplited = materia.nome.split(/(\s+)/).filter(e => e.trim().length > 0);
                let materiaNomeCapitalized = "";
                materiaNomeSplited.forEach(word => {
                    let wordLowerCase = word.toLowerCase();
                    if (!(word.length == 3 && word[0] == "(" && word.slice(-1) == ")")) {
                        if (word.length > 3) {
                            if (wordLowerCase.indexOf("iii") != -1)
                                materiaNomeCapitalized += " " + word.toUpperCase();
                            else
                                materiaNomeCapitalized += " " + wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1);
                        }
                        else if (wordLowerCase == materiaNomeSplited[0].toLowerCase())
                            materiaNomeCapitalized += " " + word.toUpperCase();
                        else if (wordLowerCase[0] == "i" || wordLowerCase[0] == "v")
                            materiaNomeCapitalized += " " + word.toUpperCase();
                        else {
                            materiaNomeCapitalized += " " + word.toLowerCase();
                        }
                    }
                });
                materia.nome = materiaNomeCapitalized;
            });
        });
    }
    addGradeColor() {
        this.gradeCurso.forEach(periodo => {
            periodo.isSelecionado = false;
            periodo.materias.forEach(materia => {
                materia.isSelecionado = false;
                if (materia.preRequisito.length == 0) {
                    materia.cor = this.corLiberado;
                }
                else {
                    materia.cor = this.corBloqueado;
                }
            });
        });
    }
    updatePeriodoColor(periodoSelecionado) {
        this.gradeCurso.forEach(periodo => {
            if (periodo.periodo == periodoSelecionado) {
                let isAllSelecionado = true;
                periodo.materias.forEach(materia => {
                    if (!(materia.isSelecionado)) {
                        isAllSelecionado = false;
                    }
                });
                periodo.materias.forEach(materia => {
                    if (!(isAllSelecionado)) {
                        this.updateMateriaNaoSelecionada(materia.codigo);
                        this.updateAptosParaCursar();
                    }
                    else {
                        this.updateMateriaSelecionada(materia.codigo);
                        this.updateNaoAptosParaCursar();
                    }
                });
            }
        });
    }
    updateGradeColor(materia) {
        if (materia.isSelecionado) {
            this.updateMateriaSelecionada(materia.codigo);
            this.updateNaoAptosParaCursar();
        }
        else {
            this.updateMateriaNaoSelecionada(materia.codigo);
            this.updateAptosParaCursar();
        }
    }
    updateMateriaNaoSelecionada(codigoMateria) {
        this.updatePreRequisitosRecursive(codigoMateria);
    }
    updatePreRequisitosRecursive(codigoMateria) {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                if (materia.codigo == codigoMateria) {
                    materia.cor = this.corSelecionado;
                    materia.isSelecionado = true;
                    materia.preRequisito.forEach(codigoPreRequisito => {
                        return this.updatePreRequisitosRecursive(codigoPreRequisito);
                    });
                }
            });
        });
    }
    updateMateriaSelecionada(codigoMateria) {
        var materia = this.getMateriaById(codigoMateria);
        materia.isSelecionado = false;
        materia.cor = this.corLiberado;
    }
    updateAptosParaCursar() {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materiaAlvo => {
                if (!(materiaAlvo.isSelecionado)) {
                    let isApto = true;
                    materiaAlvo.preRequisito.forEach(codigoPreRequisito => {
                        var materiaPreRequisito = this.getMateriaById(codigoPreRequisito);
                        if (!(materiaPreRequisito.isSelecionado))
                            isApto = false;
                    });
                    if (isApto)
                        materiaAlvo.cor = this.corLiberado;
                }
            });
        });
    }
    updateNaoAptosParaCursar() {
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materiaAlvo => {
                let isApto = true;
                materiaAlvo.preRequisito.forEach(codigoPreRequisito => {
                    let materiaPreRequisito = this.getMateriaById(codigoPreRequisito);
                    if (!(materiaPreRequisito.isSelecionado))
                        isApto = false;
                });
                if (!isApto) {
                    materiaAlvo.cor = this.corBloqueado;
                    materiaAlvo.isSelecionado = false;
                }
            });
        });
    }
    getMateriaById(id) {
        let materiaAlvo;
        this.gradeCurso.forEach(periodo => {
            periodo.materias.forEach(materia => {
                if (materia.codigo == id)
                    materiaAlvo = materia;
            });
        });
        return materiaAlvo;
    }
    ngOnInit() {
        this.idCurso = this._activatedRoute.snapshot.paramMap.get('id');
        this.dataService.getCursoById(this.idCurso).subscribe(curso => {
            this.curso = curso;
            this.gradeCurso = this.curso.grade;
            this.widthMinhaGrade = this.curso.grade.length * this.widthMateria;
            this.addGradeColor();
            this.capitalizeCursosName();
        });
    }
};
MinhagradeComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MinhagradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minhagrade',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./minhagrade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/minhagrade/minhagrade.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./minhagrade.component.css */ "./src/app/curso/minhagrade/minhagrade.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MinhagradeComponent);



/***/ }),

/***/ "./src/app/curso/nav/nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/curso/nav/nav.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    background-color: rgb(158, 158, 158, 0.8);\r\n    height: 10vh;\r\n    width: 100vw;\r\n}\r\n\r\n.navBarContainer {\r\n    width: 55%;\r\n}\r\n\r\n.navMenuContainer {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 43%;\r\n    border-right: 2px solid white;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.navMenuLink {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(52, 58, 64);\r\n    cursor: pointer;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.navMenuLink:hover {\r\n    background-color: rgb(52, 58, 64, 0.7);\r\n}\r\n\r\n.lastNavMenuLink {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    background-color: rgb(52, 58, 64);\r\n    cursor: pointer;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.lastNavMenuLink:hover {\r\n    background-color: rgb(52, 58, 64, 0.7);\r\n}\r\n\r\n.textMenuContainer {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 100%;\r\n    color: white;\r\n    text-shadow: 0.6px 0.6px 0.6px black;\r\n}\r\n\r\n.nomeCursoContainer {\r\n    padding: 10px;\r\n}\r\n\r\n.nomeCurso {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n    height: 57%;\r\n    font-weight: bold;\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 120%;\r\n    color: white;\r\n    text-shadow: 0.6px 0.6px 0.6px black;\r\n}\r\n\r\n.nomeCurso:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.navFaculdadeInfo {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    width: 45%;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.logoFaculdade-nav {\r\n    width: 7%;\r\n    height: auto;\r\n    margin: 2%;\r\n}\r\n\r\n.faculdade-nav {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.nomeFaculdade-nav {\r\n    font-weight: bold;\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 18px;\r\n    color: white;\r\n    text-shadow: 0.6px 0.6px black;\r\n    text-align: center;\r\n}\r\n\r\n.campusFaculdade-nav {\r\n    font-weight: bold;\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 15px;\r\n    color: white;\r\n    text-shadow: 0.6px 0.6px black;\r\n    text-align: center;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vyc28vbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY3Vyc28vbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgsIDAuOCk7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5uYXZCYXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG5cclxuLm5hdk1lbnVDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNDMlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm5hdk1lbnVMaW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgNTgsIDY0KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZNZW51TGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDU4LCA2NCwgMC43KTtcclxufVxyXG5cclxuLmxhc3ROYXZNZW51TGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgNTgsIDY0KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5sYXN0TmF2TWVudUxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA1OCwgNjQsIDAuNyk7XHJcbn1cclxuXHJcbi50ZXh0TWVudUNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAwLjZweCAwLjZweCAwLjZweCBibGFjaztcclxufVxyXG5cclxuLm5vbWVDdXJzb0NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubm9tZUN1cnNvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU3JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC42cHggMC42cHggMC42cHggYmxhY2s7XHJcbn1cclxuXHJcbi5ub21lQ3Vyc286aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2RmFjdWxkYWRlSW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvRmFjdWxkYWRlLW5hdiB7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZmFjdWxkYWRlLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLm5vbWVGYWN1bGRhZGUtbmF2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC42cHggMC42cHggYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYW1wdXNGYWN1bGRhZGUtbmF2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC42cHggMC42cHggYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/curso/nav/nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/curso/nav/nav.component.ts ***!
  \********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");





let NavComponent = class NavComponent {
    constructor(_dataService, _router, _activatedRoute, _location) {
        this._dataService = _dataService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._location = _location;
    }
    setCursoById(id) {
        console.log(this.faculdade);
        this.faculdade.cursos.forEach(curso => {
            if (curso._id == id) {
                this.curso = curso;
            }
        });
    }
    onSelectVoltar() {
        this._location.back();
    }
    onSelectFluxograma(id) {
        this._router.navigate(['/curso/fluxograma', id]);
    }
    onSelectMinhaGrade(id) {
        this._router.navigate(['/curso/minhagrade', id]);
    }
    onSelectFaculdade(id) {
        this._router.navigate(['/cursos/faculdade', id]);
    }
    ngOnInit() {
        this.idCurso = this._activatedRoute.snapshot.paramMap.get('id');
        this._dataService.getInstituicaoByCursoId(this.idCurso).subscribe(faculdade => {
            this.faculdade = faculdade;
            this.nomeFaculdade = this.faculdade.nome;
            this.campusFaculdade = this.faculdade.campus;
            this.idLogoFaculdade = this.faculdade.idLogo;
            this.idFaculdade = this.faculdade._id;
            this.setCursoById(this.idCurso);
            this.nomeCurso = this.curso.nome;
            this.tipoCurso = this.curso.tipo;
            this.turnoCurso = this.curso.turno;
        });
    }
};
NavComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curso/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/curso/nav/nav.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], NavComponent);



/***/ })

}]);
//# sourceMappingURL=curso-curso-module-es2015.js.map