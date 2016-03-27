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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
    }
    CharacterService.prototype.getCharacters = function () {
        return this.http.get("http://gateway.marvel.com:80/v1/public/characters?apikey=c66e87a5eacddc7a75dea2e9a1bd657b&hash=82bc3760c427bb75f32fec7440bb8afe&ts=1")
            .map(function (res) { return res.json(); });
    };
    CharacterService.prototype.getComics = function (id) {
        return this.http.get("http://gateway.marvel.com:80/v1/public/characters/" + id + "/comics?apikey=c66e87a5eacddc7a75dea2e9a1bd657b&hash=82bc3760c427bb75f32fec7440bb8afe&ts=1")
            .map(function (res) { return res.json(); });
    };
    CharacterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CharacterService);
    return CharacterService;
}());
exports.CharacterService = CharacterService;
//# sourceMappingURL=character-service.js.map