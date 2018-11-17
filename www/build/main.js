webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MostrarPage = /** @class */ (function () {
    function MostrarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avatar = '';
        this.nombre = '';
        this.correo = '';
        this.telefono = '';
        this.facebook = '';
        this.twitter = '';
        this.instagram = '';
        this.avatar = this.navParams.get('avatar');
        this.nombre = this.navParams.get('nombre');
        this.correo = this.navParams.get('correo');
        this.telefono = this.navParams.get('telefono');
        this.facebook = this.navParams.get('facebook');
        this.twitter = this.navParams.get('twitter');
        this.instagram = this.navParams.get('instagram');
    }
    MostrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MostrarPage');
    };
    MostrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostrar',template:/*ion-inline-start:"/Users/geeta/CONTACTOS/Contactos/src/pages/mostrar/mostrar.html"*/'<!--\n  Generated template for the MostrarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style=" background-color: rgb(180, 101, 120) ">\n      <h2 style= "color: aliceblue">  {{nombre}}  </h2>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style= "background-color: rgb(180, 101, 120) ">\n\n   <ion-card >\n     \n     <img [src] = avatar>\n     \n    <ion-list >\n      <ion-item style="background-color:rgb(148, 228, 228)">\n          <ion-icon name="mail"> {{correo}}</ion-icon>\n      </ion-item>\n     \n      <ion-item style="background-color:rgb(148, 228, 228)" >\n          <ion-icon name="logo-whatsapp"> {{telefono}}</ion-icon>\n      </ion-item>\n      \n      <ion-item style="background-color:rgb(148, 228, 228)">\n          <ion-icon name="logo-facebook"> {{facebook}}</ion-icon>\n      </ion-item>\n\n      <ion-item style="background-color:rgb(148, 228, 228)">\n          <ion-icon name="logo-twitter"> {{twitter}}</ion-icon>\n      </ion-item>\n\n      <ion-item style="background-color:rgb(148, 228, 228)">\n          <ion-icon name="logo-instagram"> {{instagram}}</ion-icon>\n      </ion-item>\n        \n    </ion-list>\n    \n   </ion-card> \n   \n\n</ion-content>\n'/*ion-inline-end:"/Users/geeta/CONTACTOS/Contactos/src/pages/mostrar/mostrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MostrarPage);
    return MostrarPage;
}());

