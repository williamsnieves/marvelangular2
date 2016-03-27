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
var character_service_1 = require("../services/character-service");
var CharacterList = (function () {
    function CharacterList(character) {
        var _this = this;
        this.character = character;
        character.getCharacters().subscribe(function (character) { return _this.characters = character.data.results; }, console.error, function () { return console.log('Completed!', _this.characters); });
    }
    CharacterList.prototype.getComics = function (currentCharacter) {
        var _this = this;
        this.character.getComics(currentCharacter.id).subscribe(function (comic) { return _this.comics = comic.data.results; }, console.error, function () { return console.log('Completed!', _this.comics); });
    };
    CharacterList = __decorate([
        core_1.Component({
            selector: 'character-list',
            templateUrl: '../src/partials/character-list.html'
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], CharacterList);
    return CharacterList;
}());
exports.CharacterList = CharacterList;
//# sourceMappingURL=character-list.js.map