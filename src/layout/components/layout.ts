import {Component} from 'angular2/core';
import {CharacterList} from "../../characters/components/character-list";
import {MenuList} from "../../navigation/components/menubar";

@Component({
  selector: 'layout',
  directives: [CharacterList, MenuList],
  templateUrl: '../src/partials/layout.html'
})

export class Layout{}