//# sourceMappingURL=mostrar.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregar/agregar.module": [
		270,
		1
	],
	"../pages/mostrar/mostrar.module": [
		271,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_agregar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mostrar_mostrar__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.agrega = __WEBPACK_IMPORTED_MODULE_2__agregar_agregar__["a" /* AgregarPage */];
        this.muestra = __WEBPACK_IMPORTED_MODULE_3__mostrar_mostrar__["a" /* MostrarPage */];
        this.Contactos = [
            {
                nombre: "Anmol Pathry",
                telefono: "(33) 13447895",
                correo: "anmolitasweet@gmail.com",
                facebook: "apathry",
                twitter: "a.sweet",
                instagram: "anmol01",
                avatar: "../assets/avatar1.jpg"
            },
            {
                nombre: "Ian Wesley",
                telefono: "(33) 17545895",
                correo: "wesleyi@gmail.com",
                facebook: "ianwesley",
                twitter: "wesley.rocks",
                instagram: "ian.18",
                avatar: "../assets/avatar2.jpg"
            },
            {
                nombre: "Steve Andrews",
                telefono: "(33) 14569875",
                correo: "stevedrews@gmail.com",
                facebook: "steve.andrews",
                twitter: "andrews.15",
                instagram: "heyiamsteve",
                avatar: "../assets/avatar3.jpg"
            }
        ];
    }
    HomePage.prototype.clickAgregar = function (contacto) {
        this.navCtrl.push(this.agrega, { Contactos: this.Contactos });
    };
    HomePage.prototype.ClickMostrar = function (contacto) {
        this.navCtrl.push(this.muestra, contacto);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/geeta/CONTACTOS/Contactos/src/pages/home/home.html"*/'<ion-header >\n  <ion-toolbar>\n    <ion-buttons end>\n      <button (click)="clickAgregar()" ion-button icon-only color="royal">\n        <ion-icon  name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style= "background-color: rgb(180, 101, 120) " >\n      <h2 style="color: aliceblue"> Contactos </h2>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding style= "background-color: rgb(180, 101, 120) "> \n\n    <ion-list >\n        <ion-item-sliding *ngFor= "let contacto of Contactos">\n          <ion-item style= "background-color: rgb(177, 101, 240) " >\n            <ion-avatar item-start >\n              <img [src]= contacto.avatar>\n            </ion-avatar>\n            <h2 (click)= "ClickMostrar(contacto)">{{contacto.nombre}}</h2>\n            <h3>{{contacto.telefono}}</h3>\n          </ion-item>\n          <ion-item-options side="left">\n          </ion-item-options>\n          <ion-item-options side="right">\n            <button ion-button color="danger">\n              <ion-icon name="close"></ion-icon>\n              Eliminar\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/geeta/CONTACTOS/Contactos/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agregar_agregar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mostrar_mostrar__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_agregar_agregar__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mostrar_mostrar__["a" /* MostrarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregar/agregar.module#AgregarPageModule', name: 'AgregarPage', segment: 'agregar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mostrar/mostrar.module#MostrarPageModule', name: 'MostrarPage', segment: 'mostrar', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_agregar_agregar__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mostrar_mostrar__["a" /* MostrarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/geeta/CONTACTOS/Contactos/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/geeta/CONTACTOS/Contactos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarPage = /** @class */ (function () {
    function AgregarPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Nombre = '';
        this.Telefono = '';
        this.Correo = '';
        this.Facebook = '';
        this.Twitter = '';
        this.Instagram = '';
        this.Contactos = [];
        this.Contactos = this.navParams.get("Contactos");
    }
    AgregarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarPage');
    };
    AgregarPage.prototype.ClickAgregar = function () {
        if (this.Nombre.length > 0 && this.Telefono.length > 0) {
            this.Contactos.push({ nombre: this.Nombre, telefono: this.Telefono,
                correo: this.Correo, facebook: this.Facebook, twitter: this.Twitter,
                instagram: this.Instagram, avatar: "../assets/avatar4.jpg" });
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Oops',
                subTitle: 'El contacto debe tener nombre y telefono',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    AgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar',template:/*ion-inline-start:"/Users/geeta/CONTACTOS/Contactos/src/pages/agregar/agregar.html"*/'<!--\n  Generated template for the AgregarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style= "background-color: rgb(180, 101, 120) ">\n    <h2 style= "color: aliceblue"> Agregar Contacto</h2> \n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style= "background-color: rgb(180, 101, 120) ">\n  <ion-list>\n      <ion-item [(ngModel)]= "Nombre" style="background-color:rgb(202, 50, 95)">\n          <ion-input placeholder= "Nombre"></ion-input>\n     </ion-item>\n\n     <ion-item [(ngModel)]= "Telefono" style="background-color:rgb(202, 50, 95)"> \n        <ion-input placeholder= "Teléfono"></ion-input>\n   </ion-item>\n\n   <ion-item [(ngModel)]= "Correo" style="background-color:rgb(202, 50, 95)">\n      <ion-input placeholder= "Correo Electrónico"></ion-input>\n </ion-item>\n\n <ion-item  [(ngModel)]= "Facebook" style="background-color:rgb(202, 50, 95)">\n    <ion-input placeholder= "Facebook"></ion-input>\n</ion-item>\n\n<ion-item [(ngModel)]= "Twitter"  style="background-color:rgb(202, 50, 95)"> \n    <ion-input placeholder= "Twitter"></ion-input>\n</ion-item>\n\n<ion-item  [(ngModel)]= "Instagram" style="background-color:rgb(202, 50, 95)">\n    <ion-input placeholder= "Instragram"></ion-input>\n</ion-item>\n\n  </ion-list>\n\n  <button (click)= "ClickAgregar()" ion-button block color="#6dc2c7d">Agregar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/geeta/CONTACTOS/Contactos/src/pages/agregar/agregar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], AgregarPage);
    return AgregarPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=agregar.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map