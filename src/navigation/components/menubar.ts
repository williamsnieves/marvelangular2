import {Component} from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import {CharacterList} from "../../characters/components/character-list";
@Component({
  selector: 'menu-list',
  directives: [RouterOutlet, RouterLink],
  templateUrl: '../src/partials/menu-list.html'
})

export class MenuList{}
