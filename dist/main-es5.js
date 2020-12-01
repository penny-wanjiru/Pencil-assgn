(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">Medium Editor</a>\n  </div>\n</header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/editor/editor.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editor/editor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Write something cool here :)</h1>\n<div id=\"medium\"  #editable>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log-in/log-in.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log-in/log-in.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Click button to Sign-in with Google</h1>\n</div>\n<div class=\"flex-container\">\n  <div class=\"row\">\n    <div class=\"login-wrapper\">\n      <button type=\"button\" class=\"large-button\" (click)=\"authService.SigninWithGoogle()\">\n        <span class=\"large-button__icon\">\n          <svg viewBox=\"0 0 366 372\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z\"\n              id=\"Shape\" fill=\"#EA4335\" />\n            <path\n              d=\"M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z\"\n              id=\"Shape\" fill=\"#FBBC05\" />\n            <path\n              d=\"M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z\"\n              id=\"Shape\" fill=\"#4285F4\" />\n            <path\n              d=\"M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z\"\n              fill=\"#34A853\" /></svg>\n        </span>\n        <span class=\"large-button__text\">Sign in with Google</span>\n      </button>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");



 // Add this
 // Add this
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
    { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"] } // Add this
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pencil';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/firestore.service */ "./src/app/shared/firestore.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");







//  Firebase




/* Firebase services */


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            ],
            providers: [
                src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"],
                src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 50px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  letter-spacing: -2px;\n  border-bottom: 1px solid #dbdbdb;\n}\n\n#medium {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZW5ueS9wcm9qZWN0cy9wZW5jaWwvc3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XG59O1xuXG4jbWVkaXVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbiIsImgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xufVxuXG4jbWVkaXVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/firestore.service */ "./src/app/shared/firestore.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var EditorComponent = /** @class */ (function () {
    function EditorComponent(firestoreService, firebaseAuthService, router) {
        this.firestoreService = firestoreService;
        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
        this.userid = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.subscriptions = [];
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  Subscribe to user changes
        this.subscriptions.push(this.firebaseAuthService.getUser()
            .subscribe(function (user) {
            if (!user || !user.uid) {
                _this.userid.next(null);
                _this.router.navigate(['/login']);
                return;
            }
            _this.userid.next(user.uid);
        }));
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editor = new MediumEditor(this.editable.nativeElement, {
            toolbar: {
                buttons: [
                    'bold', 'italic', 'underline', 'superscript', 'anchor', 'pre', 'indent', 'outdent', 'orderedlist',
                    'unorderedlist', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'removeFormat'
                ]
            },
            paste: {
                forcePlainText: false,
                cleanPastedHTML: true,
                cleanReplacements: true,
                cleanTags: ['script', 'meta', 'frame', 'iframe', 'video', 'audio']
            },
            keyboardCommands: {
                commands: [
                    {
                        command: 'bold',
                        key: 'B',
                        meta: true,
                        shift: false,
                        alt: false
                    },
                    {
                        command: 'italic',
                        key: 'I',
                        meta: true,
                        shift: false,
                        alt: false
                    },
                    {
                        command: 'underline',
                        key: 'U',
                        meta: true,
                        shift: false,
                        alt: false
                    }
                ],
            }
        });
        this.subscriptions.push(
        //  Subscribe to user ID changes and load document if changed
        this.userid.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (x) { return !!x; }))
            .subscribe(function (userid) {
            //  Load saved document just once
            var doc = _this.firestoreService.loadDocument(userid)
                .subscribe(function (result) {
                if (result && result['content'])
                    _this.editor.setContent(result['content']);
                else
                    _this.editor.setContent('', 0);
                _this.editable.nativeElement.focus();
                doc.unsubscribe();
            }, function (error) {
                console.log('Error', error.code);
                doc.unsubscribe();
            });
        }, function (error) {
            console.log('Error', error.code);
        }), 
        //  save real time changes to firebase
        rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            return _this.editor.subscribe('editableInput', function (event) { return observer.next(event); });
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500))
            .subscribe(function () {
            _this.latex();
            _this.saveDocument();
        }));
    };
    EditorComponent.prototype.latex = function () {
        var content = this.editor.getContent(0);
        var match = content.match(/\$.*?\$/g);
        if (match) {
            var newContent = match[0].replace(/\$/g, '');
            var newWord = content.replace(match, newContent);
            var one = this.editor.setContent(newWord);
        }
    };
    EditorComponent.prototype.saveDocument = function () {
        this.firestoreService.saveDocument(this.userid.getValue(), this.editor.getContent(0))
            .catch(function (err) {
            console.log('Error saving document', err.code);
        });
    };
    EditorComponent.ctorParameters = function () { return [
        { type: src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
        { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editable', { static: true })
    ], EditorComponent.prototype, "editable", void 0);
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/editor/editor.component.scss")]
        })
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.scss":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.flex-container {\n  -webkit-margin-before: 5%;\n          margin-block-start: 5%;\n}\n\n.flex-container .row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZW5ueS9wcm9qZWN0cy9wZW5jaWwvc3JjL2FwcC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsZXgtY29udGFpbmVye1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDUlO1xuICAucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIiwiaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogNSU7XG59XG4uZmxleC1jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");



var LogInComponent = /** @class */ (function () {
    function LogInComponent(authService) {
        this.authService = authService;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.ctorParameters = function () { return [
        { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/log-in/log-in.component.html"),
            providers: [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./log-in.component.scss */ "./src/app/log-in/log-in.component.scss")]
        })
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(router, ngZone, afAuth, angularFireAuth) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.afAuth = afAuth;
        this.angularFireAuth = angularFireAuth;
        this.afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    // Firebase SignInWithPopup
    AuthService.prototype.OAuthProvider = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (res) {
            _this.ngZone.run(function () {
                _this.router.navigate(['editor']);
            });
        }).catch(function (error) {
            window.alert(error);
        });
    };
    // Firebase Google Sign-in
    AuthService.prototype.SigninWithGoogle = function () {
        return this.OAuthProvider(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())
            .then(function (res) {
            console.log('Successfully logged in!');
        }).catch(function (error) {
            console.log(error);
        });
    };
    // Firebase Logout
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['login']);
        });
    };
    AuthService.prototype.getUser = function () {
        return this.afAuth.user;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/firestore.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/firestore.service.ts ***!
  \*********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirestoreService = /** @class */ (function () {
    function FirestoreService(db) {
        this.db = db;
        this.medium = 'posts';
    }
    FirestoreService.prototype.loadDocument = function (userid) {
        return this.db.collection(this.medium).doc(userid).valueChanges();
    };
    FirestoreService.prototype.saveDocument = function (userid, content) {
        return this.db.collection(this.medium).doc(userid).set({ content: content });
    };
    FirestoreService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FirestoreService);
    return FirestoreService;
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAhYMYVyJpTjndiHuDkbUzORU0gkw3WSZY",
        authDomain: "pencil-3fd48.firebaseapp.com",
        databaseURL: "https://pencil-3fd48.firebaseio.com",
        projectId: "pencil-3fd48",
        storageBucket: "pencil-3fd48.appspot.com",
        messagingSenderId: "896452436176",
        appId: "1:896452436176:web:452b21fe15104dd579fed5",
        measurementId: "G-C1R2Z17L6Q"
    }
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

module.exports = __webpack_require__(/*! /Users/penny/projects/pencil/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map