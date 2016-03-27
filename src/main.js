"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('es6-shim');
require('angular2/bundles/angular2-polyfills');
require('reflect-metadata');
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var layout_1 = require("./layout/components/layout");
var character_service_1 = require("./characters/services/character-service");
var http_1 = require('angular2/http');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [layout_1.Layout],
            templateUrl: '../src/partials/main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
browser_1.bootstrap(App, [http_1.HTTP_PROVIDERS, character_service_1.CharacterService]);
//# sourceMappingURL=main.js.map